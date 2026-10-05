---
corso: PROG1
lezione: Lab01
titolo: "Laboratorio 01: la riga di comando, il compilatore gcc e i primi programmi"
data: 2026-10-05
docenti: Elisa Marengo (turno B2) e Valerio Basile (turno B1); teoria Elvio Amparore
sopratitolo: Canale B · Laboratorio 01, la prima lezione di laboratorio · Programmazione I
descrizione: >-
  Appunti del primo laboratorio di Programmazione I (canale B, Lab01): come funziona il laboratorio Turing e come si
  collega all'esame al PC, la riga di comando di Linux, macOS e Windows, percorsi assoluti e relativi, i comandi per
  file e cartelle, l'installazione di gcc anche su Windows, compilare ed eseguire un programma C, leggere e scrivere
  dal terminale con printf e scanf, con tutti gli esercizi delle slide svolti e provati.
lede: >-
  Il primo laboratorio: si lascia il mouse e si parla al computer scrivendo. Impari a muoverti tra le cartelle con
  pochi comandi, a installare il compilatore, a trasformare un file di testo in un programma che gira e a fargli
  leggere un numero dalla tastiera. Sono i gesti che ripeterai in ogni laboratorio e all'esame.
materiale: slide
scheda:
  Slide: Lab01 «Introduzione», laboratorio canale B · 50 pagine
  Laboratorio: Elisa Marengo (turno B2, lun 05/10) e Valerio Basile (turno B1, mar 06/10) · 14–17 · laboratorio Turing
  Tempo di studio: 2–3 ore, meglio davanti a un computer
fonte: >-
  Slide «Introduzione» (Lezione nº 1 di laboratorio), Programmazione I – Laboratorio, canale B, A.A. 2026/27
appunti_html: appunti/PROG1/Lab01_introduzione.html
genera_html: true
---

## In breve

- Il laboratorio sono **10 lezioni da 3 ore** al laboratorio Turing. Al PC entri con le credenziali di UniTo. Quando esci, i file sul PC vengono cancellati: salvali prima.
- La **riga di comando** è una finestra in cui scrivi ordini al computer, uno per riga. Premi Invio, il computer esegue e risponde.
- Ogni comando ha un **nome**, poi le **opzioni** (come deve lavorare) e gli **argomenti** (su che cosa lavora). Esempio: in `ls -a Documenti` il nome è `ls`, l'opzione è `-a`, l'argomento è `Documenti`.
- Un **percorso** dice dove sta un file. Quello **assoluto** parte dalla radice del disco. Quello **relativo** parte dalla cartella in cui ti trovi. La cartella in cui sei si scrive `.`, quella che la contiene `..`.
- I comandi di base sono pochi: cambiare cartella, vedere che cosa c'è, creare, copiare, spostare, cancellare, leggere un file. Linux e macOS usano gli stessi nomi, Windows altri.
- Il compilatore si chiama **gcc**. Il comando `gcc -Wall -Werror buongiorno.c -o buongiorno` trasforma il file di testo in un programma. Con `-Wall -Werror` basta un avviso per fermare tutto, come all'esame.
- `printf` scrive sul terminale, `scanf` legge un numero dalla tastiera. Il codice `%d` vuol dire «qui va un numero intero».
- All'esame si scrive codice C al PC, in un editor semplice, e un sistema di test automatici (CodeRunner) lo compila con `-Wall -Werror` e confronta le stampe con quelle attese.

> [!CANALI]
> **Canale B.** Il laboratorio comincia questa settimana, al laboratorio Turing, dalle 14 alle 17. Il turno **B2** (matricola pari) è lunedì 05/10 con **Elisa Marengo**; il turno **B1** (matricola dispari) è martedì 06/10 con **Valerio Basile**. Poi un laboratorio a settimana: il turno B2 il lunedì, il turno B1 il martedì (date precise nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md)).
>
> **Canale A.** Turno A1 (matricola dispari) giovedì 14–17 con Iacopo Colonnelli, dall'08/10; turno A2 (matricola pari) mercoledì 14–17 con Alessia Antelmi, dal 07/10. Sempre al laboratorio Turing.
>
> **Canale C.** Tutti e due i turni con Alessandro Mazzei: turno C1 (matricola dispari) mercoledì 9–12, dal 07/10; turno C2 (matricola pari) martedì 9–12, dal 06/10.
>
> Secondo la scheda del corso, i dieci laboratori hanno la stessa sequenza nei tre canali e gli stessi esercizi su CodeRunner. I laboratori del 2025/26 che ho (Lab03 condizioni booleane, Lab04 iterazioni, Lab10 ricorsione) hanno lo stesso modello di queste slide. Quindi questa lezione serve a tutti: controlla solo il giorno del tuo turno su Moodle. Le slide del Lab01 dei canali A e C per il 2026/27 non le ho viste.
>
> In questi appunti ho cambiato un po' l'ordine delle slide: tutti gli esercizi (la slide 23 sui comandi e la slide 50 sul C) sono svolti in fondo, nella sezione «Esercizi».

## Come funziona il laboratorio (slide 3–7)

Il corso di Programmazione I ha due parti. La **teoria** è in aula, con Elvio Amparore. Il **laboratorio** è al laboratorio Turing, davanti a un PC: si scrivono programmi e si provano. Il laboratorio vale 30 ore, cioè **10 lezioni da 3 ore**.

Le cose pratiche, dalla slide 3:

- i docenti di laboratorio del canale B sono Valerio Basile e Elisa Marengo;
- orari e avvisi sono sulla pagina Moodle del corso;
- per parlare con un docente scrivi un'email o usa il forum di Moodle. Scrivi solo dall'indirizzo di ateneo, quello che finisce con `@edu.unito.it`;
- durante il laboratorio ci sono anche due **assistenti**, studenti del secondo o del terzo anno: chiedi a loro quando ti blocchi.

### Entrare in un PC del laboratorio Turing (slide 4–5)

Ti siedi, accendi lo schermo con il tasto in basso a destra ed entri con il **login di ateneo**. È lo stesso nome utente e la stessa password che usi per il sito di UniTo e per la posta: il nome utente ha la forma `nome.cognome`.

Puoi scegliere tra **Windows** e **Linux**. In tutti e due trovi già il compilatore C e un editor di testo. Puoi anche portare il tuo portatile, ma allora devi installare tu il compilatore (sezione «Il compilatore C sul tuo computer», più avanti).

> [!TRAPPOLA] La password e la tastiera
> Il PC può avere una disposizione dei tasti diversa dalla tua: per esempio inglese invece che italiana. Se la password contiene caratteri speciali (`@`, `#`, `!`, lettere accentate), possono trovarsi su tasti diversi. Se il login non va, controlla la lingua della tastiera nella schermata di accesso e chiedi agli assistenti.

Ogni volta che entri, il PC riparte **da zero**: niente modifiche, niente file. E quando esci, **tutti i file che hai scritto vengono cancellati**.

> [!TRAPPOLA] I file si perdono quando esci
> Prima di uscire, salva i tuoi file altrove: su una chiavetta, sul tuo Google Drive o mandandoli per email. Il PC non si spegne: per uscire si usa **Disconnetti** dal menu Start.

### Le regole del laboratorio (slide 6)

In laboratorio è vietato fare foto, video o registrazioni. Il materiale del corso è protetto dal diritto d'autore: puoi usarlo per studiare, ma non condividerlo sui social o su siti che guadagnano con la pubblicità. Puoi condividere solo il materiale con licenza Creative Commons.

### Perché conviene venire ogni settimana (slide 7)

Il corso parte dalle basi: non serve aver già programmato. Le prime settimane possono sembrarti facili se hai fatto un istituto tecnico. Poi però gli argomenti si sommano uno sull'altro. La slide 7 ha due grafici. Chi segue il laboratorio e fa gli esercizi sale piano piano, sempre alla stessa pendenza. Chi salta le lezioni trova prima una parte piatta, «già visto», poi una salita ripida e arriva all'esame con una preparazione incompleta.

### Che cosa c'entra il laboratorio con l'esame

L'esame di Programmazione I si fa **al PC**, nei laboratori, ed è uguale per i tre canali. Scrivi programmi in C in una pagina web con un **editor semplice**: niente completamento automatico. Un sistema di test automatici, **CodeRunner**, compila il tuo programma, lo esegue con vari dati e confronta quello che stampa con quello che deve stampare. Compilare vuol dire tradurre il testo in C in un programma che il computer sa eseguire ([lezione 02A](02A_da_assembly_a_c.html#h-dal-sorgente-all-eseguibile)). CodeRunner lo fa con le opzioni `-Wall -Werror`, che fermano la traduzione anche per un piccolo avviso: le vedi più avanti in questa lezione.

In laboratorio vedrai lo stesso sistema. Nel 2025/26 le slide del Lab03 («Condizioni booleane») lo presentavano con un esercizio su Moodle che non valeva voto, solo per allenarsi. Le stesse slide dicono tre esiti possibili:

1. errore di compilazione: il programma non compila con `-Wall -Werror`;
2. il programma compila e gira, ma non passa tutti i test: stampa qualcosa di diverso da quello atteso;
3. il programma compila, gira e passa tutti i test.

Per questo conviene allenarsi da subito come all'esame: editor semplice, compilazione con `-Wall -Werror`, e stampe scritte esattamente come richiesto.

::: prova Hai scritto un programma in laboratorio e stai per uscire. Che cosa devi fare prima di cliccare su «Disconnetti»?
Salvare i file altrove (chiavetta, Google Drive, email). Dopo la disconnessione il PC cancella tutto quello che hai scritto.
:::

> [!RICORDA]
> - 10 laboratori da 3 ore al laboratorio Turing; entri con le credenziali di UniTo e scegli Windows o Linux.
> - Quando esci i file vengono cancellati: salvali prima.
> - All'esame CodeRunner compila con `-Wall -Werror` e controlla le stampe: allenati così da subito.

## La riga di comando: ordini scritti (slide 8–13)

Di solito usi il computer con il mouse: apri una cartella con un doppio clic, trascini un file nel cestino. C'è un altro modo, più vecchio e più preciso: **scrivere** che cosa vuoi. Per esempio, invece di aprire la cartella Documenti con un doppio clic, scrivi `cd Documenti` e premi Invio.

È come una chat con il computer. Tu scrivi un ordine su una riga, premi Invio. Il computer lo esegue e risponde con qualche riga di testo, oppure con un messaggio d'errore se non ha capito. Poi aspetta l'ordine dopo.

Questa finestra si chiama **riga di comando**, in inglese *command line interface*, abbreviato **CLI**. Ha molti altri nomi, e li sentirai tutti: **terminale**, **console**, **shell** (su Linux e macOS), **prompt dei comandi** (su Windows).

In laboratorio la useremo per fare a mano tutti i passi che trasformano un file di testo scritto in C in un programma che gira. Gli ambienti di sviluppo li fanno con un clic, ma nascondono che cosa succede.

### Il prompt

Quando apri il terminale vedi una riga che finisce con un simbolo e un cursore che lampeggia. Quella riga si chiama **prompt**: è il computer che dice «sono pronto, scrivi».

```text
C:\Users\jon_snow>
```

È il prompt di Windows. Prima del segno `>` c'è la cartella in cui ti trovi.

```text
jon_snow@linux:~$
```

È il prompt di Linux. Prima del segno `$` ci sono il nome dell'utente, il nome del computer e la cartella in cui ti trovi. Il segno `~` (si legge «tilde») vuol dire «la tua cartella personale». Su macOS il prompt è simile e finisce con `%`.

