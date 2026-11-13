---
corso: FDA
lezione: S6
tipo: riassunto
titolo: "Settimana 6: esercizi su regole e dimostrazioni, e dimostrazioni per assurdo"
data: 2026-11-05
docenti: Stefano Berardi
sopratitolo: Riassunto settimanale · Fondamenti dell'Informatica · Canale B · 02/11 – 06/11/2026
descrizione: >-
  Riassunto della settimana 6 di Fondamenti dell'Informatica (canale B, libro parte 2, §1.4, §2.1 e §2.2): le sette
  regole di inferenza e le due fallacie, come si trova il controesempio di un'argomentazione, le catene di regole, la
  dimostrazione diretta con numeri e insiemi; la dimostrazione per assurdo, come si nega la tesi, gli esempi del
  libro, insiemi e conteggi, il confronto con la contrapposizione.
lede: >-
  Le due lezioni della settimana in poche pagine: come si riconosce una regola e come si smonta un ragionamento
  sbagliato, come comincia una dimostrazione diretta, e come funziona una dimostrazione per assurdo, dal contrario
  della tesi alla contraddizione.
materiale: libro
simboli_logici: quantificatori
scheda:
  Lezioni: "[15](15_esercizi_regole_dimostrazioni_dirette.html) lun 02/11, esercizi · [16](16_dimostrazioni_per_assurdo.html) gio 05/11, §2.2"
  Tempo di ripasso: 35 minuti
fonte: >-
  Gli appunti delle lezioni 15 e 16 di Fondamenti dell'Informatica (canale B), scritti sul libro di testo, parte 2
  (Johnsonbaugh, cap. 1 e 2), e sulle note di F. Cardone (canale A)
appunti_html: appunti/FDA/riassunto_settimana_06.html
genera_html: true
---

## In breve

- Le **regole di inferenza** sono argomentazioni valide corte: modus ponens, modus tollens, addizione, semplificazione, congiunzione, sillogismo ipotetico e disgiuntivo.
- Le due **fallacie** le imitano: affermare il conseguente e negare l'antecedente. Hanno lo stesso controesempio: ipotesi falsa, conclusione vera.
- Un'argomentazione **non è valida** se in almeno un caso le premesse sono tutte vere e la conclusione falsa. Si cerca partendo dalla conclusione falsa.
- La **dimostrazione diretta** parte dall'ipotesi, la riscrive con le definizioni e fa i conti fino alla tesi.
- La **dimostrazione per assurdo** suppone l'ipotesi e il **contrario della tesi**, e arriva a una contraddizione.
- Il passo delicato è negare bene la tesi: «oppure» diventa «e», «per ogni» diventa «esiste… non».
- Per contrapposizione si arriva proprio al contrario dell'ipotesi; per assurdo basta una contraddizione qualsiasi.

> [!NOTA] Le altre lezioni della settimana
> Venerdì 06/11 non c'è stata lezione di Fondamenti: il diario passa dalla lezione del 05/11 a quella di lunedì 09/11.

## 15 · Regole e dimostrazioni dirette (lun 02/11)

La lezione è di esercizi su due cose che i quiz chiedono: riconoscere se un ragionamento è valido, e scrivere una dimostrazione diretta.

Le regole da riconoscere a colpo d'occhio:

| Regola | Premesse | Conclusione |
|---|---|---|
| modus ponens | $p \to q$, $p$ | $q$ |
| modus tollens | $p \to q$, $\neg q$ | $\neg p$ |
| sillogismo ipotetico | $p \to q$, $q \to r$ | $p \to r$ |
| sillogismo disgiuntivo | $p \vee q$, $\neg p$ | $q$ |

Le due **fallacie**: da $p \to q$ e $q$ concludere $p$; da $p \to q$ e $\neg p$ concludere $\neg q$. In tutte e due il controesempio è $p$ falsa e $q$ vera: la strada è bagnata, ma non piove.

