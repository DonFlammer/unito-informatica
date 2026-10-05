---
corso: FDA
lezione: "02"
titolo: Testo, colori e suoni in bit; i numeri in base 2
data: 2026-10-02
docenti: Stefano Berardi
sopratitolo: Canale B · Lezione 02 · Libro, parte 1, §1.4–1.5
descrizione: >-
  Appunti della lezione 02 di Fondamenti dell'Informatica (canale B): come si scrivono in bit il testo (ASCII,
  Unicode, UTF-8), i numeri, le immagini (pixel e colori RGB) e i suoni (campioni); il sistema binario, le
  conversioni tra base 2 e base 10, le frazioni in binario e l'addizione di interi senza segno, con strumenti
  interattivi, quiz ed esercizi svolti.
lede: >-
  Il computer conserva solo zeri e uni: lettere, colori e suoni diventano numeri, e i numeri si scrivono in base 2.
  Come si conta con due sole cifre, come diventano numeri un testo, una foto e una canzone, e come si fanno somme e
  numeri con la virgola in binario.
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
appunti_html: appunti/FDA/02_testo_colori_suoni_binario.html
genera_html: true
---

## In breve

- Il computer conserva solo bit. Per conservare una lettera, un colore o un suono si usa una regola che lo trasforma in numeri, e i numeri si scrivono in bit.
- In **base 2** ogni bit è una moneta: le monete valgono 1, 2, 4, 8, 16 e così via, ognuna il doppio della precedente. 1 vuol dire «la moneta c'è», 0 «non c'è». Così 1101 vale 8 + 4 + 1 = 13.
- Per le lettere dell'inglese c'è il codice **ASCII**: la A è 65, la B è 66. Per tutte le lingue del mondo c'è **Unicode**, e **UTF-8** ne scrive ogni simbolo con 1, 2, 3 o 4 byte.
- Una foto è una griglia di quadratini colorati, i **pixel**. In **RGB** ogni pixel è fatto di tre numeri da 0 a 255: quanto rosso, quanto verde, quanto blu.
- Un suono si registra misurando l'onda tante volte al secondo. Ogni misura è un **campione**.
- In base 2 si somma in colonna come a scuola, ma 1 + 1 fa 10: scrivi 0 e riporti 1. Se il risultato non entra nei bit che hai, c'è **overflow**.
- Dopo la virgola le posizioni valgono un mezzo, un quarto, un ottavo e così via.
- All'esame servono soprattutto le conversioni e le somme in base 2: tornano in tutte le lezioni che seguono.

> [!CANALI]
> Nel canale B è la lezione di venerdì 02/10. Per il docente è la lezione 3, perché la prima è stata un'introduzione: qui è la 02. Stefano Berardi ha fatto le sezioni 1.4 e 1.5 del libro. Qui le trovi in un ordine diverso: prima la base 2 (§1.5), che serve per leggere tutto il resto, poi testo, immagini e suoni (§1.4), alla fine le somme e la virgola (§1.5). Nel canale A gli stessi argomenti sono nei lucidi «Cenni sulla codifica dei dati» di Felice Cardone, nel canale C nei lucidi «Rappresentazione» di Luca Paolini.

## Una regola trasforma tutto in numeri

Nella [lezione 01](01_bit_porte_esadecimale.html) hai visto che un computer conserva solo bit: file di 0 e di 1, raccolti in byte da 8. Non ha un posto per le lettere, uno per i colori e uno per la musica. Ha solo bit.

Come fa allora a conservare un messaggio, una foto o una canzone? Con un accordo, come due amici che si scrivono in codice. La loro regola è: A vale 1, B vale 2, C vale 3, e così via. Per scrivere CIAO mandano i numeri 3, 9, 1 e 15. Chi riceve conosce la regola e rimette insieme la parola.

Il computer fa la stessa cosa, in due passi.

1. Una regola trasforma la cosa in numeri: ogni lettera ha il suo numero, ogni colore i suoi tre numeri, ogni istante di un suono il suo numero.
2. Ogni numero si scrive con 0 e 1, cioè in **base 2**.

Un byte, da solo, non dice che cosa contiene. Gli stessi otto bit possono essere un numero, una lettera o un colore: decide la regola con cui li leggi. Alla fine della lezione c'è un esercizio proprio su questo.

In questa lezione vedi prima il secondo passo, perché serve dappertutto: come si scrive un numero con 0 e 1. Poi le regole per il testo, le immagini e i suoni. Alla fine i conti in base 2: le somme e i numeri con la virgola.

::: prova Con la regola dei due amici, che parola è 3, 1, 19, 1?
C è la terza lettera, A la prima, S la diciannovesima: la parola è CASA.
:::

> [!RICORDA]
> - Il computer conserva solo bit.
> - Una regola trasforma lettere, colori e suoni in numeri; poi i numeri si scrivono in base 2.
> - Gli stessi bit possono essere un numero, una lettera o un colore: dipende dalla regola con cui li leggi.

## Contare con due cifre: la base 2 (libro, §1.5)

Comincia da una cosa che sai già fare. Nel numero 375 il 3 vale trecento, il 7 vale settanta e il 5 vale cinque. La stessa cifra vale di più quanto più sta a sinistra: ogni posizione vale dieci volte quella alla sua destra. Unità, decine, centinaia. Le cifre sono dieci, da 0 a 9, e per questo si chiama **base 10**.

La base 2 funziona allo stesso modo, con due differenze: le cifre sono solo 0 e 1, e ogni posizione vale **il doppio** di quella alla sua destra.

### Le monete della base 2

Immagina di avere otto monete, una per tipo: da 1, 2, 4, 8, 16, 32, 64 e 128 euro. Ogni moneta vale il doppio della precedente. Mettile in fila, con la più grande a sinistra, come le cifre di un numero.

