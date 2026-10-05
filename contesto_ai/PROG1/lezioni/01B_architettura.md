---
corso: PROG1
lezione: 01B
titolo: Architettura del calcolatore
data: 2026-09-29
docenti: Elvio Amparore
sopratitolo: Programmazione I · Teoria · Canale B · Lezione 01B
descrizione: >-
  Appunti della lezione 01B di Programmazione I (canale B): storia del calcolo automatico, calcolatori cablati e
  programmabili, Babbage, Turing, ENIAC ed EDVAC, bit e byte, architettura di Von Neumann, modello della memoria,
  funzionamento della CPU, con esercizi e domande di ripasso.
lede: >-
  Dall'abaco alla macchina di Von Neumann: perché un calcolatore diventa «programmabile», che cosa cambia con il
  programma memorizzato dell'EDVAC, come si rappresentano le informazioni con i bit, com'è fatta la memoria vista dalla
  CPU e come la CPU esegue un'istruzione dopo l'altra con il program counter. È il modello di macchina su cui si
  appoggia tutto il corso.
materiale: slide
scheda:
  Slide: 01B_architettura · 19 pagine
  Corso: Prof. Elvio Amparore · A.A. 2026/27
  Tempo di studio: 45–60 minuti
fonte: >-
  Slide «Storia e principi del calcolo automatico» (01B_architettura), Programmazione I – Teoria, canale B, A.A. 2026/27
appunti_html: appunti/PROG1/01B_architettura.html
genera_html: true
---

## In breve

- I primi strumenti (abaco, Pascalina) **aiutano** a calcolare, ma la logica la mette chi li usa. I **calcolatori cablati** sanno fare solo le operazioni costruite nel loro hardware.
- L'idea decisiva è separare **che cosa** la macchina sa fare (poche operazioni elementari) dall'**ordine** in cui farle, e scrivere quest'ordine con dei **numeri**: nasce il **calcolatore programmabile**.
- Babbage (macchina analitica, circa 1840) e Turing (macchina universale, 1936) sono le tappe teoriche; ENIAC (1943–46) è il primo computer *general purpose*, ma si programma spostando cavi.
- Con l'**EDVAC** arrivano tre idee che usiamo ancora: **programma memorizzato** in memoria, **stessa memoria** per istruzioni e dati, numeri in **binario**.
- Un **bit** vale 0 o 1; con $N$ bit si distinguono $2^N$ informazioni; 8 bit formano un **byte** (256 valori).
- **Architettura di Von Neumann**: CPU (unità di controllo, ALU, registri), memoria principale (RAM) con programma e dati, memoria secondaria, tutto collegato dal **bus di sistema**.
- La memoria è una fila di byte, ognuno con il suo **indirizzo**; i numeri stanno in **parole** (per esempio da 32 bit, cioè 4 byte).
- La CPU **preleva** un'istruzione, la **decodifica**, la **esegue**; il **program counter** (PC) dice dove sta la prossima, l'**instruction register** (IR) contiene quella in corso. Stesso programma e stesso stato iniziale danno sempre lo stesso risultato.

> [!CANALI] Sei del canale A o C?
> **Canale A (Fiandrotti):** il deck «Architettura del computer» (18 slide) è praticamente identico a questo: stessi titoli e stessi contenuti, dall'abaco al funzionamento della CPU.
>
> **Canale C (Mazzei):** gli stessi argomenti sono nella lezione 01 «Introduzione» (slide 43–66). In più ci sono due slide sulla **macchina di Turing** (universale perché calcola tutte le funzioni calcolabili; esistono problemi che nessun algoritmo risolve), una tabella dei multipli del byte e l'elenco delle istruzioni della CPU (LOAD, STORE, ADD, CMP, JMP, JEQ…), che nel canale B arrivano nella lezione 02A.
>
> L'esame è unico per i tre canali.

## Dal calcolo a mano alle prime macchine (slide 2–5)

La slide 2 mette in fila le tappe principali su una linea del tempo. Eccole in una tabella:

| Quando | Che cosa |
|---|---|
| 30000–20000 a.C. | ossa intagliate per contare |
| 3500 a.C. | gettoni di argilla per la contabilità (Mesopotamia) |
| 595 d.C. | numerazione posizionale (le cifre che usiamo oggi) |
| 780–840 d.C. | al-Khwārizmī, da cui viene la parola «algoritmo» (lezione 01A) |
| 1652 | Pascal: la Pascalina |
| 1673 | Leibniz: una macchina che sa anche moltiplicare |
| 1822 e 1837 | Babbage: *Difference Engine* e *Analytical Engine* |
| 1936 | Turing: la macchina universale |
| 1945 | l'architettura di Von Neumann |
| 1946 | ENIAC |
| 1975 | il personal computer |
| 1984 | Apple Macintosh |
| 1990 | info.cern.ch, il primo sito web |

