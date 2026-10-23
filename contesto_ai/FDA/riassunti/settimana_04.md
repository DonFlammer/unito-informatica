---
corso: FDA
lezione: S4
tipo: riassunto
titolo: "Settimana 4: i quantificatori"
data: 2026-10-23
docenti: Stefano Berardi
sopratitolo: Riassunto settimanale · Fondamenti dell'Informatica · Canale B · 19/10 – 23/10/2026
descrizione: >-
  Riassunto della settimana 4 di Fondamenti dell'Informatica (canale B, libro parte 2, §1.5–1.6): funzioni
  proposizionali e dominio, «per ogni» ed «esiste», controesempio e testimone, traduzione di «ogni» e «qualche»,
  De Morgan per i quantificatori, «per ogni» come lunga congiunzione ed «esiste» come lunga disgiunzione, quando un
  quantificatore si distribuisce, le quattro regole di inferenza, i quantificatori annidati, l'ordine e la negazione.
lede: >-
  Le tre lezioni sui quantificatori in poche pagine: quando una frase con «per ogni» o «esiste» è vera, come si
  traduce e come si nega, perché l'ordine di due quantificatori cambia il significato, e il quiz vero della
  simulazione d'esame.
materiale: libro
simboli_logici: quantificatori
scheda:
  Lezioni: "[09](09_quantificatori.html) lun 19/10, §1.5 · [10](10_quantificatori_e_connettivi.html) gio 22/10, §1.5 · [11](11_quantificatori_annidati.html) ven 23/10, §1.6"
  Tempo di ripasso: 40 minuti
fonte: >-
  Gli appunti delle lezioni 09, 10 e 11 di Fondamenti dell'Informatica (canale B), scritti sul libro di testo, parte 2
  (Johnsonbaugh, cap. 1), §1.5–1.6
appunti_html: appunti/FDA/riassunto_settimana_04.html
genera_html: true
---

## In breve

- Una **funzione proposizionale** è una frase con una variabile, come «$n$ è dispari»: diventa vera o falsa quando si sceglie il valore. I valori possibili sono il **dominio**.
- **Per ogni** ($\forall$) è vera se la frase vale per tutti i valori: per smentirla basta un **controesempio**. **Esiste** ($\exists$) è vera se vale per almeno uno: basta un **testimone**.
- «Ogni A è B» si scrive con la freccia, «qualche A è B» con la «e».
- **De Morgan**: negare «per ogni» dà «esiste… non», negare «esiste» dà «per ogni… non».
- Su un dominio finito «per ogni» è una lunga «e» ed «esiste» una lunga «o». Per questo «per ogni» si distribuisce sulla «e» ed «esiste» sulla «o», ma non al contrario.
- Con due variabili servono due quantificatori, e **l'ordine conta**: «per ogni numero ce n'è uno più grande» è vera sugli interi, «c'è un numero più grande di tutti» no.
- Per negare una frase con più quantificatori si girano tutti, nello stesso ordine, e il «non» finisce sulla frase interna.

## 09 · Per ogni ed esiste (lun 19/10)

L'esempio 1.5.3 (a) del libro è una frase su un numero intero positivo: «il quadrato del numero più il suo doppio è dispari», cioè $n^2 + 2n$ dispari. È vera per 1, 3, 5, … e falsa per i pari.

```grafico
titolo: La frase «$n^2 + 2n$ è dispari» sui primi otto interi positivi: verde dove è vera, rosa dove è falsa. «Per ogni» chiede che siano tutte verdi (falso: il 2 è un controesempio); «esiste» che ce ne sia almeno una (vero: l'1 è un testimone).
x: 0 9
y: 0 2.2
assi: no
griglia: no
proporzioni: libere
poligono: 0.58 0.4 1.42 0.4 1.42 1.3 0.58 1.3 | verde
testo: 1 0.85 | verde | "1"
testo: 1 1.75 | verde | "V"
poligono: 1.58 0.4 2.42 0.4 2.42 1.3 1.58 1.3 | rosa
testo: 2 0.85 | rosa | "2"
testo: 2 1.75 | rosa | "F"
poligono: 2.58 0.4 3.42 0.4 3.42 1.3 2.58 1.3 | verde
testo: 3 0.85 | verde | "3"
testo: 3 1.75 | verde | "V"
poligono: 3.58 0.4 4.42 0.4 4.42 1.3 3.58 1.3 | rosa
testo: 4 0.85 | rosa | "4"
testo: 4 1.75 | rosa | "F"
poligono: 4.58 0.4 5.42 0.4 5.42 1.3 4.58 1.3 | verde
testo: 5 0.85 | verde | "5"
testo: 5 1.75 | verde | "V"
poligono: 5.58 0.4 6.42 0.4 6.42 1.3 5.58 1.3 | rosa
testo: 6 0.85 | rosa | "6"
testo: 6 1.75 | rosa | "F"
poligono: 6.58 0.4 7.42 0.4 7.42 1.3 6.58 1.3 | verde
testo: 7 0.85 | verde | "7"
testo: 7 1.75 | verde | "V"
poligono: 7.58 0.4 8.42 0.4 8.42 1.3 7.58 1.3 | rosa
testo: 8 0.85 | rosa | "8"
testo: 8 1.75 | rosa | "F"
```