| Posizione, da destra | 8ª | 7ª | 6ª | 5ª | 4ª | 3ª | 2ª | 1ª |
|---|--:|--:|--:|--:|--:|--:|--:|--:|
| Moneta da | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

Per pagare una cifra scegli quali monete dare. Un numero in base 2 dice proprio questo: sotto ogni moneta c'è 1 se la dai, 0 se la tieni.

Prendi il numero 1101. Leggilo da destra, una moneta alla volta:

1. l'ultima cifra è 1: la moneta da 1 c'è;
2. la penultima è 0: la moneta da 2 non c'è;
3. poi 1: la moneta da 4 c'è;
4. poi 1: la moneta da 8 c'è.

Il totale è 8 + 4 + 1 = 13. Quindi 1101 in base 2 vale 13.

Un altro esempio, quello della figura 1.16 del libro: 100101.

| Bit | 1 | 0 | 0 | 1 | 0 | 1 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|
| Moneta | 32 | 16 | 8 | 4 | 2 | 1 |
| La dai? | sì | no | no | sì | no | sì |

Il totale è 32 + 4 + 1 = 37.

Per non confondere i due modi di scrivere i numeri si mette la base in basso: $100101_2 = 37_{10}$. Si legge «100101 in base due è uguale a 37 in base dieci». Senza il numerino, 100101 potrebbe essere centomilacentouno.

> [!IDEA]
> Un numero in base 2 è una fila di monete: ogni posizione vale il doppio di quella alla sua destra, e il numero vale la somma delle posizioni dove c'è un 1. La base 2 si chiama anche **sistema binario**, e le sue cifre sono i bit.

Ora si capiscono due cose della [lezione 01](01_bit_porte_esadecimale.html). Il bit più a sinistra di un byte si chiama «più significativo» perché è la moneta che vale di più, 128. E una cifra esadecimale è il valore di quattro bit, con le monete 8, 4, 2 e 1: per esempio 1101 è D, cioè 13.

Clicca sui bit nello strumento qui sotto: ogni bit acceso aggiunge la sua moneta.

```widget codifica
titolo: Dai bit al numero: clicca sui bit
modo: binario
bit: 00100101
```

::: prova Quanto valgono in base 10 i numeri binari (a) 1010 e (b) 11111?
(a) Le monete sono 8 e 2: 1010 vale 10.

(b) Ci sono tutte le monete da 16 in giù: $16 + 8 + 4 + 2 + 1 = 31$.
:::

### Contare in base 2

In base 10, dopo il 9 le cifre sono finite: scrivi 0 e metti un 1 a sinistra, e viene 10. In base 2 le cifre finiscono subito, dopo l'1. Ecco i primi numeri.

| Base 10 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Base 2 | 0 | 1 | 10 | 11 | 100 | 101 | 110 | 111 | 1000 |

Controlla con le monete: 110 vuol dire 4 + 2, cioè 6.

### Fin dove arrivano 8 bit

Con le sole monete da 1, 2 e 4 il massimo che paghi è 7, dandole tutte: 111. Contando anche lo 0, le somme possibili sono 8, da 0 a 7.

Con tutte e otto le monete, da 1 a 128, il massimo è 11111111. Vale 1 + 2 + 4 + 8 + 16 + 32 + 64 + 128 = 255. Le somme possibili sono 256, da 0 a 255.

C'è una scorciatoia. Una fila di 1 vale sempre la moneta successiva meno 1: 111 vale 8 − 1 = 7, e 11111111 vale 256 − 1 = 255.

> [!RIPASSO] Le potenze di 2
> $2^3$ si legge «due alla terza» e vuol dire 2 moltiplicato per sé stesso 3 volte: $2 \cdot 2 \cdot 2 = 8$. Le monete della base 2 sono proprio le potenze di 2. Conviene saperle a memoria fino a $2^{10}$.
>
> | Potenza | $2^0$ | $2^1$ | $2^2$ | $2^3$ | $2^4$ | $2^5$ | $2^6$ | $2^7$ | $2^8$ | $2^9$ | $2^{10}$ |
> |---|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|
> | Valore | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 |

Con $n$ bit, quindi, si scrivono i numeri da 0 a $2^n - 1$, che si legge «due alla n meno uno». Con 8 bit $2^8 - 1 = 255$; con 16 bit $2^{16} - 1 = 65535$. Questi numeri, da 0 in su, senza segno meno e senza virgola, si chiamano **interi senza segno** (*unsigned integers*). Per i numeri negativi e per quelli con la virgola il libro usa altri sistemi, nelle sezioni 1.6 e 1.7.

### Dal decimale al binario: pagare con le monete

Ora il viaggio al contrario: da 45 alla base 2. Paga 45 euro con le monete, partendo sempre dalla più grande che ci sta.

1. La moneta da 64 è troppo grande. Quella da 32 ci sta: la dai, restano 45 − 32 = 13.
2. Quella da 16 è troppo per 13: la tieni.
3. Quella da 8 ci sta: la dai, restano 13 − 8 = 5.
4. Quella da 4 ci sta: la dai, resta 5 − 4 = 1.
5. Quella da 2 è troppo per 1: la tieni.
6. Quella da 1 ci sta: la dai, resta 0.

| Moneta | 32 | 16 | 8 | 4 | 2 | 1 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|
| La dai? | sì | no | sì | sì | no | sì |
| Bit | 1 | 0 | 1 | 1 | 0 | 1 |

Quindi 45 si scrive 101101. Controllo: 32 + 8 + 4 + 1 = 45.

### Il metodo del libro: dividere per 2

Con le monete si fa presto se il numero è piccolo. Il libro dà un altro metodo, nella figura 1.17, che funziona sempre allo stesso modo anche con i numeri grandi.