Negli appunti, quando c'è un comando da scrivere, il prompt è già scritto davanti. Tu scrivi solo quello che viene dopo il `>` o il `$`.

### Come è fatto un comando (slide 11)

Ogni comando ha la stessa forma:

```text
nome_comando  opzioni  argomenti
```

- il **nome** dice che cosa fare;
- le **opzioni** cambiano il modo in cui il comando lavora. Su Linux e macOS cominciano con il trattino `-`, su Windows con la barra `/`;
- gli **argomenti** sono le cose su cui il comando lavora: di solito nomi di file o di cartelle.

Le parti si separano con uno spazio. Ecco gli esempi della slide 11, con le risposte vere del computer.

Su Linux:

```text
$ date
Mon Oct  5 17:53:02 CEST 2026

$ uname
Linux

$ echo "ciao, come stai"
ciao, come stai
```

- `date` non ha né opzioni né argomenti: stampa data e ora.
- `uname` stampa il nome del sistema. Con l'opzione `-a` (*all*, tutto) stampa anche il nome del computer, la versione e il tipo di processore, su una riga lunga.
- `echo` ripete i suoi argomenti. Serve per stampare un messaggio o il valore di qualcosa.

Su Windows:

```text
C:\Users\jon_snow>date /t
Mon 10/05/2026

C:\Users\jon_snow>echo ciao, come stai
ciao, come stai
```

- `date /t` stampa la data. Senza l'opzione `/t`, Windows ti chiederebbe anche di scrivere una data nuova.
- `systeminfo`, l'altro esempio della slide, stampa molte righe di informazioni sul computer.

I messaggi del mio PC sono in inglese. Su un sistema in italiano date e messaggi d'errore escono in italiano, ma il senso è lo stesso.

::: prova Nel comando `ls -a Documenti`, qual è il nome, quale l'opzione e quale l'argomento?
Il nome è `ls` (elenca i file), l'opzione è `-a` (comincia con il trattino), l'argomento è `Documenti` (la cartella da elencare).
:::

### Comandi della shell e programmi esterni (slide 12–13)

Alcuni comandi li conosce direttamente la shell: si chiamano comandi **integrati** (*built-in*). Esempio: `cd`, che cambia cartella.

Tutti gli altri sono **programmi esterni**: file che stanno da qualche parte sul disco. Quando scrivi il loro nome, la shell cerca il file, lo carica in memoria e lo esegue con le opzioni e gli argomenti che hai scritto. Esempio: `ls` su Linux è il file `/usr/bin/ls`, cioè il file `ls` nella cartella `bin` dentro la cartella `usr` (come si leggono questi indirizzi lo vedi nella sezione dopo).

Ma dove cerca? Non in tutto il disco: sarebbe troppo lento. Cerca in un elenco di cartelle che si chiama **PATH** (percorso dei comandi). Il PATH è una **variabile d'ambiente**: un'informazione con un nome, che il sistema tiene in memoria e che tutti i programmi possono leggere.

Per vedere il PATH (slide 13) si usa `echo`. Su Linux e macOS il valore di una variabile si chiede con il segno del dollaro davanti al nome:

```text
$ echo $PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
```

È il PATH di partenza di Ubuntu. Le cartelle sono separate dai due punti. Su Windows il nome della variabile va tra due segni di percentuale:

```text
C:\Users\jon_snow>echo %PATH%
```

Esce una riga molto lunga, diversa da computer a computer. Contiene di sicuro le cartelle di Windows, come `C:\Windows\system32` e `C:\Windows`, separate dal punto e virgola.

> [!TRAPPOLA] «command not found»
> Se scrivi un nome che la shell non trova, né tra i suoi comandi né nelle cartelle del PATH, ricevi un errore. Per esempio con `cdd` al posto di `cd`.
>
> Su Linux: `cdd: command not found`. Ubuntu a volte aggiunge dei suggerimenti: `Command 'cdd' not found, but there are 19 similar ones.`
>
> Su Windows: `'cdd' is not recognized as an internal or external command, operable program or batch file.`
>
> Di solito è un errore di battitura. Se invece il nome è giusto, il programma non è installato oppure la sua cartella non è nel PATH. È quello che succede a `gcc` su Windows se salti un passo dell'installazione.

::: prova Scrivi `echo ciao` su Linux e su Windows. Che cosa esce? E che cosa esce con `echo $PATH` su Windows?
`echo ciao` stampa `ciao` su tutti e due. Su Windows `echo $PATH` stampa `$PATH` così com'è: per Windows il dollaro non vuol dire niente. Lì si scrive `echo %PATH%`.
:::

> [!RICORDA]
> - La riga di comando è una chat con il computer: scrivi un ordine, premi Invio, leggi la risposta.
> - Un comando è fatto di nome, opzioni e argomenti, separati da spazi. Opzioni con `-` su Linux e macOS, con `/` su Windows.
> - I programmi esterni si cercano nelle cartelle del PATH. «command not found» vuol dire: nome sbagliato, oppure programma non trovato nel PATH.

## Dove sta un file: i percorsi (slide 14–18, 21–22)

Per mandare una lettera serve l'indirizzo completo: paese, città, via, numero. Per dire a un comando su quale file lavorare serve la stessa cosa: l'indirizzo del file sul disco. Un errore nell'indirizzo, e il comando lavora sul file sbagliato o non lo trova. Con `rm importante.txt`, che cancella un file, è meglio essere precisi.

### Le cartelle sono un albero

Le cartelle stanno una dentro l'altra. In cima c'è la **cartella radice**: su Linux e macOS si scrive `/`, su Windows è il disco, per esempio `C:\`. Dentro la radice ci sono altre cartelle, dentro ognuna altre ancora, e così via. Disegnato, sembra un albero rovesciato.

L'esempio delle slide, su Windows:

```text
C:\
└── Users\
    ├── jon_snow\
    │   └── Documenti\
    │       └── cosedafare.txt
    └── topolino\
        └── shared\
            └── foto\
                └── pippo.jpg
```

### Il percorso assoluto (slide 15)

Il **percorso assoluto** di un file è il suo indirizzo completo: tutte le cartelle da attraversare, dalla radice fino al file, nell'ordine. Tra un nome e l'altro c'è un separatore: la barra `/` su Linux e macOS, la barra rovesciata `\` su Windows.

Il file `cosedafare.txt` dell'albero qui sopra ha questi percorsi assoluti:

| Sistema | Percorso assoluto |
|---|---|
| Windows | `C:\Users\jon_snow\Documenti\cosedafare.txt` |
| Linux | `/home/jon_snow/Documenti/cosedafare.txt` |

Su Linux le cartelle personali stanno in `/home`, non in `Users`. Su macOS stanno in `/Users`.

Un percorso assoluto funziona sempre, da qualunque cartella tu dia il comando. Il difetto: è lungo da scrivere.

### La cartella di lavoro e il percorso relativo (slide 16–17)

Il terminale è sempre «dentro» una cartella: si chiama **cartella di lavoro** (*working directory*). È quella scritta nel prompt, prima del `>` o del `$`. Per cambiarla si usa `cd`, da *change directory*:

```text
C:\Users\jon_snow>cd Documenti

C:\Users\jon_snow\Documenti>
```

Il prompt è cambiato: ora sei in `Documenti`.

Un **percorso relativo** è un indirizzo che parte dalla cartella di lavoro invece che dalla radice. È come dire a un amico che è già in via Pessinetto: «al numero 12», invece di ripetergli paese e città.

Se la cartella di lavoro è `C:\Users\jon_snow`, questi due comandi cancellano lo stesso file (slide 17):

```text
C:\Users\jon_snow>del Documenti\cosedafare.txt
C:\Users\jon_snow>del C:\Users\jon_snow\Documenti\cosedafare.txt
```

Come capire se un percorso è assoluto o relativo? Guarda come comincia. Se comincia dalla radice (`/` su Linux, `C:\` su Windows) è assoluto. Altrimenti è relativo, e il computer gli mette davanti la cartella di lavoro.

### I due percorsi speciali: punto e due punti (slide 21–22)

Ogni cartella contiene due nomi speciali:

- `.` (un punto) è **la cartella stessa**, cioè la cartella di lavoro;
- `..` (due punti) è **la cartella che la contiene**, quella un gradino più su nell'albero.

Se la cartella di lavoro è `Documenti`, questi due comandi fanno la stessa cosa (slide 21):

```text
C:\Users\jon_snow\Documenti>del .\verbale.txt
C:\Users\jon_snow\Documenti>del verbale.txt
```

Il `..` serve per risalire. L'esempio della slide 22: sei in `C:\Users\jon_snow\Documenti` e vuoi copiare qui il file `pippo.jpg`, che sta nella cartella `shared\foto` dell'utente `topolino`. Contiamo i passi nell'albero:

1. da `Documenti`, `..` porta a `jon_snow`;
2. da `jon_snow`, un altro `..` porta a `Users`;
3. da `Users` si scende in `topolino`, poi in `shared`, poi in `foto`;
4. lì c'è `pippo.jpg`.

Il comando è:

```text
C:\Users\jon_snow\Documenti>copy ..\..\topolino\shared\foto\pippo.jpg .
        1 file(s) copied.
```

Il `.` finale è la destinazione: «copialo qui». Su Linux lo stesso comando si scrive con `cp` e le barre dritte: `cp ../../topolino/shared/foto/pippo.jpg .`.

### I dischi di Windows (slide 18)

Su Windows ogni disco ha una lettera seguita dai due punti. `C:` è il disco con il sistema e i programmi, come il compilatore e l'editor. `D:` e le altre lettere sono altri dischi, chiavette o cartelle di rete. Al laboratorio Turing c'è solo `C:`.

Per passare a un altro disco si scrive la sua lettera, per esempio `D:`, e si preme Invio. Per andare nella tua cartella Documenti in laboratorio:

```text
cd C:\Users\nome_utente\Documents
```

Al posto di `nome_utente` metti il tuo nome utente. Nota che qui la cartella si chiama `Documents`: è il nome vero che Windows usa su disco, anche quando in Esplora file vedi «Documenti».

> [!OLTRE] · `cd` e l'altro disco
> Su Windows `cd D:\cartella` cambia la cartella di lavoro del disco `D:`, ma ti lascia sul disco in cui eri. Per cambiare insieme disco e cartella si scrive `cd /d D:\cartella`.

> [!TRAPPOLA] Le barre al contrario
> Linux e macOS vogliono `/`, Windows vuole `\`. Nelle slide 16 e 45 il prompt di Linux è scritto `jon_snow@linux:\home\jon_snow$`, con le barre rovesciate: su un Linux vero è `/home/jon_snow`, e nel prompt la cartella personale si vede come `~`.

::: prova Sei in `/home/jon_snow/Documenti`. Dove arrivi con `cd ..`? E con `cd ../..`?
Con `cd ..` sali di un gradino: `/home/jon_snow`. Con `cd ../..` sali di due: `/home`.
:::

::: prova Sei in `C:\Users\jon_snow`. Scrivi il percorso relativo di `C:\Users\jon_snow\Documenti\cosedafare.txt`.
Si toglie la parte che coincide con la cartella di lavoro: resta `Documenti\cosedafare.txt`.
:::

> [!RICORDA]
> - Il percorso assoluto parte dalla radice (`/` oppure `C:\`) e funziona da qualunque cartella.
> - Il percorso relativo parte dalla cartella di lavoro, quella scritta nel prompt.
> - `.` è la cartella in cui sei, `..` quella che la contiene. Separatore `/` su Linux e macOS, `\` su Windows.

## I comandi da sapere, uno per uno (slide 19–20)

Con una decina di comandi fai tutto quello che faresti con il mouse in una cartella: guardare, entrare, creare, copiare, spostare, cancellare. Le slide 19 e 20 li elencano per Windows e per Linux. Qui li vedi in azione, con le risposte vere del computer.

Le sessioni Linux vengono da Ubuntu, quelle Windows dal Prompt dei comandi. Ho usato una cartella di prova con l'albero della sezione precedente e un utente di nome `jon_snow`, come nelle slide. Nei prompt di Linux scrivo solo `$` per abbreviare.

### Dove sono? Che cosa c'è qui?

**`pwd`** (Linux e macOS, *print working directory*) stampa la cartella di lavoro. Su Windows lo stesso fa **`cd`** scritto da solo.

```text
$ pwd
/home/jon_snow
```

```text
C:\Users\jon_snow>cd
C:\Users\jon_snow
```

**`ls`** (Linux e macOS, *list*) elenca i file e le cartelle della cartella di lavoro. Con un argomento elenca un'altra cartella. Su Windows si usa **`dir`**.

```text
$ ls
Documenti
$ ls Documenti
cosedafare.txt  verbale.txt
```

```text
C:\Users\jon_snow>dir Documenti
 Directory of C:\Users\jon_snow\Documenti