- **Non valida**: si parte dalla conclusione falsa, si fissano le lettere che la rendono falsa, e si prova a rendere vere tutte le premesse. Se ci si riesce, quella riga è il controesempio.
- **Valida**: si scrive una **catena di regole**, in cui ogni passo usa una regola sulle premesse o sui passi già fatti.
- **Dimostrazione diretta**: l'ipotesi si riscrive con la definizione. Pari è $2k$, dispari $2k + 1$, multiplo di 3 è $3k$, razionale è una frazione di interi. Per due numeri diversi servono due lettere diverse.
- **Con gli insiemi**: per dimostrare $A \subseteq B$ si prende un elemento qualsiasi di $A$ e si mostra che sta in $B$. Per un'uguaglianza, le due inclusioni.
- **Controesempio**: un «per ogni» falso si smentisce con un caso solo. $2^{11} - 1 = 2047 = 23 \cdot 89$ smentisce «$2^n - 1$ è primo per ogni $n$ primo».

::: prova «Se studio, passo. Ho passato l'esame. Quindi ho studiato.» È valida?
No: è la fallacia dell'affermazione del conseguente. Controesempio: non ho studiato e ho passato lo stesso.
:::

> [!RICORDA]
> - Modus ponens afferma l'ipotesi, modus tollens nega la conclusione. Le fallacie fanno il contrario.
> - Non valida: conclusione falsa, premesse vere. Valida: catena di regole.
> - Diretta: ipotesi, definizioni, conti, tesi.

## 16 · Dimostrazioni per assurdo (gio 05/11)

A volte la dimostrazione diretta non parte, perché l'ipotesi non dà una formula da usare. Si prova allora a supporre che la tesi sia **falsa**, e si guarda che cosa succede.

Per dimostrare «se $P$ allora $Q$» per assurdo:

1. si suppongono $P$ e **non $Q$**;
2. si ragiona con le definizioni, come in una dimostrazione diretta;
3. ci si ferma a una **contraddizione**, una frase insieme alla sua negazione;
4. si conclude che non $Q$ era impossibile: vale $Q$.

```grafico
titolo: La forma di una dimostrazione per assurdo. Si mettono insieme l'ipotesi e il contrario della tesi (riquadro rosa). Da lì si ricavano una frase C e la sua negazione: la supposizione rosa era impossibile, quindi vale la tesi
x: 0 12.4
y: 0 4.4
assi: no
griglia: no
proporzioni: libere
poligono: 0.5 2.6 3.7 2.6 3.7 3.8 0.5 3.8 | blu | pieno
testo: 2.1 3.2 | blu | "ipotesi P"
poligono: 0.5 0.8 3.7 0.8 3.7 2.0 0.5 2.0 | rosa | pieno
testo: 2.1 1.4 | rosa | "suppongo non Q"
freccia: 3.8 3.2 5.5 2.5 | grigio
freccia: 3.8 1.4 5.5 2.1 | grigio
poligono: 5.6 1.7 8.4 1.7 8.4 2.9 5.6 2.9 | ambra | pieno
testo: 7.0 2.3 | ambra | "C e non C"
freccia: 8.5 2.3 9.7 2.3 | verde
poligono: 9.8 1.7 11.9 1.7 11.9 2.9 9.8 2.9 | verde | pieno
testo: 10.85 2.3 | verde | "quindi Q"
testo: 7.0 3.4 | ambra | "contraddizione"
```

Il primo passo regge tutto: **il contrario della tesi va scritto giusto**.

| La tesi | Il suo contrario |
|---|---|
| $x \ge 1$ oppure $y \ge 1$ | $x < 1$ **e** $y < 1$ |
| $n$ è pari | $n$ è dispari |
| $\sqrt{2}$ è irrazionale | $\sqrt{2}$ è una frazione di interi |
| l'insieme è vuoto | c'è almeno un elemento |
| esiste un $i$ con $s_i \le A$ | per ogni $i$, $s_i > A$ |

Gli esempi del libro:

- **Se $n^2$ è pari, $n$ è pari.** Suppongo $n^2$ pari e $n$ dispari, $n = 2m + 1$. Allora $n^2 = 2(2m^2 + 2m) + 1$ è dispari: contraddizione.
- **$\sqrt{2}$ non è una frazione.** Suppongo $\sqrt{2} = \frac{p}{q}$ ridotta ai minimi termini. Da $p^2 = 2q^2$ si ricava che $p$ è pari, e poi che anche $q$ lo è: la frazione non era ridotta.
- **Somma almeno 2.** Se $x + y \ge 2$, uno dei due è almeno 1. Suppongo $x < 1$ e $y < 1$: sommando, $x + y < 2$.
- **Insiemi e conteggi.** Per «è vuoto» si suppone che ci sia un elemento; per «almeno due uguali» si suppone «tutti diversi» e si conta.