> [!METODO] Le divisioni per 2
> 1. Dividi il numero per 2 e scrivi il resto, che è 0 o 1.
> 2. Dividi per 2 il risultato, e scrivi di nuovo il resto.
> 3. Continua finché il risultato è 0.
> 4. Leggi i resti **dall'ultimo al primo**: è il numero in base 2.

> [!ESEMPIO] 13 in base 2 (figura 1.18 del libro)
> | Divisione | Risultato | Resto |
> |---|--:|--:|
> | 13 : 2 | 6 | 1 |
> | 6 : 2 | 3 | 0 |
> | 3 : 2 | 1 | 1 |
> | 1 : 2 | 0 | 1 |
>
> I resti, dall'ultimo al primo: 1101. Controllo con le monete: 8 + 4 + 1 = 13.

Perché si leggono al contrario? Il primo resto dice se il numero è dispari: 13 diviso 2 dà resto 1, quindi la moneta da 1 serve. Dividere per 2 è come cambiare ogni moneta con quella che vale la metà: la moneta da 2 diventa quella da 1, e il resto dopo dice se serve la moneta da 2. Così i bit escono da destra verso sinistra, e per scriverli nell'ordine giusto si leggono dall'ultimo.

Nello strumento scegli un numero e guarda le divisioni passo per passo.

```widget codifica
titolo: Le divisioni per 2, passo per passo: scegli un numero
modo: divisioni
numero: 13
```

Tre cose da sapere sugli zeri.

- Lo zero non ha bisogno di divisioni: in base 2 è 0, e in un byte 00000000.
- Gli zeri a sinistra non cambiano il valore, come in base 10 007 è 7: 1101 e 00001101 valgono tutti e due 13.
- Uno zero aggiunto a destra, invece, raddoppia il numero: ogni bit passa alla moneta successiva. 11010 vale 26, il doppio di 13.

> [!TRAPPOLA] «Quanti bit servono» e «scrivilo con 8 bit» sono domande diverse
> 13 ha bisogno di almeno 4 bit: 1101. Per scriverlo con 8 bit aggiungi quattro zeri a sinistra: 00001101. Invece 256 ha bisogno di 9 bit, 100000000, e in un byte non ci sta: con 8 bit si arriva a 255.

::: prova (a) Scrivi 27 in base 2, una volta con le monete e una volta con le divisioni. (b) Quanto vale 101010?
(a) Con le monete: 16 ci sta, restano 11; 8 ci sta, restano 3; 4 no; 2 ci sta, resta 1; 1 ci sta. Hai dato 16, 8, 2 e 1: 11011.

Con le divisioni: 27 : 2 = 13 resto 1; 13 : 2 = 6 resto 1; 6 : 2 = 3 resto 0; 3 : 2 = 1 resto 1; 1 : 2 = 0 resto 1. Dall'ultimo al primo: 11011. I due metodi danno lo stesso numero.

(b) Le monete sono 32, 8 e 2: $32 + 8 + 2 = 42$.
:::

> [!RICORDA]
> - In base 2 le posizioni valgono 1, 2, 4, 8, 16…, da destra: ognuna il doppio della precedente. Il numero vale la somma delle posizioni con un 1.
> - Dalla base 10 alla base 2: paga con le monete partendo dalla più grande, oppure dividi per 2 finché il risultato è 0 e leggi i resti dall'ultimo al primo.
> - Con $n$ bit si arriva a $2^n - 1$: con 8 bit a 255.
> - Controlla sempre al contrario: riconverti e guarda se torna.

## Le lettere: il codice ASCII (libro, §1.4)

Ora che sai scrivere un numero in bit, torna al primo passo: la regola che trasforma le lettere in numeri. Una tabella che dà a ogni simbolo il suo numero si chiama **codice**. I simboli sono le lettere, le cifre, la punteggiatura, lo spazio e anche alcuni comandi, come «vai a capo».

Il codice più famoso è l'**ASCII**, che si legge «aschi» (*American Standard Code for Information Interchange*). I suoi numeri vanno da 0 a 127, quindi bastano 7 bit: $2^7 = 128$ simboli. Ci sono le lettere dell'alfabeto inglese, maiuscole e minuscole, le cifre, la punteggiatura e lo spazio. Oggi ogni simbolo occupa un byte intero, con uno 0 in più a sinistra.

Ecco la parola «Hello.» in ASCII, come nella figura 1.11 del libro.

| Simbolo | Numero | Byte |
|:-:|--:|:-:|
| H | 72 | 01001000 |
| e | 101 | 01100101 |
| l | 108 | 01101100 |
| l | 108 | 01101100 |
| o | 111 | 01101111 |
| . | 46 | 00101110 |

Controlla la H con le monete: 01001000 ha le monete da 64 e da 8, e 64 + 8 = 72.

La tabella completa sta nelle appendici del libro, ma non serve impararla. Basta sapere dove cominciano i gruppi.

| Simboli | Numeri |
|---|---|
| spazio | 32 |
| cifre da «0» a «9» | da 48 a 57 |
| maiuscole da A a Z | da 65 a 90 |
| minuscole da a a z | da 97 a 122 |

> [!METODO] Trovare il numero di una lettera
> - Maiuscola: 64 più il posto della lettera nell'alfabeto inglese. A è la prima, quindi 64 + 1 = 65; C è la terza, quindi 67.
> - Minuscola: 96 più il posto. a è 97, c è 99.
> - Cifra: 48 più la cifra. Il simbolo «7» è 55.

Due cose da notare.

- **Maiuscola e minuscola** differiscono di 32: A è 65, a è 97. Nei bit cambia una sola moneta, proprio quella da 32: A è 01000001, a è 01100001. È la domanda 2 del §1.4 del libro.
- **Le cifre sono simboli come gli altri.** Il simbolo «7» è il numero 55, cioè 00110111. Per il computer non è il numero 7, che in base 2 è 00000111: è un disegno da mostrare sullo schermo.