| Frase | Quando è vera | Come si smentisce |
|---|---|---|
| $\forall x\, P(x)$ | $P$ vale per **tutti** i valori del dominio | un controesempio |
| $\exists x\, P(x)$ | $P$ vale per **almeno un** valore | controllando tutti i valori |
| «ogni A è B» | $\forall x\,(A(x) \to B(x))$ | un A che non è B |
| «qualche A è B» | $\exists x\,(A(x) \wedge B(x))$ | nessun A è B |

- **Il dominio cambia la risposta**: $\exists x\,(x^2 = 2)$ è falsa sugli interi e vera sui reali.
- Un programma controlla un «per ogni» su un dominio finito con un ciclo che si ferma al primo controesempio, e un «esiste» al primo testimone: è lo schema delle sentinelle di Programmazione I.
- **De Morgan**: $\neg\,\forall x\, P(x) \equiv \exists x\, \neg P(x)$ e $\neg\,\exists x\, P(x) \equiv \forall x\, \neg P(x)$. «Non è tutto oro quel che luccica» vuol dire «qualcosa che luccica non è oro».

::: prova Qual è la negazione di «ogni studente ha superato l'esame»?
«Qualche studente non ha superato l'esame». Non «nessuno l'ha superato»: quello è più forte.
:::

> [!RICORDA]
> - Per ogni: un controesempio basta a smentirla. Esiste: un testimone basta a dimostrarla.
> - «Ogni» con la freccia, «qualche» con la «e».

## 10 · Quantificatori, «e» e «o» (gio 22/10)

Se il dominio ha pochi elementi, per esempio 1, 2 e 3, i quantificatori si possono scrivere per esteso.

```grafico
titolo: Sul dominio {1, 2, 3} «per ogni» è una congiunzione con un termine per elemento, «esiste» una disgiunzione. La negazione scambia le due righe: è De Morgan.
x: 0 12
y: 0.4 4.4
assi: no
griglia: no
proporzioni: libere
testo: 1.3 3.3 | blu | "∀x P(x)"
testo: 2.9 3.3 | grigio | "="
poligono: 3.5 2.85 5.3 2.85 5.3 3.75 3.5 3.75 | blu
testo: 4.4 3.3 | blu | "P(1)"
testo: 5.95 3.3 | blu | "∧"
poligono: 6.6 2.85 8.4 2.85 8.4 3.75 6.6 3.75 | blu
testo: 7.5 3.3 | blu | "P(2)"
testo: 9.05 3.3 | blu | "∧"
poligono: 9.7 2.85 11.5 2.85 11.5 3.75 9.7 3.75 | blu
testo: 10.6 3.3 | blu | "P(3)"
testo: 1.3 1.4 | ambra | "∃x P(x)"
testo: 2.9 1.4 | grigio | "="
poligono: 3.5 0.95 5.3 0.95 5.3 1.85 3.5 1.85 | ambra
testo: 4.4 1.4 | ambra | "P(1)"
testo: 5.95 1.4 | ambra | "∨"
poligono: 6.6 0.95 8.4 0.95 8.4 1.85 6.6 1.85 | ambra
testo: 7.5 1.4 | ambra | "P(2)"
testo: 9.05 1.4 | ambra | "∨"
poligono: 9.7 0.95 11.5 0.95 11.5 1.85 9.7 1.85 | ambra
testo: 10.6 1.4 | ambra | "P(3)"
```

- Da qui vengono le leggi di De Morgan per i quantificatori: sono quelle per «e» e «o», con tanti termini.
- **Distribuzione**: $\forall x\,(P(x) \wedge Q(x)) \equiv \forall x\, P(x) \wedge \forall x\, Q(x)$ ed $\exists x\,(P(x) \vee Q(x)) \equiv \exists x\, P(x) \vee \exists x\, Q(x)$. Le altre due no: «ogni intero è positivo o non positivo» è vera, «tutti positivi oppure tutti non positivi» è falsa.