Si sceglie l'assurdo quando il contrario della tesi dà **più informazioni** dell'ipotesi: «$n$ dispari» ha una formula, «$n^2$ pari» no.

::: prova Qual è il contrario di «tutti gli studenti hanno passato l'esame»?
«Almeno uno studente non l'ha passato». Non «nessuno l'ha passato».
:::

> [!RICORDA]
> - Per assurdo: ipotesi più contrario della tesi, fino a una frase con la sua negazione.
> - Il contrario si scrive con De Morgan e le regole dei quantificatori: è il caso minimo che rende falsa la tesi.
> - Contrapposizione: da non $Q$ a non $P$. Assurdo: da $P$ e non $Q$ a una contraddizione qualunque.

## Verso l'esame

- **Quiz**: riconoscere una regola o una fallacia, trovare la riga che smentisce un'argomentazione, scrivere la negazione di una frase con connettivi e quantificatori.
- **Riconoscere il metodo** di una dimostrazione dalla prima riga: che cosa suppone.
- **Domanda aperta facoltativa**: una dimostrazione corta, con il metodo dichiarato, le definizioni usate e la conclusione.
- Le simulazioni 2023/24 che ho non hanno domande sulle dimostrazioni; ne hanno sui valori di verità e sulla formalizzazione con i quantificatori.
- Appelli 2026/27: venerdì 29/01/2027 e giovedì 18/02/2027, alle 9:00.

## Domande di ripasso

::: domanda Che differenza c'è tra modus tollens e negazione dell'antecedente?
Il modus tollens nega la conclusione e ricava la negazione dell'ipotesi: è valido. La fallacia nega l'ipotesi e pretende la negazione della conclusione.
:::

::: domanda Come si mostra che un'argomentazione non è valida?
Con un controesempio: valori delle lettere che rendono vere tutte le premesse e falsa la conclusione.
:::

::: domanda Come comincia una dimostrazione diretta di «se $n$ è dispari, allora $n^2$ è dispari»?
«Sia $n$ dispari: allora $n = 2k + 1$ per un intero $k$.»
:::

::: domanda Che cosa si suppone in una dimostrazione per assurdo di «se $P$ allora $Q$»?
$P$ vera e $Q$ falsa.
:::

::: domanda Qual è il contrario di «$x \ge 1$ oppure $y \ge 1$»?
«$x < 1$ e $y < 1$»: l'«oppure» diventa «e».
:::

::: domanda Perché nella dimostrazione su $\sqrt{2}$ si prende la frazione ridotta ai minimi termini?
Perché la contraddizione è proprio con quello: si scopre che numeratore e denominatore sono tutti e due pari.
:::

## Quiz d'esame

Su questi argomenti nelle simulazioni d'esame 2023/24 che ho non ci sono domande. Le domande qui sotto sono **sul modello** dei quiz di logica dell'esame e delle domande di autoverifica del libro; la terza usa la domanda 2 dell'autoverifica del capitolo 2. Le risposte sulle argomentazioni le ho controllate con un programma, su tutte le righe della tavola.