### L'abaco (slide 3)

È la prima «macchina» di calcolo conosciuta, dall'antichità. Ma attenzione a che cosa fa davvero: **tiene traccia di quanto è già stato fatto** (le palline spostate ricordano i numeri parziali). La **logica** dell'operazione e la sua **correttezza** dipendono interamente da chi lo usa: se sposti la pallina sbagliata, l'abaco non se ne accorge.

### La Pascalina (slide 4)

Inventata dal matematico francese Blaise Pascal nel 1642 (sulla linea del tempo compare il 1652, anno di uno degli esemplari successivi). È fatta di ingranaggi: su ognuno sono scritte le cifre da 0 a 9. Funziona come un abaco, con una differenza importante: il **riporto** dell'addizione lo fa **la macchina**, con una leva tra un ingranaggio e il successivo. Quando le unità passano da 9 a 0, la leva fa avanzare di un passo l'ingranaggio delle decine. Per la prima volta un pezzo di logica (il riporto) sta dentro la macchina.

### I calcolatori cablati (slide 5)

Le prime macchine erano **cablate** (in inglese *hardwired*):

- sapevano fare un insieme **limitato** di operazioni specifiche, di solito addizione e sottrazione;
- la **logica di funzionamento era costruita nell'hardware**: i collegamenti fisici decidevano che cosa faceva la macchina;
- per aggiungere una funzione nuova, come un **confronto** o un **salto condizionato**, bisognava **modificare o riprogettare l'hardware**;
- operazioni più complesse come moltiplicazione e divisione erano difficili da realizzare con le tecnologie dell'epoca.

> [!IDEA] · un'immagine
> Una macchina cablata è come un frullatore: fa bene una cosa sola, quella per cui è stata costruita. Se vuoi che faccia altro, devi smontarla e ricostruirla.

## L'idea decisiva: il calcolatore programmabile (slide 6–8)

La slide 6 contiene l'idea più importante della lezione. Invece di costruire una macchina diversa per ogni compito:

1. si sceglie un **insieme base di operazioni elementari**, per esempio addizione e confronto, che l'hardware sa fare direttamente;
2. si **combinano** queste operazioni, anche **ripetendole**, per ottenere operazioni più complesse, come la moltiplicazione;
3. l'**ordine** delle operazioni, il **numero di ripetizioni** e i loro **argomenti** si possono **codificare con numeri interi**;
4. quindi il comportamento della macchina si descrive con **dati numerici** che dicono quali operazioni eseguire.

> [!DEF] Calcolatore programmabile · slide 6
> La **stessa macchina** può eseguire **compiti diversi** cambiando la **sequenza di istruzioni**, senza modificarne l'hardware.

È esattamente ciò che hai fatto nella lezione 01A: la macchina sapeva solo sommare, assegnare e confrontare, e la moltiplicazione l'hai ottenuta **combinando e ripetendo** somme. Il programma (le righe [1]–[8] della versione V6) dice alla macchina in che ordine fare le operazioni.

### La macchina analitica di Babbage (slide 7)

Descritta da **Charles Babbage** intorno al 1840, è il **primo esempio di macchina di calcolo programmabile**:

- dati e istruzioni erano memorizzati su **schede perforate** (cartoncini con i buchi, come quelli dei telai tessili);
- il suo linguaggio era simile all'**assembly** (lo vedrai nella lezione 02A), **salti condizionati compresi**;
- a posteriori sappiamo che era **Turing-completa**: in linea di principio poteva calcolare tutto ciò che è calcolabile.

Non fu mai costruita per intero: la meccanica dell'epoca non bastava.

> [!OLTRE] · il primo programma
> Per la macchina analitica **Ada Lovelace** scrisse nel 1843 un procedimento per calcolare i numeri di Bernoulli: è considerato il primo programma della storia, scritto per una macchina che ancora non esisteva.

### Alan Turing (slide 8)

**Alan Turing**, matematico inglese, è considerato l'inventore della **teoria della calcolabilità** (e, secondo alcuni, dell'informatica).

- Nel **1936** introduce la **macchina universale**: un **modello astratto** di calcolatore, cioè una macchina immaginaria descritta con precisione matematica.
- Turing la usa per studiare **quali funzioni si possono calcolare in modo automatico**, cioè con un algoritmo.
- Diversi tentativi di costruire davvero un calcolatore **Turing-completo** si scontrano con i limiti tecnologici dell'epoca.

> [!OLTRE] · Turing-completo, in parole
> Un sistema è **Turing-completo** se può calcolare tutto quello che calcola una macchina universale di Turing. Il C, come quasi tutti i linguaggi di programmazione, lo è: in teoria qualsiasi cosa calcolabile si può scrivere in C (con memoria sufficiente).

## ENIAC ed EDVAC (slide 9–10)

### ENIAC (slide 9)

