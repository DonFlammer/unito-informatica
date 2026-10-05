---
corso: FDA
lezione: "05"
titolo: Esercizi sulla parte 1, circuiti e rappresentazioni binarie
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 05 · Libro, parte 1, §1.1–1.7 e §1.9–1.10 (esercizi)
descrizione: >-
  Appunti della lezione 05 di Fondamenti dell'Informatica (canale B), la lezione di esercizi che chiude la parte 1 del
  libro: circuiti e porte logiche, flip-flop, esadecimale, memoria, ASCII e UTF-8, immagini e suoni, conversioni tra
  base 2 e base 10, somme e overflow, complemento a 2 e notazione in eccesso, virgola mobile a 8 bit, compressione,
  bit di parità e codice di Hamming. Per ogni argomento il metodo, esercizi svolti dal facile al tipo esame, le domande
  delle simulazioni d'esame 2023/24 risolte e un quiz finale.
lede: >-
  La parte 1 del libro finisce qui. Per ogni argomento trovi il procedimento in poche righe, esercizi svolti passo per
  passo dal più facile a quello da esame, e tutte le domande delle simulazioni del 2023/24 che riguardano questa parte.
  In fondo, come gestire i 45 minuti dei quiz e un quiz lungo per allenarti.
materiale: libro
scheda:
  Libro: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, parte 1 (Brookshear, cap. 1), §1.1–1.7 e §1.9–1.10
  Docente: Stefano Berardi · canale B · A.A. 2026/27
  Tempo di studio: 4–5 ore, anche in più volte
fonte: >-
  Libro di testo del corso, parte 1 (J. G. Brookshear, D. Brylow, Computer Science: an overview, cap. 1), domande delle
  sezioni 1.1–1.7 e 1.9–1.10 con le risposte dell'appendice pubblicata sul Moodle del canale A; simulazioni d'esame
  2023/24 della pagina d'esame comune; diario del canale B; lezioni 01–04 di questi appunti
appunti_html: appunti/FDA/05_esercizi_circuiti_rappresentazioni.html
genera_html: true
---

## In breve

- È una lezione di **esercizi**: niente argomenti nuovi. Ripassa tutta la parte 1 del libro, dalle porte logiche agli errori di comunicazione.
- Ogni sezione comincia con un riquadro **Metodo**: il procedimento in poche righe e il link alla lezione dove è spiegato. Poi vengono esercizi svolti, dal più facile a quello da esame.
- Ci sono tutte le domande delle **simulazioni d'esame del 2023/24** che riguardano la parte 1, risolte e spiegate: circuiti, flip-flop, complemento a 2, virgola mobile, distanza di Hamming.
- Il trucco che vale ovunque: **ogni risultato si controlla al contrario**. Riconverti il numero, rileggi il byte, rifai la tabella.
- L'ultima sezione dice come usare i 45 minuti dei 9 quiz: circa 5 minuti a domanda, i controlli veloci e gli errori più frequenti.
- All'esame la parte 1 torna soprattutto con conversioni, complemento a 2, virgola mobile, circuiti e distanza di Hamming.

> [!CANALI]
> Nel canale B è la lezione di venerdì 09/10, dalle 11 alle 13. Per il docente è la lezione 6, perché la prima è stata un'introduzione: qui è la 05. Il diario del canale B la annuncia così: «(Fine Parte 1) Esercizi sulle lezioni 01-05: Circuiti e Rappresentazioni binarie». Le lezioni 01–05 del docente sono la sua introduzione e le lezioni [01](01_bit_porte_esadecimale.html), [02](02_testo_colori_suoni_binario.html), [03](03_interi_con_segno_virgola_mobile.html) e [04](04_compressione_errori_comunicazione.html) di questi appunti. Ho scritto questa pagina prima della lezione: gli esercizi sono le domande del libro, con le risposte dell'appendice, le domande delle simulazioni d'esame e altri miei, non quelli che il docente farà in aula. La sezione 1.8 del libro, su Python, è fuori dal programma del canale B e qui non c'è. Nel canale A gli stessi argomenti sono nei lucidi di Felice Cardone sul Moodle del canale A (id 3851, aperto agli ospiti), dove c'è anche l'appendice con le risposte alle domande del capitolo 1. Nel canale C le stesse sezioni sono nei lucidi del docente.

## Circuiti: porte e tabelle (libro, §1.1)

Un quiz sui circuiti ti mostra un disegno di porte, oppure una tabella di 0 e 1, e ti chiede che cosa calcola. Si risolve sempre allo stesso modo: si provano tutte le combinazioni degli ingressi, una riga alla volta.

> [!METODO] Leggere un circuito (lezione 01)
> 1. Scrivi tutte le combinazioni degli ingressi, in ordine: con 2 ingressi sono 4 righe, con 3 ingressi sono 8.
> 2. Aggiungi una colonna per ogni porta, partendo da quelle attaccate agli ingressi.
> 3. Riempi le colonne con le tabelle delle porte: AND dà 1 solo se tutti e due gli ingressi sono 1; OR se almeno uno è 1; XOR se sono diversi; NOT scambia 0 e 1.
> 4. L'ultima colonna è l'uscita. Descrivila a parole.
>
> Tutto è spiegato nella [lezione 01](01_bit_porte_esadecimale.html).

> [!RIPASSO] Quante righe ha la tabella
> Ogni ingresso in più raddoppia le righe. $2^3$ si legge «due alla terza» e vuol dire $2 \cdot 2 \cdot 2 = 8$: con 3 ingressi le righe sono 8. Con 4 ingressi sono $2^4 = 16$.

### Come si scrivono le porte nei quiz

Nei quiz le porte non sono sempre scritte con le parole AND, OR e NOT. Spesso si usano i segni dell'algebra di Boole, che il libro riprende nella parte 2. Ecco come leggerli.

| Nel quiz trovi | Si legge | È la porta |
|---|---|---|
| A·B, oppure AB, oppure A ∧ B | «A e B» | AND |
| A + B, oppure A ∨ B | «A o B» | OR |
| $\overline{A}$, oppure ¬A, oppure A' | «non A» | NOT |

Attenzione al segno +: qui non è la somma. Vuol dire OR, quindi 1 + 1 fa 1. Anche le lettere T e F, o V e F, sono solo un altro modo di scrivere 1 e 0: vero e falso.

Come nei conti di scuola, dove la moltiplicazione si fa prima della somma, qui l'AND si fa prima dell'OR. Quindi A·B + C vuol dire (A AND B) OR C. Il NOT vale solo per la lettera che ha sotto la barra, o subito dopo il segno ¬. Se la barra o il ¬ coprono una parentesi, valgono per tutto quello che c'è dentro.

> [!ESEMPIO] Facile: XOR costruito con AND, OR e NOT
> Calcola la tabella di $A \cdot \overline{B} + \overline{A} \cdot B$, cioè (A AND NOT B) OR (NOT A AND B).
>
> | A | B | A AND NOT B | NOT A AND B | uscita |
> |:-:|:-:|:-:|:-:|:-:|
> | 0 | 0 | 0 | 0 | 0 |
> | 0 | 1 | 0 | 1 | 1 |
> | 1 | 0 | 1 | 0 | 1 |
> | 1 | 1 | 0 | 0 | 0 |
>
> L'uscita vale 1 quando i due ingressi sono diversi: è proprio la tabella dello XOR. Lo stesso calcolo si può fare con porte diverse.

### Dal circuito alla formula: una domanda vera

> [!ESEMPIO] Tipo esame: Simulazione d'esame 1, 2023/24, domanda 6
> Il circuito ha tre ingressi A, B e C. C passa da una porta NOT. Una porta AND riceve A e NOT C; un'altra AND riceve NOT C e B. Le due uscite entrano in una porta OR, che dà l'uscita Y. Il quiz chiede quali affermazioni sono corrette:
>
> - a. il circuito è combinatorio;
> - b. «(¬C∨A)∧(¬C∨B)» descrive la funzione calcolata;
> - c. «¬((C∨¬A)∧(C∨¬B))» descrive la funzione calcolata;
> - d. il circuito è sequenziale;
> - e. «(¬C∧A)∨(¬C∧B)» descrive la funzione calcolata.
>
> **1. La tabella del circuito.** Y vale 1 se almeno una delle due AND dà 1. Tutte e due hanno bisogno di NOT C = 1, cioè di C = 0. Poi serve A = 1 oppure B = 1.
>
> | A | B | C | Y | formula b | formula c | formula e |
> |:-:|:-:|:-:|:-:|:-:|:-:|:-:|
> | 0 | 0 | 0 | 0 | **1** | 0 | 0 |
> | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
> | 0 | 1 | 0 | 1 | 1 | 1 | 1 |
> | 0 | 1 | 1 | 0 | 0 | 0 | 0 |
> | 1 | 0 | 0 | 1 | 1 | 1 | 1 |
> | 1 | 0 | 1 | 0 | 0 | 0 | 0 |
> | 1 | 1 | 0 | 1 | 1 | 1 | 1 |
> | 1 | 1 | 1 | 0 | **1** | 0 | 0 |
>
> **2. Le formule.** La formula e è il circuito scritto pari pari: (NOT C AND A) OR (NOT C AND B). La formula c sembra diversa, ma riga per riga dà gli stessi valori di Y. Prova una riga, A = 1, B = 0, C = 0: C OR NOT A fa 0 OR 0 = 0; C OR NOT B fa 0 OR 1 = 1; l'AND tra i due fa 0; il NOT davanti alla parentesi dà 1, proprio come Y. La formula b invece sbaglia in due righe: con A, B e C tutti a 0 dà 1, mentre il circuito dà 0.
>
> **3. Combinatorio o sequenziale.** Nessun filo torna indietro: l'uscita dipende solo dagli ingressi di quel momento. Il circuito è **combinatorio**, non sequenziale.
>
> Le affermazioni corrette sono a, c ed e.

> [!IDEA]
> Per dire che una formula è **sbagliata** basta una riga in cui dà un valore diverso dal circuito. Per dire che è **giusta** bisogna controllare tutte le righe.

### Dalla tabella alla formula

Il quiz al contrario: ti dà la tabella e ti chiede la formula. C'è un metodo che funziona sempre, con gruppetti di AND uniti da OR.

> [!METODO] Una formula per una tabella
> 1. Guarda le righe in cui l'uscita vale 1.
> 2. Per ogni riga scrivi un AND di tutti gli ingressi: l'ingresso così com'è se nella riga vale 1, con il NOT se vale 0. Questo AND vale 1 solo in quella riga.
> 3. Unisci tutti gli AND con degli OR.

> [!ESEMPIO] Tipo esame: Simulazione d'esame 1, 2023/24, domanda 5
> Il quiz dà questa tabella, propone tre formule e chiede quali la descrivono. Gli ingressi si chiamano x1, x2 e x3: il numerino fa parte del nome. Nelle formule si scrivono $x_1$, $x_2$, $x_3$.
>
> | x1 | x2 | x3 | y |
> |:-:|:-:|:-:|:-:|
> | 0 | 0 | 0 | 0 |
> | 0 | 0 | 1 | 0 |
> | 0 | 1 | 0 | 1 |
> | 0 | 1 | 1 | 1 |
> | 1 | 0 | 0 | 0 |
> | 1 | 0 | 1 | 1 |
> | 1 | 1 | 0 | 1 |
> | 1 | 1 | 1 | 0 |
>
> **1. Le righe con y = 1** sono quattro: 010, 011, 101 e 110.
>
> **2. Un AND per riga.** La riga 010 dà NOT x1 AND x2 AND NOT x3. Le altre allo stesso modo:
>
> $$\overline{x_1}\,x_2\,\overline{x_3} + \overline{x_1}\,x_2\,x_3 + x_1\,\overline{x_2}\,x_3 + x_1\,x_2\,\overline{x_3}$$
>
> È la terza formula del quiz: giusta.
>
> **3. La prima formula del quiz** è $\overline{x_1}\,x_2 + x_1\,\overline{x_2}\,x_3 + x_1\,x_2\,\overline{x_3}$. Il primo pezzo, NOT x1 AND x2, vale 1 nelle righe 010 e 011, cioè quando x1 = 0 e x2 = 1, qualunque sia x3. Fa il lavoro dei primi due gruppetti insieme. Anche questa formula è giusta.
>
> **4. La seconda formula**, nella schermata poco leggibile, ripete due volte lo stesso gruppetto e non ne ha nessuno per la riga 110. In quella riga dà 0 invece di 1: è sbagliata.

::: prova Calcola l'uscita di A·B + $\overline{C}$ nelle righe (a) A = 1, B = 0, C = 0 e (b) A = 0, B = 1, C = 1.
(a) A AND B fa 0. NOT C fa 1. 0 OR 1 fa 1: l'uscita è 1.

(b) A AND B fa 0. NOT C fa 0. 0 OR 0 fa 0: l'uscita è 0.
:::

> [!RICORDA]
> - Un circuito si legge con la tabella di tutte le combinazioni degli ingressi: 8 righe con 3 ingressi.
> - Nei quiz · è AND, + è OR, la barra o ¬ è NOT. L'AND si fa prima dell'OR.
> - Per scartare una formula basta una riga sbagliata. Per accettarla servono tutte le righe.
> - Dalla tabella alla formula: un AND per ogni riga con uscita 1, poi tutti uniti con OR.