### I numeri non si scrivono in ASCII

Per scrivere il numero 25 in ASCII servono due simboli, «2» e «5», cioè due byte. In base 2, invece, 25 è 11001 e sta in un byte solo.

La differenza cresce con i byte. Con due byte in ASCII si scrivono due cifre, quindi si arriva a 99. Con gli stessi 16 bit in base 2 si arriva a 65535. Per questo il libro conclude che i numeri si conservano in base 2, e i conti si fanno direttamente sui bit.

::: prova (a) Il numero di B è 66. Qual è quello di b? (b) Che simbolo è il byte 00110011?
(a) La minuscola vale 32 in più: $66 + 32 = 98$.

(b) Le monete sono 32, 16, 2 e 1: il numero è 51. Le cifre partono da 48, e 51 = 48 + 3: è il simbolo «3».
:::

> [!RICORDA]
> - Un codice dà a ogni simbolo un numero. ASCII va da 0 a 127, cioè 7 bit, e oggi usa un byte per simbolo.
> - Maiuscole da 65, minuscole da 97, cifre da 48, spazio 32. Maiuscola e minuscola differiscono di 32.
> - Il simbolo «7» non è il numero 7. I numeri si scrivono in base 2, non in ASCII.

## Tutte le lingue: Unicode e UTF-8 (libro, §1.4)

Prova a scrivere in ASCII la parola «perché»: non si può. La é non c'è, e non c'è nemmeno il simbolo dell'euro. ASCII è nato per l'inglese.

Prima si è provato con codici da 8 bit, cioè 256 simboli: i primi 128 come in ASCII, gli altri diversi per ogni gruppo di lingue. Il codice Latin-1, per esempio, ha le lettere accentate dell'Europa occidentale. Il libro spiega perché non basta: 256 simboli sono pochi per lingue come il cinese, e un testo scritto in più lingue non sa quale tabella usare.

### Unicode: un numero per ogni simbolo del mondo

La soluzione di oggi si chiama **Unicode**: un'unica, enorme tabella con i simboli di tutte le lingue, più simboli matematici, emoji e molto altro. Ha posto per più di un milione di simboli, e i primi 128 sono quelli di ASCII.

Il numero di un simbolo si chiama **punto di codice** (*code point*). Si scrive «U+» seguito dal numero in esadecimale, il modo breve di scrivere i bit della [lezione 01](01_bit_porte_esadecimale.html).

| Simbolo | Punto di codice | In base 10 |
|:-:|:-:|--:|
| A | U+0041 | 65 |
| è | U+00E8 | 232 |
| € | U+20AC | 8364 |
| 😀 | U+1F600 | 128512 |

### UTF-8: quanti byte per simbolo

Unicode dice solo quale numero ha ogni simbolo. Resta da decidere come scriverlo in byte. La strada più semplice sarebbe dare a tutti i simboli lo stesso spazio, per esempio 4 byte; ma allora un testo in italiano occuperebbe quattro volte più che in ASCII.

**UTF-8** fa una cosa più furba: ai numeri piccoli dà pochi byte, ai numeri grandi di più. È il modo più usato, e quasi tutte le pagine web sono scritte così.

| Simboli | Byte in UTF-8 |
|---|:-:|
| quelli di ASCII: lettere senza accento, cifre, punteggiatura, spazio | 1 |
| lettere accentate come è e à, alfabeto greco, russo, arabo, ebraico | 2 |
| quasi tutti gli altri, compresi € e i caratteri cinesi e giapponesi | 3 |
| emoji e simboli rari | 4 |

Per sapere quanto occupa un testo, conta i simboli di ogni riga. «perché» ha 6 simboli: p, e, r, c, h hanno un byte ciascuno, la é ne ha 2. In tutto 5 + 2 = 7 byte.

Leggendo un file, come fa il computer a capire dove finisce un simbolo e comincia il successivo? Lo dice il primo byte di ogni simbolo, con i suoi primi bit:

- comincia con 0 se il simbolo ha un byte solo;
- comincia con 110 se ne ha due, con 1110 se ne ha tre, con 11110 se ne ha quattro;
- i byte che seguono cominciano tutti con 10.

I simboli di ASCII hanno un byte solo, che comincia con 0, ed è proprio il byte di ASCII. Quindi un testo scritto in ASCII è già un testo UTF-8, con gli stessi byte.

> [!TRAPPOLA] UTF-8 non vuol dire «8 bit per simbolo»
> L'8 dice che UTF-8 lavora a byte, ma un simbolo può occupare da 1 a 4 byte. Contare i simboli non basta per sapere i byte: «perché» ha 6 simboli e occupa 7 byte.

> [!APPROFONDIMENTO] Come si costruiscono i byte, bit per bit
> Questa parte non compare nei quiz delle simulazioni: serve per capire lo strumento qui sotto e l'ultimo esercizio.
>
> | Punti di codice | Bit del numero | Byte | Schema dei byte |
> |---|:-:|:-:|---|
> | da U+0000 a U+007F | fino a 7 | 1 | 0xxxxxxx |
> | da U+0080 a U+07FF | fino a 11 | 2 | 110xxxxx 10xxxxxx |
> | da U+0800 a U+FFFF | fino a 16 | 3 | 1110xxxx 10xxxxxx 10xxxxxx |
> | da U+10000 a U+10FFFF | fino a 21 | 4 | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx |
>
> Al posto delle x vanno i bit del punto di codice, da sinistra a destra.
>
> 1. Scrivi il punto di codice in base 2.
> 2. Conta i bit e scegli la riga: fino a 7 bit un byte, fino a 11 due, fino a 16 tre, fino a 21 quattro.
> 3. Aggiungi zeri a sinistra finché i bit sono tanti quante le x della riga.
> 4. Metti i bit al posto delle x.
>
> **La è.** Il punto di codice è U+00E8, cioè 232, in base 2 11101000: 8 bit, quindi due byte, che hanno posto per 11 bit. Con tre zeri davanti: 00011101000. I primi 5 bit vanno nel primo byte, gli altri 6 nel secondo: 110 00011 e 10 101000, cioè 11000011 10101000, in esadecimale C3 A8.
>
> **L'euro.** Il punto di codice è U+20AC, in base 2 0010000010101100: 16 bit, quindi tre byte. I bit si dividono in 4, 6 e 6: 0010, 000010 e 101100. I byte sono 1110 0010, 10 000010 e 10 101100: in esadecimale E2 82 AC.