L'**Electronic Numerical Integrator and Computer** fu progettato nel 1943 da John Mauchly e J. Presper Eckert (nella slide «John Adam Presper»: il nome completo è John Adam Presper Eckert Jr.) e presentato nel 1946.

- È il **primo computer *general purpose***: non fatto per un solo compito, ma adattabile a problemi diversi.
- Rappresentava i numeri in **decimale**.
- Le operazioni erano svolte da diversi **blocchi funzionali**.
- Per **programmarlo** bisognava **configurare interruttori e collegare i blocchi con dei cavi**.
- Quindi **cambiare programma** richiedeva una **riconfigurazione manuale complessa**, che poteva richiedere giorni.

La foto della slide 2 mostra quattro programmatrici con schede di ENIAC, EDVAC, ORDVAC e BRLESC.

### EDVAC (slide 10)

L'**Electronic Discrete Variable Automatic Calculator** fu progettato nel 1944 dagli stessi autori di ENIAC. Introduce tre idee fondamentali:

1. **programma memorizzato** nella memoria centrale;
2. **memoria unificata** per istruzioni e dati;
3. **rappresentazione binaria** dei numeri.

La conseguenza è enorme: il programma **non si realizza più ricollegando fisicamente la macchina**, ma **si memorizza e si modifica come un dato**. Cambiare programma diventa come cambiare un numero in memoria.

| | ENIAC | EDVAC |
|---|---|---|
| Numeri | decimali | binari |
| Programma | cavi e interruttori | in memoria, come un dato |
| Istruzioni e dati | separati | nella stessa memoria |
| Cambiare programma | riconfigurazione manuale | si carica un altro programma |

> [!ESAME] Perché ti interessa
> «Programma e dati nella stessa memoria» è la base di tutto il corso: una variabile C sta in memoria a un certo **indirizzo**, e le domande d'esame sullo **stato della memoria** ti chiedono proprio di seguire come cambiano quei valori, istruzione dopo istruzione.

## Il bit e il byte (slide 11–12)

### Perché il binario (slide 11)

L'elemento base dell'informazione è il **bit**; la slide lo spiega come *Binary Information Token*. Un bit può stare in **due stati soltanto**: acceso/spento, vero/falso, sì/no, 1/0.

Due stati sono facili da costruire con dispositivi fisici diversi: **relè**, **valvole**, **transistor**. Basta distinguere «passa corrente» da «non passa corrente». Per questo i calcolatori moderni usano il binario, invece della rappresentazione decimale dei primi calcolatori fino a ENIAC (distinguere dieci livelli diversi è molto più fragile che distinguerne due).

> [!OLTRE] · il nome
> La spiegazione più diffusa del nome «bit» è *binary digit*, cioè **cifra binaria**.

### Quante informazioni con N bit (slide 12)

Combinando più bit si rappresentano più informazioni. Ogni bit in più **raddoppia** le possibilità, perché ogni combinazione vecchia si può continuare con uno 0 o con un 1.

| Bit | Combinazioni possibili | Quante |
|---|---|---|
| 1 | 0, 1 | $2^1 = 2$ |
| 2 | 00, 01, 10, 11 | $2^2 = 4$ |
| 3 | 000, 001, 010, 011, 100, 101, 110, 111 | $2^3 = 8$ |
| 4 | da 0000 a 1111 | $2^4 = 16$ |
| 8 | da 00000000 a 11111111 | $2^8 = 256$ |
| $N$ | | $2^N$ |

> [!DEF] Bit e byte · slide 12
> Con $N$ bit si rappresentano $2^N$ informazioni. Un gruppo di **8 bit** si chiama **byte** e rappresenta $2^8 = 256$ informazioni. Simboli: **b** per il bit, **B** per il byte.

Per esempio con un byte puoi contare da 0 a 255: sono 256 numeri, perché lo 0 conta.

> [!OLTRE] · da binario a decimale
> In binario ogni posizione vale il doppio di quella alla sua destra: da destra verso sinistra 1, 2, 4, 8, 16, 32, 64, 128. Per leggere un byte sommi i valori delle posizioni dove c'è un 1:
> $$00001100_2 = 8 + 4 = 12, \qquad 11111111_2 = 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255.$$
> Lo rivedrai quando in C parlerai di tipi e di limiti dei numeri (laboratorio 02).

> [!TRAPPOLA] Bit e byte, b e B
> 1 B = 8 b. Una connessione da «100 Mb/s» trasferisce 100 milioni di **bit** al secondo, cioè 12,5 milioni di **byte** al secondo.

## L'architettura di Von Neumann (slide 13–15)

### Com'era fatto l'EDVAC (slide 13)