| Regola | Da | Si ricava |
|---|---|---|
| particolarizzazione universale | $\forall x\, P(x)$ | $P(d)$ per ogni $d$ |
| generalizzazione universale | $P(d)$ per un $d$ **qualsiasi** | $\forall x\, P(x)$ |
| particolarizzazione esistenziale | $\exists x\, P(x)$ | $P(d)$ per **qualche** $d$, che non si sceglie |
| generalizzazione esistenziale | $P(d)$ per un $d$ | $\exists x\, P(x)$ |

«Tutti gli uomini sono mortali; Socrate è un uomo; quindi Socrate è mortale» usa la particolarizzazione universale e poi il modus ponens della lezione 08.

::: prova Sul dominio delle persone, da «esiste qualcuno che parla inglese e francese» segue «esiste qualcuno che parla inglese, ed esiste qualcuno che parla francese»? E il contrario?
Sì: la stessa persona fa da testimone per le due parti. Il contrario no: possono essere due persone diverse.
:::

> [!RICORDA]
> - $\forall$ è una lunga $\wedge$, $\exists$ una lunga $\vee$.
> - $\forall$ si distribuisce su $\wedge$, $\exists$ su $\vee$. Le altre due coppie no.

## 11 · Quantificatori annidati (ven 23/10)

Alla festa del corso, la frase «la ragazza ha ballato con il ragazzo» ha due variabili, una per la ragazza e una per il ragazzo. Si scrive $B(d, u)$, e per farne una proposizione servono due quantificatori. Si leggono da sinistra a destra: il primo sceglie per primo.

```grafico
titolo: A sinistra «per ogni $x$ esiste $y$»: ogni $x$ ha la sua freccia, e le frecce possono arrivare in punti diversi. A destra «esiste $y$ per ogni $x$»: tutte le frecce arrivano nello stesso $y$.
x: 0 12
y: 0 5
assi: no
griglia: no
proporzioni: libere
testo: 2.9 4.6 | blu | "∀x ∃y"
punto: 1.2 3.4 | blu
punto: 1.2 2.2 | blu
punto: 1.2 1 | blu
punto: 4.6 3.4 | ambra
punto: 4.6 2.2 | ambra
punto: 4.6 1 | ambra
freccia: 1.35 3.4 4.45 3.4 | grigio
freccia: 1.35 2.2 4.45 2.2 | grigio
freccia: 1.35 1 4.45 1 | grigio
testo: 9.1 4.6 | blu | "∃y ∀x"
punto: 7.4 3.4 | blu
punto: 7.4 2.2 | blu
punto: 7.4 1 | blu
punto: 10.8 2.2 | ambra
freccia: 7.55 3.35 10.65 2.3 | grigio
freccia: 7.55 2.2 10.65 2.2 | grigio
freccia: 7.55 1.05 10.65 2.1 | grigio
testo: 1.2 0.3 | blu | "x"
testo: 4.6 0.3 | ambra | "y"
testo: 7.4 0.3 | blu | "x"
testo: 10.8 0.3 | ambra | "y"
```

| Formula | Vera quando |
|---|---|
| $\forall x\, \forall y\, P(x, y)$ | tutte le coppie vanno bene |
| $\forall x\, \exists y\, P(x, y)$ | per ogni $x$ si trova un $y$, che può cambiare con $x$ |
| $\exists x\, \forall y\, P(x, y)$ | c'è un $x$ che va bene con tutti gli $y$ |
| $\exists x\, \exists y\, P(x, y)$ | c'è almeno una coppia |

- Due quantificatori **dello stesso tipo** si possono scambiare; di tipi diversi no. Sugli interi $\forall x\, \exists y\, (y > x)$ è vera, $\exists y\, \forall x\, (y > x)$ è falsa.
- **Il gioco**: l'avversario sceglie le variabili con $\forall$, tu quelle con $\exists$, nell'ordine della frase. La frase è vera se vinci comunque giochi l'avversario.
- **Negare**: si girano tutti i quantificatori, nello stesso ordine, e il «non» va sulla frase interna: $\neg\,\forall x\, \exists y\, P \equiv \exists x\, \forall y\, \neg P$.

::: prova Sugli interi, $\exists x\, \forall y\, (x \cdot y = 0)$ è vera?
Sì: con $x = 0$ il prodotto è 0 per ogni $y$. L'avversario sceglie $y$ dopo di te, ma non può battere lo 0.
:::