10/05/2026  05:52 PM    <DIR>          .
10/05/2026  05:52 PM    <DIR>          ..
10/05/2026  05:52 PM                30 cosedafare.txt
10/05/2026  05:52 PM                 9 verbale.txt
               2 File(s)             39 bytes
               2 Dir(s)  442,681,495,552 bytes free
```

`dir` stampa anche data, ora e grandezza in byte. Le cartelle hanno la scritta `<DIR>`; ci sono anche `.` e `..`. Sopra l'elenco `dir` stampa due righe sul disco (nome e numero di serie), che qui ho tolto. Con l'opzione `/b` stampa solo i nomi.

> [!OLTRE] · i file nascosti
> Su Linux `ls` non mostra i file il cui nome comincia con un punto. `ls -a` (*all*) mostra tutto, anche `.` e `..`. `ls -l` (*long*) mostra anche grandezza, data e permessi, come `dir`.

### Muoversi: `cd`

**`cd cartella`** entra in una cartella. **`cd ..`** sale di un gradino. Funziona allo stesso modo su Linux, macOS e Windows, con le barre giuste.

```text
$ cd Documenti
$ pwd
/home/jon_snow/Documenti
$ cd ..
$ pwd
/home/jon_snow
```

`cd` non stampa niente quando va tutto bene: cambia solo il prompt. Su Linux `cd` da solo, o `cd ~`, riporta nella cartella personale. `cd /` porta alla radice.

Errore tipico: una cartella che non c'è, o scritta male.

```text
$ cd Cartellachenonce
bash: cd: Cartellachenonce: No such file or directory
```

```text
C:\Users\jon_snow\Documenti>cd Cartellachenonce
The system cannot find the path specified.
```

> [!TRAPPOLA] Maiuscole e minuscole
> Su Linux `Documenti` e `documenti` sono due nomi diversi: `cd documenti` dà errore. Windows e macOS di solito non fanno differenza. Abituati a scrivere i nomi esattamente come sono: il C distingue sempre maiuscole e minuscole.

### Creare: `mkdir`, `touch`, `copy NUL`

**`mkdir nome`** (*make directory*) crea una cartella vuota. Si scrive così su tutti e tre i sistemi.

**`touch nome`** (Linux e macOS) crea un file vuoto. Su Windows lo stesso si fa con **`copy NUL nome`**: copia «il niente» in un file nuovo. `NUL` è un file speciale di Windows, sempre vuoto.

```text
$ mkdir PROVA
$ cd PROVA
$ touch importante.txt
$ ls
importante.txt
```

```text
C:\Users\jon_snow\Documenti\PROVA>copy NUL importante.txt
        1 file(s) copied.
```

Errore tipico: la cartella esiste già.

```text
$ mkdir PROVA
mkdir: cannot create directory ‘PROVA’: File exists
```

```text
C:\Users\jon_snow\Documenti>mkdir PROVA
A subdirectory or file PROVA already exists.
```

### Copiare: `cp` e `copy`

**`cp origine destinazione`** (Linux e macOS) copia un file. Su Windows si scrive **`copy origine destinazione`**. L'originale resta dov'è.

```text
$ cp rilevante.txt copia.txt
$ ls
copia.txt  rilevante.txt
```

Origine e destinazione possono essere percorsi relativi, come qui, o assoluti:

```text
$ cp /home/jon_snow/Documenti/PROVA/rilevante.txt /home/jon_snow/Documenti/PROVA/copia2.txt
```

Se la destinazione è una cartella, la copia prende lo stesso nome dell'originale: è il caso di `copy … .` della slide 22.

Errore tipico: il file da copiare non c'è, o il nome è sbagliato.

```text
$ cp nonce.txt b.txt
cp: cannot stat 'nonce.txt': No such file or directory
```

```text
C:\Users\jon_snow\Documenti>copy nonce.txt b.txt
The system cannot find the file specified.
```

### Rinominare e spostare: `mv`, `ren`, `move`

Su Linux e macOS un solo comando fa due lavori: **`mv`** (*move*).

- `mv importante.txt rilevante.txt` cambia il nome del file;
- `mv PROVA/rilevante.txt .` sposta il file nella cartella di lavoro.

In fondo è la stessa cosa: cambi l'indirizzo del file. Su Windows ci sono due comandi: **`ren`** (*rename*) per cambiare nome, **`move`** per spostare.

```text
$ mv importante.txt rilevante.txt
$ ls
rilevante.txt
```

```text
C:\Users\jon_snow\Documenti\PROVA>ren importante.txt rilevante.txt

C:\Users\jon_snow\Documenti>move PROVA\rilevante.txt .
        1 file(s) moved.