## Circuiti che ricordano: il flip-flop (libro, §1.1)

Nei circuiti della sezione precedente nessun filo torna indietro. Quando un'uscita rientra in una porta, il circuito può **ricordare**: la sua uscita dipende anche da quello che è successo prima.

> [!METODO] Seguire un circuito con un filo che torna indietro (lezione 01)
> 1. Parti dal valore che l'uscita aveva prima.
> 2. Calcola le porte, a partire da quelle che ricevono gli ingressi.
> 3. Se l'uscita cambia, ricalcola le porte con il valore nuovo. Continua finché niente cambia più: il circuito si è **stabilizzato**.
> 4. Se partendo da uscita 0 resta 0, e partendo da 1 resta 1, il circuito **ricorda** il valore di prima.
>
> Un **impulso** è un ingresso che passa per un attimo a 1 e poi torna a 0, come un pulsante premuto e lasciato.
>
> Un circuito con un filo che torna indietro si chiama **sequenziale**. Uno senza si chiama **combinatorio**. Il flip-flop del libro è nella [lezione 01](01_bit_porte_esadecimale.html).

> [!ESEMPIO] Facile: il flip-flop del libro (figura 1.3)
> L'ingresso in alto entra in un OR; l'ingresso in basso passa da un NOT; un AND riceve l'OR e il NOT; l'uscita dell'AND torna nell'OR. L'uscita vale 1 e arriva un impulso in basso.
>
> 1. Il NOT riceve 1 e dà 0.
> 2. L'AND riceve uno 0: dà 0. L'uscita diventa 0.
> 3. Ora l'OR riceve 0 dall'ingresso in alto e 0 dall'uscita: dà 0.
> 4. Finito l'impulso, il NOT torna a dare 1, ma l'OR dà 0: l'AND resta a 0.
>
> L'uscita è 0 e ci resta. È la risposta del libro alla domanda 2 del §1.1, che spiega lo stesso giro.

Prova gli impulsi nello strumento, come nella lezione 01.

```widget porte
titolo: Il flip-flop del libro: un impulso in alto, uno in basso
modo: flipflop
```

### Una porta nuova: NAND

Il quiz che segue usa coppie di porte AND seguite da NOT. Un AND seguito da un NOT si chiama **NAND**, da *not and*. Dà il contrario dell'AND: 0 solo quando tutti e due gli ingressi sono 1.

| A | B | A AND B | A NAND B |
|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 0 |

Il trucco per i conti veloci: se un ingresso di un NAND è 0, l'uscita è 1, qualunque sia l'altro.

> [!ESEMPIO] Tipo esame: Simulazione d'esame 2, 2023/24, domanda 3
> Il circuito ha un ingresso in alto e uno in basso, e due NAND. Il NAND in alto riceve l'ingresso in alto e l'uscita del NAND in basso. Il NAND in basso riceve l'ingresso in basso e l'uscita del NAND in alto. L'uscita del NAND in alto è y. Chiamo z l'uscita di quello in basso.
>
> **È combinatorio?** No: le uscite tornano indietro, una nell'altra porta. È **sequenziale**.
>
> **In alto 1, in basso 0.**
> 1. Il NAND in basso riceve uno 0: dà z = 1, qualunque sia y.
> 2. Il NAND in alto riceve 1 e 1: dà y = 0.
> 3. Controllo: il NAND in basso riceve 0 e 0, e dà ancora 1. Niente cambia. L'uscita si stabilizza su **0**.
>
> **In alto 0, in basso 1.**
> 1. Il NAND in alto riceve uno 0: dà y = 1.
> 2. Il NAND in basso riceve 1 e 1: dà z = 0.
> 3. Il NAND in alto riceve 0 e 0, e dà ancora 1. L'uscita si stabilizza su **1**.
>
> **In alto 1, in basso 1.** Ora ogni NAND riceve un 1 fisso, quindi dà il contrario dell'altra uscita. Prova i due casi.
> - Se prima y era 0: z = 1, e il NAND in alto riceve 1 e 1, quindi y resta 0.
> - Se prima y era 1: z = 0, e il NAND in alto riceve un 0, quindi y resta 1.
>
> L'uscita **resta quella di prima**: il circuito ricorda un bit, come il flip-flop del libro.
>
> Attenzione: le note a mano che girano con questa simulazione dicono il contrario per i primi due casi. I conti qui sopra danno y = 0 con «alto 1, basso 0» e y = 1 con «alto 0, basso 1». Rifai sempre i conti da solo.

::: prova Nel circuito con i due NAND metti tutti e due gli ingressi a 0. Quanto valgono y e z?
Il NAND in alto riceve uno 0, quindi y = 1. Anche il NAND in basso riceve uno 0, quindi z = 1. Tutte e due le uscite valgono 1, qualunque fosse il valore di prima.
:::

> [!RICORDA]
> - Combinatorio: nessun filo torna indietro, l'uscita dipende solo dagli ingressi. Sequenziale: un'uscita rientra, e il circuito può ricordare.
> - Per un circuito sequenziale parti dal valore di prima e ricalcola finché niente cambia.
> - NAND è AND seguito da NOT: un ingresso a 0 basta per dare 1.

## L'esadecimale (libro, §1.1)

Le file lunghe di bit si leggono male. Nei quiz e nei programmi si scrivono in esadecimale: una cifra ogni quattro bit.

> [!METODO] Bit ed esadecimale (lezione 01)
> - **Dai bit all'esadecimale**: dividi in gruppi di 4 bit partendo da destra, aggiungi zeri a sinistra al primo gruppo se servono, e scrivi la cifra di ogni gruppo.
> - **Dall'esadecimale ai bit**: ogni cifra diventa 4 bit, zeri compresi.
> - **La cifra di un gruppo**: somma le monete 8, 4, 2 e 1 dove c'è un 1. Da 10 a 15 si usano le lettere: A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.
>
> Spiegazione completa nella [lezione 01](01_bit_porte_esadecimale.html); le monete della base 2 nella [lezione 02](02_testo_colori_suoni_binario.html).

> [!ESEMPIO] Facile: domanda 5 del §1.1
> Scrivi in esadecimale (a) 0110101011110010, (b) 111010000101010100010111, (c) 01001000.
>
> 1. (a) Gruppi 0110, 1010, 1111, 0010: cioè 6, A, F, 2. Risultato 6AF2.
> 2. (b) Gruppi 1110, 1000, 0101, 0101, 0001, 0111: cioè E, 8, 5, 5, 1, 7. Risultato E85517.
> 3. (c) Gruppi 0100 e 1000: 48.
>
> Sono le risposte del libro.

> [!ESEMPIO] Medio: domanda 6 del §1.1, al contrario
> Scrivi in bit (a) 5FD97, (b) 610A, (c) ABCD, (d) 0100.
>
> 1. (a) 0101 1111 1101 1001 0111.
> 2. (b) 0110 0001 0000 1010.
> 3. (c) 1010 1011 1100 1101.
> 4. (d) 0000 0001 0000 0000: anche gli 0 diventano quattro bit.
>
> L'appendice stampa la (c) come «101010 1111001101», con uno spazio nel posto sbagliato: sono gli stessi 16 bit.

### Dall'esadecimale alla base 10

Un byte in esadecimale ha due cifre. Per il suo valore in base 10 hai due strade.

- **Con le monete.** B5 è 1011 0101. Le monete sono 128, 32, 16, 4 e 1: in tutto 181.
- **Con il 16.** La cifra di sinistra conta i gruppi da 16. Le sue monete, 128, 64, 32 e 16, sono infatti 16 volte le monete 8, 4, 2 e 1. B vale 11, quindi B5 = 11 · 16 + 5 = 176 + 5 = 181.

> [!ESEMPIO] Tipo esame: un colore
> Un pixel ha il colore #3CA7FF. È il modo di scrivere i colori delle pagine web, visto nella lezione 02: dopo il cancelletto, due cifre esadecimali per il rosso, due per il verde e due per il blu. Quanto valgono i tre colori, da 0 a 255?
>
> 1. Rosso 3C: 3 · 16 + 12 = 48 + 12 = 60.
> 2. Verde A7: 10 · 16 + 7 = 160 + 7 = 167. Controllo con i bit: 1010 0111, monete 128, 32, 4, 2 e 1, in tutto 167.
> 3. Blu FF: 15 · 16 + 15 = 255, il massimo.
>
> Il colore è (60, 167, 255), un azzurro: tanto blu, abbastanza verde, poco rosso.

::: prova (a) Scrivi in esadecimale 11100001. (b) Quanto vale E1 in base 10?
(a) I gruppi sono 1110 e 0001: E1.

(b) E vale 14: 14 · 16 + 1 = 224 + 1 = 225. Controllo con le monete: 11100001 ha 128, 64, 32 e 1, cioè 225.
:::

> [!RICORDA]
> - Una cifra esadecimale vale 4 bit. I gruppi si fanno da destra.
> - Ogni cifra torna a 4 bit, zeri compresi: 0100 in esadecimale sono 16 bit.
> - Due cifre esadecimali: la sinistra vale 16 volte di più. B5 = 11 · 16 + 5 = 181.

## Memoria e capacità (libro, §1.2–1.3)

Le domande sulla memoria sono conti con le potenze di 2: quanti byte, quanti bit, quanti indirizzi.

> [!METODO] I conti sulla memoria (lezione 01)
> 1. 1 KB = 1024 byte, 1 MB = 1024 KB, 1 GB = 1024 MB. Per i bit moltiplica per 8.
> 2. Con indirizzi di $n$ bit si numerano $2^n$ celle. Al contrario: per un certo numero di celle servono tanti bit quanto l'esponente della prima potenza di 2 che basta.
> 3. Un disco: il **ritardo di rotazione** è l'attesa perché il settore giusto arrivi sotto la testina. In media è mezzo giro.
>
> Tutto è nella [lezione 01](01_bit_porte_esadecimale.html).

> [!RIPASSO] Tre potenze da sapere
> $2^{10} = 1024$, cioè 1 KB. $2^{16} = 65536$, cioè 64 KB. $2^{20} = 1048576$, cioè 1 MB. Moltiplicare due potenze di 2 vuol dire sommare gli esponenti: $2^{10} \cdot 2^{10} = 2^{20}$.

> [!ESEMPIO] Facile: domanda 3 del §1.2
> Quanti bit ci sono in una memoria di 4 KB?
>
> 1. 4 KB = 4 · 1024 = 4096 byte.
> 2. 4096 · 8 = 32768 bit.
>
> È la risposta del libro.

> [!ESEMPIO] Medio: quanti bit per gli indirizzi
> Una memoria ha 64 KB, con celle di un byte. Quanti bit servono per scrivere l'indirizzo di una cella?
>
> 1. Le celle sono 64 · 1024 = 65536.
> 2. 65536 è $2^{16}$. Con 16 bit gli indirizzi vanno da 0 a 65535: uno per cella.
> 3. Con 15 bit si arriverebbe solo a $2^{15} = 32768$ celle: non bastano.
>
> Servono 16 bit.

> [!ESEMPIO] Medio: domanda 2 del §1.2, scambiare due celle
> Per scambiare il contenuto delle celle 2 e 3, una persona copia la cella 2 nella 3 e poi la 3 nella 2. Che cosa succede?
>
> 1. La prima copia scrive nella cella 3 il valore della 2: il valore vecchio della 3 si perde.
> 2. La seconda copia rimette nella 2 lo stesso valore che aveva già.
> 3. Alla fine tutte e due le celle hanno il valore che era nella 2. È la risposta del libro.
>
> Il modo giusto, come nel libro, usa una terza cella come appoggio: copia la 2 nella 1, poi la 3 nella 2, poi la 1 nella 3.

> [!ESEMPIO] Tipo esame: un disco
> Un disco fa 5400 giri al minuto. Quanto vale in media il ritardo di rotazione?
>
> 1. 5400 giri al minuto sono 5400 : 60 = 90 giri al secondo.
> 2. Un giro dura 1/90 di secondo, circa 11,1 millesimi di secondo.
> 3. In media si aspetta mezzo giro: circa 5,6 millesimi di secondo.

::: prova (a) Quanti byte sono 3 KB? (b) Con indirizzi di 20 bit, quante celle si numerano?
(a) 3 · 1024 = 3072 byte.

(b) $2^{20} = 1048576$ celle: con celle di un byte, 1 MB.
:::

> [!RICORDA]
> - 1 KB = 1024 byte = $2^{10}$ byte. Per i bit si moltiplica per 8.
> - Con $n$ bit di indirizzo si numerano $2^n$ celle.
> - Per scambiare due celle serve una terza cella di appoggio.

## Il testo: ASCII e UTF-8 (libro, §1.4)

Le domande sul testo chiedono di leggere o scrivere lettere in bit, e di contare i byte di un testo.

> [!METODO] Testo in bit (lezione 02)
> - **ASCII**: maiuscola = 64 più il posto della lettera nell'alfabeto inglese; minuscola = 96 più il posto; cifra = 48 più la cifra; spazio = 32. Un byte per simbolo.
> - Una maiuscola e la sua minuscola differiscono di 32: un solo bit, quello che vale 32.
> - **UTF-8**: 1 byte per i simboli di ASCII, 2 per le lettere accentate come è e à, 3 per €, 4 per le emoji.
>
> Tutto è nella [lezione 02](02_testo_colori_suoni_binario.html).