- Una **memoria primaria** di 1024 **parole** da 44 bit: $1024 \cdot 44 = 45\,056$ bit, cioè $5632$ byte, circa **5,5 KB**.
- Uno **storage secondario** a nastro magnetico, per leggere e scrivere.
- Una **CPU** (*Central Processing Unit*, unità centrale di elaborazione), composta a sua volta da:
  - un'**unità di controllo**, che pilota i componenti della CPU e il bus di sistema;
  - una **ALU**, che esegue operazioni aritmetiche e logiche sui registri (la slide la chiama *Algebraic Logic Unit*; di solito si dice *Arithmetic Logic Unit*, **unità aritmetico-logica**);
  - i **registri**, piccole celle di memoria dentro la CPU, che contengono dati dell'utente oppure informazioni di stato e di controllo della macchina.
- Tutto è collegato dal **bus di sistema**, il «canale» su cui viaggiano dati e indirizzi.

```grafico
titolo: Lo schema delle slide 13–15: la CPU, la memoria principale e quella secondaria, collegate dal bus di sistema
assi: no
griglia: no
x: 0 12
y: 0 8
poligono: 0.3 0.4 6 0.4 6 7.6 0.3 7.6 | blu
testo: 3.15 7.2 | blu | "CPU"
poligono: 0.7 5.3 5.6 5.3 5.6 6.7 0.7 6.7 | accento
testo: 3.15 6 | "Unità di controllo"
poligono: 0.7 3.4 5.6 3.4 5.6 4.8 0.7 4.8 | ambra
testo: 3.15 4.1 | "ALU"
poligono: 0.7 0.8 5.6 0.8 5.6 2.9 0.7 2.9 | viola
testo: 3.15 2.45 | "Registri"
testo: 3.15 1.45 | "R0 R1 IR PC SP SR"
segmento: 7.1 0.8 7.1 7.2 | grigio | spesso
testo: 7.1 7.55 | grigio | "bus"
segmento: 6 4 7.1 4 | grigio | spesso
poligono: 7.9 4.5 11.7 4.5 11.7 7 7.9 7 | verde
testo: 9.8 6.1 | "RAM"
testo: 9.8 5.3 | "programma e dati"
segmento: 7.1 5.75 7.9 5.75 | grigio | spesso
poligono: 7.9 1 11.7 1 11.7 3.5 7.9 3.5 | grigio
testo: 9.8 2.6 | "Disco"
testo: 9.8 1.8 | "memoria secondaria"
segmento: 7.1 2.25 7.9 2.25 | grigio | spesso
```

### Perché si chiama «di Von Neumann» (slide 14)

**John von Neumann**, matematico e consulente del progetto EDVAC, fu il **primo a descrivere e pubblicare** questa architettura, nel 1945. Da qui il nome usato ancora oggi, «architettura di Von Neumann»; la slide nota che sarebbe più corretto dire «**architettura EDVAC**», perché l'idea nacque nel gruppo di lavoro dell'EDVAC.

### I principi (slide 15)

> [!DEF] Architettura di Von Neumann · slide 15
> - **Dati e istruzioni** sono memorizzati nella **stessa memoria principale** (RAM).
> - Una **CPU** esegue operazioni sui dati in memoria e **salva il risultato in memoria**.
> - CPU, memoria primaria e storage secondario sono **connessi tramite un bus di sistema**.
> - La macchina **modifica l'area dati** della memoria seguendo le istruzioni del programma e secondo i dati di input.

Quasi tutti i computer di oggi, dal telefono al portatile, seguono ancora questo schema.

> [!OLTRE] · RAM e disco
> La **RAM** (memoria principale) è veloce ma si cancella quando spegni il computer; il **disco** (memoria secondaria) è più lento ma conserva i dati. Per questo un programma sta su disco finché non lo lanci, e viene copiato in RAM per essere eseguito (slide 18).

## Un primo modello della memoria (slide 16–17)

### Una fila di byte con un indirizzo (slide 16)

La CPU vede la memoria come una **lunga fila di byte**:

- ogni byte può contenere un **piccolo valore numerico** (da 0 a 255);
- per raggiungere un singolo byte, ognuno ha un numero che lo identifica: il suo **indirizzo**, come il numero civico di una casa;
- il **byte è l'unità base di indirizzamento**: ogni indirizzo indica un byte.

Nell'esempio della slide la memoria ha 1024 byte, con indirizzi da **0 a 1023**: i primi 256 per il **programma**, gli altri 768 per i **dati**.

> [!TRAPPOLA] Si comincia da zero
> Con 1024 byte gli indirizzi vanno da 0 a **1023**, non fino a 1024. È lo stesso schema degli array in C, dove il primo elemento ha indice 0.

### Le parole (slide 17)

Un solo byte (al massimo 255) di solito **non basta** per i numeri dei calcoli di tutti i giorni. Per questo la memoria è organizzata in **parole** (*words*) di 16, 32 o 64 bit, a seconda dell'architettura. È una scelta di **efficienza**: per il processore è più veloce e naturale lavorare su una parola intera che su un byte alla volta.