```

> [!TRAPPOLA] Copiare o spostare sopra un file che esiste
> Su Linux `cp` e `mv` sovrascrivono senza chiedere: se `b.txt` esiste, il suo contenuto è perso. Su Windows `copy` e `move`, scritti a mano nel Prompt dei comandi, chiedono prima conferma; dentro un file di comandi no. Controlla sempre la destinazione.

### Cancellare: `rm`, `del`, `rmdir`

**`rm file`** (Linux e macOS, *remove*) cancella un file. Su Windows si usa **`del`** (*delete*). Il file **non va nel cestino**: sparisce subito.

```text
$ rm copia.txt copia2.txt
$ ls
rilevante.txt
```

**`rmdir cartella`** (*remove directory*) cancella una cartella, ma solo se è **vuota**. Si scrive così ovunque.

```text
$ rmdir PROVA
rmdir: failed to remove 'PROVA': Directory not empty
```

```text
C:\Users\jon_snow\Documenti>rmdir PROVA
The directory is not empty.
```

Prima cancelli i file dentro, poi la cartella. `rm` da solo non cancella le cartelle:

```text
$ rm PROVA
rm: cannot remove 'PROVA': Is a directory
```

> [!OLTRE] · cancellare una cartella piena
> Su Linux `rm -r PROVA` (*recursive*) cancella la cartella con tutto quello che contiene; su Windows lo fa `rmdir /s PROVA`, che chiede conferma. Usali con molta attenzione: non c'è modo di tornare indietro.

### Leggere un file: `cat` e `type`

**`cat file`** (Linux e macOS) stampa il contenuto di un file di testo. Su Windows si usa **`type`**. Sono comodi per controllare al volo un file corto, per esempio un programma C.

```text
$ cat cosedafare.txt
comprare il pane
studiare C
```

```text
C:\Users\jon_snow\Documenti>type cosedafare.txt
comprare il pane
studiare C
```

Errore tipico, il file non c'è:

```text
$ cat nonesiste.txt
cat: nonesiste.txt: No such file or directory
```

> [!TRAPPOLA] Nomi con gli spazi
> Lo spazio separa gli argomenti. Se un file si chiama `file di prova.txt`, il comando `type file di prova.txt` cerca tre file: `file`, `di` e `prova.txt`. Windows risponde tre volte `The system cannot find the file specified.` Si scrive il nome tra virgolette, `type "file di prova.txt"`, oppure si evitano gli spazi nei nomi. Per i tuoi programmi usa nomi come `somma_due_numeri.c`.

### Aprire un file con l'editor

Per scrivere un programma serve un editor di testo. Dalla riga di comando si apre così:

- Windows: `start notepad++ rilevante.txt` apre il file con Notepad++;
- macOS: `open rilevante.txt` lo apre con il programma predefinito;
- Linux: `xdg-open rilevante.txt` fa lo stesso.

### La tabella di tutti i comandi

| Che cosa fa | Linux e macOS | Windows |
|---|---|---|
| mostra la cartella di lavoro | `pwd` | `cd` |
| entra nella cartella `dir` | `cd dir` | `cd dir` |
| sale alla cartella che contiene quella di lavoro | `cd ..` | `cd ..` |
| elenca la cartella di lavoro | `ls` | `dir` |
| elenca la cartella `path` | `ls path` | `dir path` |
| crea la cartella vuota `dirA` | `mkdir dirA` | `mkdir dirA` |
| cancella la cartella `dirA`, se è vuota | `rmdir dirA` | `rmdir dirA` |
| copia `fileA` in un nuovo `fileB` | `cp fileA fileB` | `copy fileA fileB` |
| crea il file vuoto `fileA` | `touch fileA` | `copy NUL fileA` |
| cambia il nome di `fileA` in `fileB` | `mv fileA fileB` | `ren fileA fileB` |
| sposta un file in un altro posto | `mv pathToA pathToB` | `move pathToA pathToB` |
| cancella `fileA` | `rm fileA` | `del fileA` |
| stampa il contenuto di `fileA` | `cat fileA` | `type fileA` |
| apre `fileA` con un editor | `open fileA` (macOS), `xdg-open fileA` (Linux) | `start notepad++ fileA` |
| cambia disco | non serve: c'è un solo albero | `C:`, `D:`, `X:` |
| stampa il PATH | `echo $PATH` | `echo %PATH%` |

::: prova Sei nella cartella `PROVA`, che contiene solo `rilevante.txt`. Quali comandi Linux servono per tornare su e cancellare `PROVA`?
`rm rilevante.txt` per svuotarla, poi `cd ..` per uscire, poi `rmdir PROVA`. Su Windows: `del rilevante.txt`, `cd ..`, `rmdir PROVA`.
:::

::: prova Che differenza c'è tra `cp a.txt b.txt` e `mv a.txt b.txt`?
Dopo `cp` ci sono due file uguali, `a.txt` e `b.txt`. Dopo `mv` c'è solo `b.txt`: il file è lo stesso, ha cambiato nome.
:::

> [!RICORDA]
> - Linux e macOS: `pwd`, `ls`, `cd`, `mkdir`, `touch`, `cp`, `mv`, `rm`, `rmdir`, `cat`.
> - Windows: `cd`, `dir`, `mkdir`, `copy NUL`, `copy`, `ren`, `move`, `del`, `rmdir`, `type`.
> - `rm` e `del` non usano il cestino; `rmdir` cancella solo cartelle vuote. Gli errori più comuni sono nomi scritti male e spazi nei nomi.

## Il compilatore C sul tuo computer (slide 25–36)

Un programma in C, per il computer, è solo un file di testo. Il processore non lo sa eseguire: capisce soltanto il linguaggio macchina, fatto di numeri. Serve un traduttore, il **compilatore**. Il viaggio dal testo al linguaggio macchina è spiegato nella [lezione 02A](02A_da_assembly_a_c.html#h-dal-sorgente-all-eseguibile); qui vediamo come installarlo e usarlo.

### Il C in breve (slide 25–27)

La slide 25 riassume le caratteristiche del C. Il nome si pronuncia «si», all'inglese.

- **procedurale e imperativo**: scrivi le istruzioni da eseguire e il loro ordine, divise in funzioni;
- **strutturato**: usa blocchi, cicli e scelte `if`/`else` invece dei salti dell'assembly;
- permette la **ricorsione**: una funzione può chiamare sé stessa (la vedrai verso la fine del corso);
- **tipizzato**: ogni variabile, cioè ogni casella della memoria con un nome, ha un tipo, per esempio «numero intero». Le variabili le vedi nell'ultima sezione;
- **vicino all'hardware**: lascia lavorare direttamente sulla memoria.

Quattro di queste caratteristiche sono già nella [lezione 02A](02A_da_assembly_a_c.html#h-le-caratteristiche-del-c). Il C è ancora molto usato: nell'indice TIOBE di settembre 2026 è il secondo linguaggio più popolare, dopo Python. Nel sondaggio Stack Overflow 2025 lo usa il 22 % di chi ha risposto (slide 27).

Per cercare come funziona una funzione della libreria, la slide 26 consiglia: [cppreference](https://en.cppreference.com/w/c/header), [Wikibooks](https://en.wikibooks.org/wiki/C_Programming/Standard_library_reference), [Wikipedia](https://en.wikipedia.org/wiki/C_standard_library) e [cplusplus.com](https://cplusplus.com/reference/clibrary/). Sono in inglese.

### Quale compilatore (slide 28)

Di compilatori C ce ne sono molti. Alcuni esistono da decenni e sono tra i programmi più provati al mondo: quasi tutto il software di sistema è scritto in C. Nel corso si usa **gcc**, ma quello che vedrai vale per quasi tutti i compilatori.

### Installarlo (slide 29–33)

**Su Linux** gcc si installa con il gestore dei pacchetti, il programma che scarica e installa il software. Il comando dipende dalla distribuzione:

```text
sudo apt install build-essential      (Debian, Ubuntu)
sudo dnf install gcc make             (Fedora)
```

`sudo` vuol dire «come amministratore»: ti chiede la tua password.

**Su macOS** si installano gli strumenti da riga di comando di Xcode (*Xcode command line tools*), dall'App Store o dal sito di Apple. Un modo comodo è scrivere nel terminale `xcode-select --install`. Su macOS il comando `gcc` in realtà avvia un altro compilatore, clang, che accetta le stesse opzioni.

**Su Windows** si usa **MinGW-w64**, una versione di gcc fatta per Windows. I passi delle slide:

1. scarica l'archivio dalla pagina [github.com/niXman/mingw-builds-binaries/releases](https://github.com/niXman/mingw-builds-binaries/releases). La slide 30 dà il link diretto alla versione 15.2.0, un file `.7z` con nel nome `x86_64`, `win32`, `seh` e `msvcrt`;
2. l'archivio è un file compresso: estrailo in una cartella tua, per esempio `C:\Users\<Nome Utente>\Documents\mingw64`. Per aprire i `.7z` serve un programma come 7-Zip;
3. aggiungi al PATH la cartella `bin` che sta dentro: `C:\Users\<Nome Utente>\Documents\mingw64\bin`. È lì che si trova `gcc.exe`.

Il passo 3, nelle slide 31–33:

1. apri le **Impostazioni di sistema**;
2. vai su **Sistema → Impostazioni avanzate di sistema** e clicca su **Variabili d'ambiente**. Si fa prima come nella figura della slide 31: scrivi «variabili» nella ricerca del menu Start e apri la voce per modificare le variabili d'ambiente del tuo account;
3. nella sezione **Variabili utente** seleziona **Path** e clicca su **Modifica**;
4. clicca su **Nuovo** e scrivi il percorso della cartella `bin` di MinGW;
5. conferma con **OK** in tutte le finestre.

Perché proprio il PATH? Per la sezione «La riga di comando»: quando scrivi `gcc`, il terminale lo cerca solo nelle cartelle del PATH. Se la cartella `bin` non c'è, ricevi «not recognized as an internal or external command».

> [!TRAPPOLA] Il terminale vecchio non vede il PATH nuovo
> Un terminale legge il PATH quando si apre. Dopo aver cambiato il PATH, chiudi il Prompt dei comandi e aprine uno nuovo.

### Controllare che funzioni (slide 34)

Apri un Prompt dei comandi nuovo e scrivi `where gcc`. Il comando `where` cerca un programma nelle cartelle del PATH e stampa dove l'ha trovato. Se va bene, esce il percorso di `gcc.exe`:

```text
C:\Users\jon_snow>where gcc
C:\MinGW\bin\gcc.exe
```

Il percorso dipende da dove hai estratto l'archivio. Se va male, esce un messaggio. È questo nella slide, su un Windows in italiano:

```text
C:\Users\jon_snow>where gcc
INFORMAZIONI: Impossibile trovare i file corrispondenti ai criteri di ricerca indicati.
```

In inglese il messaggio è `INFO: Could not find files for the given pattern(s).` Allora ricontrolla il passo del PATH.

L'altro controllo è `gcc --version`, con **due trattini** attaccati. Stampa la versione. Sul mio PC:

```text
C:\Users\jon_snow>gcc --version
gcc (MinGW-W64 x86_64-ucrt-posix-seh, built by Brecht Sanders, r4) 16.1.0
Copyright (C) 2026 Free Software Foundation, Inc.
```

La prima riga cambia con la versione installata. Su Linux e macOS il controllo è lo stesso, `gcc --version`; al posto di `where` si usa `which gcc`.

> [!NOTA] Un refuso nella slide 34
> Nella slide 34 il comando è scritto `gcc –version`, con una lineetta sola. Il comando giusto ha due trattini normali: `gcc --version`. Se copi la lineetta lunga da un PDF, gcc non la riconosce.

### Con che cosa scrivere il codice (slide 35–36)

Il codice si scrive con un **editor di testo semplice**, ma pensato per programmare: colora le parole, numera le righe, non cambia i caratteri. Il Blocco note di Windows non va bene. Su Windows le slide consigliano **Notepad++**; altri editor sono gedit, Sublime Text, Atom.

In laboratorio **non** si usa un ambiente di sviluppo integrato (IDE). Se vuoi usarne uno a casa, spegni gli strumenti che completano il codice da soli, come Copilot: scriverebbero gli esercizi al posto tuo. L'obiettivo è imparare. E all'esame avrai solo un editor semplice in una pagina web.

I file con il codice C hanno l'**estensione** `.c`: sono i file sorgente, cioè le unità di compilazione. I file di intestazione hanno l'estensione `.h`. Dalla [lezione 02A](02A_da_assembly_a_c.html#h-la-radiografia-del-primo-programma) conosci già `stdio.h`.

> [!TRAPPOLA] Il file che si chiama `buongiorno.c.txt`
> Windows nasconde le estensioni dei file «conosciuti». Così un file salvato come testo può chiamarsi davvero `buongiorno.c.txt`, mentre tu vedi `buongiorno.c`, e gcc non lo trova. Nelle opzioni di Esplora file togli la spunta da «Nascondi le estensioni per i tipi di file conosciuti», come dice la slide 36. Con `dir` vedi sempre il nome vero.

::: prova Hai installato MinGW, ma `gcc --version` risponde «'gcc' is not recognized…». Quali sono le due cause più probabili?
La cartella `bin` di MinGW non è nel PATH (o hai scritto il percorso sbagliato), oppure stai usando un terminale aperto prima di cambiare il PATH. Chiudilo, aprine uno nuovo e prova con `where gcc`.
:::

> [!RICORDA]
> - Linux: `sudo apt install build-essential`; macOS: strumenti da riga di comando di Xcode; Windows: MinGW-w64, con la cartella `bin` nel PATH.
> - Controllo: `where gcc` (Windows) o `which gcc`, e `gcc --version` con due trattini.
> - Editor semplice (Notepad++), niente IDE né completamento automatico, estensioni dei file visibili.

## Da buongiorno.c al programma che gira (slide 37–46)

Il primo programma del laboratorio è quasi lo stesso della [lezione 02A](02A_da_assembly_a_c.html#h-la-radiografia-del-primo-programma): stampa un saluto. Lì trovi la spiegazione riga per riga. Qui lo trasformiamo davvero in un programma.

### Scrivere il file (slide 37)

Apri l'editor, scrivi il testo e salvalo con il nome `buongiorno.c`:

```c
#include <stdio.h>

int main(void) {
    printf("Buongiorno!\n");
    return 0;
}
```

In breve: `#include <stdio.h>` porta dentro le dichiarazioni di `printf`; `main` è il punto da cui parte il programma; `printf` stampa il testo tra virgolette, e `\n` va a capo; `return 0;` dice al sistema operativo «tutto bene».

### I quattro stadi, in breve (slide 38–39)