> [!ESEMPIO] Facile: leggere un messaggio
> Che cosa dicono i byte 01000011 01101001 01100001 01101111?
>
> 1. 01000011: monete 64, 2 e 1, cioè 67 = 64 + 3. La terza maiuscola: C.
> 2. 01101001: 64 + 32 + 8 + 1 = 105 = 96 + 9. La nona minuscola: i.
> 3. 01100001: 97 = 96 + 1: a.
> 4. 01101111: 64 + 32 + 8 + 4 + 2 + 1 = 111 = 96 + 15: o.
>
> Il messaggio è «Ciao». Trucco: i byte delle maiuscole cominciano con 010, quelli delle minuscole con 011.

> [!ESEMPIO] Medio: domanda 7 del §1.4
> Qual è il numero più grande che si scrive con tre byte, una cifra ASCII per byte? E con gli stessi 24 bit in base 2?
>
> 1. In ASCII ogni byte è una cifra: il massimo è 999.
> 2. In base 2, 24 bit arrivano a $2^{24} - 1 = 16777215$.
>
> È la risposta del libro, e il motivo per cui i numeri si conservano in base 2.

> [!ESEMPIO] Tipo esame: contare i byte in UTF-8
> Quanti byte occupa in UTF-8 il testo «città: 1€», spazio compreso?
>
> 1. I simboli sono 9: c, i, t, t, à, due punti, spazio, 1, €.
> 2. c, i, t, t, i due punti, lo spazio e l'1 sono di ASCII: 7 byte.
> 3. La à occupa 2 byte, l'euro 3.
> 4. In tutto 7 + 2 + 3 = 12 byte.
>
> La risposta trappola è 9: un byte per simbolo.

::: prova (a) Il codice di H è 72. Qual è quello di h? (b) Quanti byte occupa in UTF-8 «Perché no?»
(a) La minuscola vale 32 in più: 72 + 32 = 104.

(b) I simboli sono 10. La é occupa 2 byte, gli altri 9 uno ciascuno: 9 + 2 = 11 byte.
:::

> [!RICORDA]
> - ASCII: maiuscole da 65, minuscole da 97, cifre da 48, spazio 32. Maiuscola e minuscola differiscono di 32.
> - UTF-8: 1 byte per ASCII, 2 per le lettere accentate, 3 per €, 4 per le emoji.
> - Contare i simboli non basta: conta quanti byte occupa ognuno.

## Immagini e suoni (libro, §1.4)

Le domande su immagini e suoni sono moltiplicazioni. L'errore tipico è dimenticare un fattore, o confondere bit e byte.

> [!METODO] Quanto occupano (lezione 02)
> - **Immagine** senza compressione: larghezza × altezza × byte per pixel. In RGB i byte per pixel sono 3.
> - **Suono**: campioni al secondo × byte per campione × canali × secondi. Un campione è una misura dell'onda. Mono = 1 canale, stereo = 2.
> - **Colori possibili** con $b$ bit per pixel: $2^b$.
>
> Spiegazione nella [lezione 02](02_testo_colori_suoni_binario.html).

> [!ESEMPIO] Facile: una telefonata
> Un minuto di telefonata: 8000 campioni al secondo, 8 bit per campione, mono.
>
> 1. 8 bit sono 1 byte.
> 2. In un secondo: 8000 · 1 · 1 = 8000 byte.
> 3. In un minuto: 8000 · 60 = 480000 byte.

> [!ESEMPIO] Medio: uno schermo
> Un'immagine di 1024 × 768 pixel in RGB, senza compressione. Quanti byte? Quanti MB, con 1 MB = 1048576 byte?
>
> 1. I pixel sono 1024 · 768 = 786432.
> 2. Ognuno occupa 3 byte: 786432 · 3 = 2359296 byte.
> 3. In MB: 2359296 : 1048576 = 2,25 MB.

> [!ESEMPIO] Tipo esame: una canzone
> Una canzone di 3 minuti con la qualità dei CD: 44 100 campioni al secondo, 16 bit per campione, stereo. Quanti byte?
>
> 1. 16 bit sono 2 byte. Stereo vuol dire 2 canali.
> 2. In un secondo: 44100 · 2 · 2 = 176400 byte.
> 3. 3 minuti sono 180 secondi: 176400 · 180 = 31752000 byte, circa 30 MB.
>
> Le risposte trappola: 15876000 (mono, un canale solo) e 254016000 (i bit al posto dei byte).

::: prova (a) Con 2 byte per pixel, quanti colori diversi si scrivono? (b) Quanti byte occupa un'immagine di 640 × 480 pixel in RGB?
(a) 2 byte sono 16 bit: $2^{16} = 65536$ colori.

(b) 640 · 480 = 307200 pixel, per 3 byte: 921600 byte.
:::

> [!RICORDA]
> - Immagine: larghezza × altezza × 3 byte in RGB.
> - Suono: campioni al secondo × byte per campione × canali × secondi.
> - Prima di moltiplicare, scrivi i quattro fattori. Lo stereo ha 2 canali; 16 bit sono 2 byte.

## Base 2 e base 10, anche con la virgola (libro, §1.5)

Le conversioni servono in quasi tutti i quiz della parte 1: nel complemento a 2, nella virgola mobile, nell'esadecimale. Devono diventare automatiche.

> [!METODO] Le conversioni (lezione 02)
> - **Da base 2 a base 10**: ogni bit è una moneta. Da destra valgono 1, 2, 4, 8, 16…; dopo la virgola 1/2, 1/4, 1/8, 1/16. Somma le monete sotto gli 1.
> - **Da base 10 a base 2**: paga con le monete partendo dalla più grande, oppure dividi per 2 finché il risultato è 0 e leggi i resti dall'ultimo al primo.
> - **La parte dopo la virgola**: scrivila come somma di mezzi, quarti, ottavi; oppure raddoppiala più volte, e ogni volta la cifra prima della virgola è il bit successivo.
>
> Le monete, le divisioni e il raddoppio sono nella [lezione 02](02_testo_colori_suoni_binario.html).

> [!ESEMPIO] Facile: un byte e un numero
> (a) Quanto vale 10110110? (b) Scrivi 100 in base 2.
>
> 1. (a) Le monete sono 128, 32, 16, 4 e 2: 128 + 32 + 16 + 4 + 2 = 182.
> 2. (b) 64 ci sta, restano 36. 32 ci sta, restano 4. 16 e 8 no. 4 ci sta, resta 0. 2 e 1 no.
> 3. Monete 64, 32 e 4: 1100100. Controllo: 64 + 32 + 4 = 100.

> [!ESEMPIO] Medio: con la virgola
> (a) Quanto vale 101,011? (b) Scrivi 6,375 in base 2.
>
> 1. (a) Prima della virgola 101 vale 5. Dopo la virgola ci sono le monete 1/4 e 1/8: 2/8 + 1/8 = 3/8. In tutto 5 e 3/8, cioè 5,375.
> 2. (b) 6 è 110. Per 0,375 raddoppia: 0,75, prima della virgola 0; poi 1,5, prima della virgola 1; tieni 0,5 e raddoppia: 1, prima della virgola 1, e non resta niente.
> 3. I bit dopo la virgola sono 0, 1, 1: 6,375 = 110,011. Controllo: 4 + 2 + 1/4 + 1/8 = 6 e 3/8 = 6,375.

> [!ESEMPIO] Tipo esame: la virgola fissa di 3,625
> Le simulazioni d'esame 1 e 2 del 2023/24 chiedono la «rappresentazione binaria del numero in virgola fissa» di 3,625. Virgola fissa vuol dire scritto in base 2 con la virgola al suo posto, come nella lezione 02. Le risposte proposte sono 11.111, 11.101 e 111.01: nei quiz la virgola si scrive con il punto.
>
> 1. 3 è 11.
> 2. 0,625 raddoppiato fa 1,25: primo bit 1. Tieni 0,25: raddoppiato fa 0,5, secondo bit 0. Raddoppiato ancora fa 1: terzo bit 1.
> 3. Quindi 3,625 = 11,101, scritto nel quiz 11.101.
> 4. Controllo: 2 + 1 + 1/2 + 1/8 = 3 e 5/8 = 3,625. Nessuna cifra si perde.
>
> 11.111 vale 3 e 7/8; 111.01 vale 7 e 1/4. La seconda parte dello stesso quiz, sulla virgola mobile, è più avanti in questa lezione.

::: prova (a) Quanto vale 11,11? (b) Scrivi 0,1 in base 2: finisce?
(a) 2 + 1 + 1/2 + 1/4 = 3 e 3/4, cioè 3,75.

(b) Raddoppiando: 0,2 dà 0; 0,4 dà 0; 0,8 dà 0; 1,6 dà 1, tieni 0,6; 1,2 dà 1, tieni 0,2; e si ricomincia. 0,1 = 0,000110011…, con 0011 che si ripete: non finisce mai.
:::

> [!RICORDA]
> - Base 2 → base 10: somma le monete; dopo la virgola valgono 1/2, 1/4, 1/8.
> - Base 10 → base 2: monete dalla più grande, oppure divisioni per 2; dopo la virgola, raddoppia.
> - Controlla sempre riconvertendo il risultato.

## Somme e overflow senza segno (libro, §1.5)

Le somme in base 2 si fanno in colonna come a scuola. Nei quiz si chiede di solito anche se il risultato ci sta nei bit che hai.

> [!METODO] Sommare senza segno (lezione 02)
> 1. Somma in colonna da destra: 0 + 0 = 0; 0 + 1 = 1; 1 + 1 = 10, scrivi 0 e riporti 1; 1 + 1 + 1 = 11, scrivi 1 e riporti 1.
> 2. Con $n$ bit gli interi senza segno vanno da 0 a $2^n - 1$: con 8 bit da 0 a 255, con 4 bit da 0 a 15.
> 3. Se dall'ultima colonna a sinistra esce un riporto, il risultato non ci sta: è **overflow**.
>
> Spiegazione nella [lezione 02](02_testo_colori_suoni_binario.html).

> [!ESEMPIO] Facile: 105 + 54 con 8 bit
> 01101001 + 00110110.
>
> | | 8ª | 7ª | 6ª | 5ª | 4ª | 3ª | 2ª | 1ª |
> |---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
> | riporti | 1 | 1 | | | | | | |
> | 105 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 1 |
> | 54 | 0 | 0 | 1 | 1 | 0 | 1 | 1 | 0 |
> | somma | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 1 |
>
> Da destra le prime cinque colonne hanno un solo 1 o nessuno: niente riporti. Nella sesta colonna 1 + 1 fa 10: scrivi 0 e riporti 1. Nella settima 1 + 0 più il riporto fa 10: scrivi 0 e riporti 1. Nell'ottava 0 + 0 più il riporto fa 1.
>
> Il risultato è 10011111, cioè 128 + 16 + 8 + 4 + 2 + 1 = 159. Infatti 105 + 54 = 159, e 159 sta in 8 bit: niente overflow.

> [!ESEMPIO] Tipo esame: overflow con 8 bit
> Con 8 bit senza segno si calcola 10010110 + 01101010. Che cosa resta, e c'è overflow?
>
> 1. 10010110 vale 128 + 16 + 4 + 2 = 150. 01101010 vale 64 + 32 + 8 + 2 = 106.
> 2. In colonna, da destra: 0 + 0 = 0; 1 + 1 = 10, scrivi 0 e riporti 1; da lì in poi ogni colonna ha un 1 solo più il riporto, quindi fa 10: scrivi 0 e riporti 1, fino all'ultima colonna.
> 3. Il risultato vero è 100000000, cioè 256: ha 9 bit.
> 4. Negli 8 bit resta 00000000. È overflow: 150 + 106 = 256 non ci sta, perché con 8 bit si arriva a 255.

::: prova Con 4 bit senza segno: (a) 0111 + 0001; (b) 1011 + 0110. Quale va in overflow?
(a) 7 + 1 = 8: 1000. I riporti attraversano tre colonne, ma dall'ultima non esce niente: niente overflow.

(b) 11 + 6 = 17: il risultato vero è 10001, con 5 bit. Nei 4 bit resta 0001: overflow.
:::

> [!RICORDA]
> - In colonna: 1 + 1 = 10 e 1 + 1 + 1 = 11.
> - Senza segno, con $n$ bit, si arriva a $2^n - 1$.
> - Overflow senza segno: un riporto esce dall'ultima colonna a sinistra. I riporti in mezzo non contano.

## Complemento a 2 ed eccesso (libro, §1.6)

Per i numeri negativi il libro usa due modi: il complemento a 2 per gli interi, e la notazione in eccesso, che serve soprattutto dentro la virgola mobile. Nei quiz le domande sono quasi sempre conversioni e somme.

**Invertire** un bit vuol dire cambiarlo: 0 diventa 1, 1 diventa 0.