Scrivi una parola nello strumento: per ogni simbolo vedi il punto di codice e i byte di UTF-8.

```widget codifica
titolo: Un testo in Unicode e UTF-8: scrivi quello che vuoi
modo: testo
testo: Ciao, è 5€!
```

Un file fatto solo di numeri di simboli, uno dopo l'altro, si chiama **file di testo**. Sono file di testo i .txt, ma anche i programmi in C e le pagine web. Word, invece, salva anche grassetti, caratteri e margini con codici suoi: un file .docx non è un file di testo.

> [!NOTA] Non solo UTF-8
> Unicode si può scrivere in byte anche in altri modi. UTF-16, per esempio, usa 2 o 4 byte per simbolo, e lo usano al loro interno Windows e Java.

::: prova (a) Quanti byte occupa in UTF-8 la parola «caffè»? (b) Si può scrivere in ASCII?
(a) c, a, f e f hanno un byte ciascuno; la è ne ha 2. In tutto $4 + 2 = 6$ byte.

(b) No: la è non è tra i 128 simboli di ASCII.
:::

> [!RICORDA]
> - Unicode dà un numero, il punto di codice U+…, a ogni simbolo di ogni lingua.
> - UTF-8 scrive quel numero con 1, 2, 3 o 4 byte: 1 per i simboli di ASCII, 2 per le lettere accentate, 3 per €, 4 per le emoji.
> - Il primo byte di ogni simbolo dice quanti byte ha.

## Le immagini: pixel e colori (libro, §1.4)

Ingrandisci molto una foto sul telefono: a un certo punto vedi tanti quadratini, ognuno di un colore solo. Sono i **pixel**, da *picture elements*, «elementi dell'immagine».

Una foto, per il computer, è una griglia di pixel, e ogni pixel è scritto con dei bit. Un'immagine fatta così si chiama **mappa di bit** (*bit map*).

In bianco e nero basta un bit per pixel: 1 per nero, 0 per bianco. Ecco una F fatta di cinque righe da cinque pixel.

| Riga | Bit | Disegno |
|:-:|:-:|:-:|
| 1 | 11111 | ■■■■■ |
| 2 | 10000 | ■□□□□ |
| 3 | 11110 | ■■■■□ |
| 4 | 10000 | ■□□□□ |
| 5 | 10000 | ■□□□□ |

### I colori in RGB

Per i colori immagina tre lampadine puntate sullo stesso punto: una rossa, una verde e una blu. Ognuna ha una manopola che va da spenta, 0, ad accesa al massimo, 255. Ogni manopola è un numero da 0 a 255, e 255 è proprio il numero più grande che sta in un byte. Quindi un pixel occupa 3 byte, uno per lampadina.

Questo modo di scrivere i colori si chiama **RGB**, dalle iniziali dei tre colori in inglese: *red*, *green*, *blue*.

Le luci si mescolano così:

- tutte spente danno il nero;
- tutte al massimo danno il bianco;
- rosso e verde insieme danno il giallo;
- tre valori uguali danno un grigio.

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

L'ultima colonna è il modo di scrivere i colori nelle pagine web: ogni byte diventa due cifre esadecimali, come nella [lezione 01](01_bit_porte_esadecimale.html). FF è 255, 80 è 128, 00 è 0.

Quanti colori ci sono in tutto? 256 valori per il rosso, per ognuno 256 per il verde, per ognuno 256 per il blu: $256 \cdot 256 \cdot 256 = 16777216$, più di sedici milioni. È lo stesso numero di $2^{24}$, perché 3 byte sono 24 bit.

Muovi le tre manopole nello strumento.

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

Lo schermo di un portatile Full HD ha 1920 colonne e 1080 righe di pixel. I pixel sono 1920 × 1080 = 2073600. Ognuno occupa 3 byte, quindi un'immagine grande come lo schermo occupa 6220800 byte, circa 6 MB. Per questo le immagini si comprimono, per esempio in JPEG: lo racconta la sezione 1.9 del libro.

> [!METODO] Quanti byte occupa un'immagine senza compressione
> 1. Moltiplica la larghezza per l'altezza, in pixel: sono i pixel.
> 2. Moltiplica per i byte di ogni pixel: 3 in RGB.
> 3. Se la domanda chiede i bit, moltiplica ancora per 8.

### Immagini vettoriali

Una mappa di bit ha un limite: se la ingrandisci, ingrandisci anche i pixel, e l'immagine diventa a quadretti. Esiste un altro modo: invece dei pixel si scrive come disegnare l'immagine, cioè quali linee, curve e figure tracciare e dove. Si chiama **immagine vettoriale**.

Per ingrandire un'immagine vettoriale si ridisegnano le figure più grandi: niente quadretti. Sono fatti così i caratteri che si ingrandiscono a piacere, come TrueType e PostScript, i disegni tecnici e i file .svg. Per le fotografie, invece, la mappa di bit resta più fedele: è la domanda 9 del §1.4.

::: prova (a) Che colore è (255, 255, 0)? E (0, 255, 255)? (b) Quanti byte occupa un'immagine di 100 × 100 pixel in RGB, senza compressione?
(a) Il primo è giallo: rosso più verde. Il secondo è il ciano, un azzurro chiaro: verde più blu.