Per diventare un programma, il file passa da quattro programmi uno dopo l'altro: il **preprocessore** (`cpp`), il **compilatore** (`cc`), l'**assemblatore** (`as`) e il **collegatore**, in inglese **linker** (`ld`). Li trovi spiegati nella [lezione 02A](02A_da_assembly_a_c.html#h-dal-sorgente-all-eseguibile). Il comando `gcc` li chiama tutti al posto tuo.

Nel percorso si incontrano tre tipi di file:

| Tipo | Estensione | Che cosa contiene |
|---|---|---|
| sorgente | `.c`, `.h` | il programma in C, come testo |
| oggetto | `.o` (Linux, macOS), `.obj` (Windows) | un pezzo di programma in linguaggio macchina, non ancora eseguibile |
| eseguibile | nessuna (Linux, macOS), `.exe` (Windows) | il programma finito, che si può avviare |

La figura della slide 39 mostra il caso con tanti sorgenti: ogni file `.c` diventa un file oggetto, poi il linker li unisce tutti in un solo eseguibile.

### Compilare in due passi: `-c` e il collegamento (slide 40–41)

Primo passo: dal sorgente al file oggetto. L'opzione **`-c`** dice a gcc «fermati prima del linker». L'opzione **`-o`** (*output*) sceglie il nome del file prodotto.

```text
$ gcc -c buongiorno.c -o buongiorno.o
```

Su Windows, secondo la slide 40, il file oggetto si chiama `buongiorno.obj`. Il nome lo scegli tu con `-o`: gcc di MinGW scrive comunque lo stesso tipo di file.

Secondo passo: dal file oggetto all'eseguibile. È lo stesso comando `gcc`, **senza** `-c`: così gcc chiama il linker.

```text
$ gcc buongiorno.o -o buongiorno
```

Su Windows: `gcc buongiorno.obj -o buongiorno.exe`. Con più file oggetto si elencano tutti: `gcc oggetto1.o oggetto2.o -o eseguibile`.

### Tutto in un passo (slide 42)

Con un solo file sorgente si fanno i due passi insieme:

```text
$ gcc buongiorno.c -o buongiorno
```

Su Windows: `gcc buongiorno.c -o buongiorno.exe`. È il modo che userai quasi sempre.

### Gli avvisi: `-Wall -Werror` (slide 43–44)

A volte il compilatore trova un pezzo di codice corretto per le regole del C, ma sospetto: per esempio una variabile che non usi mai. Non si ferma, ma stampa un **avviso** (*warning*).

- **`-Wall`** accende gli avvisi più utili (*all warnings*);
- **`-Werror`** trasforma ogni avviso in errore: con un solo avviso, il programma non viene prodotto.

```text
$ gcc -Wall -Werror buongiorno.c -o buongiorno
```

Su Windows: `gcc -Wall -Werror buongiorno.c -o buongiorno.exe`. Se va tutto bene gcc non stampa niente e trovi il file `buongiorno` (o `buongiorno.exe`) nella cartella. Il silenzio è una buona notizia.

Ecco che cosa cambia. Questo programma dichiara una variabile `b` e non la usa mai:

```c
#include <stdio.h>

int main(void) {
    int a = 5;
    int b = 7;
    printf("a vale %d\n", a);
    return 0;
}
```

Senza opzioni gcc lo compila in silenzio. Con `-Wall -Werror` si ferma:

```text
err_inutile.c: In function 'main':
err_inutile.c:5:9: error: unused variable 'b' [-Werror=unused-variable]
    5 |     int b = 7;
      |         ^
cc1.exe: all warnings being treated as errors
```

Si legge così: nel file `err_inutile.c`, riga 5, colonna 9, la variabile `b` non è usata. Tra parentesi quadre c'è il nome dell'avviso; `-Werror=` vuol dire che `-Werror` l'ha fatto diventare un errore. Per leggere bene questi messaggi guarda anche la [lezione 02A](02A_da_assembly_a_c.html#h-errori-di-compilazione-a-runtime-e-logici).

> [!ESAME] Le opzioni dell'esame
> La slide 43 lo dice chiaro: in sede d'esame si usa `-Wall -Werror`. Un programma con un solo avviso non compila e non passa nessun test. Compila sempre così, anche a casa.

### Eseguire il programma (slide 45)

Il programma è un file nella cartella di lavoro. Per avviarlo si scrive il suo nome. Su Windows basta il nome:

```text
C:\Users\jon_snow>buongiorno
Buongiorno!
```

Su Linux e macOS serve `./` davanti, cioè «il file che sta qui»:

```text
$ ./buongiorno
Buongiorno!
```

Perché il `./`? Per la sezione «La riga di comando»: un nome senza percorso viene cercato solo nelle cartelle del PATH, e la cartella di lavoro su Linux non c'è. Scrivere `./` dà un percorso relativo, e allora la shell non cerca più.

```text
$ buongiorno
buongiorno: command not found
```

> [!OLTRE] · PowerShell
> Su Windows c'è anche un altro terminale, PowerShell, quello che si apre di solito nelle versioni recenti. Lì il programma si avvia come su Linux, `.\buongiorno`. Con il nome soltanto risponde `The term 'buongiorno' is not recognized as the name of a cmdlet…`.

### Guardare il linguaggio macchina: il disassemblatore (slide 46)

Un **disassemblatore** fa il viaggio al contrario: prende il programma compilato e mostra le sue istruzioni macchina scritte in assembly. Non torna al C: quello è perso.

| Sistema | Comando |
|---|---|
| Linux | `objdump -d eseguibile` |
| macOS | `otool -tv eseguibile` |
| Windows | `objdump -d eseguibile.exe` |

Sul mio PC `objdump -d buongiorno.exe` stampa 2808 righe: c'è anche tutto il codice che il linker ha aggiunto per avviare il programma. La funzione `main` comincia così:

```text
0000000140001760 <main>:
   140001760:	55                   	push   %rbp
   140001761:	48 89 e5             	mov    %rsp,%rbp
   140001764:	48 83 ec 20          	sub    $0x20,%rsp
   140001768:	e8 da 00 00 00       	call   140001847 <__main>
   14000176d:	48 8d 05 dc 38 00 00 	lea    0x38dc(%rip),%rax
   140001774:	48 89 c1             	mov    %rax,%rcx
   140001777:	e8 ec 1a 00 00       	call   140003268 <puts>
   14000177c:	b8 00 00 00 00       	mov    $0x0,%eax
```

A sinistra l'indirizzo in memoria, poi i byte dell'istruzione in esadecimale, poi l'istruzione in assembly. È il linguaggio macchina della [lezione 02A](02A_da_assembly_a_c.html#h-linguaggio-macchina-e-assembly), per un processore vero. Curiosità: gcc ha sostituito `printf` con `puts`, una funzione più veloce che stampa una riga e va a capo. Può farlo perché la stringa, cioè il testo tra virgolette, finiva con `\n` e non aveva niente da riempire.

::: prova Che differenza c'è tra `gcc -c prova.c -o prova.o` e `gcc prova.c -o prova`?
Il primo si ferma al file oggetto `prova.o`, che non si può eseguire. Il secondo fa anche il collegamento e produce il programma eseguibile `prova`.
:::

::: prova Hai compilato `ciao.c` su Linux con `gcc -Wall -Werror ciao.c -o ciao`. Come lo avvii?
Con `./ciao`. Scrivendo solo `ciao` la shell lo cerca nel PATH e risponde `ciao: command not found`.
:::

> [!RICORDA]
> - Il comando di ogni giorno: `gcc -Wall -Werror sorgente.c -o eseguibile` (su Windows `eseguibile.exe`). Silenzio vuol dire «compilato».
> - `-c` si ferma al file oggetto; `-o` sceglie il nome; `-Wall -Werror` ferma tutto anche per un solo avviso, come all'esame.
> - Si esegue con `./nome` su Linux e macOS, con `nome` nel Prompt dei comandi di Windows.

## Leggere un numero con scanf (slide 48–49)

Finora i programmi parlano soltanto: stampano sempre la stessa frase. Un programma utile deve anche ascoltare. Per esempio: «dimmi un numero e ti scrivo la sua tabellina». Per questo serve leggere dalla tastiera.

### Il programma della slide 48

```c
#include <stdio.h>

int main(void) {
    int number;
    printf("Scrivi un numero intero: ");

    // leggi il numero inserito
    scanf("%d", &number);

    // mostra il numero a video
    printf("Hai scritto: %d\n", number);
    return 0;
}
```

Lo compili, lo avvii e scrivi 7, poi premi Invio. Sul terminale vedi:

```text
$ ./scrivi_intero
Scrivi un numero intero: 7
Hai scritto: 7
```

Il primo 7 l'hai scritto tu, il secondo lo stampa il programma. Vediamo le righe nuove, una alla volta.

**`int number;`** prepara una **variabile**: una casella della memoria con un nome, qui `number`, in cui si può mettere un numero. `int` dice il tipo: un numero intero, senza virgola. Le variabili sono l'argomento della teoria di questa settimana: per ora basta l'idea della casella con un nome.

**`printf("Scrivi un numero intero: ");`** stampa la domanda. Nota che non c'è `\n`: il cursore resta sulla stessa riga, e il numero che scrivi compare subito dopo i due punti.

**`scanf("%d", &number);`** aspetta che tu scriva qualcosa e prema Invio. Poi legge un numero intero e lo mette nella casella `number`. Due pezzi nuovi:

- `"%d"` dice che cosa leggere: `%d` vuol dire «un numero intero scritto in base 10» (la `d` sta per *decimale*);
- `&number` dice **dove** mettere il numero. Il segno `&` (si legge «e commerciale») davanti al nome vuol dire «l'indirizzo della casella `number`». Ricordi la memoria della [lezione 01B](01B_architettura.html), fatta di celle numerate? `scanf` ha bisogno del numero della cella, non di quello che c'è dentro.

**`printf("Hai scritto: %d\n", number);`** stampa il testo, ma al posto di `%d` mette il valore di `number`. Il `%d` è un **segnaposto**: un buco nel testo, riempito dal valore scritto dopo la virgola.

> [!IDEA]
> `printf` e `scanf` usano lo stesso codice `%d` per «numero intero». `printf` riceve il **valore** da stampare, `number`. `scanf` riceve l'**indirizzo** dove scrivere, `&number`.

### Provare senza scrivere a mano: la pipe

Per provare un programma che legge dalla tastiera puoi scrivere il numero a mano ogni volta. Oppure puoi farglielo arrivare da un altro comando, con la **barra verticale** `|`, che si chiama **pipe** (tubo). Il comando a sinistra stampa, e quello che stampa entra nel programma a destra come se l'avessi scritto tu.

```text
$ echo 7 | ./scrivi_intero
Scrivi un numero intero: Hai scritto: 7
```

`echo 7` stampa 7, la pipe lo passa a `scrivi_intero`, che lo legge con `scanf`. Questa volta il 7 non si vede dopo la domanda: nessuno l'ha scritto sul terminale. Nel Prompt dei comandi di Windows si scrive `echo 7| scrivi_intero`, con lo stesso risultato. È più o meno quello che fa CodeRunner all'esame: dà al tuo programma dei dati già pronti e confronta le stampe.

### La tabellina: slide 49

```c
#include <stdio.h>
int main(void) {
    int n;
    printf("Scrivi un numero intero: ");
    scanf("%d", &n);

    // stampa i primi 10 multipli di n
    for (int i = 1; i <= 10; ++i) {
        printf("%d * %d = %d \n", n, i, n * i);
    }
    return 0;
}
```

Le prime righe le conosci: una casella `n`, la domanda, la lettura. Poi c'è una cosa nuova, `for`: è un **ciclo**, cioè un blocco di istruzioni ripetuto più volte. Lo vedrai a teoria tra un paio di settimane; per leggerlo oggi basta questo:

- `int i = 1` crea un contatore `i` che parte da 1;
- `i <= 10` è la condizione: si ripete finché `i` è al massimo 10;
- `++i` aumenta `i` di 1 dopo ogni giro;
- il blocco tra graffe viene eseguito una volta per ogni valore di `i`: 1, 2, 3, fino a 10.

È la stessa idea del contatore della [lezione 01A](01A_primo_algoritmo.html), con il controllo prima di ogni giro.

Dentro il ciclo, `printf` ha **tre** segnaposto e tre valori dopo la virgola, nello stesso ordine: il primo `%d` diventa `n`, il secondo `i`, il terzo `n * i`, cioè `n` per `i`. L'asterisco `*` in C è il segno della moltiplicazione.

Con 7:

```text
$ echo 7 | ./tabella_moltiplicazioni
Scrivi un numero intero: 7 * 1 = 7 
7 * 2 = 14 
7 * 3 = 21 
7 * 4 = 28 
7 * 5 = 35 
7 * 6 = 42 
7 * 7 = 49 
7 * 8 = 56 
7 * 9 = 63 
7 * 10 = 70 
```

La prima riga della tabellina sta dopo la domanda perché, con la pipe, il 7 e l'Invio non si vedono. Scrivendo il numero a mano, `7 * 1 = 7` va sulla riga dopo. Nota anche lo spazio prima del `\n` nella stringa: ogni riga finisce con uno spazio invisibile. A CodeRunner uno spazio in più o in meno basta per non passare un test.

### Gli errori tipici con scanf

**Dimenticare la `&`.** È l'errore più comune. Senza `&`, `scanf` riceve il contenuto della casella invece del suo indirizzo. Con `-Wall -Werror` gcc 16.1 se ne accorge:

```text
err_e.c:6:13: error: format '%d' expects argument of type 'int *', but argument 2 has type 'int' [-Werror=format=]
    6 |     scanf("%d", n);
      |            ~^   ~
      |             |   |
      |             |   int
      |             int *
err_e.c:6:5: error: 'n' is used uninitialized [-Werror=uninitialized]
```

Si legge: il `%d` vuole un `int *` (l'indirizzo di un intero, il tipo dei puntatori che vedrai a teoria), ma riceve un `int`. Il secondo errore dice che `n` viene usata quando dentro non c'è ancora niente. **Senza `-Wall`, lo stesso programma compila in silenzio**, e quando lo esegui `scanf` scrive in un punto a caso della memoria: di solito il programma si blocca. È il motivo migliore per usare sempre `-Wall -Werror`.

**Un `%d` senza il suo valore.** Ogni segnaposto vuole un valore dopo la virgola:

```text
err_formato.c:6:19: error: format '%d' expects a matching 'int' argument [-Werror=format=]
    6 |     printf("%d e %d\n", x);
      |                  ~^
```

**Scrivere lettere invece di un numero.** Se al programma arriva `ciao`, `scanf` non trova un numero e non scrive niente nella casella. La casella contiene quello che c'era prima in memoria: un numero a caso. Con `ciao`, a me ha stampato `Hai scritto: 32758`. Per ora i programmi del corso si provano solo con numeri.

> [!OLTRE] · come sapere se scanf ha letto
> `scanf` restituisce quanti valori è riuscito a leggere: 1 se ha letto il numero, 0 se ha trovato lettere. Si può controllare con un `if`, che arriverà a teoria tra qualche settimana.

::: prova Che cosa stampa `printf("%d + %d = %d\n", 2, 3, 2 + 3);`?
Ogni `%d` viene sostituito, in ordine, da un valore: `2 + 3 = 5`, poi si va a capo.
:::

::: prova Perché in `scanf("%d", &n);` serve la `&`, mentre in `printf("%d", n);` no?
`scanf` deve scrivere nella casella, quindi le serve il suo indirizzo, `&n`. `printf` deve solo leggere il valore, quindi le basta `n`.
:::

> [!RICORDA]
> - `scanf("%d", &n);` legge un intero e lo mette nella variabile `n`: la `&` dà l'indirizzo della casella.
> - In `printf` ogni `%d` è un segnaposto, riempito in ordine dai valori dopo la virgola.
> - Per provare un programma che legge: `echo 7 | ./programma`. Senza `&` gcc con `-Wall -Werror` si ferma; senza `-Wall` no.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| `>` alla fine del prompt | «maggiore» | Windows aspetta un comando; prima c'è la cartella di lavoro | `C:\Users\jon_snow>` |
| `$` alla fine del prompt | «dollaro» | la shell di Linux aspetta un comando | `jon_snow@linux:~$` |
| `~` | «tilde» | la tua cartella personale, su Linux e macOS | `~` è `/home/jon_snow` |
| `/` | «barra» | separatore nei percorsi di Linux e macOS; da sola è la radice | `/home/jon_snow/Documenti` |
| `\` | «barra rovesciata», *backslash* | separatore nei percorsi di Windows | `C:\Users\jon_snow` |
| `C:` | «ci due punti» | un disco di Windows | `C:\Users` |
| `.` | «punto» | la cartella di lavoro | `copy pippo.jpg .` |
| `..` | «punto punto» | la cartella che contiene quella di lavoro | `cd ..` |
| `./` | «punto barra» | «il file che sta qui»: serve per avviare un programma su Linux e macOS | `./buongiorno` |
| `-a`, `/t` | «trattino a», «barra ti» | un'opzione del comando: con il trattino su Linux, con la barra su Windows | `ls -a`, `date /t` |
| `$PATH`, `%PATH%` | «dollaro path», «percento path percento» | il valore della variabile PATH | `echo $PATH` |
| `-Wall -Werror` | «meno doppiavù all, meno doppiavù error» | tutti gli avvisi, e ogni avviso diventa un errore | `gcc -Wall -Werror a.c -o a` |
| `-c`, `-o` | «meno ci», «meno o» | fermati al file oggetto; dai questo nome al risultato | `gcc -c a.c -o a.o` |
| `%d` | «percento di» | un numero intero in base 10, in `printf` e `scanf` | `printf("%d", 7)` |
| `&n` | «e commerciale enne» | l'indirizzo della variabile `n` | `scanf("%d", &n)` |
| `\n` | «barra rovesciata enne» | vai a capo | `printf("ciao\n")` |

## Verso l'esame

L'esame di Programmazione I si fa al PC, nei laboratori Turing, Dijkstra e Von Neumann, ed è unico per i tre canali. Appelli 2026/27: **lunedì 25/01/2027** e **giovedì 11/02/2027**, alle 9:00. Scrivi codice C in una pagina web con un editor semplice; CodeRunner lo compila con `-Wall -Werror`, lo esegue con vari dati e confronta le stampe. Secondo il riepilogo d'esame 2025/26 del canale C il codice viene anche letto: passare i test serve, ma non basta.

**Che cosa serve di questo laboratorio**

1. **Compilare con `-Wall -Werror` e leggere i messaggi di gcc.** All'esame un programma che non compila non passa nessun test. Riconosci al volo `expected ';'`, `unused variable`, `undeclared`, e gli errori di formato di `printf` e `scanf`.
2. **Stampe esatte.** CodeRunner confronta il testo carattere per carattere: spazi, a capo, maiuscole. Copia il formato delle `printf` dal testo dell'esercizio.
3. **Leggere con `scanf`**, con la `&`.
4. **Scrivere senza aiuti.** Niente IDE, niente completamento automatico, niente Copilot: allenati con Notepad++ o un editor simile.
5. **Il terminale** all'esame quasi non serve, perché CodeRunner compila per te. Serve per tutto il resto del corso: laboratori, esercizi a casa, e i corsi degli anni dopo.

> [!ESAME] Le regole degli esercizi d'esame
> Dal riepilogo d'esame 2025/26 e dai laboratori, le regole da rispettare negli esercizi di programmazione sono:
> - compilazione con `-Wall -Werror`;
> - nelle funzioni iterative una sola `return`;
> - vietati `break`, `switch`/`case` e `static`;
> - nelle funzioni ricorsive vietati i cicli (`for` e `while`).
>
> Funzioni, `return`, cicli e ricorsione arriveranno nelle prossime settimane: per ora ricorda solo che queste regole esistono, e non prendere l'abitudine di usare `break` e `switch`.

**Errori da evitare in laboratorio**

- Uscire senza salvare i file: vengono cancellati.
- Salvare `buongiorno.c.txt` invece di `buongiorno.c`.
- Compilare senza `-Wall -Werror`, e scoprire gli errori solo all'esame.
- Dimenticare la `&` in `scanf`.
- Avviare il programma su Linux senza `./`.
- Mettere spazi nei nomi dei file.

## Quiz

```quiz
D: Sei su Linux nella cartella `/home/jon_snow/Documenti`. Quale comando stampa il nome della cartella di lavoro?
+ `pwd`
- `cd ..`
- `ls`
- `dir`
- `echo $PATH`
= La domanda chiede di stampare dove ti trovi. Su Linux e macOS lo fa `pwd`, *print working directory*. `cd ..` non stampa niente: ti porta nella cartella sopra. `ls` elenca i file contenuti, non il nome della cartella. `dir` è il comando di Windows per elencare i file. `echo $PATH` stampa le cartelle in cui si cercano i programmi, che è un'altra cosa.

D: La cartella di lavoro è `C:\Users\jon_snow`. Quale comando cancella lo stesso file di `del C:\Users\jon_snow\Documenti\cosedafare.txt`?
- `del \Documenti\cosedafare.txt`
+ `del Documenti\cosedafare.txt`
- `del ..\Documenti\cosedafare.txt`
- `del cosedafare.txt`
- `del Users\jon_snow\Documenti\cosedafare.txt`
= Un percorso relativo parte dalla cartella di lavoro: si toglie la parte iniziale uguale, C:\Users\jon_snow, e resta Documenti\cosedafare.txt. Con la barra rovesciata davanti il percorso parte dalla radice del disco e cerca C:\Documenti. Con `..` si sale prima in C:\Users. `del cosedafare.txt` cerca il file in C:\Users\jon_snow, dove non c'è. L'ultimo cerca una cartella Users dentro jon_snow.

D: Sei in `C:\Users\jon_snow\Documenti`. In quale cartella arriva il percorso `..\..`?
- `C:\Users\jon_snow\Documenti`
- `C:\Users\jon_snow`
+ `C:\Users`
- `C:\`
- `C:\Users\jon_snow\Documenti\..\..`
= Ogni `..` sale di un gradino nell'albero. Il primo porta da Documenti a jon_snow, il secondo da jon_snow a Users. Con un solo `..` saresti in jon_snow; per arrivare alla radice C:\ ne servono tre. L'ultima risposta è il percorso scritto per intero, non la cartella in cui arriva.

D: Su Linux scrivi `rmdir PROVA`, e `PROVA` contiene un file. Che cosa succede?
- PROVA viene cancellata con il file dentro.
- PROVA va nel cestino.
+ Il comando si rifiuta: rmdir cancella solo cartelle vuote.
- Viene cancellato il file e PROVA resta.
- La shell risponde command not found.
= `rmdir` cancella una cartella solo se è vuota. Qui risponde `rmdir: failed to remove 'PROVA': Directory not empty` e non tocca niente. Per cancellare una cartella piena su Linux serve `rm -r`. Il terminale non usa il cestino. `command not found` esce solo se il nome del comando è sbagliato, e `rmdir` esiste.

D: Su Windows hai estratto MinGW e aggiunto al PATH la cartella bin. In un Prompt dei comandi aperto prima, `gcc --version` risponde `'gcc' is not recognized`. Qual è la cosa più probabile?
- Il codice C ha un errore di sintassi.
- Bisogna scrivere gcc –version con una lineetta sola.
+ Il terminale è stato aperto prima della modifica e non vede il PATH nuovo.
- gcc funziona solo su Linux.
- Manca l'opzione -Wall.
= Ogni terminale legge il PATH quando si apre: quello aperto prima non sa della cartella nuova. Si chiude e se ne apre un altro. Qui non c'è nessun programma C, quindi niente errori di sintassi. La lineetta sola è un refuso della slide 34: il comando giusto ha due trattini. gcc esiste anche per Windows, è proprio MinGW. `-Wall` riguarda la compilazione, non la ricerca del programma.

D: Che cosa produce `gcc -c somma.c -o somma.o`?
- Un programma eseguibile di nome somma.o.
+ Un file oggetto in linguaggio macchina, che da solo non si può eseguire.
- Un file di testo con il codice assembly.
- Un nuovo file sorgente con gli #include già espansi.
- Niente: -c serve solo a controllare la sintassi.
= L'opzione `-c` fa fare a gcc preprocessore, compilatore e assemblatore, e lo ferma prima del linker. Il risultato è un file oggetto: linguaggio macchina, ma non ancora un programma completo. Per l'eseguibile serve il passo di collegamento, `gcc somma.o -o somma`. Il file con l'assembly si chiede con un'altra opzione, `-S`. Il sorgente con gli `#include` espansi lo dà solo il preprocessore, con `-E`.

D: Un programma dichiara `int b = 7;` e non usa mai `b`. Compilato con `gcc -Wall -Werror`, che cosa succede?
- Compila e stampa un avviso.
- Compila in silenzio.
+ Non compila: unused variable 'b', trattato come errore.
- Compila, ma si blocca quando lo esegui.
- Compila e b viene tolta da sola.
= Una variabile mai usata non viola le regole del C, quindi senza opzioni gcc compila. `-Wall` accende l'avviso `unused variable` e `-Werror` lo trasforma in errore: il programma non viene prodotto. «Compila con un avviso» succede con `-Wall` senza `-Werror`. Il programma non arriva nemmeno a essere eseguito.

D: Su Linux il programma `ciao` è nella cartella di lavoro. Come lo avvii?
- `ciao`
- `run ciao`
+ `./ciao`
- `.\ciao.exe`
- `gcc ciao`
= Un nome senza percorso viene cercato nelle cartelle del PATH, e la cartella di lavoro su Linux non c'è: `ciao` da solo dà `command not found`. `./ciao` è un percorso relativo, «il file ciao che sta qui». `run` non è un comando. La barra rovesciata e `.exe` sono di Windows. `gcc ciao` proverebbe a compilare un file di nome ciao.

D: Che cosa stampa `echo 7 | ./scrivi_intero`, con il programma della slide 48?
- `Scrivi un numero intero: 7`, poi a capo `Hai scritto: 7`
+ `Scrivi un numero intero: Hai scritto: 7`
- `Hai scritto: 7`
- `7`
- Il programma resta fermo ad aspettare il numero.
= Il programma stampa la domanda senza andare a capo. Il 7 arriva dalla pipe, non dalla tastiera, quindi non viene scritto sul terminale e `Hai scritto: 7` segue la domanda sulla stessa riga. La prima risposta è quello che vedi scrivendo 7 a mano. La domanda viene stampata comunque, prima della lettura. Il programma non aspetta, perché il numero è già arrivato.

D: Quale riga legge correttamente un intero nella variabile `n`?
- `scanf("%d", n);`
+ `scanf("%d", &n);`
- `scanf(&n);`
- `printf("%d", &n);`
- `scanf("n");`
= `scanf` vuole il formato, `"%d"`, e l'indirizzo della casella in cui scrivere, `&n`. Senza `&` gcc con `-Wall -Werror` dà `format '%d' expects argument of type 'int *'`. Senza formato `scanf` non sa che cosa leggere. `printf` stampa, non legge. `"n"` è solo un testo.
```

## Esercizi

::: esercizio base Slide 23: i comandi in fila, su Windows
Con la riga di comando di Windows: (1) vai in `C:\Users\nome_utente\Documents`; (2) crea la cartella `PROVA` e dentro un file vuoto `importante.txt`; (3) rinominalo in `rilevante.txt`; (4) fanne una copia, una volta con il percorso assoluto e una con quello relativo; (5) cancella la copia; (6) torna nella cartella che contiene `PROVA`; (7) apri `rilevante.txt` con Notepad++; (8) passa a un altro disco, se c'è; (9) rientra in `PROVA`.
::: soluzione
Ho usato `jon_snow` come nome utente: al suo posto metti il tuo. Le risposte sono quelle vere del Prompt dei comandi.

1. Vai nella cartella Documents:
   ```text
   C:\>cd C:\Users\jon_snow\Documents
   ```
2. Crea la cartella, entraci e crea il file vuoto:
   ```text
   C:\Users\jon_snow\Documents>mkdir PROVA
   C:\Users\jon_snow\Documents>cd PROVA
   C:\Users\jon_snow\Documents\PROVA>copy NUL importante.txt
           1 file(s) copied.
   ```
3. Cambia il nome:
   ```text
   C:\Users\jon_snow\Documents\PROVA>ren importante.txt rilevante.txt
   ```
4. Copia con il percorso assoluto, poi con quello relativo:
   ```text
   C:\Users\jon_snow\Documents\PROVA>copy C:\Users\jon_snow\Documents\PROVA\rilevante.txt C:\Users\jon_snow\Documents\PROVA\copia.txt
           1 file(s) copied.
   C:\Users\jon_snow\Documents\PROVA>copy rilevante.txt copia2.txt
           1 file(s) copied.
   ```
5. Cancella le copie e controlla:
   ```text
   C:\Users\jon_snow\Documents\PROVA>del copia.txt
   C:\Users\jon_snow\Documents\PROVA>del copia2.txt
   C:\Users\jon_snow\Documents\PROVA>dir /b
   rilevante.txt
   ```
6. Sali di un gradino:
   ```text
   C:\Users\jon_snow\Documents\PROVA>cd ..
   C:\Users\jon_snow\Documents>
   ```
7. Apri il file con Notepad++, usando un percorso relativo che passa da `PROVA`:
   ```text
   C:\Users\jon_snow\Documents>start notepad++ PROVA\rilevante.txt
   ```
8. Se c'è un disco `Z:`, ci passi scrivendo `Z:`; per tornare scrivi `C:`. Al laboratorio Turing c'è solo `C:`.
9. Rientra in `PROVA`:
   ```text
   C:\Users\jon_snow\Documents>cd PROVA
   C:\Users\jon_snow\Documents\PROVA>
   ```

Controllo: alla fine `dir /b` dentro `PROVA` deve mostrare solo `rilevante.txt`.
:::

::: esercizio base Slide 23: gli stessi comandi su Linux o macOS
Rifai l'esercizio precedente con la shell di Linux o macOS, nella cartella `Documenti` della tua cartella personale (salta il punto 8, che vale solo per Windows).
::: soluzione
Le risposte sono quelle vere di Ubuntu. Dove un comando non stampa niente, non c'è riga di risposta.

```text
$ cd ~/Documenti
$ mkdir PROVA
$ cd PROVA
$ touch importante.txt
$ mv importante.txt rilevante.txt
$ cp /home/jon_snow/Documenti/PROVA/rilevante.txt /home/jon_snow/Documenti/PROVA/copia.txt
$ cp rilevante.txt copia2.txt
$ ls
copia.txt  copia2.txt  rilevante.txt
$ rm copia.txt copia2.txt
$ ls
rilevante.txt
$ cd ..
$ pwd
/home/jon_snow/Documenti
$ xdg-open PROVA/rilevante.txt
$ cd PROVA
```

Punto per punto: `cd ~/Documenti` porta nella cartella `Documenti` della tua cartella personale (su macOS usa `open` al posto di `xdg-open`). `touch` crea il file vuoto. `mv` cambia il nome. Le due `cp` usano il percorso assoluto e quello relativo. `rm` cancella le copie. `cd ..` risale. `xdg-open` apre il file con l'editor. Il punto 8 non serve: su Linux e macOS c'è un solo albero, e gli altri dischi compaiono come cartelle.
:::

::: esercizio base Dove sono finito?
Su Linux parti da `/home/jon_snow` e dai, uno dopo l'altro, `cd Documenti`, `cd PROVA`, `cd ../..`, `cd Documenti/../Documenti`. Che cosa stampa `pwd` dopo ogni comando? (Supponi che le cartelle esistano.)
::: soluzione
1. `cd Documenti`: `/home/jon_snow/Documenti`.
2. `cd PROVA`: `/home/jon_snow/Documenti/PROVA`.
3. `cd ../..`: due gradini su, `/home/jon_snow`.
4. `cd Documenti/../Documenti`: entri in `Documenti`, risali con `..`, rientri in `Documenti`. Risultato: `/home/jon_snow/Documenti`.

Controllo: l'ultimo percorso è un giro inutile, ma è corretto.
:::

::: esercizio base Slide 50: due righe con due printf
Scrivi un programma che stampa due righe usando due chiamate a `printf`.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    printf("Prima riga\n");
    printf("Seconda riga\n");
    return 0;
}
```

Compilato con `gcc -Wall -Werror due_righe_a.c -o due_righe_a` ed eseguito:

```text
Prima riga
Seconda riga
```

Ogni `printf` finisce con `\n`, così la riga dopo comincia a capo. Senza il primo `\n` uscirebbe `Prima rigaSeconda riga`.
:::

::: esercizio base Slide 50: due righe con una sola printf
Scrivi un programma che stampa le stesse due righe con una sola chiamata a `printf`.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    printf("Prima riga\nSeconda riga\n");
    return 0;
}
```

Uscita, con `gcc -Wall -Werror`:

```text
Prima riga
Seconda riga
```

Il `\n` in mezzo alla stringa va a capo proprio lì. In alternativa, come nella [lezione 02A](02A_da_assembly_a_c.html#h-sintassi-identificatori-e-indentazione), si può spezzare la stringa su due righe del codice: `printf("Prima riga\n" "Seconda riga\n");` è sempre una sola chiamata.
:::

::: esercizio base Slide 50: chiedi due numeri e stampali
Scrivi un programma che chiede due numeri interi, uno alla volta, e poi li stampa.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int a;
    int b;
    printf("Scrivi il primo numero: ");
    scanf("%d", &a);
    printf("Scrivi il secondo numero: ");
    scanf("%d", &b);
    printf("Hai scritto %d e %d\n", a, b);
    return 0;
}
```

Servono due caselle, `a` e `b`, e due `scanf`, ognuna con la sua `&`. Nella `printf` finale i due `%d` vengono riempiti in ordine: il primo con `a`, il secondo con `b`.

Prova con la pipe, compilato con `gcc -Wall -Werror`:

```text
$ echo 3 4 | ./due_numeri
Scrivi il primo numero: Scrivi il secondo numero: Hai scritto 3 e 4
```

`scanf("%d", …)` salta gli spazi e gli a capo prima del numero: per questo i due numeri possono arrivare sulla stessa riga, separati da uno spazio.
:::

::: esercizio base Slide 50: la somma di due numeri
Scrivi un programma che legge due interi e stampa la loro somma.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int a;
    int b;
    printf("Scrivi il primo numero: ");
    scanf("%d", &a);
    printf("Scrivi il secondo numero: ");
    scanf("%d", &b);
    printf("%d + %d = %d\n", a, b, a + b);
    return 0;
}
```

Il terzo valore della `printf` è un'espressione, `a + b`: il C la calcola e stampa il risultato. Prove con `gcc -Wall -Werror`:

```text
$ printf '3\n4\n' | ./somma
Scrivi il primo numero: Scrivi il secondo numero: 3 + 4 = 7
$ echo -5 12 | ./somma
Scrivi il primo numero: Scrivi il secondo numero: -5 + 12 = 7
```

Controllo: $3 + 4 = 7$ e $-5 + 12 = 7$. Anche i numeri negativi vanno bene con `%d`.
:::

::: esercizio base Slide 50: il prodotto di tre numeri
Dichiara tre variabili intere `x`, `y` e `z`, con valori 5, 8 e 11, e stampa il loro prodotto con `printf`.
::: soluzione
```c
#include <stdio.h>