> [!RICORDA]
> - L'ordine dei quantificatori conta quando sono di tipo diverso.
> - Negando, ogni $\forall$ diventa $\exists$ e viceversa, nello stesso ordine.

## Verso l'esame

- **Negare frasi con due quantificatori**: è il quiz 6 della simulazione 2 del 2023/24, qui sotto.
- **Vero o falso su un dominio**: si gioca contro l'avversario, nell'ordine dei quantificatori, e si controlla il dominio.
- **Domande sì/no** su argomentazioni e quantificatori: il formato dei quiz che il docente ha fatto in aula giovedì 22/10.
- L'esame è un quiz di 9 domande da 3 punti in 45 minuti, con Safe Exam Browser. Appelli 2026/27: venerdì 29/01/2027 e giovedì 18/02/2027, alle 9:00.

## Domande di ripasso

::: domanda Che differenza c'è tra un controesempio e un testimone?
Un controesempio è un valore per cui la frase è falsa, e smentisce un «per ogni». Un testimone è un valore per cui è vera, e dimostra un «esiste».
:::

::: domanda Come si scrive «ogni studente è iscritto» e «qualche studente è iscritto»?
$\forall x\,(S(x) \to I(x))$ ed $\exists x\,(S(x) \wedge I(x))$.
:::

::: domanda Qual è la negazione di $\exists x\, P(x)$?
$\forall x\, \neg P(x)$: nessun valore rende vera $P$.
:::

::: domanda Su quale connettivo si distribuisce il «per ogni»?
Sulla «e»: $\forall x\,(P(x) \wedge Q(x)) \equiv \forall x\, P(x) \wedge \forall x\, Q(x)$. Sulla «o» no.
:::

::: domanda Che cosa dice la particolarizzazione universale?
Che da $\forall x\, P(x)$ si ricava $P(d)$ per qualunque elemento $d$ del dominio.
:::

::: domanda Perché $\forall x\, \exists y$ ed $\exists y\, \forall x$ non dicono la stessa cosa?
Nella prima $y$ può cambiare a seconda di $x$; nella seconda deve essere uno solo, buono per tutti gli $x$.
:::

## Quiz d'esame

Le prime tre domande sono il quiz 6 della simulazione d'esame 2 del 2023/24, dalla «Guida degli studenti» del gruppo TSI: nella schermata le opzioni del menù non si vedono, quindi le risposte sbagliate sono ricostruite. Le altre sono **sul modello** dei quiz della simulazione, con gli argomenti della settimana; tutte le risposte le ho controllate con un programma sui domini finiti.