> [!METODO] Il complemento a 2 (lezione 03)
> - **È un contachilometri di bit**: tornando indietro da 0000 si arriva a 1111, che vale −1. Il bit a sinistra è il **bit di segno**: 0 per i positivi e lo zero, 1 per i negativi.
> - **Leggere**: somma le monete, ma quella di sinistra vale con il segno meno: −8 con 4 bit, −128 con 8 bit. Controllo: letto senza segno, un negativo vale 16 in più con 4 bit, 256 in più con 8.
> - **Cambiare segno**: copia i bit da destra fino al primo 1 compreso, poi inverti gli altri. Oppure: inverti tutti i bit e aggiungi 1.
> - **Scrivere un negativo**: scrivi il numero senza il meno, con tutti i bit, poi cambia segno.
> - **Fin dove si arriva**: con 4 bit da −8 a 7, con 8 bit da −128 a 127.
>
> Il perché di tutte queste regole è nella [lezione 03](03_interi_con_segno_virgola_mobile.html).

> [!ESEMPIO] Facile: domanda 1 del §1.6, con 5 bit
> Quanto valgono in complemento a 2 i numeri 00011, 01111, 11100, 11010, 00000 e 10000?
>
> Con 5 bit le monete sono −16, 8, 4, 2 e 1.
>
> 1. 00011: 2 + 1 = 3.
> 2. 01111: 8 + 4 + 2 + 1 = 15.
> 3. 11100: −16 + 8 + 4 = −4.
> 4. 11010: −16 + 8 + 2 = −6.
> 5. 00000: 0.
> 6. 10000: solo la moneta di segno, −16.
>
> Sono le risposte del libro.

> [!ESEMPIO] Tipo esame: Simulazione d'esame 2, 2023/24, domanda 8
> Il quiz chiede in base 10 quattro numeri in complemento a 2 su 8 bit. Con 8 bit le monete sono −128, 64, 32, 16, 8, 4, 2 e 1.
>
> 1. 11111111: −128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = −128 + 127 = −1.
> 2. 01010101: bit di segno 0, come senza segno: 64 + 16 + 4 + 1 = 85.
> 3. 00001111: 8 + 4 + 2 + 1 = 15.
> 4. 10000001: −128 + 1 = −127.
>
> Controllo sul primo: senza segno 11111111 vale 255, e 255 − 256 = −1. La trappola è l'ultimo: 10000001 non è −1. Nel complemento a 2 il bit a sinistra non è un segno meno attaccato al resto, è una moneta da −128.

Clicca sui bit dello strumento: vedi lo stesso byte letto senza segno, in complemento a 2 e in eccesso 128. Prova «Cambia segno» su 10000001 e poi su 10000000.

```widget codifica
titolo: Un byte, tre letture: senza segno, complemento a 2, eccesso 128
modo: interi
bit: 10000001
```

> [!ESEMPIO] Medio: domande 2 e 3 del §1.6
> (a) Scrivi con 8 bit in complemento a 2: 6, −6, −17, 13, −1, 0. (b) Cambia segno a 00000001, 01010101, 11111100, 11111110, 00000000, 01111111.
>
> 1. (a) 6 è 00000110. −6: da 00000110 copi «10» e inverti gli altri sei bit, 000001, che diventano 111110. Risultato 11111010.
> 2. −17: 17 è 00010001. Copi l'ultimo 1, inverti gli altri sette, 0001000, che diventano 1110111: 11101111.
> 3. 13 è 00001101. −1 è 11111111. 0 è 00000000.
> 4. (b) Con «copia fino al primo 1, poi inverti»: 00000001 diventa 11111111; 01010101 diventa 10101011; 11111100 diventa 00000100; 11111110 diventa 00000010; 00000000 resta 00000000; 01111111 diventa 10000001.
>
> Sono le risposte del libro. Controllo su 11111100: vale −128 + 64 + 32 + 16 + 8 + 4 = −4, e 00000100 vale 4.

### Somme con il segno e overflow

> [!METODO] Somme in complemento a 2 (lezione 03)
> 1. Somma in colonna come senza segno. Il riporto che esce a sinistra **si butta**.
> 2. **Regola del segno**: c'è overflow solo se i due numeri hanno lo stesso bit di segno e il risultato ha il bit di segno opposto.
> 3. Un positivo più un negativo non va mai in overflow.
> 4. Per sottrarre, cambia segno al secondo numero e somma.

> [!ESEMPIO] Medio: domande 5 e 6 del §1.6, con 4 bit
> Con 4 bit le monete sono −8, 4, 2 e 1, e i numeri vanno da −8 a 7.
>
> 1. 0101 + 0010 = 0111: 5 + 2 = 7. Segni uguali, risultato positivo: niente overflow.
> 2. 1010 + 1110: da destra 0 + 0 = 0; 1 + 1 = 10, scrivi 0 e riporti 1; 0 + 1 più il riporto = 10, scrivi 0 e riporti 1; 1 + 1 più il riporto = 11, scrivi 1, e il riporto esce e si butta. Resta 1000: −6 + (−2) = −8. Segni uguali e risultato negativo: niente overflow.
> 3. 0101 + 0110: 1 + 0 = 1; 0 + 1 = 1; 1 + 1 = 10, scrivi 0 e riporti 1; 0 + 0 più il riporto = 1. Resta 1011, che è negativo. Due positivi danno un negativo: **overflow**. Infatti 5 + 6 = 11, e con 4 bit si arriva a 7.
> 4. 1010 + 1010: resta 0100, positivo. Due negativi danno un positivo: **overflow**. Infatti −6 − 6 = −12.
> 5. 0111 + 0001: resta 1000, negativo. **Overflow**: 7 + 1 = 8 non c'è.
>
> Sono le risposte del libro: 0111, 1000, 1011 con overflow, 0100 con overflow, 1000 con overflow.

Nello strumento i due numeri hanno 4 bit e sono in complemento a 2. Parti da 0101 + 0110, poi cambia i bit e prova le altre somme dell'esempio.

```widget codifica
titolo: Somma in complemento a 2 con 4 bit: quando c'è overflow?
modo: somma
a: 0101
b: 0110
complemento: si
n: 4
```

### La notazione in eccesso

> [!METODO] La notazione in eccesso (lezione 03)
> - **Dai bit al numero**: leggi i bit senza segno e togli sempre lo stesso numero. Con 4 bit togli 8 (eccesso 8), con 3 bit togli 4 (eccesso 4), con 8 bit togli 128 (eccesso 128).
> - **Dal numero ai bit**: aggiungi lo stesso numero e scrivi il risultato senza segno.
> - Con 4 bit l'eccesso 8 va da −8 (0000) a 7 (1111). Rispetto al complemento a 2 cambia solo il bit a sinistra.

> [!ESEMPIO] Medio: domande 9, 10 e 11 del §1.6
> (a) Leggi in eccesso 8: 1110, 0111, 1000, 0010, 0000, 1001. (b) Scrivi in eccesso 8: 5, −5, 3, 0, 7, −8. (c) Si può scrivere 9 in eccesso 8?
>
> 1. (a) 14 − 8 = 6; 7 − 8 = −1; 8 − 8 = 0; 2 − 8 = −6; 0 − 8 = −8; 9 − 8 = 1.
> 2. (b) 5 + 8 = 13, cioè 1101. −5 + 8 = 3, cioè 0011. 3 + 8 = 11, cioè 1011. 0 + 8 = 8, cioè 1000. 7 + 8 = 15, cioè 1111. −8 + 8 = 0, cioè 0000.
> 3. (c) No: il più grande è 1111, cioè 15 − 8 = 7. Per lo stesso motivo 6 non si scrive in eccesso 4, che arriva a 3.
>
> Sono le risposte del libro.

::: prova (a) Con 8 bit scrivi −35 in complemento a 2. (b) Quanto vale 110 in eccesso 4?
(a) 35 = 32 + 2 + 1, cioè 00100011. Copi «1» da destra e inverti gli altri sette bit, 0010001, che diventano 1101110: il risultato è 11011101. Controllo: −128 + 64 + 16 + 8 + 4 + 1 = −35.

(b) 110 senza segno è 6, e 6 − 4 = 2.
:::

> [!RICORDA]
> - Complemento a 2: la moneta di sinistra vale −8 con 4 bit, −128 con 8. Con 8 bit si va da −128 a 127.
> - Cambiare segno: copia da destra fino al primo 1, inverti il resto.
> - Overflow con il segno: due numeri con lo stesso segno danno un risultato con il segno opposto. Il riporto finale si butta.
> - Eccesso: leggi senza segno e togli 8 (4 bit), 4 (3 bit) o 128 (8 bit).

## Virgola mobile a 8 bit (libro, §1.7)

Il quiz sulla virgola mobile c'è in tutte e due le simulazioni del 2023/24. Usa sempre il formato a 8 bit del libro, che va saputo a memoria.

> [!METODO] Il formato del libro (lezione 03)
> Un byte si divide in tre pezzi: 1 bit di **segno**, 3 bit di **esponente** in eccesso 4, 4 bit di **mantissa**. La mantissa sono le cifre, con la virgola a sinistra: 1011 vuol dire 0,1011. L'esponente dice di quanti posti spostare la virgola: a destra se è positivo, a sinistra se è negativo.
>
> **Dal byte al numero.**
> 1. Dividi il byte: segno, esponente, mantissa.
> 2. Scrivi la mantissa con «0,» davanti.
> 3. Leggi l'esponente: senza segno, meno 4.
> 4. Sposta la virgola. Se mancano cifre, aggiungi degli zeri.
> 5. Leggi con le monete e metti il segno.
>
> **Dal numero al byte.**
> 1. Segno: 0 se positivo, 1 se negativo.
> 2. Scrivi il numero in base 2.
> 3. Sposta la virgola subito prima del primo 1, così il numero comincia con «0,1». Se l'hai spostata a sinistra l'esponente è positivo, se a destra è negativo.
> 4. Mantissa: i primi 4 bit dopo la virgola. Le cifre in più si perdono: è l'**errore di troncamento**.
> 5. Esponente: aggiungi 4 e scrivi con 3 bit.
>
> Spiegazione completa nella [lezione 03](03_interi_con_segno_virgola_mobile.html).

| Esponente scritto | 000 | 001 | 010 | 011 | 100 | 101 | 110 | 111 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Vale | −4 | −3 | −2 | −1 | 0 | 1 | 2 | 3 |

> [!ESEMPIO] Facile: domanda 1 del §1.7
> Leggi (a) 01001010, (b) 01101101, (c) 00111001, (d) 11011100, (e) 10101011.
>
> 1. (a) Segno 0, esponente 100 = 0, mantissa 1010. La virgola resta: 0,101 = 1/2 + 1/8 = 5/8.
> 2. (b) Segno 0, esponente 110 = 2, mantissa 1101. Due posti a destra: 11,01 = 3 e 1/4.
> 3. (c) Segno 0, esponente 011 = −1, mantissa 1001. Un posto a sinistra: 0,01001 = 1/4 + 1/32 = 9/32.
> 4. (d) Segno 1, esponente 101 = 1, mantissa 1100. Un posto a destra: 1,1 = 1 e 1/2. Con il segno: −1 e 1/2.
> 5. (e) Segno 1, esponente 010 = −2, mantissa 1011. Due posti a sinistra: 0,001011 = 1/8 + 1/32 + 1/64 = 11/64. Con il segno: −11/64.
>
> Sono le risposte del libro.

> [!ESEMPIO] Medio: domanda 2 del §1.7
> Scrivi nel formato del libro (a) 2 e 3/4, (b) 5 e 1/4, (c) 3/4, (d) −3 e 1/2, (e) −4 e 3/8.
>
> 1. (a) 10,11 → 0,1011, esponente 2 → 110. Mantissa 1011. Byte 01101011.
> 2. (b) 101,01 → 0,10101, esponente 3 → 111. Le cifre sono cinque: la mantissa tiene 1010 e perde l'ultimo 1. Byte 01111010, con troncamento: vale 5.
> 3. (c) 0,11: il primo 1 è già subito dopo la virgola, esponente 0 → 100. Mantissa 1100. Byte 01001100.
> 4. (d) Segno 1. 11,1 → 0,111, esponente 2 → 110. Mantissa 1110. Byte 11101110.
> 5. (e) Segno 1. 100,011 → 0,100011, esponente 3 → 111. La mantissa tiene 1000 e perde 11. Byte 11111000, con troncamento: vale −4.
>
> Sono le risposte del libro, con il troncamento nella (b) e nella (e).

> [!ESEMPIO] Tipo esame: Simulazione d'esame 1, domanda 2, e Simulazione d'esame 2, domanda 1 (2023/24)
> Il quiz chiede tre cose su 3,625: la virgola fissa, la virgola mobile nel formato a 8 bit del libro, e dove c'è troncamento. Le voci sulla virgola mobile sono 01101101, 01101110 e 11101110.
>
> 1. **Virgola fissa**: 3,625 = 11,101, come nella sezione sulle conversioni. Nessuna cifra si perde.
> 2. **Segno**: il numero è positivo, quindi 0. La voce 11101110 è scartata: comincia con 1.
> 3. **Esponente**: 11,101 → 0,11101, la virgola va due posti a sinistra. Esponente 2, cioè 2 + 4 = 6 = 110.
> 4. **Mantissa**: le cifre sono cinque, 11101. La mantissa tiene 1110 e perde l'ultimo 1. La voce 01101101 è scartata: la sua mantissa 1101 non sono le prime quattro cifre.
> 5. **Byte**: 0 110 1110, cioè 01101110.
> 6. **Controllo**: 0,1110 con la virgola due posti a destra è 11,10, cioè 3,5. Si è perso 1/8.
>
> Le voci giuste: «Rappresentazione fissa: 11.101», «Rappresentazione Virgola Mobile: 01101110», «Troncamento presente solo nella rappresentazione in virgola mobile».