Nell'esempio della slide le parole sono da **32 bit = 4 byte**:

| Zona | Indirizzi | Byte | Parole da 32 bit |
|---|---|---|---|
| Programma | 0–255 | 256 | $256 : 4 = 64$ |
| Dati | 256–1023 | 768 | $768 : 4 = 192$ |
| Tutta la memoria | 0–1023 | 1024 | 256 |

Una parola da 4 byte occupa quattro indirizzi consecutivi e si indica con l'indirizzo del suo **primo** byte: la prima parola dei dati sta agli indirizzi 256, 257, 258, 259 e si chiama «parola all'indirizzo 256»; la successiva è all'indirizzo 260, poi 264, e così via, di 4 in 4.

> [!ESAME] Da qui ai puntatori
> Nella settimana 2 (lezione «referenziamento, input e puntatori in C») scoprirai che in C puoi chiedere l'**indirizzo** di una variabile. È proprio questo numero: il «numero civico» del primo byte in cui la variabile è memorizzata.

## Come funziona la macchina (slide 18–19)

### Dal disco all'esecuzione (slide 18)

1. Un **programma di controllo** (un tempo chiamato *monitor*, oggi **sistema operativo**) **carica** programma e dati dalla memoria secondaria nella memoria principale, in posizioni precise identificate da **indirizzi**.
2. La CPU esegue, **una dopo l'altra**, le **istruzioni macchina** del programma. Ogni istruzione può leggere o modificare dati, e così **trasforma progressivamente lo stato della macchina** (i valori in memoria e nei registri).
3. Alla fine il **risultato** del programma è nello **stato finale della memoria**, per esempio in una posizione di memoria nota.
4. Fissati il programma e lo stato iniziale, l'esecuzione produce **sempre lo stesso stato finale**: il comportamento della macchina è **deterministico**.

> [!IDEA] · lo stato
> Lo **stato** è la «fotografia» di tutti i valori in memoria e nei registri in un certo istante. Eseguire un programma vuol dire passare da una fotografia alla successiva, un'istruzione alla volta: è la stessa **traccia** che hai fatto a mano nella lezione 01A, con le colonne $s$ e $i$.

### Dentro la CPU (slide 19)

- L'**unità di controllo** **preleva** dalla memoria e **decodifica** un'istruzione alla volta.
- A seconda dell'istruzione, **attiva** le parti giuste della **ALU** per svolgere le operazioni elementari.
- La **ALU** esegue operazioni semplici fra i **registri** della CPU: addizioni, confronti.
- Tra i registri c'è il **program counter** (**PC**), che contiene l'**indirizzo della prossima istruzione**. Di solito il PC viene **incrementato**, per passare all'istruzione successiva; oppure viene **modificato** per fare un **salto**, condizionato o no.
- Un altro registro importante è l'**instruction register** (**IR**): contiene l'**istruzione in esecuzione**, appena caricata dalla memoria.

> [!METODO] · il ciclo della CPU, da ricordare
> 1. **Prelievo** (*fetch*): l'unità di controllo legge l'istruzione all'indirizzo scritto nel PC e la copia nell'IR.
> 2. **Decodifica** (*decode*): capisce che cosa chiede l'istruzione.
> 3. **Esecuzione** (*execute*): la ALU fa l'operazione sui registri, oppure si leggono o scrivono dati in memoria.
> 4. Il PC passa all'istruzione successiva, oppure salta dove dice l'istruzione. Si ricomincia dal punto 1.

Il «**salta alla riga 3**» della versione V6 della lezione 01A, per la macchina, vuol dire proprio: **scrivi nel PC l'indirizzo della riga 3**. Nella lezione 02A vedrai questo ciclo all'opera, istruzione per istruzione, con un simulatore.

> [!OLTRE] · SP e SR
> Nello schema compaiono anche due registri che le slide non spiegano ancora. **SP** (*stack pointer*) indica la cima della **pila** (*stack*): servirà per le chiamate di funzione e il modello della memoria a «stack di frame». **SR** (*status register*, registro di stato) conserva informazioni sull'ultima operazione, per esempio l'esito di un **confronto**: un salto condizionato legge proprio lì se la condizione è vera.

## Verso l'esame

Questa lezione è di cultura generale e di vocabolario: all'esame di Programmazione I (al PC, su Moodle con CodeRunner, unico per i canali A, B e C) nessuno ti chiederà in che anno è nato l'EDVAC. Ma le idee della lezione tornano in molti punti:

| Idea della lezione | Dove ritorna |
|---|---|
| memoria come fila di byte con indirizzi | variabili, indirizzi e puntatori (settimana 2), array (indice che parte da 0) |
| stato della macchina che cambia istruzione dopo istruzione | esercizi d'esame sullo **stato della memoria** (esecuzione simulata a mano) |
| programma memorizzato, istruzioni in sequenza, PC e salti | cicli `while` e `for`, e perché le regole d'esame vietano `break` (lezione 01A) |
| $N$ bit → $2^N$ valori | tipi del C e loro limiti (laboratorio 02 «operatori e tipi, cast, limiti») |
| determinismo | stesso input, stesso output: i test automatici dell'esame si basano su questo |