(b) I pixel sono $100 \cdot 100 = 10000$, ognuno di 3 byte: $30000$ byte.
:::

> [!RICORDA]
> - Una foto è una griglia di pixel. In RGB ogni pixel ha tre numeri da 0 a 255, rosso, verde e blu: 3 byte.
> - Byte di un'immagine senza compressione: larghezza × altezza × 3.
> - Le immagini vettoriali dicono come disegnare le figure: si ingrandiscono senza quadretti, ma non vanno bene per le foto.

## I suoni: misurare l'onda (libro, §1.4)

Un suono è l'aria che vibra, avanti e indietro, come un'onda. Quanto è alta l'onda dà il volume; quanto è fitta dà la nota, più grave o più acuta.

Pensa a un'altalena. Se la fotografi una volta al secondo, dalle foto capisci poco di come si muove. Se la fotografi cento volte al secondo, dalle foto ricostruisci tutto il movimento. Con un suono si fa lo stesso: si misura l'altezza dell'onda tante volte al secondo, sempre allo stesso ritmo, e si conservano i numeri.

Ogni misura si chiama **campione** (*sample*), e prendere le misure si chiama **campionamento**. Il libro fa l'esempio di un'onda registrata con i campioni 0; 1,5; 2,0; 1,5; 2,0; 3,0; 4,0; 3,0; 0.

Per registrare un suono si fanno due scelte.

- **Quante misure al secondo.** Per una telefonata bastano 8000 campioni al secondo. Un CD musicale ne prende 44 100 al secondo.
- **Con quanti bit si scrive ogni misura.** Il CD usa 16 bit, cioè $2^{16} = 65536$ valori possibili. Ogni misura viene arrotondata al valore più vicino, come quando misuri con un righello che ha solo le tacche dei millimetri. Questo arrotondamento si chiama **quantizzazione**.

Più misure al secondo e più bit per misura danno un suono più fedele, ma occupano più spazio. La musica in stereo, poi, ha due registrazioni, una per orecchio: si chiamano **canali**.

Nello strumento vedi un'onda, i campioni presi a intervalli regolari e il suono che si ricostruisce dai campioni.

```widget codifica
titolo: Campionare un suono: meno campioni, meno fedeltà
modo: suono
```

> [!METODO] Quanti byte occupa un suono
> Moltiplica fra loro quattro numeri: i campioni al secondo, i byte di ogni campione, i canali (1 se mono, 2 se stereo) e i secondi.

> [!ESEMPIO] Un'ora di musica su CD (domanda 10 del §1.4)
> 1. Ogni campione ha 16 bit, cioè 2 byte.
> 2. In un secondo di stereo: $44100 \cdot 2 \cdot 2 = 176400$ byte.
> 3. Un'ora ha 3600 secondi: $176400 \cdot 3600 = 635040000$ byte, circa 635 MB.
>
> Un CD contiene da 600 a 700 MB: un'ora di musica lo riempie quasi tutto.

C'è anche un modo completamente diverso. Una registrazione conserva il suono; uno spartito conserva le istruzioni per suonarlo. Il formato **MIDI** (*Musical Instrument Digital Interface*) è uno spartito: dice quale strumento, quale nota e per quanto tempo. Occupa pochissimo: secondo il libro, un clarinetto che suona un re per due secondi occupa 3 byte in MIDI, contro più di due milioni di bit con 44 100 campioni al secondo. Il difetto è lo stesso dello spartito: il suono vero dipende da chi lo suona, cioè dallo strumento elettronico che esegue le istruzioni.

::: prova Quanti byte occupa un minuto di telefonata registrata con 8000 campioni al secondo, 8 bit per campione e un solo canale?
Ogni campione occupa 8 bit, cioè un byte. In un secondo ci sono 8000 byte, in un minuto $8000 \cdot 60 = 480000$ byte.
:::

> [!RICORDA]
> - Un suono si registra con i campioni: misure dell'onda prese tante volte al secondo.
> - CD: 44 100 campioni al secondo, 16 bit ciascuno, due canali.
> - Byte di un suono: campioni al secondo × byte per campione × canali × secondi.

## Sommare in base 2 (libro, §1.5)

Ricorda come si somma in colonna in base 10, per esempio 58 + 27. Nella colonna di destra 8 + 7 fa 15: scrivi 5 e riporti 1. Nella colonna dopo 5 + 2 + 1 fa 8. Il risultato è 85.

In base 2 si fa nello stesso modo. Cambia solo una cosa: appena una colonna arriva a 2, hai già finito le cifre. Le somme possibili in una colonna sono solo quattro.

| Nella colonna | Fa | Scrivi | Riporti |
|---|---|:-:|:-:|
| 0 + 0 | zero | 0 | 0 |
| 0 + 1 oppure 1 + 0 | uno | 1 | 0 |
| 1 + 1 | due, che in base 2 è 10 | 0 | 1 |
| 1 + 1 + 1 di riporto | tre, che in base 2 è 11 | 1 | 1 |

Ecco l'esempio del libro: 00111010 + 00011011, cioè proprio 58 + 27. Si parte dalla colonna di destra. Nella prima riga ci sono i riporti, che arrivano dalla colonna a destra.

| | 8ª | 7ª | 6ª | 5ª | 4ª | 3ª | 2ª | 1ª |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| riporti | 0 | 1 | 1 | 1 | 0 | 1 | 0 | |
| 58 | 0 | 0 | 1 | 1 | 1 | 0 | 1 | 0 |
| 27 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 1 |
| somma, 85 | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 1 |

Le prime colonne, da destra:

1. 0 + 1 fa 1: scrivi 1, niente riporto.
2. 1 + 1 fa due, cioè 10: scrivi 0 e riporti 1.
3. 0 + 0 più il riporto fa 1: scrivi 1, niente riporto.
4. 1 + 1 fa 10: scrivi 0 e riporti 1.
5. 1 + 1 più il riporto fa tre, cioè 11: scrivi 1 e riporti 1.

E così via fino a sinistra. Controllo con le monete: 01010101 vale 64 + 16 + 4 + 1 = 85.

### Quando il risultato non ci sta: l'overflow

Pensa al contachilometri di un motorino con tre cifre. Dopo 999 non c'è posto per 1000: torna a 000. Con i bit succede lo stesso.

Con 8 bit gli interi senza segno vanno da 0 a 255. Prova 200 + 100, cioè 11001000 + 01100100. Il risultato vero è 300, che in base 2 è 100101100: ha 9 bit. Negli 8 bit c'è posto solo per gli ultimi 8. Il 1 più a sinistra si perde e resta 00101100, cioè 44.

Questo si chiama **overflow**, in italiano anche «trabocco»: il risultato non ci sta nei bit che hai. Chi programma lo incontra davvero: un contatore di 8 bit, dopo 255, ricomincia da 0.

> [!TRAPPOLA] Conta solo il riporto che esce a sinistra
> Con $n$ bit c'è overflow quando l'ultima colonna a sinistra dà un riporto: non ha più posto dove andare. I riporti in mezzo non contano. Con 4 bit, $0111 + 0001 = 1000$: i riporti attraversano tre colonne, ma $7 + 1 = 8$ ci sta, perché con 4 bit si arriva a 15. Invece $1111 + 0001$ dà un riporto anche dall'ultima colonna: $15 + 1 = 16$ non ci sta, ed è overflow.

Questa regola vale per gli interi senza segno. Per i numeri con il segno, nella prossima lezione, ce n'è un'altra.

Clicca sui bit dei due numeri nello strumento e guarda i riporti.

```widget codifica
titolo: Somma in colonna con 8 bit: clicca sui bit dei due numeri
modo: somma
a: 00111010
b: 00011011
```

::: prova (a) Calcola 1011 + 0110. (b) Con 4 bit il risultato ci sta?
(a) Da destra: 1 + 0 fa 1; 1 + 1 fa 10, scrivi 0 e riporti 1; 0 + 1 più il riporto fa 10, scrivi 0 e riporti 1; 1 + 0 più il riporto fa 10, scrivi 0 e riporti 1. Il riporto finale va in una colonna nuova: 10001, cioè 17. Infatti $11 + 6 = 17$.

(b) No. Con 4 bit si arriva a 15. Il riporto finale si perde e resta 0001, cioè 1: overflow.
:::

> [!RICORDA]
> - 0 + 0 = 0; 0 + 1 = 1; 1 + 1 = 10, scrivi 0 e riporti 1; 1 + 1 + 1 = 11, scrivi 1 e riporti 1.
> - Con $n$ bit gli interi senza segno vanno da 0 a $2^n - 1$.
> - Se l'ultima colonna a sinistra dà un riporto, il risultato non ci sta: è overflow.

## I numeri con la virgola in base 2 (libro, §1.5)

In base 10, 3,75 vuol dire 3 unità, 7 decimi e 5 centesimi: dopo la virgola ogni posizione vale un decimo di quella a sinistra. In base 2 vale la stessa idea con le metà.

Torna alle monete. A destra della virgola aggiungi monete sempre più piccole, ognuna la metà della precedente: mezzo euro, un quarto di euro, un ottavo di euro.

| Moneta | 4 | 2 | 1 | , | 1/2 | 1/4 | 1/8 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Bit di 101,101 | 1 | 0 | 1 | , | 1 | 0 | 1 |

Quindi 101,101 vale 4 + 1 prima della virgola, e 1/2 + 1/8 dopo. È la figura 1.19 del libro.

> [!RIPASSO] Sommare mezzi, quarti e ottavi
> Per sommare frazioni con sotto numeri diversi, portale tutte agli ottavi: un mezzo è 4/8, un quarto è 2/8. Quindi 1/2 + 1/8 = 4/8 + 1/8 = 5/8.

Il numero 101,101 vale 5 e 5/8. Con la virgola in base 10 è 5,625, perché 5/8 = 0,625.

> [!NOTA] Virgola o punto
> Il libro, in inglese, scrive 101.101 con il punto, e chiama la virgola *radix point*. Qui scrivo la virgola, come si fa in italiano. È lo stesso numero.

### Da una frazione alla base 2

Con le frazioni piccole si usano ancora le monete: scrivi la frazione come somma di mezzi, quarti, ottavi.

- 2 e 3/4: tre quarti sono un mezzo più un quarto. Quindi $2 + 1/2 + 1/4$, cioè 10,11.
- 5/16: sono 4/16 più 1/16, cioè un quarto più un sedicesimo. Le posizioni dopo la virgola sono 1/2, 1/4, 1/8, 1/16: il bit è 1 nella seconda e nella quarta, quindi 0,0101.

Quando il numero è scritto con la virgola in base 10, come 0,625, c'è un metodo che va sempre.

> [!METODO] Raddoppiare la parte dopo la virgola
> 1. Raddoppia: $0{,}625 \cdot 2 = 1{,}25$. La cifra prima della virgola, qui 1, è il primo bit dopo la virgola.
> 2. Tieni solo la parte dopo la virgola, 0,25, e raddoppia di nuovo: 0,5. Prima della virgola c'è 0: il secondo bit è 0.
> 3. Raddoppia ancora: $0{,}5 \cdot 2 = 1$. Il terzo bit è 1, e non resta niente: hai finito.
> 4. I bit, nell'ordine in cui escono: 0,625 si scrive 0,101.