Scrivi un numero nello strumento: vedi i passi della codifica e le cifre che si perdono. Prova 3,625, poi 3,75 e 5 1/4.

```widget codifica
titolo: Dal numero al byte del libro, con il troncamento
modo: virgola
numero: 3,625
```

> [!ESEMPIO] Difficile: domande 3 e 4 del §1.7
> (a) Qual è più grande tra 01001001 e 00111101? (b) Qual è il numero più grande del formato? E il positivo più piccolo?
>
> 1. (a) 01001001: esponente 100 = 0, mantissa 1001, vale 0,1001 = 9/16. 00111101: esponente 011 = −1, mantissa 1101, vale 0,01101 = 13/32. Siccome 9/16 = 18/32, il più grande è il primo.
> 2. Il libro dà anche una scorciatoia: se tutti e due i segni sono 0, scorri i bit da sinistra fino al primo posto in cui sono diversi. È più grande quello con l'1 in quel posto. Qui è il secondo bit. Funziona perché l'esponente è in eccesso: esponente più grande vuol dire bit più grandi.
> 3. (b) Il più grande è 01111111: 0,1111 con la virgola tre posti a destra, 111,1, cioè 7 e 1/2.
> 4. Il positivo più piccolo con la mantissa che comincia con 1 è 00001000: 0,1 con la virgola quattro posti a sinistra, 0,00001, cioè 1/32. Il libro aggiunge che, se la mantissa può cominciare con 0, il più piccolo è 00000001, cioè 1/256.

> [!ESEMPIO] Difficile: l'ordine delle somme (esempio del libro)
> Calcola 2 e 1/2 + 1/8 + 1/8 nel formato del libro, che tronca dopo ogni somma.
>
> 1. **Da sinistra.** 2 e 1/2 + 1/8 = 2 e 5/8, cioè 10,101: cinque cifre, la mantissa tiene 1010, e resta 2 e 1/2. Poi di nuovo + 1/8: ancora 2 e 1/2. Risultato 2 e 1/2.
> 2. **Prima i piccoli.** 1/8 + 1/8 = 1/4, esatto. Poi 2 e 1/2 + 1/4 = 2 e 3/4, cioè 10,11: quattro cifre, ci stanno. Risultato 2 e 3/4, quello giusto.
>
> Per questo il libro consiglia di sommare prima i numeri piccoli.

::: prova Scrivi nel formato del libro (a) 3,75 e (b) 6,375. C'è troncamento?
(a) 3,75 = 11,11 → 0,1111, esponente 2 → 110. Mantissa 1111. Byte 01101111, senza troncamento.

(b) 6,375 = 110,011 → 0,110011, esponente 3 → 111. La mantissa tiene 1100 e perde 11. Byte 01111100, che vale 110,0 cioè 6: troncamento, si perde 3/8.
:::

> [!RICORDA]
> - Formato del libro: segno | esponente di 3 bit in eccesso 4 | mantissa di 4 bit con la virgola a sinistra.
> - Esponente: 100 = 0, 101 = 1, 110 = 2, 111 = 3, 011 = −1, 010 = −2, 001 = −3, 000 = −4.
> - Dal numero al byte: virgola subito prima del primo 1, le prime 4 cifre in mantissa, le altre si perdono.
> - Controlla sempre rileggendo il byte che hai scritto.

## Compressione (libro, §1.9)

Le domande sulla compressione sono di due tipi: applicare una tecnica a un messaggio corto, oppure dire quale tecnica o quale formato va bene per un certo tipo di dati.

> [!METODO] Le quattro tecniche del libro (lezione 04)
> - **Run-length**: al posto di una fila di simboli uguali scrivi il simbolo e quante volte si ripete.
> - **Codici a frequenza** (Huffman): codici corti ai simboli frequenti, lunghi a quelli rari. Nessun codice deve essere l'inizio di un altro.
> - **Codifica relativa**: il primo dato per intero, poi solo le differenze con il dato prima.
> - **Dizionario e LZW**, come nel libro: dizionario iniziale x = 1, y = 2, spazio = 3. Una parola nuova si scrive lettera per lettera e poi entra nel dizionario con il primo numero libero; una parola già vista si scrive con il suo numero; ogni spazio è 3.
> - **Senza perdita** si riottengono i dati identici. **Con perdita** solo dati simili. GIF e JPEG, due formati per le immagini, sono tutti e due con perdita; anche MP3, il formato della musica, è con perdita.
>
> Tutto è nella [lezione 04](04_compressione_errori_comunicazione.html).

> [!ESEMPIO] Facile: run-length e codifica relativa
> (a) Scrivi con la codifica run-length 000000000011111000. (b) Scrivi con la codifica relativa 20, 21, 21, 22, 20.
>
> 1. (a) Dieci 0, cinque 1, tre 0: «10 zeri, 5 uni, 3 zeri». Controllo: 10 + 5 + 3 = 18 bit, come la fila.
> 2. (b) Il primo resta 20. Poi 21 − 20 = +1; 21 − 21 = 0; 22 − 21 = +1; 20 − 22 = −2. Viene 20, +1, 0, +1, −2.

> [!ESEMPIO] Medio: un codice a lunghezza variabile
> Il messaggio AAAABBC ha 7 lettere. Con 2 bit per lettera occupa 7 · 2 = 14 bit. Con il codice A = 0, B = 10, C = 11, quanto occupa?
>
> 1. Le quattro A costano 1 bit ciascuna: 4 bit.
> 2. Le due B costano 2 bit ciascuna: 4 bit.
> 3. La C costa 2 bit.
> 4. In tutto 4 + 4 + 2 = 10 bit, invece di 14.
>
> Il codice si legge senza pause: A è 0, e nessun altro codice comincia con 0.

> [!ESEMPIO] Tipo esame: domanda 2 del §1.9, LZW
> Comprimi con LZW, come nel libro, il messaggio «xyx yxxxy xyx yxxxy yxxxy», partendo da x = 1, y = 2, spazio = 3.
>
> | Leggo | Nel dizionario? | Scrivo | Il dizionario diventa |
> |---|:-:|:-:|---|
> | xyx | no | 1 2 1 | aggiungo xyx = 4 |
> | spazio | sì | 3 | |
> | yxxxy | no | 2 1 1 1 2 | aggiungo yxxxy = 5 |
> | spazio | sì | 3 | |
> | xyx | sì, è il 4 | 4 | |
> | spazio | sì | 3 | |
> | yxxxy | sì, è il 5 | 5 | |
> | spazio | sì | 3 | |
> | yxxxy | sì | 5 | |
>
> Il risultato è 121321112343535: è la risposta del libro. I simboli del messaggio erano 25, i numeri sono 15.

> [!ESEMPIO] Medio: quale formato (domande 3, 4 e 5 del §1.9)
> 1. **Per un cartone animato** va bene GIF: ci sono zone di colore uniforme con bordi netti, e pochi colori. GIF tiene al massimo 256 colori.
> 2. **GIF e JPEG sono senza perdita?** No, tutti e due perdono qualcosa: GIF riduce i colori a 256, JPEG toglie dettagli.
> 3. **Su che cosa conta JPEG?** L'occhio vede meglio le differenze di luminosità che quelle di colore: JPEG usa meno bit per il colore.
>
> Sono le risposte del libro. La domanda 6 aggiunge che MP3 sfrutta il **mascheramento temporale** e il **mascheramento di frequenza**: i suoni che l'orecchio non sente, coperti da altri, si buttano.

::: prova (a) Che fila di bit è «4 uni, 2 zeri, 3 uni»? (b) Quali numeri erano 50, +3, −1, 0?
(a) 1111 00 111, cioè 111100111.

(b) Si somma ogni differenza al numero prima: 50; 53; 52; 52.
:::

> [!RICORDA]
> - Run-length per le ripetizioni, codici a frequenza per i simboli frequenti, codifica relativa per i dati che cambiano poco, LZW con il dizionario che cresce.
> - LZW del libro: parola nuova = numeri delle lettere, poi entra nel dizionario; parola vista = il suo numero; spazio = 3.
> - Testi e programmi solo senza perdita. GIF e JPEG sono con perdita.

## Parità e codice di Hamming (libro, §1.10)

Quando i bit viaggiano, uno può cambiare. Le domande su questa sezione chiedono di aggiungere o controllare un bit di parità, di calcolare la distanza di Hamming e di correggere una parola con il codice del libro.

> [!METODO] Errori di comunicazione (lezione 04)
> - **Parità dispari**, quella del libro: conta gli 1 del byte. Se sono pari aggiungi un 1, se sono dispari uno 0, così il totale è dispari. Il libro mette il bit di parità **a sinistra**: un byte diventa 9 bit.
> - **Controllo**: chi riceve conta gli 1. Pari vuol dire errore. Con due errori il totale torna dispari e nessuno se ne accorge.
> - **Distanza di Hamming**: metti le due file una sotto l'altra e conta le colonne con bit diversi.
> - **Codice del libro**: 8 lettere da 6 bit, tutte a distanza almeno 3. Se arriva una fila che non è nel codice, scegli la lettera più vicina. Corregge un errore e ne rivela due.
>
> Tutto è nella [lezione 04](04_compressione_errori_comunicazione.html).

| Lettera | A | B | C | D | E | F | G | H |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Codice | 000000 | 001111 | 010011 | 011100 | 100110 | 101001 | 110101 | 111010 |

> [!ESEMPIO] Facile: Simulazione d'esame 1, 2023/24, domanda 1
> «Calcolare la distanza di Hamming tra le sequenze di numeri binari elencati.»
>
> 1. 01011101 e 00101101: diverse nei posti 2, 3 e 4. Distanza 3.
> 2. 01011100 e 00101100: diverse negli stessi posti. Distanza 3.
> 3. 01101100 e 01101110: diverse solo nel posto 7. Distanza 1.
> 4. 01111100 e 01111110: diverse solo nel posto 7. Distanza 1.
>
> Un modo per non perdere il conto: scrivi sotto le due file una riga con un segno dove i bit sono diversi, poi conta i segni.

> [!ESEMPIO] Medio: domanda 4 del §1.10, la parità dispari
> Scrivi «Does» in ASCII con la parità dispari, il bit di parità a sinistra.
>
> | Simbolo | ASCII | Quanti 1 | Bit di parità | I 9 bit |
> |:-:|:-:|:-:|:-:|:-:|
> | D | 01000100 | 2, pari | 1 | 101000100 |
> | o | 01101111 | 6, pari | 1 | 101101111 |
> | e | 01100101 | 4, pari | 1 | 101100101 |
> | s | 01110011 | 5, dispari | 0 | 001110011 |
>
> I primi tre sono quelli della risposta del libro. Controllo: ogni fila di 9 bit ha un numero dispari di 1.

Nello strumento c'è la D. Simula un errore e poi due: con due errori il controllo dice «tutto a posto».

```widget codifica
titolo: Il bit di parità della D, e uno o due errori
modo: parita
bit: 01000100
parita: dispari
```

> [!ESEMPIO] Tipo esame: domanda 5 del §1.10, decodificare
> Con il codice del libro decodifica (a) 001111 100100 001100 e (b) 010001 000000 001011.
>
> 1. 001111 è nel codice: B.
> 2. 100100 non c'è. Dista 1 da E (100110): è cambiato il quinto bit. Le altre lettere distano almeno 2. Si legge E.
> 3. 001100 dista 1 da D (011100). Si legge D. La parola (a) è BED.
> 4. 010001 dista 1 da C (010011). 000000 è A. 001011 dista 1 da B (001111). La parola (b) è CAB.
>
> Sono le risposte del libro.

Scrivi una fila nello strumento e guarda le distanze. Prova 100100, poi 110000: tre lettere alla stessa distanza.

```widget codifica
titolo: Il codice del libro: la lettera più vicina
modo: hamming
parola: 100100
```

> [!ESEMPIO] Difficile: domanda 6 del §1.10, costruire un codice
> Trova quattro file di 5 bit per A, B, C e D, a distanza almeno 3 l'una dall'altra.
>
> Il libro propone A = 00000, B = 11100, C = 01111, D = 10011. Le coppie sono sei: controllale tutte.
>
> | Coppia | Bit diversi | Distanza |
> |---|---|:-:|
> | A e B | posti 1, 2, 3 | 3 |
> | A e C | posti 2, 3, 4, 5 | 4 |
> | A e D | posti 1, 4, 5 | 3 |
> | B e C | posti 1, 4, 5 | 3 |
> | B e D | posti 2, 3, 4, 5 | 4 |
> | C e D | posti 1, 2, 3 | 3 |
>
> La distanza minima è 3: il codice corregge un errore.

::: prova (a) Con la parità dispari, quale di questi 9 bit è sicuramente sbagliato: 100101101 oppure 100000001? (b) Due errori nello stesso byte si vedono con la parità?
(a) 100101101 ha cinque 1, un numero dispari: va bene. 100000001 ha due 1, un numero pari: c'è un errore.