> [!ESAME] Cosa fare già da questa settimana
> - Il laboratorio parte il 5/10 (turno 2, matricola pari, lunedì 14–17) e il 6/10 (turno 1, matricola dispari, martedì 14–17), al laboratorio Turing: il primo laboratorio è su riga di comando e compilatore (vedi la lezione 02A).
> - Ripassa la traccia a mano della lezione 01A: è la stessa abilità che servirà per lo stato della memoria.

## Esercizi

::: esercizio base Quante informazioni con N bit
Quante informazioni diverse si rappresentano con 1, 4, 10, 16 e 32 bit?
::: soluzione
Con $N$ bit ci sono $2^N$ combinazioni:

| Bit | Informazioni |
|---|---|
| 1 | $2^1 = 2$ |
| 4 | $2^4 = 16$ |
| 10 | $2^{10} = 1024$ |
| 16 | $2^{16} = 65\,536$ |
| 32 | $2^{32} = 4\,294\,967\,296$ (circa 4,3 miliardi) |

Il 1024 di 10 bit spiega perché «1 KB» a volte vale 1024 byte invece di 1000.
:::

::: esercizio base Quanti bit servono
Quanti bit servono al minimo per dare un codice diverso a: (a) le 26 lettere minuscole; (b) 100 colori; (c) 1000 studenti?
::: soluzione
Cerco la **più piccola** potenza di 2 che sia almeno grande quanto il numero di oggetti.

(a) $2^4 = 16 < 26 \le 32 = 2^5$: servono **5 bit**.

(b) $2^6 = 64 < 100 \le 128 = 2^7$: servono **7 bit**.

(c) $2^9 = 512 < 1000 \le 1024 = 2^{10}$: servono **10 bit**.

Con un bit in meno le combinazioni non bastano; con uno in più ne avanzano, ma è uno spreco.
:::

::: esercizio base La memoria dell'EDVAC
L'EDVAC aveva 1024 parole da 44 bit. Quanti bit sono in tutto? Quanti byte? Quanti KB, con 1 KB = 1024 byte?
::: soluzione
- Bit: $1024 \cdot 44 = 45\,056$.
- Byte: $45\,056 : 8 = 5632$.
- KB: $5632 : 1024 = 5{,}5$.

Sono i «circa 5,5 KB» della slide 13. Un telefono di oggi ha qualche miliardo di byte di RAM.
:::

::: esercizio medio Indirizzi e parole
Nel modello della slide 17 (programma agli indirizzi 0–255, dati agli indirizzi 256–1023, parole da 32 bit):
(a) a che indirizzo comincia la parola numero $k$ dell'area dati, contando da $k = 0$?
(b) E la decima parola dei dati?
(c) In quale parola dell'area dati si trova il byte 1000?
::: soluzione
(a) Ogni parola occupa 4 byte e i dati cominciano a 256, quindi la parola $k$ comincia a $256 + 4k$.

(b) La decima parola ha $k = 9$ (si parte da 0): $256 + 4 \cdot 9 = 256 + 36 = 292$. Occupa i byte 292, 293, 294, 295.

(c) Risolvo $256 + 4k \le 1000 < 256 + 4(k + 1)$: $1000 - 256 = 744$ e $744 : 4 = 186$ esatto. Quindi il byte 1000 è il **primo** byte della parola $k = 186$ (byte 1000–1003).
:::

::: esercizio medio Cablato o programmabile?
Per ciascuno, di' se è uno strumento in cui la logica la mette l'utente, una macchina cablata o una macchina programmabile, e perché: abaco; Pascalina; ENIAC; EDVAC; il tuo computer.
::: soluzione
- **Abaco**: la logica e la correttezza dipendono interamente dall'utente; l'abaco tiene solo traccia dei numeri.
- **Pascalina**: macchina **cablata**: fa addizioni (con il riporto automatico) e basta.
- **ENIAC**: **programmabile**, ma il programma si realizza ricollegando cavi e interruttori.
- **EDVAC**: programmabile con **programma memorizzato**: il programma sta in memoria come un dato.
- **Il tuo computer**: architettura di Von Neumann, come l'EDVAC: esegue qualsiasi programma tu gli carichi in memoria.
:::

::: esercizio medio Il PC durante la versione V6
Riprendi la versione V6 della moltiplicazione (lezione 01A, righe [1]–[8]) e immagina che ogni riga sia un'istruzione da 4 byte, con la riga 1 all'indirizzo 0. Scrivi la sequenza dei valori del PC eseguendo l'algoritmo con $n = 1$.
::: soluzione
La riga $r$ sta all'indirizzo $4(r - 1)$: riga 1 → 0, riga 2 → 4, riga 3 → 8, riga 4 → 12, riga 5 → 16, riga 6 → 20, riga 7 → 24, riga 8 → 28.