```quiz
D: Sul modello dei quiz sulle regole. Quale di queste argomentazioni è valida?
+ $p \vee q$, $p \to r$, $q \to r$, quindi $r$
- $p \to q$, $r \to q$, $q$, quindi $p \vee r$
- $p \to q$, $q$, quindi $p$
- $p \to q$, $\neg p$, quindi $\neg q$
- $p \vee q$, $p$, quindi $\neg q$
= È la dimostrazione per casi: uno dei due vale, e tutti e due portano a $r$. La più insidiosa è la seconda: con $p$ e $r$ false e $q$ vera le premesse sono vere e la conclusione falsa.

D: Sul modello dei quiz sulle regole. L'argomentazione «$p \to q$, $\neg q \vee r$, $\neg r$, quindi $\neg p$» è valida. Con quali regole si dimostra?
+ sillogismo disgiuntivo, poi modus tollens
- modus ponens, poi addizione
- due volte modus ponens
- sillogismo ipotetico, poi modus ponens
- non si può: non è valida
= Da $\neg q \vee r$ e $\neg r$ segue $\neg q$; da $p \to q$ e $\neg q$ segue $\neg p$. La più insidiosa è l'ultima: l'ho controllata su tutte le otto righe, è valida.

D: Dall'autoverifica del capitolo 2, domanda 2. Che differenza c'è tra una dimostrazione diretta e una per assurdo?
+ in quella per assurdo si suppone anche la negazione della conclusione, in quella diretta no
- in quella diretta non si usano le ipotesi
- quella per assurdo vale solo per i numeri interi
- in quella per assurdo si suppone la negazione delle ipotesi
- nessuna: sono due nomi dello stesso metodo
= È la risposta ufficiale. La più insidiosa è la quarta: si nega la conclusione, non l'ipotesi.

D: Sul modello delle domande sulle negazioni. Qual è il contrario di «per ogni $x$ esiste un $y$ con $x < y$»?
+ esiste un $x$ per cui, per ogni $y$, $x \ge y$
- per ogni $x$ esiste un $y$ con $x \ge y$
- esiste un $x$ ed esiste un $y$ con $x \ge y$
- per ogni $x$ e per ogni $y$, $x \ge y$
- esiste un $x$ per cui, per ogni $y$, $x < y$
= Negando si scambiano i quantificatori e si nega la frase finale. La più insidiosa è la seconda, che nega solo la disuguaglianza.

D: Sul modello degli esercizi del §2.1. «Per ogni intero $n \ge 0$, $n^2 + n + 17$ è primo.» Qual è il più piccolo controesempio?
N: 16
= $16^2 + 16 + 17 = 289 = 17^2$. Per $n$ da 0 a 15 il numero è primo: controllato con un programma.

D: Sul modello degli esercizi del §2.2. Una dimostrazione suppone «$a + b > 10$, $a \le 5$ e $b \le 5$» e arriva a «$a + b \le 10$». Che cosa ha dimostrato?
+ se $a + b > 10$, allora $a > 5$ oppure $b > 5$
- se $a + b > 10$, allora $a > 5$ e $b > 5$
- se $a \le 5$ e $b \le 5$, allora $a + b > 10$
- che $a + b = 10$
- niente: è arrivata a una contraddizione
= Ha supposto l'ipotesi e il contrario della tesi: la tesi è il contrario di «$a \le 5$ e $b \le 5$», cioè un «oppure». La più insidiosa è la seconda, con «e» al posto di «oppure».

D: Sul modello degli esercizi del §2.1. Per dimostrare in modo diretto che $A \cap B \subseteq A$, come si comincia?
+ sia $x$ un elemento di $A \cap B$
- sia $x$ un elemento di $A$
- supponiamo che $A \cap B$ non sia contenuto in $A$
- sia $A = \{1, 2\}$ e $B = \{2, 3\}$
- supponiamo che $A \cap B = A$
= Per un'inclusione si prende un elemento qualsiasi del primo insieme. La più insidiosa è la quarta: un esempio non è una dimostrazione. La terza sarebbe l'inizio di una dimostrazione per assurdo.

D: Sul modello degli esercizi sui conteggi. Quattro squadre giocano sette partite. Perché almeno una coppia di squadre si è incontrata due volte?
+ perché le coppie di squadre sono solo 6
- perché 7 è dispari
- perché ogni squadra gioca contro tutte le altre due volte
- perché le squadre sono pari
- non è detto che sia successo
= È la domanda 3 dell'autoverifica del capitolo 2: se ogni coppia giocasse al massimo una volta, le partite sarebbero al massimo 6. La più insidiosa è l'ultima: 7 partite in 6 coppie obbligano a una ripetizione.
```

## Fonti

- Le lezioni complete: [15 · Esercizi su regole di inferenza e dimostrazioni dirette](15_esercizi_regole_dimostrazioni_dirette.html) e [16 · Dimostrazioni per assurdo](16_dimostrazioni_per_assurdo.html), con gli esempi, i disegni e gli esercizi.
- Libro di testo del corso, parte 2 (Johnsonbaugh, cap. 1 e 2), §1.4, §2.1 e §2.2, con le soluzioni ufficiali degli esercizi e delle autoverifiche pubblicate sul Moodle del canale A; F. Cardone, «Appunti sulle tecniche di dimostrazione».
- Diario delle lezioni del canale B (Berardi).