(b) No. Due bit cambiati cambiano di due il numero degli 1, e il totale resta dispari. È la risposta del libro alla domanda 2 del §1.10.
:::

> [!RICORDA]
> - Parità dispari: totale degli 1 dispari, bit di parità a sinistra. Rivela un errore, non due.
> - Distanza di Hamming: quante colonne hanno bit diversi.
> - Codice del libro: si legge la lettera più vicina. Distanza minima 3: corregge un errore, ne rivela due.

## Come affrontare i quiz della parte 1

L'esame comincia con 9 quiz in 45 minuti: circa 5 minuti a domanda. Molti quiz hanno più voci da valutare, e ogni voce porta una parte del punteggio. Il tempo basta solo se i metodi di questa lezione vengono senza pensarci.

### Il piano per ogni domanda

1. **Riconosci il tipo**: conversione, complemento a 2, virgola mobile, circuito, Hamming. La tabella qui sotto dice il metodo.
2. **Scrivi i dati su carta**, uno sotto l'altro: i bit in colonna, le monete sopra. Gli errori nascono quasi sempre da un bit copiato male.
3. **Fai il conto una volta sola**, con calma, e poi **controlla al contrario**.
4. **Rispondi a tutte le voci**: un quiz con cinque voci vero o falso dà punti anche se ne sbagli una.

| Tipo di domanda | Metodo | Controllo veloce |
|---|---|---|
| base 2 e base 10 | monete, divisioni, raddoppio | riconverti il risultato |
| esadecimale | gruppi di 4 bit da destra | ogni cifra torna a 4 bit |
| complemento a 2 | moneta di sinistra negativa | senza segno meno 256 (8 bit) |
| eccesso | senza segno meno 8, 4 o 128 | il bit a sinistra è 1 per i positivi |
| somma con il segno | colonna, riporto finale buttato | regola del segno |
| virgola mobile | segno, esponente più 4, 4 cifre | rileggi il byte che hai scritto |
| circuito | tabella di tutte le righe | una riga sbagliata basta per scartare |
| flip-flop | parti dal valore di prima | ricalcola finché niente cambia |
| distanza di Hamming | colonne diverse | conta due volte, da destra e da sinistra |
| parità | conta gli 1 | il totale deve essere dispari |

### I trucchi per controllare

- **Una fila di 1** vale la moneta successiva meno 1: 1111 vale 16 − 1 = 15. In complemento a 2, una fila di 1 vale −1.
- **Pari o dispari**: un numero in base 2 è dispari quando l'ultimo bit è 1, pari quando è 0. Con la virgola vale lo stesso per l'ultima cifra: 0,375 sono 3/8, con il 3 dispari, quindi la cifra da 1/8 deve essere 1.
- **Il segno in virgola mobile** è il primo bit: scarta subito le risposte con il segno sbagliato.
- **L'esponente in virgola mobile**: un numero tra 1 e 2 ha esponente 1, cioè 101; tra 2 e 4 ha esponente 2, cioè 110; tra 4 e 8 ha esponente 3, cioè 111. Tra 1/2 e 1 ha esponente 0, cioè 100.
- **Complemento a 2**: un numero e il suo opposto, sommati, danno tutti 0 con il riporto buttato. 01010101 + 10101011 = 00000000.

### Gli errori più frequenti

- Leggere in complemento a 2 come se fosse senza segno: 11111111 non è 255 ma −1.
- Credere che 10000001 sia −1: è −127. Il bit di segno vale −128, non è un segno meno attaccato al resto.
- Cercare l'overflow con il segno nel riporto finale: conta solo la regola del segno.
- Nella virgola mobile, dimenticare di aggiungere 4 all'esponente, o spostare la virgola nella direzione sbagliata.
- Arrotondare la mantissa invece di troncarla: il libro taglia e basta.
- Nei circuiti, dimenticare una riga: con 3 ingressi le righe sono 8.
- Confondere OR e XOR quando tutti e due gli ingressi sono 1.
- Contare un byte per simbolo in UTF-8, o dimenticare che lo stereo ha 2 canali.
- Fidarsi delle soluzioni scritte a mano che girano online: come hai visto con il flip-flop, a volte sono sbagliate.

> [!ESAME] Quanto tempo per tipo
> Un esadecimale, un byte in complemento a 2 o una distanza di Hamming devono richiedere meno di un minuto. Virgola mobile, tabella di un circuito e flip-flop chiedono 3–5 minuti. Così ti resta tempo per i quiz delle altre parti del libro, che arrivano più avanti.

::: prova Per ognuna di queste domande, quale metodo usi? (a) «Quanto vale 11111010 in complemento a 2?» (b) «Il circuito con un filo che torna indietro è combinatorio?» (c) «Qual è la distanza di Hamming tra 1010 e 0110?»
(a) Moneta di sinistra negativa: −128 + 64 + 32 + 16 + 8 + 2 = −6.

(b) Un filo che torna indietro vuol dire circuito sequenziale: non è combinatorio.

(c) Le file sono diverse nei posti 1 e 2: distanza 2.
:::

> [!RICORDA]
> - 9 quiz in 45 minuti: circa 5 minuti a domanda, meno di uno per le conversioni.
> - Riconosci il tipo, scrivi i bit in colonna, fai il conto, controlla al contrario.
> - Rispondi a tutte le voci di ogni quiz.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| A·B, A ∧ B | «A e B» | AND: 1 solo se tutti e due sono 1 | 1·0 = 0 |
| A + B, A ∨ B | «A o B» | OR: 1 se almeno uno è 1 (non è la somma) | 1 + 1 = 1 |
| $\overline{A}$, ¬A, A' | «non A» | NOT: il contrario | $\overline{1} = 0$ |
| NAND | «nand» | AND seguito da NOT: 0 solo se tutti e due sono 1 | 1 NAND 1 = 0 |
| $x_1$ | «x uno» | il nome di un ingresso: il numerino fa parte del nome | $x_1 = 0$ |
| $2^n$ | «due alla n» | 2 moltiplicato per sé stesso n volte | $2^{10} = 1024$ |
| B5 | «bi cinque» | un byte in esadecimale | 181 |
| KB | «kilobyte» | 1024 byte | 4 KB = 4096 byte |
| 11,101 | «uno uno virgola uno zero uno» | un numero in base 2 con la virgola; nei quiz 11.101 | 3,625 |
| −128 | «meno centoventotto» | la moneta di sinistra in complemento a 2 con 8 bit | 10000001 = −127 |
| eccesso 8 | «eccesso otto» | leggi senza segno e togli 8 | 1110 = 6 |
| 0 110 1011 | «segno, esponente, mantissa» | un byte in virgola mobile nel formato del libro | 2 e 3/4 |
| $0{,}1011 \cdot 2^2$ | «zero virgola uno zero uno uno per due alla seconda» | sposta la virgola di 2 posti a destra | 10,11 |

## Verso l'esame

Le regole dell'esame, uguali per i tre canali, sono nella [lezione 01](01_bit_porte_esadecimale.html) e nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md): 9 quiz in 45 minuti al computer, con Safe Exam Browser, da 3 punti l'uno; servono almeno 18 punti.

**Che cosa è uscito nelle simulazioni del 2023/24, per la parte 1**

| Simulazione | Domanda | Argomento | Dove è risolta qui |
|---|---|---|---|
| 1 | 1 | distanza di Hamming | parità e codice di Hamming |
| 1 | 2 | 3,625 in virgola fissa e mobile, troncamento | conversioni e virgola mobile |
| 1 | 5 | dalla tabella alla formula | circuiti |
| 1 | 6 | circuito combinatorio e sua formula | circuiti |
| 2 | 1 | lo stesso quiz su 3,625 | virgola mobile |
| 2 | 3 | circuito con due NAND che si richiamano | il flip-flop |
| 2 | 8 | quattro numeri in complemento a 2 su 8 bit | complemento a 2 |

Le altre domande delle due simulazioni riguardano la parte 2 del libro: logica, relazioni, grammatiche, automi, induzione, algebre di Boole. Ci arriviamo nelle prossime lezioni.

**Che cosa non è uscito ma può uscire.** Esadecimale, memoria, testo, immagini, suoni e compressione non compaiono in quelle due simulazioni. Però sono nella mappa comune del libro, e i docenti avvertono che all'esame possono arrivare domande mai chieste prima.

> [!ESAME] Le cinque cose da saper fare a occhi chiusi
> 1. Convertire tra base 2, base 10 ed esadecimale, anche con la virgola.
> 2. Leggere e scrivere un numero in complemento a 2, e riconoscere l'overflow.
> 3. Leggere e scrivere un byte in virgola mobile nel formato del libro, con il troncamento.
> 4. Fare la tabella di un circuito e capire se è combinatorio o sequenziale.
> 5. Calcolare la distanza di Hamming e decodificare con il codice del libro.

**Errori da evitare**

- Rispondere senza controllare: ogni metodo di questa lezione ha il suo controllo al contrario.
- Copiare male un bit dal testo del quiz: rileggi i bit prima di cominciare.
- Usare 1000 al posto di 1024 nei conti sulla memoria.
- Prendere per buone le soluzioni scritte a mano delle simulazioni: nella domanda 3 della simulazione 2 le note a margine sono sbagliate.

## Quiz