Con $n = 1$ le righe eseguite sono: 1, 2, 3 (controllo: $0 = 1$? no), 4, 5, 6 (salta a 3), 3 (controllo: $1 = 1$? sì, salta a 7), 7, 8.

Valori del PC: **0, 4, 8, 12, 16, 20, 8, 24, 28**. Il PC non cresce sempre di 4: dopo la riga 6 **torna** a 8 (salto non condizionato), dopo il secondo controllo **salta** a 24 (salto condizionato).
:::

::: esercizio base Da binario a decimale
Converti in decimale i byte $00000101$, $00001100$, $10000000$ e $11111111$.
::: soluzione
Valori delle posizioni da destra a sinistra: 1, 2, 4, 8, 16, 32, 64, 128.

- $00000101 = 4 + 1 = 5$
- $00001100 = 8 + 4 = 12$
- $10000000 = 128$
- $11111111 = 255$, il valore più grande di un byte (256 valori, da 0 a 255).
:::

::: esercizio difficile Il programma è un dato
Spiega con parole tue perché l'idea dell'EDVAC di memorizzare il programma «come un dato» rende possibile un programma che **scrive altri programmi**, come il compilatore che userai dalla prossima lezione.
::: soluzione
Se il programma è un insieme di numeri in memoria, allora un altro programma può **produrre quei numeri** come suo risultato, esattamente come produce qualsiasi altro dato. Un compilatore fa proprio questo: legge un testo (il programma in C, che per lui è un dato di input) e scrive in un file le istruzioni macchina corrispondenti (il suo output). Poi il sistema operativo carica quelle istruzioni in memoria e la CPU le esegue. Con ENIAC sarebbe stato impossibile: il programma erano cavi e interruttori, non numeri che un altro programma potesse scrivere.
:::

## Domande di ripasso

::: domanda Che cosa fa davvero un abaco? Che cosa aggiunge la Pascalina?
L'abaco tiene traccia dei calcoli già fatti, ma la logica e la correttezza dell'operazione dipendono da chi lo usa. La Pascalina fa il riporto dell'addizione da sola, con una leva tra un ingranaggio e il successivo.
:::

::: domanda Che cos'è un calcolatore cablato e qual è il suo limite?
Una macchina la cui logica di funzionamento è costruita nell'hardware: sa fare un insieme limitato di operazioni (tipicamente addizione e sottrazione) e per aggiungere funzioni nuove, come confronti o salti condizionati, bisogna modificare o riprogettare l'hardware.
:::

::: domanda Qual è l'idea che porta al calcolatore programmabile?
Separare le operazioni elementari che l'hardware sa fare dall'ordine in cui eseguirle, combinarle e ripeterle per ottenere operazioni complesse, e codificare ordine, ripetizioni e argomenti con numeri. Così la stessa macchina fa compiti diversi cambiando la sequenza di istruzioni, senza toccare l'hardware.
:::

::: domanda Che cosa hanno fatto Babbage e Turing?
Babbage descrisse intorno al 1840 la macchina analitica, primo esempio di macchina programmabile, con dati e istruzioni su schede perforate e salti condizionati. Turing nel 1936 introdusse la macchina universale, un modello astratto di calcolatore usato per studiare quali funzioni si possono calcolare in modo automatico.
:::

::: domanda Come si programmava l'ENIAC e che cosa cambia con l'EDVAC?
L'ENIAC si programmava configurando interruttori e collegando blocchi con dei cavi: cambiare programma era una riconfigurazione manuale. L'EDVAC introduce il programma memorizzato nella memoria centrale, la memoria unificata per istruzioni e dati e la rappresentazione binaria: il programma si memorizza e si modifica come un dato.
:::

::: domanda Perché i calcolatori usano il binario?
Perché un bit ha solo due stati (acceso/spento, 1/0), facili da realizzare con relè, valvole o transistor; distinguere due livelli è molto più semplice e affidabile che distinguerne dieci.
:::

::: domanda Quante informazioni si rappresentano con N bit? Che cos'è un byte?
$2^N$. Un byte è un gruppo di 8 bit e rappresenta $2^8 = 256$ informazioni, per esempio i numeri da 0 a 255.
:::

::: domanda Quali sono i componenti dell'architettura di Von Neumann?
La CPU (unità di controllo, ALU e registri), la memoria principale (RAM) che contiene sia i dati sia le istruzioni, la memoria secondaria (storage), tutte collegate dal bus di sistema.
:::

::: domanda Perché si dice «di Von Neumann» e quale nome sarebbe più corretto?
Perché John von Neumann, consulente del progetto, fu il primo a descriverla e pubblicarla nel 1945. Sarebbe più corretto dire «architettura EDVAC».
:::