int main(void) {
    int x = 5;
    int y = 8;
    int z = 11;
    printf("%d * %d * %d = %d\n", x, y, z, x * y * z);
    return 0;
}
```

`int x = 5;` crea la casella e ci mette subito il valore 5. Una variabile con un valore di partenza si chiama **inizializzata**. Uscita, con `gcc -Wall -Werror`:

```text
5 * 8 * 11 = 440
```

Controllo: $5 \cdot 8 = 40$ e $40 \cdot 11 = 440$.
:::

::: esercizio medio Slide 50: leggere gli errori di compilazione
Questo programma dovrebbe leggere due numeri e stamparne la somma. Compilalo con `gcc -Wall -Werror`, leggi i messaggi e correggilo.
```c
#include <stdio.h>

int main(void) {
    int a;
    int b;
    printf("Scrivi due numeri: ");
    scanf("%d", &a);
    scanf("%d", b);
    printf("La somma e' %d\n", a + b)
    return 0;
}
```
::: soluzione
gcc 16.1 risponde così:

```text
err_tanti.c:8:13: error: format '%d' expects argument of type 'int *', but argument 2 has type 'int' [-Werror=format=]
err_tanti.c:9:38: error: expected ';' before 'return'
    9 |     printf("La somma e' %d\n", a + b)
      |                                      ^
      |                                      ;
   10 |     return 0;