```quiz
D: Simulazione d'esame 1, 2023/24, domanda 1. Qual è la distanza di Hamming tra 01011100 e 00101100?
- $1$
- $2$
+ $3$
- $4$
- $5$
= Si scrivono le due file una sotto l'altra e si contano le colonne con bit diversi: sono il secondo, il terzo e il quarto posto, quindi la distanza è 3. La risposta 1 conta solo il primo posto diverso. Le risposte 4 e 5 contano anche colonne uguali: dal quinto all'ottavo posto le due file sono identiche, 1100.

D: Simulazioni d'esame 1 e 2, 2023/24. Il numero 3,625 nel formato a 8 bit del libro (segno, 3 bit di esponente in eccesso 4, 4 bit di mantissa). Quale affermazione è giusta?
- In virgola fissa è 11.111 e in virgola mobile 01101101.
- In virgola mobile è 11101110, senza troncamento.
+ In virgola fissa è 11.101; in virgola mobile è 01101110, e c'è troncamento solo in virgola mobile.
- In virgola fissa è 111.01, e c'è troncamento in tutte e due.
- In virgola mobile è 01101110, senza troncamento.
= 3,625 = 11,101: in virgola fissa ci sta tutto. Spostando la virgola due posti a sinistra viene 0,11101: esponente 2, cioè 110, e le cifre sono cinque. La mantissa tiene 1110 e perde l'ultimo 1: il byte è 01101110 e vale 3,5, quindi c'è troncamento. 11101110 ha il segno sbagliato. 01101101 non usa le prime quattro cifre. 11.111 vale 3 e 7/8, 111.01 vale 7 e 1/4.

D: Simulazione d'esame 2, 2023/24, domanda 8. Quanto vale 10000001 in complemento a 2 su 8 bit?
- $-1$
- $129$
+ $-127$
- $-128$
- $1$
= Con 8 bit la moneta di sinistra vale −128: 10000001 vale −128 + 1 = −127. Controllo: senza segno vale 129, e 129 − 256 = −127. La risposta −1 legge il primo bit come un segno meno attaccato a 0000001: non è il complemento a 2. La risposta 129 è la lettura senza segno. −128 è 10000000.

D: Simulazione d'esame 2, 2023/24, domanda 8. Quale riga dà i valori giusti di 11111111, 01010101 e 00001111 in complemento a 2 su 8 bit?
- $255$, $85$, $15$
+ $-1$, $85$, $15$
- $-1$, $-85$, $-15$
- $-127$, $85$, $15$
- $-1$, $-43$, $15$
= 11111111 è fatto di soli 1: in complemento a 2 vale −1, perché −128 + 127 = −1. Gli altri due hanno il bit di segno a 0 e si leggono come senza segno: 64 + 16 + 4 + 1 = 85 e 8 + 4 + 2 + 1 = 15. La prima riga legge tutto senza segno. La terza mette il meno ai positivi. −127 è 10000001.

D: Simulazione d'esame 2, 2023/24, domanda 3. Due NAND si richiamano: quello in alto riceve l'ingresso in alto e l'uscita dell'altro; quello in basso riceve l'ingresso in basso e l'uscita del primo, che è y. Con l'ingresso in alto a 1 e quello in basso a 0, su che valore si stabilizza y?
+ $0$
- $1$
- Dipende dal valore di prima.
- Non si stabilizza mai.
- Vale 1 per un istante e poi 0, all'infinito.
= Il NAND in basso riceve uno 0, quindi dà 1 qualunque sia y. Il NAND in alto riceve allora 1 e 1, e dà 0. Ricalcolando, il NAND in basso riceve 0 e 0 e dà ancora 1: niente cambia, y resta 0. Dipende dal valore di prima solo quando tutti e due gli ingressi sono 1. Il valore 1 è quello che si ottiene con gli ingressi scambiati.

D: Nello stesso circuito con due NAND, tutti e due gli ingressi valgono 1. Su che valore si stabilizza y?
- Sempre $0$.
- Sempre $1$.
+ Resta il valore che aveva prima: il circuito ricorda un bit.
- Oscilla tra 0 e 1.
- Il circuito è combinatorio, quindi la domanda non ha senso.
= Con un ingresso fisso a 1, ogni NAND dà il contrario dell'altra uscita. Se y era 0, l'altra uscita è 1 e y resta 0; se y era 1, l'altra uscita è 0 e y resta 1. Tutti e due i casi sono stabili: il circuito ricorda il valore di prima. È sequenziale, non combinatorio, perché le uscite tornano indietro.

D: Simulazione d'esame 1, 2023/24, domanda 6. Il circuito calcola (A AND NOT C) OR (NOT C AND B). Quale formula NON descrive il circuito?
- (¬C∧A)∨(¬C∧B)
+ (¬C∨A)∧(¬C∨B)
- ¬((C∨¬A)∧(C∨¬B))
- ¬C∧(A∨B)
- (A∧¬C)∨(B∧¬C)
= Basta una riga in cui la formula e il circuito danno valori diversi. Con A = 0, B = 0, C = 0 il circuito dà 0, perché le due AND ricevono uno 0. La formula (¬C∨A)∧(¬C∨B) invece dà 1, perché ¬C vale 1 e rende veri tutti e due gli OR. Le altre quattro danno gli stessi valori del circuito in tutte le 8 righe: sono scritture diverse della stessa funzione.

D: Simulazione d'esame 1, 2023/24, domanda 5. La tabella ha y = 1 solo nelle righe x1x2x3 = 010, 011, 101 e 110. Quale formula è giusta?
- $\overline{x_1}\,x_2 + x_1\,x_2\,x_3$
- $x_1\,x_2 + \overline{x_2}\,x_3$
+ $\overline{x_1}\,x_2\,\overline{x_3} + \overline{x_1}\,x_2\,x_3 + x_1\,\overline{x_2}\,x_3 + x_1\,x_2\,\overline{x_3}$
- $x_1\,x_2\,x_3$
- $\overline{x_1}\,\overline{x_2}\,\overline{x_3} + x_1\,x_2\,x_3$
= Il metodo: un AND per ogni riga con y = 1, con il NOT sugli ingressi che valgono 0, poi tutti uniti da OR. La riga 010 dà NOT x1 AND x2 AND NOT x3, e così via: è la terza formula. La prima vale 1 nella riga 111, dove y = 0. La seconda vale 1 nella riga 001, dove y = 0. Le ultime due danno 1 proprio nelle righe in cui y = 0.

D: Domanda 5 del §1.1. Come si scrive in esadecimale 111010000101010100010111?
- E85171
+ E85517
- 8E5571
- E8551
- 1E85517
= Gruppi di 4 bit da destra: 1110, 1000, 0101, 0101, 0001, 0111, cioè E, 8, 5, 5, 1, 7. Il risultato è E85517, la risposta del libro. La prima e la terza scambiano l'ordine di alcuni gruppi. La quarta ne perde uno. L'ultima aggiunge una cifra che non c'è: i 24 bit fanno esattamente 6 gruppi.

D: Una memoria ha 64 KB, con celle di un byte. Quanti bit servono per l'indirizzo di una cella?
- $6$
- $8$
- $15$
+ $16$
- $64$
= 64 KB sono 64 · 1024 = 65536 celle, cioè $2^{16}$. Con 16 bit gli indirizzi vanno da 0 a 65535, uno per cella. Con 15 bit si arriva solo a 32768 celle. La risposta 6 usa 64 = $2^6$ dimenticando che un KB sono 1024 byte. La risposta 8 conta i bit di una cella, non quelli dell'indirizzo.

D: Quanti byte occupa in UTF-8 il testo «città: 1€», spazio compreso?
- $9$
- $10$
- $11$
+ $12$
- $18$
= I simboli sono 9. Sette sono di ASCII e occupano un byte ciascuno: c, i, t, t, i due punti, lo spazio e l'1. La à occupa 2 byte e l'euro 3: in tutto 7 + 2 + 3 = 12. La risposta 9 conta un byte per simbolo. La risposta 11 conta l'euro come 2 byte. La risposta 18 conta 2 byte per simbolo.

D: Una canzone di 3 minuti, qualità CD: 44 100 campioni al secondo, 16 bit per campione, stereo. Quanti byte?
- $7938000$
- $15876000$
+ $31752000$
- $63504000$
- $254016000$
= 16 bit sono 2 byte e lo stereo ha 2 canali: in un secondo 44100 · 2 · 2 = 176400 byte. In 180 secondi 176400 · 180 = 31752000. La risposta 15876000 conta un solo canale. La risposta 254016000 conta i bit invece dei byte. La risposta 63504000 conta 4 canali.

D: Come si scrive 6,375 in base 2?
- $110{,}375$
- $110{,}11$
+ $110{,}011$
- $110{,}101$
- $111{,}011$
= 6 è 110. Per 0,375 si raddoppia: 0,75 dà 0, 1,5 dà 1, 1 dà 1. Quindi 0,375 = 0,011 e 6,375 = 110,011. Controllo: 4 + 2 + 1/4 + 1/8 = 6,375. La prima copia le cifre decimali. 110,11 vale 6 e 3/4. 110,101 vale 6 e 5/8: ha le cifre dopo la virgola al contrario. 111,011 vale 7 e 3/8.

D: Con 8 bit senza segno si calcola 10010110 + 01101010. Che cosa resta negli 8 bit?
+ 00000000, con overflow.
- 100000000, senza overflow.
- 11111111, senza overflow.
- 00000000, senza overflow.
- 11111110, con overflow.
= I due numeri valgono 150 e 106, e la somma è 256, cioè 100000000: 9 bit. Il riporto dell'ultima colonna non ha posto, quindi negli 8 bit resta 00000000. È overflow, perché senza segno con 8 bit si arriva a 255. La seconda risposta scrive giusto il numero, ma con 9 bit. 11111111 è 255, il massimo, ma il computer non si ferma lì.

D: Domanda 9 del §1.6. Quanto vale 0010 in notazione in eccesso 8?
- $2$
+ $-6$
- $-2$
- $6$
- $10$
= In eccesso 8 si leggono i bit senza segno e si toglie 8: 0010 è 2, e 2 − 8 = −6. La risposta 2 dimentica di togliere 8. La risposta −2 è la lettura in complemento a 2 di 1110, non di 0010. La risposta 10 aggiunge 8 invece di toglierlo.

D: Domanda 1 del §1.7. Quanto vale il byte 00111001 nel formato a 8 bit del libro?
- $9/16$
+ $9/32$
- $9/64$
- $-9/32$
- $2$ e $1/4$
= Segno 0, esponente 011, mantissa 1001. L'esponente in eccesso 4 è 3 − 4 = −1: la virgola va un posto a sinistra, e 0,1001 diventa 0,01001. Le monete sono 1/4 e 1/32: 8/32 + 1/32 = 9/32, la risposta del libro. 9/16 dimentica di spostare la virgola. 9/64 la sposta di due posti. Il segno è 0, quindi il numero è positivo.

D: Domanda 2 del §1.7. Nel formato a 8 bit del libro, quale di questi numeri si scrive con un errore di troncamento?
- $2$ e $3/4$
- $3/4$
- $-3$ e $1/2$
+ $5$ e $1/4$
- $1$ e $1/8$
= 5 e 1/4 è 101,01: spostando la virgola davanti al primo 1 viene 0,10101, con cinque cifre. La mantissa ne tiene quattro, 1010, e il byte 01111010 vale 5: si perde 1/4. Gli altri hanno al massimo quattro cifre: 2 e 3/4 è 10,11, 3/4 è 0,11, 3 e 1/2 è 11,1, 1 e 1/8 è 1,001.

D: Domanda 4 del §1.10. Con la parità dispari del libro, bit di parità a sinistra, come si scrive la D, cioè 01000100?
- $001000100$
+ $101000100$
- $010001001$
- $010001000$
- $01000100$
= 01000100 ha due 1, un numero pari. Per avere un totale dispari il bit di parità deve essere 1, e il libro lo mette a sinistra: 101000100, la risposta del libro. 001000100 lascia il totale pari. La terza mette il bit di parità a destra, come la quarta che ha anche il bit sbagliato. L'ultima dimentica il bit di parità.

D: Con il codice a 6 bit del libro (A 000000, B 001111, C 010011, D 011100, E 100110, F 101001, G 110101, H 111010) arriva 001011. Come si decodifica?
- A
+ B
- C
- F
- Non si può decodificare: è a distanza 2 da due lettere.
= 001011 differisce da B, 001111, solo nel quarto bit: distanza 1. C e F distano 2, A dista 3, le altre di più. Con un solo errore la lettera più vicina è unica, perché le lettere del codice distano tutte almeno 3 tra loro. È un pezzo della domanda 5 del §1.10, che dà CAB.

D: Domanda 2 del §1.9. Con LZW come nel libro, partendo da x = 1, y = 2, spazio = 3, che cosa diventa «xyx yxxxy xyx yxxxy yxxxy»?
- $121321112121321112$
+ $121321112343535$
- $1213211123434$
- $12132111234353$
- $45453$
= xyx è nuova: si scrive 121 e diventa la parola 4. Lo spazio è 3. yxxxy è nuova: si scrive 21112 e diventa la parola 5. Poi xyx è 4, spazio 3, yxxxy è 5, spazio 3, yxxxy è 5. In fila: 121 3 21112 3 4 3 5 3 5. La prima non usa il dizionario. La terza e la quarta perdono le ultime parole. L'ultima usa parole che all'inizio il dizionario non ha.

D: Domande 3 e 4 del §1.9. Quale affermazione su GIF e JPEG è giusta?
- GIF e JPEG sono tutti e due senza perdita.
- GIF è senza perdita, JPEG con perdita.
+ Tutti e due perdono qualcosa: GIF riduce i colori a 256, JPEG toglie dettagli che l'occhio nota poco.
- JPEG va meglio di GIF per i cartoni animati con pochi colori.
- JPEG usa più bit per il colore che per la luminosità.
= GIF tiene al massimo 256 colori: un'immagine con più colori perde qualcosa. JPEG toglie dettagli, soprattutto di colore, perché l'occhio è più sensibile alla luminosità: usa meno bit per il colore, non di più. Per i cartoni animati, con zone di colore uniforme e pochi colori, il libro consiglia GIF.
```

## Esercizi

::: esercizio base La tabella di un circuito
Un circuito calcola A·B + $\overline{C}$, cioè (A AND B) OR (NOT C). Scrivi la sua tabella e di' a parole quando l'uscita vale 1.
::: soluzione
1. Gli ingressi sono 3: le righe sono $2^3 = 8$.
2. Una colonna per A AND B, una per NOT C, una per l'uscita.

| A | B | C | A AND B | NOT C | uscita |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 | 1 |

3. A parole: l'uscita vale 1 quando C vale 0, oppure quando A e B valgono tutti e due 1.

Controllo: l'uscita è 0 solo nelle righe con C = 1 e A, B non tutti e due a 1. Sono tre righe: 001, 011, 101.
:::

::: esercizio base Esadecimale e base 10
(a) Scrivi in esadecimale 10110101 e 11111111. (b) Quanto valgono in base 10? (c) Scrivi in bit la stringa esadecimale 3C.
::: soluzione
1. (a) 1011 0101 è B5. 1111 1111 è FF.
2. (b) B5 = 11 · 16 + 5 = 181. FF = 15 · 16 + 15 = 255.
3. (c) 3 è 0011 e C è 1100: 00111100.

Controllo su B5 con le monete: 10110101 ha 128, 32, 16, 4 e 1, cioè 181.
:::

::: esercizio medio Un byte, quattro letture
Il byte 10110110 viene letto (a) come intero senza segno, (b) in complemento a 2, (c) in eccesso 128, (d) nel formato in virgola mobile del libro. Quanto vale nei quattro casi?
::: soluzione
1. (a) Le monete sono 128, 32, 16, 4 e 2: 182.
2. (b) La moneta di sinistra vale −128: −128 + 32 + 16 + 4 + 2 = −74. Controllo: 182 − 256 = −74.
3. (c) 182 − 128 = 54.
4. (d) Segno 1, esponente 011, mantissa 0110. L'esponente è 3 − 4 = −1. La mantissa è 0,0110: spostando la virgola un posto a sinistra viene 0,00110, cioè 1/8 + 1/16 = 3/16. Con il segno: −3/16.

Nella (d) la mantissa comincia con 0: il byte non è nella forma che il libro usa, con la mantissa che comincia con 1. Si legge lo stesso, ma una codifica corretta non lo darebbe mai. Gli stessi bit, quattro regole, quattro numeri diversi.
:::

::: esercizio medio Domanda 7 del §1.6: sottrarre sommando
Con 4 bit in complemento a 2 calcola (a) 6 + 1, (b) 3 + (−2), (c) 4 + (−6), (d) 2 + 4, (e) 1 + (−5).
::: soluzione
1. (a) 0110 + 0001 = 0111, cioè 7.
2. (b) −2: 2 è 0010, cambiando segno 1110. 0011 + 1110: da destra 1 + 0 = 1; 1 + 1 = 10, scrivo 0 e riporto 1; 0 + 1 più il riporto = 10, scrivo 0 e riporto 1; 0 + 1 più il riporto = 10, scrivo 0 e il riporto si butta. Resta 0001, cioè 1.
3. (c) −6 è 1010. 0100 + 1010 = 1110, senza riporti. Vale −8 + 4 + 2 = −2.
4. (d) 0010 + 0100 = 0110, cioè 6.
5. (e) −5: 5 è 0101, cambiando segno 1011. 0001 + 1011 = 1100, cioè −8 + 4 = −4.