Perché funziona? Raddoppiare sposta tutte le monete di un posto: il mezzo diventa 1 e finisce prima della virgola. Così, a ogni raddoppio, la cifra prima della virgola dice se c'era la moneta successiva.

> [!OLTRE] · numeri che in base 2 non finiscono
> In base 10, 1/3 è 0,333… e non finisce mai. In base 2 succede anche a numeri che in base 10 hanno una sola cifra dopo la virgola: un decimo diventa 0,000110011001100…, con 0011 che si ripete per sempre. Il computer deve tagliarlo da qualche parte, e nasce un piccolo errore. Per questo in molti linguaggi di programmazione 0.1 + 0.2 dà 0.30000000000000004. Se ne riparla con la virgola mobile, nella sezione 1.7 del libro.

### Sommare con la virgola

Si mettono le virgole una sotto l'altra e si somma come sempre, da destra. L'esempio del libro: 10,011 + 100,110, cioè 2 e 3/8 più 4 e 3/4.

| Moneta | 4 | 2 | 1 | , | 1/2 | 1/4 | 1/8 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| riporti | 0 | 0 | 1 | , | 1 | 0 | |
| 2 e 3/8 | 0 | 1 | 0 | , | 0 | 1 | 1 |
| 4 e 3/4 | 1 | 0 | 0 | , | 1 | 1 | 0 |
| somma | 1 | 1 | 1 | , | 0 | 0 | 1 |

Il risultato è 111,001, cioè 7 e 1/8. Controllo: 2 e 3/8 più 4 e 3/4, cioè 2 e 3/8 più 4 e 6/8, fa 6 e 9/8, cioè 7 e 1/8.

Nello strumento ci sono anche tre bit dopo la virgola.

```widget codifica
titolo: Bit con la virgola: clicca sui bit
modo: binario
bit: 101101
frazioni: 3
```

::: prova (a) Quanto vale 11,01? (b) Scrivi 4 e 1/2 in base 2.
(a) Prima della virgola 2 + 1; dopo, solo la moneta da 1/4. In tutto 3 e 1/4.

(b) 4 è 100 e un mezzo è 0,1: in tutto 100,1.
:::

> [!RICORDA]
> - Dopo la virgola le posizioni valgono 1/2, 1/4, 1/8, 1/16…
> - Da frazione a base 2: scrivi la frazione come somma di mezzi, quarti, ottavi; oppure raddoppia la parte dopo la virgola e prendi le cifre prima della virgola.
> - Per sommare, metti le virgole in colonna e somma come sempre.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $1101_2$ | «1101 in base due» | il numerino in basso dice la base | $1101_2 = 13_{10}$ |
| $2^n$ | «due alla n» | 2 moltiplicato per sé stesso $n$ volte | $2^3 = 8$ |
| $2^n - 1$ | «due alla n meno uno» | l'intero senza segno più grande con $n$ bit | con 8 bit, 255 |
| ASCII | «aschi» | il codice dei simboli dell'inglese, numeri da 0 a 127 | A = 65 = 01000001 |
| U+00E8 | «u più zero zero e otto» | il punto di codice di un simbolo in Unicode, in esadecimale | U+00E8 è la è |
| UTF-8 | «u-ti-effe otto» | il modo di scrivere i punti di codice con 1, 2, 3 o 4 byte | la è diventa C3 A8 |
| (R, G, B) | «erre, gi, bi» | rosso, verde e blu di un pixel, da 0 a 255 | (255, 255, 0) è giallo |
| #FF8000 | «cancelletto effe effe otto zero zero zero» | un colore RGB in esadecimale, due cifre per colore | arancione |
| 101,101 | «uno zero uno virgola uno zero uno» | un numero in base 2 con la virgola: dopo la virgola 1/2, 1/4, 1/8 | 5 e 5/8 |

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
2. I due byte sono uguali tranne un bit, il sesto da destra, quello della moneta da 32: 0 nella maiuscola, 1 nella minuscola.
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

::: esercizio medio Gli stessi bit, tre significati
Il byte 00110101 viene letto come intero senza segno, come carattere ASCII e come quantità di rosso di un pixel RGB con verde e blu a zero. Che cosa vuol dire nei tre casi?
::: soluzione
1. Come intero: le monete sono 32, 16, 4 e 1, quindi vale $32 + 16 + 4 + 1 = 53$.
2. Come carattere ASCII: il codice 53 è la cifra «5». Il numero 5, scritto in binario, sarebbe invece 00000101.
3. Come rosso: il pixel è (53, 0, 0), un rosso scuro, perché 53 è poco rispetto al massimo 255.

I bit sono gli stessi: è la regola con cui li leggi a decidere se sono un numero, una lettera o un colore.
:::

::: esercizio medio Riporto in mezzo o overflow?
Con 8 bit senza segno calcola (a) 01111111 + 00000001 e (b) 11111111 + 00000001. Di' che cosa resta negli 8 bit e se c'è overflow.
::: soluzione
1. (a) 01111111 vale 127. Sommando 1, i sette 1 di destra diventano 0 e il riporto arriva all'ottava colonna: 10000000, cioè 128. Ci sta, perché il massimo è 255: niente overflow.
2. (b) 11111111 vale 255. Sommando 1, il riporto esce anche dall'ottava colonna: il risultato vero è 100000000, cioè 256, che ha 9 bit. Negli 8 bit resta 00000000, cioè 0: c'è overflow.

Non conta quanti riporti ci sono in mezzo, conta solo se esce un riporto dall'ultima colonna.
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
- Lo standard Unicode (unicode.org) per i punti di codice, e la [RFC 3629](https://www.rfc-editor.org/rfc/rfc3629.html#section-3) per lo schema dei byte di UTF-8.
- Le spiegazioni a parole, gli esempi, i riquadri «Prova tu», gli strumenti interattivi, i quiz e gli esercizi senza il numero del libro sono di questi appunti.