cc1.exe: all warnings being treated as errors
```

1. Riga 8, colonna 13: il `%d` vuole un indirizzo (`int *`) e riceve un `int`. Manca la `&`: si scrive `scanf("%d", &b);`.
2. Riga 9, colonna 38: manca il `;` alla fine della `printf`. gcc se ne accorge quando trova `return` e indica pure dove metterlo.

Se correggi solo il `;` e ricompili, compare un terzo errore che prima era nascosto: `'b' is used uninitialized`. Il compilatore non sempre trova tutti gli errori al primo giro: correggi dall'alto e ricompila.

Corretto, il programma compila con `gcc -Wall -Werror`; con `echo 3 4 | ./somma2` stampa `Scrivi due numeri: La somma e' 7`.
:::

::: esercizio medio Un nome scritto male
Che cosa dice gcc con `-Wall -Werror` per questo programma? Perché gli errori sono due?
```c
#include <stdio.h>

int main(void) {
    int somma = 0;
    printf("La somma vale %d\n", soma);
    return 0;
}
```
::: soluzione
```text
err_nondich.c:5:34: error: 'soma' undeclared (first use in this function); did you mean 'somma'?
err_nondich.c:4:9: error: unused variable 'somma' [-Werror=unused-variable]
```

C'è un solo sbaglio, `soma` invece di `somma` alla riga 5, ma produce due messaggi. Il primo: `soma` non è mai stata dichiarata, e gcc suggerisce il nome giusto. Il secondo: per colpa del nome sbagliato, la variabile `somma` della riga 4 non viene mai usata, e con `-Werror` anche questo è un errore. Correggendo `soma` spariscono tutti e due.
:::