Sono le risposte del libro. Nessuna va in overflow: nella (a) e nella (d) i risultati 7 e 6 stanno tra −8 e 7, nelle altre i segni sono diversi.
:::

::: esercizio medio Domanda 8 del §1.6: positivo più negativo
Sommando un numero positivo e uno negativo in complemento a 2 può esserci overflow? Perché?
::: soluzione
1. No.
2. La somma di un positivo e di un negativo sta sempre tra i due numeri. Per esempio 7 + (−8) = −1, che sta tra −8 e 7.
3. I due numeri ci stanno nei bit che hai, quindi ci sta anche tutto quello che sta tra loro.

È la risposta del libro. Per questo, con la regola del segno, si controlla l'overflow solo quando i due numeri hanno lo stesso bit di segno.
:::

::: esercizio difficile Simulazione d'esame 2, domanda 3, rifatta con il flip-flop del libro
Il flip-flop del libro (figura 1.3) ha un OR, un AND e un NOT, con l'uscita dell'AND che torna nell'OR. (a) L'uscita vale 0 e arriva un impulso in alto: che cosa succede? (b) Che cosa ha in comune con il circuito dei due NAND della simulazione?
::: soluzione
1. (a) Durante l'impulso l'OR riceve 1 e dà 1. Il NOT riceve 0 dall'ingresso in basso e dà 1. L'AND riceve 1 e 1: l'uscita diventa 1.
2. Finito l'impulso, l'ingresso in alto torna a 0. L'OR riceve però l'uscita, che vale 1, e continua a dare 1. L'uscita resta 1.
3. (b) Tutti e due i circuiti hanno un'uscita che torna indietro, quindi sono sequenziali. Tutti e due hanno una combinazione degli ingressi che lascia l'uscita com'era: 0 e 0 nel flip-flop del libro, 1 e 1 nel circuito dei NAND. Con le altre combinazioni l'uscita va a 1 o a 0. Sono due modi di costruire un circuito che ricorda un bit.
:::

::: esercizio difficile Domanda 3 del §1.7: confrontare senza decodificare
Senza calcolare i valori, di' quale è più grande in ognuna di queste coppie di byte nel formato del libro: (a) 01001001 e 00111101; (b) 11011100 e 11001100.
::: soluzione
Il metodo del libro: se i segni sono diversi vince il positivo. Se sono tutti e due 0, scorri i bit da sinistra fino al primo posto diverso: vince quello con l'1. Se sono tutti e due 1, vince quello con lo 0.

1. (a) Segni 0 e 0. Il primo posto diverso è il secondo bit: 1 nel primo byte, 0 nel secondo. Vince 01001001.
2. Controllo: 01001001 vale 0,1001 = 9/16, cioè 18/32. 00111101 vale 0,01101 = 13/32. 18/32 è più grande.
3. (b) Segni 1 e 1: sono due negativi. Il primo posto diverso è il quarto bit: 1 nel primo byte, 0 nel secondo. Vince quello con lo 0, cioè 11001100.
4. Controllo: 11011100 vale −1 e 1/2. 11001100 ha esponente 100 = 0 e mantissa 1100: vale −0,11, cioè −3/4. −3/4 è più grande di −1 e 1/2.

Il trucco funziona perché l'esponente è in eccesso: esponenti più grandi hanno bit più grandi.
:::

::: esercizio esame Simulazione completa sulla virgola mobile
Il numero −1,125. (a) Scrivilo in base 2 con la virgola fissa. (b) Scrivilo nel formato a 8 bit del libro. (c) C'è troncamento? (d) E con −1,0625?
::: soluzione
1. (a) 1,125 = 1 + 1/8: 1,001. Con il segno: −1,001.
2. (b) Segno 1. 1,001 → 0,1001, la virgola va un posto a sinistra: esponente 1, cioè 1 + 4 = 5 = 101. Le cifre sono quattro, 1001: la mantissa è 1001. Il byte è 11011001.
3. (c) No: le quattro cifre ci stanno tutte. Controllo: 0,1001 con la virgola un posto a destra è 1,001, cioè 1 e 1/8, con il meno.
4. (d) 1,0625 = 1 + 1/16 = 1,0001. Spostando la virgola: 0,10001, con cinque cifre. La mantissa tiene 1000 e perde l'ultimo 1. Il byte è 11011000, che vale −1: c'è troncamento, si perde 1/16.
:::

::: esercizio esame Distanze, parità e codice del libro
(a) Calcola la distanza di Hamming tra 10110011 e 10011010. (b) Con la parità dispari, bit di parità a sinistra, scrivi i byte 01000001 e 01000110 (le lettere A e F). (c) Con il codice a 6 bit del libro decodifica 110000. Si può correggere?
::: soluzione
1. (a) Le file sono diverse nei posti 3, 5 e 8: distanza 3.
2. (b) 01000001 ha due 1: bit di parità 1, quindi 101000001. 01000110 ha tre 1: bit di parità 0, quindi 001000110. Controllo: tutte e due le file da 9 bit hanno tre 1, un numero dispari.
3. (c) Le distanze da 110000 sono: A 2, B 6, C 3, D 3, E 3, F 3, G 2, H 2.
4. A, G e H sono tutte a distanza 2. C'è sicuramente un errore, anzi almeno due, ma non si può dire quale lettera era: non si corregge.
:::

## Domande di ripasso

::: domanda Che differenza c'è tra un circuito combinatorio e uno sequenziale?
In un circuito combinatorio nessun filo torna indietro: l'uscita dipende solo dagli ingressi di quel momento. In un circuito sequenziale un'uscita rientra come ingresso, e il circuito può ricordare: l'uscita dipende anche da quello che è successo prima. Il flip-flop è sequenziale.
:::

::: domanda Come trovi una formula per una tabella di verità?
Prendi le righe con uscita 1. Per ognuna scrivi un AND di tutti gli ingressi, con il NOT su quelli che nella riga valgono 0. Poi unisci tutti gli AND con degli OR.
:::

::: domanda Come si legge un numero in complemento a 2 con 8 bit?
Si sommano le monete come senza segno, ma quella di sinistra vale −128. Se il primo bit è 0 il numero si legge come senza segno. Controllo: un negativo, letto senza segno, vale 256 in più.
:::

::: domanda Quando c'è overflow in una somma senza segno? E in complemento a 2?
Senza segno, quando esce un riporto dall'ultima colonna a sinistra. In complemento a 2 il riporto finale si butta, e c'è overflow quando due numeri con lo stesso segno danno un risultato con il segno opposto.
:::

::: domanda Com'è fatto il formato in virgola mobile del libro?
Un byte: 1 bit di segno, 3 bit di esponente in eccesso 4, 4 bit di mantissa con la virgola a sinistra. L'esponente va da −4 a 3 e dice di quanti posti spostare la virgola. Se le cifre sono più di 4, le ultime si perdono: è l'errore di troncamento.
:::

::: domanda Che cosa sono la compressione con perdita e senza perdita? Fai un esempio per ognuna.
Senza perdita si riottengono esattamente i dati di prima: run-length, codifica relativa con le differenze esatte, LZW. Con perdita si ottengono dati solo simili: JPEG, MP3, e anche GIF quando riduce i colori a 256.
:::

::: domanda Perché il codice del libro corregge un errore ma la parità no?
Nel codice del libro due lettere qualsiasi differiscono in almeno 3 bit. Con un errore la fila arrivata dista 1 da una sola lettera, e si sa quale era. Con la parità due byte giusti differiscono solo in 2 bit: un errore si vede, ma non si sa quale bit è cambiato.
:::

::: domanda Come si controlla velocemente una conversione in virgola mobile?
Si rilegge il byte appena scritto: mantissa con «0,» davanti, virgola spostata di tanti posti quanto dice l'esponente, valore con le monete. Se il numero è diverso da quello di partenza, o c'è troncamento oppure c'è un errore.
:::

## Glossario

```glossario
Tabella di verità | L'elenco di tutte le combinazioni degli ingressi di un circuito, con l'uscita di ognuna (*truth table*).
Circuito combinatorio | Un circuito di porte senza fili che tornano indietro: l'uscita dipende solo dagli ingressi di quel momento.
Circuito sequenziale | Un circuito in cui un'uscita torna come ingresso: può ricordare, come il flip-flop.
NAND | La porta AND seguita da NOT: dà 0 solo quando tutti e due gli ingressi sono 1.
Flip-flop | Un circuito che ricorda un bit: la sua uscita resta uguale finché un impulso non la cambia.
Notazione esadecimale | Il modo di scrivere i bit a gruppi di 4, con le cifre da 0 a 9 e le lettere da A a F (*hexadecimal notation*).
Kilobyte | 1024 byte, cioè $2^{10}$ byte, quando si parla di memoria (KB).
Virgola fissa | Un numero in base 2 con la virgola in un posto fisso, come 11,101.
Overflow | Quando il risultato di un conto non ci sta nei bit disponibili.
Complemento a 2 | Il modo di scrivere gli interi con il segno: la moneta di sinistra vale con il segno meno (*two's complement*).
Bit di segno | Il bit più a sinistra: in complemento a 2 vale 1 per i negativi (*sign bit*).
Notazione in eccesso | Si leggono i bit senza segno e si toglie sempre lo stesso numero: 8 con 4 bit, 4 con 3 bit (*excess notation*).
Virgola mobile | Un numero scritto con il segno, le cifre (mantissa) e di quanti posti spostare la virgola (esponente) (*floating-point notation*).
Mantissa | Le cifre di un numero in virgola mobile, con la virgola a sinistra: nel formato del libro 4 bit.
Errore di troncamento | Le cifre che non entrano nella mantissa e si perdono (*truncation error*, *round-off error*).
Compressione senza perdita | Una compressione da cui si riottengono esattamente i dati di prima (*lossless*).
Compressione con perdita | Una compressione che restituisce dati solo simili a quelli di prima (*lossy*), come JPEG e MP3.
Bit di parità | Il bit aggiunto perché il numero totale di 1 sia dispari (parità dispari) o pari (*parity bit*).
Distanza di Hamming | Il numero di posti in cui due file di bit della stessa lunghezza sono diverse.
```

## Checklist

```checklist
- So fare la tabella di un circuito di porte e scartare una formula sbagliata con una sola riga.
- So scrivere la formula di una tabella con un AND per ogni riga con uscita 1.
- So dire se un circuito è combinatorio o sequenziale, e seguire un flip-flop fatto di NAND.
- So passare tra bit, esadecimale e base 10.
- So fare i conti sulla memoria: KB, bit, bit degli indirizzi.
- So contare i byte di un testo in UTF-8, di un'immagine e di un suono.
- So convertire tra base 2 e base 10, anche con la virgola.
- So sommare in base 2 e riconoscere l'overflow, senza segno e in complemento a 2.
- So leggere e scrivere numeri in complemento a 2 e in eccesso.
- So leggere e scrivere un byte in virgola mobile nel formato del libro, con il troncamento.
- So applicare run-length, codifica relativa e LZW del libro a un messaggio corto.
- So aggiungere e controllare un bit di parità, calcolare la distanza di Hamming e decodificare con il codice del libro.
- So che cosa controllare in ogni tipo di quiz, in 5 minuti a domanda.
```

## Fonti

- R. Johnsonbaugh, J. G. Brookshear, D. Brylow, *Fondamenti dell'Informatica*, Pearson 2026 (ISBN 9788891939456), il libro di testo del corso: parte 1, che è il capitolo 1 di J. G. Brookshear, D. Brylow, *Computer Science: an overview*. Le domande delle sezioni 1.1 «Bits and Their Storage», 1.2 «Main Memory», 1.3 «Mass Storage», 1.4 «Representing Information as Bit Patterns», 1.5 «The Binary System», 1.6 «Storing Integers», 1.7 «Storing Fractions», 1.9 «Data Compression» e 1.10 «Communication Errors», con le risposte dell'appendice del libro, pubblicate sul Moodle del canale A (aperto agli ospiti).
- Simulazioni d'esame 1 e 2 del 2023/24 della pagina d'esame comune di Fondamenti, nelle schermate svolte a mano da uno studente raccolte nella «Guida degli studenti» del gruppo studentesco TSI (CC BY-SA 4.0). Le risposte di quelle schermate non sono verificate: qui ogni domanda è risolta da capo.
- Diario del canale B 2026/27 sul Moodle del canale B, per la data e gli argomenti della lezione.
- Le lezioni [01](01_bit_porte_esadecimale.html), [02](02_testo_colori_suoni_binario.html), [03](03_interi_con_segno_virgola_mobile.html) e [04](04_compressione_errori_comunicazione.html) di questi appunti, per i metodi.
- Le spiegazioni a parole, i riquadri «Prova tu», gli strumenti interattivi, i quiz e gli esercizi senza il numero di una domanda del libro o di una simulazione sono di questi appunti.