```quiz
D: Simulazione d'esame 2 del 2023/24, quiz 6. Qual è la negazione di «Una donna ha ballato con ogni uomo»?
+ Ogni donna non ha ballato con qualche uomo
- Nessuna donna ha ballato con nessun uomo
- Una donna non ha ballato con nessun uomo
- Ogni uomo ha ballato con qualche donna
- Qualche donna non ha ballato con qualche uomo
= $\neg\,\exists d\, \forall u\, B(d, u) \equiv \forall d\, \exists u\, \neg B(d, u)$: per ogni donna c'è un uomo con cui non ha ballato. La risposta più insidiosa è l'ultima, $\exists d\, \exists u\, \neg B$: è la negazione di «ogni donna ha ballato con ogni uomo».

D: Simulazione d'esame 2 del 2023/24, quiz 6. Qual è la negazione di «Tutti gli uomini hanno ballato con qualche donna»?
+ Qualche uomo non ha ballato con nessuna donna
- Nessun uomo ha ballato con qualche donna
- Tutti gli uomini non hanno ballato con qualche donna
- Qualche donna non ha ballato con nessun uomo
- Qualche uomo ha ballato con tutte le donne
= $\neg\,\forall u\, \exists d\, B \equiv \exists u\, \forall d\, \neg B$. La risposta più insidiosa è la quarta, che scambia i ruoli di uomini e donne: la variabile scelta per prima resta l'uomo.

D: Simulazione d'esame 2 del 2023/24, quiz 6. Qual è la negazione di «Ogni donna ha ballato con ogni uomo»?
+ Qualche donna non ha ballato con qualche uomo
- Nessuna donna ha ballato con nessun uomo
- Ogni donna non ha ballato con nessun uomo
- Una donna ha ballato con ogni uomo
- Ogni donna non ha ballato con qualche uomo
= $\neg\,\forall d\, \forall u\, B \equiv \exists d\, \exists u\, \neg B$: basta una coppia che non ha ballato. La risposta più insidiosa è «nessuna donna ha ballato con nessun uomo»: è il contrario estremo, non la negazione.

D: Sul modello della simulazione 2. Sugli interi, quale frase è vera?
+ $\exists x\, \forall y\, (x \cdot y = 0)$
- $\exists y\, \forall x\, (y > x)$
- $\forall x\, \exists y\, (x \cdot y = 1)$
- $\forall x\, (x^2 > 0)$
- $\forall x\, \forall y\, (x + y \ne 0)$
= Con $x = 0$ il prodotto è 0 per ogni $y$. La risposta più insidiosa è la seconda, che scambia l'ordine di «ogni numero ha un numero più grande»: un numero più grande di tutti non c'è. La terza è falsa per $x = 2$, la quarta per $x = 0$, l'ultima per $x = 1$, $y = -1$.

D: Sul modello della simulazione 2. Qual è la negazione di $\forall x\,(P(x) \to Q(x))$?
+ $\exists x\,(P(x) \wedge \neg Q(x))$
- $\forall x\,(P(x) \to \neg Q(x))$
- $\exists x\,(\neg P(x) \to \neg Q(x))$
- $\forall x\,(\neg P(x) \wedge Q(x))$
- $\exists x\,(P(x) \to \neg Q(x))$
= Il «per ogni» diventa «esiste», e la negazione di $P \to Q$ è $P \wedge \neg Q$ (lezione 07). «Non tutti i P sono Q» vuol dire «c'è un P che non è Q». La risposta più insidiosa è l'ultima: nega la conclusione ma lascia la freccia, che con $P$ falsa è vera a vuoto.

D: Sul modello delle domande sì/no della lezione 10. Quale equivalenza vale per ogni dominio?
+ $\forall x\,(P(x) \wedge Q(x)) \equiv \forall x\, P(x) \wedge \forall x\, Q(x)$
- $\forall x\,(P(x) \vee Q(x)) \equiv \forall x\, P(x) \vee \forall x\, Q(x)$
- $\exists x\,(P(x) \wedge Q(x)) \equiv \exists x\, P(x) \wedge \exists x\, Q(x)$
- $\neg\,\forall x\, P(x) \equiv \forall x\, \neg P(x)$
- $\forall x\, \exists y\, P(x, y) \equiv \exists y\, \forall x\, P(x, y)$
= «Per ogni» è una lunga «e», e si distribuisce sulla «e». La risposta più insidiosa è la terza: due testimoni diversi non fanno un testimone comune (un intero pari e uno dispari esistono, uno pari e dispari no). La quarta sbaglia De Morgan, l'ultima scambia l'ordine.

D: Sul modello delle domande sì/no della lezione 10. «Tutti gli iscritti hanno la matricola. Luca è iscritto. Quindi Luca ha la matricola.» Quale regola serve, oltre al modus ponens?
+ La particolarizzazione universale
- La generalizzazione universale
- La particolarizzazione esistenziale
- La generalizzazione esistenziale
- Nessuna: l'argomentazione non è valida
= Da «per ogni $x$, se $x$ è iscritto allora ha la matricola» si passa al caso di Luca, poi il modus ponens chiude. La risposta più insidiosa è la generalizzazione universale, che fa il percorso inverso, da un elemento qualsiasi a tutti.

D: Sul modello della simulazione 2. Sul dominio delle persone, con $A(x, y)$ = «$x$ ama $y$», come si scrive «tutti amano qualcuno»?
+ $\forall x\, \exists y\, A(x, y)$
- $\exists y\, \forall x\, A(x, y)$
- $\forall y\, \exists x\, A(x, y)$
- $\exists x\, \forall y\, A(x, y)$
- $\forall x\, \forall y\, A(x, y)$
= Per ogni persona $x$ c'è una persona $y$, che può cambiare con $x$, amata da $x$. La risposta più insidiosa è la seconda, «c'è qualcuno amato da tutti»: l'ordine scambiato. La terza dice «tutti sono amati da qualcuno».
```

## Fonti

- Le lezioni complete: [09 · Quantificatori](09_quantificatori.html), [10 · Quantificatori, «e» e «o», e le regole di inferenza](10_quantificatori_e_connettivi.html), [11 · Quantificatori annidati](11_quantificatori_annidati.html), con i programmi, i quiz e gli esercizi.
- Libro di testo, parte 2 (Johnsonbaugh, cap. 1), §1.5–1.6, sull'edizione originale e sulle soluzioni degli esercizi pubblicate sul Moodle del canale A; diario del canale B nella [scheda del corso](https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/corso.md).
- Simulazione d'esame 2 del 2023/24, quiz 6, dalla «Guida degli studenti» del gruppo TSI.