::: esercizio medio La graffa dimenticata
Che cosa dice gcc se togli la `}` finale da `buongiorno.c`?
::: soluzione
```text
err_graffa.c:5:5: error: expected declaration or statement at end of input
    5 |     return 0;
      |     ^~~~~~
```

«Fine dell'input» vuol dire fine del file: gcc è arrivato in fondo mentre il blocco di `main` era ancora aperto. Il messaggio indica l'ultima istruzione, non la graffa che manca. Quando leggi «at end of input», conta le graffe aperte e chiuse.
:::

::: esercizio medio Tabellina all'esame
All'esame un esercizio chiede di stampare le righe nella forma `7 x 1 = 7`, una per riga, senza spazi in fondo. Che cosa cambi nel programma della slide 49?
::: soluzione
Nella `printf` dentro il ciclo il formato diventa `"%d x %d = %d\n"`: la `x` al posto di `*`, e niente spazio prima di `\n`. Con 7 la prima riga è `7 x 1 = 7`. Il programma della slide stamperebbe `7 * 1 = 7 ` con uno spazio in fondo, e CodeRunner lo considererebbe diverso: test non passato. Ho compilato la versione modificata con `gcc -Wall -Werror` e con `echo 7` la riga 10 è `7 x 10 = 70`.
:::

## Domande di ripasso

::: domanda Che cosa succede ai tuoi file quando esci da un PC del laboratorio Turing?
Vengono cancellati: a ogni accesso il PC riparte da una configurazione pulita. Prima di disconnetterti devi salvarli altrove, per esempio su Google Drive o su una chiavetta.
:::

::: domanda Da quali parti è fatto un comando, e come si scrivono le opzioni?
Nome, opzioni e argomenti, separati da spazi. Le opzioni cominciano con il trattino su Linux e macOS (`ls -a`), con la barra su Windows (`date /t`).
:::

::: domanda Che cos'è il PATH e perché serve per usare gcc?
È una variabile d'ambiente con l'elenco delle cartelle in cui il terminale cerca i programmi. Se la cartella di gcc non è nel PATH, scrivendo `gcc` ricevi «command not found» o «not recognized». Su Windows va aggiunta a mano la cartella `bin` di MinGW.
:::

::: domanda Che differenza c'è tra percorso assoluto e relativo?
L'assoluto parte dalla radice (`/` o `C:\`) ed è l'indirizzo completo, valido da qualunque cartella. Il relativo parte dalla cartella di lavoro ed è più corto.
:::

::: domanda Che cosa vogliono dire `.` e `..`?
`.` è la cartella di lavoro, `..` la cartella che la contiene. `cd ..` sale di un gradino; `copy file .` copia nella cartella di lavoro.
:::

::: domanda Quali sono i comandi per creare, copiare, spostare e cancellare su Linux e su Windows?
Linux e macOS: `mkdir`, `touch`, `cp`, `mv`, `rm`, `rmdir`. Windows: `mkdir`, `copy NUL`, `copy`, `ren` e `move`, `del`, `rmdir`.
:::

::: domanda Come installi gcc su Windows, Linux e macOS, e come controlli che funzioni?
Windows: MinGW-w64, estratto in una cartella, con la sua cartella `bin` nel PATH. Linux: `sudo apt install build-essential` o `sudo dnf install gcc make`. macOS: strumenti da riga di comando di Xcode. Controllo: `where gcc` o `which gcc`, e `gcc --version`.
:::

::: domanda Che cosa fanno le opzioni `-c`, `-o`, `-Wall` e `-Werror` di gcc?
`-c` produce solo il file oggetto, senza collegamento. `-o` sceglie il nome del file prodotto. `-Wall` accende gli avvisi principali. `-Werror` trasforma ogni avviso in errore. All'esame si compila con `-Wall -Werror`.
:::

::: domanda Perché su Linux un programma si avvia con `./nome`?
Perché un nome da solo viene cercato nelle cartelle del PATH, e la cartella di lavoro non c'è. `./nome` è un percorso relativo che indica il file nella cartella di lavoro.
:::

::: domanda A che cosa serve un disassemblatore?
Mostra il linguaggio macchina di un programma compilato, scritto in assembly: `objdump -d` su Linux e Windows, `otool -tv` su macOS. Non ricostruisce il codice C.
:::

::: domanda Che cosa fa `scanf("%d", &n);` e perché serve la `&`?
Aspetta che si scriva un numero intero e lo mette nella variabile `n`. `%d` dice che cosa leggere; `&n` è l'indirizzo della casella, che serve a `scanf` per sapere dove scrivere.
:::

::: domanda Come provi un programma che legge dalla tastiera senza scrivere i numeri ogni volta?
Con la pipe: `echo 7 | ./programma` su Linux, `echo 7| programma` su Windows. Quello che stampa `echo` entra nel programma come se fosse scritto dalla tastiera.
:::

## Glossario

```glossario
Riga di comando (CLI) | Finestra in cui si danno ordini al computer scrivendoli, uno per riga. Si chiama anche terminale, console, shell o prompt dei comandi.
Shell | Il programma che legge i comandi sulla riga di comando di Linux e macOS, per esempio bash o zsh.
Prompt | La scritta che precede il cursore e dice che il terminale aspetta un comando, come C:\Users\jon_snow>.
Opzione | Parte di un comando che cambia il suo modo di lavorare: -a su Linux, /t su Windows.
Argomento | Il dato su cui lavora un comando, di solito un file o una cartella.
Comando integrato | Comando eseguito dalla shell stessa, senza avviare un programma, come cd.
PATH | Variabile d'ambiente con l'elenco delle cartelle in cui si cercano i programmi.
Variabile d'ambiente | Informazione con un nome che il sistema tiene in memoria per tutti i programmi, come PATH.
Cartella radice | La cartella in cima all'albero: / su Linux e macOS, il disco come C:\ su Windows.
Percorso assoluto | Indirizzo completo di un file, dalla radice: /home/jon_snow/Documenti/cosedafare.txt.
Percorso relativo | Indirizzo che parte dalla cartella di lavoro: Documenti/cosedafare.txt.
Cartella di lavoro | La cartella in cui si trova il terminale; si cambia con cd.
MinGW-w64 | Versione di gcc per Windows.
Editor di testo | Programma per scrivere testo semplice, come Notepad++; il codice C si scrive con un editor.
IDE | Ambiente di sviluppo integrato: editor, compilatore e strumenti in un solo programma. Non si usa in laboratorio né all'esame.
File oggetto | File in linguaggio macchina prodotto da gcc -c (.o oppure .obj); non è ancora un programma.
Eseguibile | Il programma finito, che si avvia: senza estensione su Linux e macOS, .exe su Windows.
Avviso (warning) | Messaggio del compilatore su codice corretto ma sospetto; con -Werror diventa errore.
Disassemblatore | Programma che mostra in assembly il linguaggio macchina di un eseguibile, come objdump -d.
scanf | Funzione che legge dati dalla tastiera; con %d legge un intero e lo mette all'indirizzo dato con &.
Segnaposto | Codice come %d dentro la stringa di printf, sostituito dal valore scritto dopo la virgola.
Pipe | La barra verticale tra due comandi: quello che stampa il primo entra nel secondo come se fosse scritto dalla tastiera.
CodeRunner | Il sistema di Moodle che compila il codice con -Wall -Werror, lo esegue con dati di prova e confronta le stampe.
```

## Checklist

```checklist
- So come si entra in un PC del laboratorio Turing e che i file si perdono all'uscita.
- So riconoscere nome, opzioni e argomenti di un comando.
- So spiegare che cos'è il PATH e che cosa vuol dire «command not found».
- So distinguere percorso assoluto e relativo e usare `.` e `..`.
- So usare pwd, ls, cd, mkdir, touch, cp, mv, rm, rmdir e cat su Linux o macOS.
- So usare cd, dir, mkdir, copy NUL, copy, ren, move, del, rmdir e type su Windows.
- So installare gcc sul mio computer e controllarlo con gcc --version.
- So compilare con gcc -Wall -Werror sorgente.c -o eseguibile ed eseguire il programma.
- So separare compilazione (-c) e collegamento, e che cosa mostra objdump -d.
- So leggere un intero con scanf e la & e stamparlo con printf e %d.
- So provare un programma con echo e la pipe.
- So leggere i messaggi di gcc: riga, colonna, descrizione e nome dell'avviso.
```

## Fonti

- **Slide del laboratorio**: «Introduzione», Lezione nº 1, Programmazione I – Laboratorio, canale B, A.A. 2026/27, 50 pagine; il numero di slide è accanto a ogni titolo.
- **Organizzazione**: slide 3 di questo laboratorio, slide 3 dell'introduzione di teoria del canale B, pagina Moodle del canale B (consultata il 05/10/2026); per i canali A e C le introduzioni 2026/27 e la [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md).
- **CodeRunner**: slide 7–10 del laboratorio Lab03 «Condizioni booleane» del 2025/26.
- **Regole d'esame**: [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md), dal riepilogo d'esame 2025/26 del canale C e dal Lab01 2025/26 del canale B.
- **Sessioni del terminale**: ottenute il 05/10/2026 con Ubuntu (shell bash; i messaggi d'errore di `mkdir` sono quelli di GNU coreutils) e con il Prompt dei comandi di Windows 11 in inglese, in una cartella di prova. Le risposte sono vere; ho cambiato solo il nome della cartella dell'utente in `jon_snow`, come nelle slide, e tolto righe che dipendono dal mio computer.
- **Programmi C**: tutti compilati con gcc 16.1 (MinGW-w64) e `-Wall -Werror`, ed eseguiti; i programmi che leggono dalla tastiera sono stati provati con i dati passati con la pipe. Messaggi d'errore e `objdump -d` sono quelli veri di gcc 16.1 e binutils 2.47.
- Le spiegazioni a parole, le sessioni del terminale, i riquadri «Prova tu», i quiz, gli esercizi senza numero di slide e le parti «Oltre le slide» sono di questi appunti.