::: domanda Come vede la memoria la CPU? Che cos'è una parola?
Come una sequenza di byte, ognuno con un indirizzo; il byte è l'unità base di indirizzamento. Una parola è un gruppo di byte (16, 32 o 64 bit) su cui il processore lavora in un colpo solo, perché un byte da solo non basta per i numeri dei calcoli.
:::

::: domanda Che cosa fanno il program counter e l'instruction register?
Il PC contiene l'indirizzo della prossima istruzione: di solito viene incrementato, oppure modificato per fare un salto. L'IR contiene l'istruzione in esecuzione, appena caricata dalla memoria.
:::

::: domanda Che cosa vuol dire che la macchina è deterministica?
Che, fissati il programma e lo stato iniziale, l'esecuzione produce sempre lo stesso stato finale.
:::

## Glossario

```glossario
Calcolatore cablato | Macchina con la logica di funzionamento costruita nell'hardware (hardwired): fa solo le operazioni previste.
Calcolatore programmabile | La stessa macchina esegue compiti diversi cambiando la sequenza di istruzioni, senza modificare l'hardware.
Macchina analitica | Macchina programmabile descritta da Babbage intorno al 1840: schede perforate, salti condizionati.
Macchina universale | Modello astratto di calcolatore introdotto da Turing nel 1936 per studiare che cosa è calcolabile.
Turing-completo | Capace di calcolare tutto ciò che calcola una macchina universale di Turing.
ENIAC | Primo computer general purpose (1943–1946): numeri decimali, programmato con cavi e interruttori.
EDVAC | Progettato nel 1944: programma memorizzato, memoria unificata per istruzioni e dati, numeri binari.
Bit | L'unità minima di informazione: due stati, 0 o 1. Simbolo b.
Byte | 8 bit, 256 valori possibili. Simbolo B. È l'unità base di indirizzamento della memoria.
Parola (word) | Gruppo di 16, 32 o 64 bit su cui il processore lavora in un colpo solo.
Indirizzo | Numero che identifica un byte della memoria.
CPU | Unità centrale di elaborazione: unità di controllo, ALU e registri.
Unità di controllo | Parte della CPU che preleva e decodifica le istruzioni e pilota gli altri componenti.
ALU | Unità aritmetico-logica: fa somme, confronti e altre operazioni elementari sui registri.
Registro | Piccola cella di memoria dentro la CPU (R0, R1, PC, IR, SP, SR…).
Program counter (PC) | Registro con l'indirizzo della prossima istruzione.
Instruction register (IR) | Registro con l'istruzione in esecuzione.
Bus di sistema | Collegamento tra CPU, memoria principale e memoria secondaria.
RAM | Memoria principale: veloce, contiene programma e dati durante l'esecuzione.
Sistema operativo | Il programma di controllo (un tempo «monitor») che carica programmi e dati in memoria.
Stato della macchina | L'insieme dei valori in memoria e nei registri in un certo istante.
Deterministico | Stesso programma e stesso stato iniziale danno sempre lo stesso stato finale.
```

## Checklist

```checklist
- So spiegare la differenza tra abaco, Pascalina e calcolatore cablato.
- So spiegare con parole mie che cos'è un calcolatore programmabile e perché la moltiplicazione della lezione 01A ne è un esempio.
- So dire che cosa hanno fatto Babbage e Turing.
- So elencare le tre idee dell'EDVAC e perché «il programma è un dato» è così importante.
- So quante informazioni rappresentano N bit e che cos'è un byte.
- So disegnare lo schema di Von Neumann con CPU (controllo, ALU, registri), RAM, memoria secondaria e bus.
- So che cos'è un indirizzo, perché si parte da 0 e che cos'è una parola da 32 bit.
- So descrivere il ciclo prelievo, decodifica, esecuzione e il ruolo di PC e IR.
- So che cosa vuol dire che la macchina è deterministica.
```

## Fonti

- **Slide della lezione**: «Storia e principi del calcolo automatico. Storia e architettura dei calcolatori dalle macchine cablate alla macchina di Von Neumann» (01B_architettura), Programmazione I – Teoria, canale B, A.A. 2026/27, 19 pagine; il numero di slide è accanto a ogni titolo.
- **Canali A e C**: deck «Architettura del computer» del canale A e lezione 01 «Introduzione» del canale C sulle pagine Moodle 2026/27 ([canale A](https://informatica.i-learn.unito.it/course/view.php?id=3701), [canale C](https://informatica.i-learn.unito.it/course/view.php?id=3767)), consultate il 30/09/2026.
- **Laboratori e orari**: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md).
- Le parti **«Oltre le slide»** (Ada Lovelace, Turing-completezza, binario, RAM e disco, SP e SR, ciclo della CPU) e gli esercizi sono aggiunte di questi appunti.
