---
corso: MDAG
modulo: AG
lezione: L14
titolo: Applicazioni lineari I
docenti: Reto Buzano e Marco Radeschi
sopratitolo: Parte 2 (modB) · Algebra lineare e Geometria · Canali A, B e C · Lezione L14
descrizione: >-
  Appunti della lezione L14 di Algebra lineare e Geometria (MDAG, parte 2): applicazioni lineari, esempi e non
  esempi, l'applicazione associata a una matrice, nucleo e immagine, iniettività e suriettività, teorema della
  dimensione, con quiz nello stile dell'esame ed esercizi svolti.
lede: >-
  Le macchine che trasformano vettori in vettori rispettando somme e multipli: come si riconoscono e perché ogni
  matrice ne descrive una. Poi che cosa distruggono, che cosa riescono a produrre, e una regola di conteggio che
  lega le due cose e all'esame fa risparmiare molti conti.
materiale: dispense
scheda:
  Dispense: lezione 14 · pp. 68–73
  Libro: Martelli, §4.1 e §4.2
  Docenti: Reto Buzano e Marco Radeschi · A.A. 2026/27
  Tempo di studio: 3–4 ore, anche in più volte
fonte: >-
  Dispense 2026 del corso (Buzano, Radeschi), lezione 14 «Applicazioni lineari I»; B. Martelli, Geometria e algebra lineare, §4.1 e §4.2
appunti_html: appunti/MDAG/L14_applicazioni_lineari_1.html
genera_html: true
---

## In breve

- Un'**applicazione lineare** è una macchina che trasforma vettori in vettori e rispetta due cose: le somme e i multipli. Per esempio: se in entrata metti il doppio, in uscita trovi il doppio.
- Per scoprire che una macchina **non** è lineare basta un solo esempio con i numeri. I segnali tipici sono un numero fisso aggiunto, un quadrato, un prodotto tra le entrate.
- Ogni **matrice**, cioè ogni tabella di numeri, è una macchina lineare: prende un vettore, lo moltiplica e ne restituisce un altro. Nelle colonne della tabella c'è scritto dove vanno i vettori più semplici.
- Il **nucleo** è l'insieme dei vettori che la macchina schiaccia sullo zero. L'**immagine** è l'insieme dei vettori che la macchina riesce a produrre.
- Una macchina è **iniettiva** se entrate diverse danno sempre uscite diverse: succede esattamente quando nel nucleo c'è solo lo zero. È **suriettiva** se riesce a produrre ogni vettore dello spazio di arrivo.
- Il **teorema della dimensione** è una regola di conteggio: quello che entra è uguale a quello che si perde più quello che esce.
- All'esame servono tre cose: riconoscere se una formula è lineare, trovare nucleo e immagine con Gauss, usare il teorema della dimensione per rispondere senza fare conti.

> [!CANALI]
> Le dispense di Algebra lineare e Geometria sono le stesse per i canali A, B e C (Buzano insegna nei canali A e B, Radeschi nei canali B e C), quindi questi appunti valgono per tutti e tre. Cambiano solo i giorni delle lezioni: gli avvisi sono sulla pagina Moodle del corso (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Esame e quiz sono comuni.

## Macchine che rispettano somme e multipli (p. 68)

Al mercato le mele costano 3 euro al chilo. Il banco funziona come una macchina: entra un numero di chili, esce un prezzo in euro.

> [!RIPASSO] che cos'è una funzione
> Una **funzione** è una macchina: metti dentro una cosa e ne esce un'altra. A ogni entrata corrisponde **una sola** uscita.
>
> La macchina ha un nome, di solito una lettera come $f$. La scrittura $f(2)$ si legge «effe di 2» e vuol dire: quello che esce quando entra 2.
>
> Per dare la regola una volta per tutte, al posto dell'entrata si mette una lettera: $f(x) = 3x$. Si legge «effe di x è uguale a 3 per x». Tra un numero e una lettera il segno «per» non si scrive. Con questa regola, se entra 2 esce $3 \cdot 2 = 6$.

La macchina delle mele è proprio $f(x) = 3x$: entrano i chili, escono gli euro. Ha due proprietà che la maggior parte delle macchine non ha.

**Prima proprietà: comprare in due volte o in una volta sola costa uguale.**

- 2 chili costano 6 euro. 5 chili costano 15 euro. In tutto $6 + 15 = 21$ euro.
- 7 chili comprati insieme costano $3 \cdot 7 = 21$ euro.

**Seconda proprietà: quattro volte le mele, quattro volte il prezzo.** 2 chili costano 6 euro, e 8 chili costano $3 \cdot 8 = 24$ euro, cioè 4 volte 6.

Ora due macchine che queste proprietà non le hanno.

**Il taxi.** Un taxi costa 1 euro alla partenza, più 2 euro al chilometro. La regola è $g(x) = 2x + 1$, dove la lettera $x$ indica i chilometri.

- Una corsa di 2 chilometri costa $2 \cdot 2 + 1 = 5$ euro. Una corsa di 5 chilometri costa $2 \cdot 5 + 1 = 11$ euro. In tutto 16 euro.
- Una corsa sola di 7 chilometri costa $2 \cdot 7 + 1 = 15$ euro.

Non è lo stesso. Con due corse separate paghi due volte l'euro di partenza.

**La piastrella.** Una piastrella quadrata con il lato lungo $x$ ha area $x \cdot x$. La regola è $h(x) = x^2$. Il piccolo 2 in alto si legge «al quadrato» e vuol dire: il numero moltiplicato per sé stesso.

- Con il lato 2 l'area è $2 \cdot 2 = 4$. Con il lato 5 l'area è $5 \cdot 5 = 25$. In tutto 29.
- Con il lato 7 l'area è $7 \cdot 7 = 49$.

Non è lo stesso. E se il lato diventa 4 volte più lungo, da 2 a 8, l'area passa da 4 a 64: diventa 16 volte più grande, non 4.

Ecco i conti delle tre macchine, uno accanto all'altro.

| Macchina | Entra $2 + 5$ | Entrano 2 e 5, poi sommi le uscite | Entra $4 \cdot 2$ | Entra 2, poi moltiplichi l'uscita per 4 | Rispetta somme e multipli? |
|---|--:|--:|--:|--:|---|
| mele: $f(x) = 3x$ | $21$ | $6 + 15 = 21$ | $24$ | $4 \cdot 6 = 24$ | sì |
| taxi: $g(x) = 2x + 1$ | $15$ | $5 + 11 = 16$ | $17$ | $4 \cdot 5 = 20$ | no |
| piastrella: $h(x) = x^2$ | $49$ | $4 + 25 = 29$ | $64$ | $4 \cdot 4 = 16$ | no |

> [!IDEA]
> Una macchina è **lineare** quando rispetta le somme e i multipli. Sommare prima di entrare, oppure dopo essere usciti, dà lo stesso risultato. Moltiplicare per un numero prima di entrare, oppure dopo, dà lo stesso risultato.

Guarda la figura qui sotto. Una macchina sui numeri si disegna così: in orizzontale le entrate, in verticale le uscite. La macchina delle mele dà una retta che passa per l'**origine**, cioè per il punto in cui i due assi si incrociano. Anche il taxi dà una retta, ma non passa per l'origine: con zero chilometri paghi già 1 euro. Basta questo a rovinare tutto.

```grafico
titolo: $f(x) = 3x$ è lineare; $g(x) = 2x + 1$ no: il grafico è una retta, ma non passa per l'origine
proporzioni: libere
x: -2 2
y: -4 5
retta: 0 0 1.2 3.6 | accento | $f(x) = 3x$ | o
retta: 0 1 -1.2 -1.4 | blu | $g(x) = 2x + 1$ | se
punto: 0 0 | accento
punto: 0 1 | blu
```

### Dalle macchine sui numeri alle macchine sui vettori

Le macchine di questo corso non lavorano su un numero solo: lavorano sui vettori.

Ricorda: un **vettore** è una lista di numeri, come $(3, 2)$. Puoi pensarlo come uno spostamento su una mappa a quadretti: «3 passi a destra, 2 in su» (lezione L05). I vettori fatti di due numeri reali formano l'insieme $\R^2$, che si legge «erre due». Quelli fatti di tre numeri formano $\R^3$, «erre tre».

Sui vettori si fanno due operazioni.

- **Somma**: si sommano i numeri che stanno nello stesso posto. Per esempio $(1, 1) + (3, 2) = (4, 3)$.
- **Multiplo**: si moltiplica ogni numero del vettore per lo stesso numero. Per esempio $3 \cdot (1, 1) = (3, 3)$.

Prendiamo una macchina sui vettori e chiamiamola $S$, come «stira». Entra un vettore di due numeri, esce un vettore di due numeri. La regola: il primo numero raddoppia, il secondo resta com'è.

$$S(x, y) = (2x,\ y)$$

Controlliamo le somme con i vettori $(1, 1)$ e $(3, 2)$, e i multipli con il vettore $(1, 1)$ e il numero 3. Ogni volta ci sono due strade.

| Strada | Conti | Risultato |
|---|---|---|
| prima sommo, poi entro | $(1, 1) + (3, 2) = (4, 3)$, poi $S(4, 3) = (2 \cdot 4,\ 3)$ | $(8, 3)$ |
| prima entro, poi sommo | $S(1, 1) = (2, 1)$ e $S(3, 2) = (6, 2)$, poi $(2, 1) + (6, 2)$ | $(8, 3)$ |
| prima moltiplico, poi entro | $3 \cdot (1, 1) = (3, 3)$, poi $S(3, 3) = (2 \cdot 3,\ 3)$ | $(6, 3)$ |
| prima entro, poi moltiplico | $S(1, 1) = (2, 1)$, poi $3 \cdot (2, 1)$ | $(6, 3)$ |

Le due strade portano allo stesso vettore, sia per le somme sia per i multipli. Nella prossima sezione vedi come si controlla per tutti i vettori insieme, e non solo su un esempio.

### I nomi: dominio, codominio, immagine

Servono quattro nomi, che ritrovi in ogni pagina delle dispense.

- Lo spazio dei vettori che **entrano** si chiama **dominio**.
- Lo spazio in cui stanno i vettori che **escono** si chiama **codominio**.
- L'uscita che corrisponde a un'entrata si chiama **immagine** di quell'entrata. Per la macchina che stira, l'immagine di $(1, 1)$ è $(2, 1)$.
- Una macchina lineare si chiama **applicazione lineare**. In matematica «funzione», «applicazione» e «mappa» vogliono dire la stessa cosa.

Per scrivere in una riga da dove parte e dove arriva una macchina si usa una freccia:

$$S: \R^2 \to \R^2$$

Si legge «esse da erre due a erre due». A sinistra della freccia c'è il dominio, a destra il codominio. Una macchina che prende tre numeri e ne restituisce due si scrive con $\R^3 \to \R^2$.

Dominio e codominio non devono per forza essere fatti di liste di numeri. Basta che siano **spazi vettoriali**: posti in cui si può sommare e moltiplicare per un numero senza uscire (lezione L05). Anche i polinomi e le matrici formano spazi vettoriali. Lì l'immagine dello spostamento sulla mappa non regge più: restano solo le due regole, somme e multipli.

### Come lo scrivono le dispense

Ora la definizione con le parole e i simboli delle dispense.

> [!DEF] 14.1 · Applicazione lineare
> Siano $V$ e $W$ due spazi vettoriali sullo stesso campo $\K$. Un'**applicazione lineare** è una funzione
> $$f: V \longrightarrow W$$
> tale che
> 1. $f(v + w) = f(v) + f(w)$ per ogni $v, w \in V$;
> 2. $f(\lambda v) = \lambda f(v)$ per ogni $v \in V$ e $\lambda \in \K$.

**Come si legge.** Un pezzo alla volta.

- Le lettere $V$ e $W$ sono i nomi di due spazi vettoriali: il dominio e il codominio. Negli esempi di prima erano tutti e due $\R^2$.
- $\K$ si legge «cappa». Le dispense lo scrivono per dire «i numeri reali oppure i numeri complessi». «Sullo stesso campo» vuol dire: da tutte e due le parti si moltiplica per lo stesso tipo di numeri. In questi appunti pensa sempre ai numeri reali.
- La riga con la freccia lunga si legge «effe da $V$ a $W$»: è la macchina.
- Il simbolo $\in$ si legge «appartiene a». «Per ogni $v, w \in V$» vuol dire: qualunque coppia di vettori tu prenda nel dominio.
- La condizione 1 è la regola delle somme. Si legge «effe di $v$ più $w$ è uguale a effe di $v$ più effe di $w$». A sinistra il segno più somma due vettori che entrano, a destra due vettori che escono.
- $\lambda$ è la lettera greca *lambda* e indica un numero qualsiasi. Un numero che moltiplica un vettore si chiama **scalare**.
- La condizione 2 è la regola dei multipli. Si legge «effe di lambda $v$ è uguale a lambda per effe di $v$».

### Prima conseguenza: lo zero va nello zero

Ogni spazio vettoriale ha un vettore fatto di soli zeri: il **vettore nullo**. Tra i vettori di due numeri è $(0, 0)$. Le dispense lo scrivono con un semplice $0$.

Guarda che cosa fanno le macchine di prima quando entra lo zero.

- Le mele: zero chili costano $3 \cdot 0 = 0$ euro. Esce zero.
- La macchina che stira: entra $(0, 0)$, esce $(2 \cdot 0,\ 0) = (0, 0)$. Esce il vettore nullo.
- Il taxi: zero chilometri costano $2 \cdot 0 + 1 = 1$ euro. **Non** esce zero. E infatti il taxi non è lineare.

Non è un caso. **Ogni applicazione lineare manda il vettore nullo nel vettore nullo.** Il motivo sta nella regola dei multipli, e le dispense lo scrivono in una riga:

$$f(0) = f(0 \cdot 0) = 0 \cdot f(0) = 0.$$

In questa riga lo stesso simbolo indica **tre cose diverse**. Leggila da sinistra, un uguale alla volta.

1. All'inizio, lo zero tra parentesi è il vettore nullo del dominio.
2. Dopo il primo uguale è scritto come un prodotto: il **numero** zero per il vettore nullo. Non è cambiato niente, perché il numero zero per un vettore dà sempre il vettore nullo.
3. Dopo il secondo uguale il numero zero è uscito dalla macchina, per la regola dei multipli.
4. Il numero zero per un vettore qualsiasi dà il vettore nullo: questa volta quello del **codominio**.

### Seconda conseguenza: le ricette restano ricette

Ricorda: una **combinazione lineare** è una ricetta fatta con dei vettori, per esempio «2 parti del primo più 3 parti del secondo» (lezione L06). I numeri della ricetta, qui 2 e 3, si chiamano **coefficienti**.

> [!ESEMPIO] Dove va una ricetta
> Di una macchina lineare $T$ sappiamo solo due cose. Un certo vettore $v_1$ va in $(1, 2)$. Un altro vettore $v_2$ va in $(0, 3)$. I numerini in basso servono a distinguere i due vettori: $v_1$ è «il primo», $v_2$ è «il secondo».
>
> Dove va la ricetta $2v_1 + 3v_2$? Non serve conoscere la formula della macchina. Bastano le due regole.
>
> 1. La regola delle somme spezza la ricetta in due pezzi:
>    $$T(2v_1 + 3v_2) = T(2v_1) + T(3v_2).$$
> 2. La regola dei multipli fa uscire i numeri 2 e 3:
>    $$T(2v_1) + T(3v_2) = 2 \cdot T(v_1) + 3 \cdot T(v_2).$$
> 3. Ora mettiamo le due uscite che conosciamo:
>    $$2 \cdot (1, 2) + 3 \cdot (0, 3).$$
> 4. Facciamo i conti: $(2, 4) + (0, 9) = (2, 13)$.
>
> Quindi la ricetta va in $(2, 13)$.

La macchina ha trasformato «2 parti del primo vettore più 3 parti del secondo» in «2 parti della prima uscita più 3 parti della seconda uscita». **Stessi coefficienti, ingredienti trasformati.**

Le dispense scrivono la stessa cosa con le lettere, per una ricetta con un numero qualsiasi di ingredienti:

$$f(\lambda_1 v_1 + \cdots + \lambda_k v_k) = \lambda_1 f(v_1) + \cdots + \lambda_k f(v_k).$$

Un pezzo alla volta.

- $v_1, \dots, v_k$ è un elenco di vettori. Il primo si chiama $v_1$, l'ultimo $v_k$, e la lettera $k$ dice quanti sono.
- $\lambda_1, \dots, \lambda_k$ sono i coefficienti della ricetta, uno per ogni vettore.
- I puntini vogliono dire «e avanti così, con la stessa regola».
- Tutta la riga, a parole: una macchina lineare manda una ricetta nella ricetta con gli stessi coefficienti, fatta con le uscite.

> [!ESAME] La proprietà che userai di più
> Se sai dove una macchina lineare manda pochi vettori, sai dove manda tutte le loro combinazioni. Per questo negli esercizi basta conoscere la macchina sui vettori di una base. Allenati con l'esercizio 5.

::: prova La macchina $g(x) = x + 5$ rispetta le somme? Prova con 1 e 2.
No. Se entra la somma: $g(1 + 2) = g(3) = 3 + 5 = 8$.

Se entrano uno alla volta: $g(1) = 6$ e $g(2) = 7$, e la somma delle uscite è 13.

8 e 13 sono diversi. Si poteva capire anche dallo zero: $g(0) = 5$, non 0.
:::

::: prova Di una macchina lineare $T$ sai che $T(v) = (1, 4)$ e $T(w) = (2, 0)$. Quanto fa $T(v + w)$? E $T(3v)$?
Per la regola delle somme: $T(v + w) = T(v) + T(w) = (1, 4) + (2, 0) = (3, 4)$.

Per la regola dei multipli: $T(3v) = 3 \cdot T(v) = 3 \cdot (1, 4) = (3, 12)$.
:::

> [!RICORDA]
> - Un'**applicazione lineare** è una macchina che rispetta le somme e i multipli: sommare o moltiplicare prima di entrare, oppure dopo, è lo stesso.
> - Lo spazio di partenza è il **dominio**, quello di arrivo è il **codominio**.
> - Una macchina lineare manda sempre lo zero nello zero.
> - Manda una ricetta nella ricetta con gli stessi coefficienti, fatta con le uscite.

## Quali macchine sono lineari e quali no (pp. 68–69)

Per riconoscere una macchina lineare serve allenamento. In questa sezione trovi i quattro esempi delle dispense, tutti con vettori di due numeri, e poi una tabella per allenare l'occhio.

Un avviso sulla scrittura. Le dispense scrivono spesso i vettori **in colonna**, con i numeri uno sopra l'altro: la colonna $\begin{pmatrix} a \\ b \end{pmatrix}$ e la riga $(a, b)$ sono lo stesso vettore. E chiamano spesso le macchine $T$, come «trasformazione».

### Una macchina lineare, controllata fino in fondo

La prima macchina delle dispense ha questa regola:

$$T(a, b) = (2a + b,\ a + 3b)$$

A parole: il primo numero in uscita è il doppio del primo numero in entrata, più il secondo. Il secondo numero in uscita è il primo numero in entrata, più il triplo del secondo.

Proviamola con i numeri, sui vettori $(1, 2)$ e $(3, 1)$.

| Entra | Conto | Esce |
|---|---|---|
| $(1, 2)$ | $(2 \cdot 1 + 2,\ 1 + 3 \cdot 2)$ | $(4, 7)$ |
| $(3, 1)$ | $(2 \cdot 3 + 1,\ 3 + 3 \cdot 1)$ | $(7, 6)$ |
| la loro somma, $(4, 3)$ | $(2 \cdot 4 + 3,\ 4 + 3 \cdot 3)$ | $(11, 13)$ |
| il triplo del primo, $(3, 6)$ | $(2 \cdot 3 + 6,\ 3 + 3 \cdot 6)$ | $(12, 21)$ |

Controlla le due regole sulla tabella.

- **Somme.** Le uscite dei primi due vettori, sommate, danno $(4 + 7,\ 7 + 6) = (11, 13)$. È proprio l'uscita della somma, nella terza riga.
- **Multipli.** Il triplo dell'uscita del primo vettore è $3 \cdot (4, 7) = (12, 21)$. È proprio l'uscita del triplo, nella quarta riga.

Con questi numeri funziona. Ma una macchina è lineare solo se le due regole valgono per **tutti** i vettori, e non si possono provare tutti. Per questo le dispense rifanno lo stesso conto con le lettere al posto dei numeri. Una lettera sta per un numero qualsiasi, quindi il conto vale per tutti i vettori in una volta.

> [!ESEMPIO] 14.2 · Una funzione lineare
> La macchina è $T: \R^2 \to \R^2$, con la regola
> $$T\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 2a + b \\ a + 3b \end{pmatrix}.$$
> Prendiamo due vettori qualsiasi e un numero qualsiasi $\lambda$:
> $$v = \begin{pmatrix} a_1 \\ b_1 \end{pmatrix}, \qquad w = \begin{pmatrix} a_2 \\ b_2 \end{pmatrix}.$$
> I numerini in basso servono solo a distinguere: $a_1$ e $b_1$ sono i due numeri del primo vettore, $a_2$ e $b_2$ quelli del secondo.
>
> **La regola delle somme.**
>
> 1. Sommiamo i due vettori, posto per posto:
>    $$v + w = \begin{pmatrix} a_1 + a_2 \\ b_1 + b_2 \end{pmatrix}.$$
> 2. Facciamo entrare la somma. Nella regola, al posto di $a$ mettiamo $a_1 + a_2$ e al posto di $b$ mettiamo $b_1 + b_2$:
>    $$T(v + w) = \begin{pmatrix} 2(a_1 + a_2) + (b_1 + b_2) \\ (a_1 + a_2) + 3(b_1 + b_2) \end{pmatrix}.$$
> 3. Togliamo le parentesi, moltiplicando:
>    $$T(v + w) = \begin{pmatrix} 2a_1 + 2a_2 + b_1 + b_2 \\ a_1 + a_2 + 3b_1 + 3b_2 \end{pmatrix}.$$
> 4. Mettiamo da una parte i pezzi con il numerino 1 e dall'altra quelli con il numerino 2:
>    $$T(v + w) = \begin{pmatrix} 2a_1 + b_1 \\ a_1 + 3b_1 \end{pmatrix} + \begin{pmatrix} 2a_2 + b_2 \\ a_2 + 3b_2 \end{pmatrix}.$$
> 5. Il primo vettore è l'uscita di $v$, il secondo è l'uscita di $w$. Quindi $T(v + w) = T(v) + T(w)$.
>
> **La regola dei multipli.**
>
> 1. Moltiplichiamo il vettore $v$ per il numero $\lambda$, posto per posto:
>    $$\lambda v = \begin{pmatrix} \lambda a_1 \\ \lambda b_1 \end{pmatrix}.$$
> 2. Facciamolo entrare. Al posto di $a$ mettiamo $\lambda a_1$ e al posto di $b$ mettiamo $\lambda b_1$:
>    $$T(\lambda v) = \begin{pmatrix} 2\lambda a_1 + \lambda b_1 \\ \lambda a_1 + 3\lambda b_1 \end{pmatrix}.$$
> 3. In ogni pezzo c'è $\lambda$: lo portiamo fuori.
>    $$T(\lambda v) = \lambda \begin{pmatrix} 2a_1 + b_1 \\ a_1 + 3b_1 \end{pmatrix}.$$
> 4. Il vettore rimasto è l'uscita di $v$. Quindi $T(\lambda v) = \lambda T(v)$.
>
> Valgono tutte e due le regole. Allora $T$ è lineare.

Da questo conto viene una scorciatoia. In ogni uscita della macchina ci sono solo **multipli delle entrate, sommati tra loro**. Non ci sono numeri fissi aggiunti, né quadrati, né prodotti tra le due entrate. Quando una formula è fatta così, la macchina è lineare. Nella prossima sezione vedi il motivo: è la macchina di una matrice.

### Un numero fisso aggiunto sposta lo zero

La seconda macchina delle dispense assomiglia al taxi: nella regola ci sono due numeri fissi, il 2 e il $-1$.

> [!ESEMPIO] 14.3 · Una traslazione non è lineare
> La macchina è $T: \R^2 \to \R^2$, con la regola
> $$T\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} a + 2 \\ a + b - 1 \end{pmatrix}.$$
> Facciamo il test più veloce: mettiamo dentro il vettore nullo, cioè $a = 0$ e $b = 0$.
> $$T\begin{pmatrix} 0 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 + 2 \\ 0 + 0 - 1 \end{pmatrix} = \begin{pmatrix} 2 \\ -1 \end{pmatrix}.$$
> Non esce il vettore nullo. Una macchina lineare manda sempre lo zero nello zero. Allora $T$ non è lineare.

«Traslazione» vuol dire spostamento: i numeri fissi aggiunti spostano tutto, anche l'origine. Le dispense riassumono l'esempio con il simbolo $\neq$, un uguale sbarrato che si legge «diverso da»: $T(0) \neq 0$, allora la macchina non è lineare.

### Un quadrato rovina le somme

La terza macchina assomiglia alla piastrella: nella regola c'è un quadrato.

> [!ESEMPIO] 14.4 · Un quadrato rovina la somma
> La macchina è $T: \R^2 \to \R^2$, con la regola
> $$T\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} a^2 \\ a + b \end{pmatrix}.$$
> Il test dello zero qui non aiuta: entra $(0, 0)$, esce $(0^2,\ 0 + 0) = (0, 0)$. Allora proviamo la regola delle somme con due vettori scelti da noi:
> $$v = \begin{pmatrix} 2 \\ 1 \end{pmatrix}, \qquad w = \begin{pmatrix} 2 \\ 0 \end{pmatrix}.$$
>
> **Prima strada: sommo, poi entro.**
>
> 1. La somma è $v + w = (2 + 2,\ 1 + 0) = (4, 1)$.
> 2. La sua uscita è $T(4, 1) = (4^2,\ 4 + 1) = (16, 5)$.
>
> **Seconda strada: entro, poi sommo.**
>
> 1. $T(v) = T(2, 1) = (2^2,\ 2 + 1) = (4, 3)$.
> 2. $T(w) = T(2, 0) = (2^2,\ 2 + 0) = (4, 2)$.
> 3. La somma delle uscite è $(4 + 4,\ 3 + 2) = (8, 5)$.
>
> Le due strade danno $(16, 5)$ e $(8, 5)$: due vettori diversi. Allora $T$ non è lineare.

Un esempio con i numeri in cui una regola non funziona si chiama **controesempio**. Per dire che una macchina non è lineare ne basta uno.

### Due macchine che esistono sempre

Le due macchine del prossimo esempio si possono costruire con qualunque spazio vettoriale.

> [!ESEMPIO] 14.5 · La funzione nulla e l'identità
> Prendi due spazi vettoriali qualsiasi $V$ e $W$. La **funzione nulla** è la macchina $f: V \to W$ che manda ogni vettore nel vettore nullo: $f(v) = 0$ per ogni $v$. La funzione nulla è lineare.
>
> - Somme: se entra $v + w$ esce $0$. Se entrano uno alla volta escono $0$ e $0$, e la loro somma è $0$.
> - Multipli: se entra $\lambda v$ esce $0$. Se entra $v$ esce $0$, e $\lambda \cdot 0 = 0$.
>
> Prendi uno spazio vettoriale qualsiasi $V$. La **funzione identità** è la macchina $\id: V \to V$ che manda ogni vettore in sé stesso: $\id(v) = v$ per ogni $v$ di $V$. Anche la funzione identità è lineare.
>
> - Somme: se entra $v + w$ esce $v + w$. Se entrano uno alla volta escono $v$ e $w$, e la loro somma è $v + w$.
> - Multipli: se entra $\lambda v$ esce $\lambda v$. Se entra $v$ esce $v$, e il suo multiplo è $\lambda v$.

La funzione nulla distrugge tutto. L'identità non fa niente. Il simbolo $\id$ si legge «identità».

### Macchine che si vedono: stirare, girare, fare ombra

Molte macchine lineari sul piano hanno un significato geometrico. Eccone tre, e una che invece lineare non è.

| Macchina | Regola | Che cosa fa |
|---|---|---|
| stiramento | $(x, y)$ va in $(2x,\ y)$ | allarga tutto in orizzontale, al doppio |
| quarto di giro | $(x, y)$ va in $(-y,\ x)$ | gira ogni vettore di un quarto di giro, in senso antiorario |
| ombra | $(x, y)$ va in $(x,\ 0)$ | schiaccia ogni vettore sull'asse orizzontale, come un'ombra a mezzogiorno |
| spostamento di lato | $(x, y)$ va in $(x + 1,\ y)$ | sposta tutto di un passo a destra: **non** è lineare, perché anche l'origine si sposta |

Guarda la figura: il vettore grigio $(2, 1)$ entra nelle tre macchine lineari. Lo stiramento lo manda in $(4, 1)$. Il quarto di giro lo manda in $(-1, 2)$. L'ombra lo manda in $(2, 0)$.

```grafico
titolo: Il vettore $(2, 1)$ dentro tre macchine lineari: stiramento, quarto di giro, ombra
x: -3 5
y: -1 3
vettore: 2 1 | grigio | spesso | $(2, 1)$ | n
vettore: 4 1 | accento | $(4, 1)$ | e
vettore: -1 2 | blu | $(-1, 2)$ | n
vettore: 2 0 | ambra | $(2, 0)$ | s
```

### Altri esempi per allenare l'occhio

In questa tabella ogni macchina prende un vettore $(x, y)$ e restituisce un vettore di due numeri.

| Dove va $(x, y)$ | Lineare? | Perché |
|---|---|---|
| $(x - y,\ 2y)$ | sì | ci sono solo multipli delle entrate, sommati |
| $(0,\ 5x)$ | sì | anche «zero volte» va bene: il primo numero è $0x + 0y$ |
| $(x + 1,\ y)$ | no | lo zero non va nello zero: $(0, 0)$ va in $(1, 0)$ |
| $(xy,\ x)$ | no | c'è un prodotto tra le entrate: $(2, 2)$ va in $(4, 2)$, ma il doppio dell'uscita di $(1, 1)$ è $(2, 2)$ |
| $(\lvert x \rvert,\ y)$ | no | $(-1, 0)$ va in $(1, 0)$, ma l'opposto dell'uscita di $(1, 0)$ è $(-1, 0)$ |

Nell'ultima riga le barre verticali indicano il **valore assoluto**: il numero senza il segno meno. Per esempio $\lvert -1 \rvert = 1$.

> [!METODO] È lineare o no?
> 1. **Fai il test dello zero.** Metti dentro il vettore nullo. Se non esce il vettore nullo, la macchina **non** è lineare e hai finito (Esempio 14.3).
> 2. **Guarda la formula.** Numeri fissi aggiunti, quadrati, prodotti tra le entrate, valori assoluti, radici, seni: sono i segnali di una macchina non lineare.
> 3. **Se pensi che non sia lineare**, cerca un controesempio. Bastano due vettori con i numeri per cui le somme non tornano. Oppure un vettore e un numero per cui i multipli non tornano (Esempio 14.4).
> 4. **Se pensi che sia lineare**, mostralo con le lettere, come nell'Esempio 14.2. Scorciatoia: se ogni numero in uscita è una somma di multipli delle entrate, la macchina è quella di una matrice ed è lineare (Esempio 14.6, nella prossima sezione).

> [!TRAPPOLA] Lo zero che va nello zero non basta
> Il test dello zero serve solo a **escludere**. Una macchina può mandare lo zero nello zero e non essere lineare lo stesso. È il caso dell'Esempio 14.4: lì esce $(0, 0)$, eppure le somme non tornano.

::: prova La macchina manda $(x, y)$ in $(x + y,\ 3)$. È lineare? Usa il test dello zero.
No. Se entra $(0, 0)$ esce $(0 + 0,\ 3) = (0, 3)$, che non è il vettore nullo.
:::

::: prova La macchina manda $(x, y)$ in $(xy,\ y)$. Controlla i multipli con il vettore $(1, 1)$ e il numero 2.
Prima moltiplico, poi entro: $2 \cdot (1, 1) = (2, 2)$, che va in $(2 \cdot 2,\ 2) = (4, 2)$.

Prima entro, poi moltiplico: $(1, 1)$ va in $(1 \cdot 1,\ 1) = (1, 1)$, e il doppio è $(2, 2)$.

$(4, 2)$ e $(2, 2)$ sono diversi: la macchina non è lineare.
:::

::: prova La macchina manda $(x, y)$ in $(3x,\ x - y)$. È lineare?
Sì. Il primo numero in uscita è un multiplo di $x$. Il secondo è $x$ meno $y$, cioè $1x + (-1)y$. Ci sono solo multipli delle entrate, sommati.
:::

> [!RICORDA]
> - Per dire che una macchina **è** lineare serve un conto con le lettere, oppure la scorciatoia: in uscita solo multipli delle entrate, sommati.
> - Per dire che **non** lo è basta un controesempio con i numeri.
> - Se lo zero non va nello zero, la macchina non è lineare. Il contrario non vale.
> - La funzione nulla e l'identità sono sempre lineari.

## Ogni matrice è una macchina (pp. 69–70)

L'esempio più importante del corso è questo: ogni tabella di numeri è una macchina lineare.

> [!RIPASSO] matrice per vettore
> Una **matrice** è una tabella di numeri, con righe e colonne (lezione L06). Per moltiplicarla per un vettore si lavora **una riga alla volta** (lezione L08): moltiplica il primo numero della riga per il primo del vettore, il secondo per il secondo, e somma. È come il conto della spesa: quantità per prezzi, poi si somma.
>
> $$\begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix} \begin{pmatrix} 4 \\ 5 \end{pmatrix}$$
>
> - Prima riga, fatta dai numeri 2 e 1: $2 \cdot 4 + 1 \cdot 5 = 13$.
> - Seconda riga, fatta dai numeri 1 e 3: $1 \cdot 4 + 3 \cdot 5 = 19$.
>
> Il risultato è il vettore $(13, 19)$: un numero per ogni riga della matrice.

Fissiamo una matrice e chiamiamola $A$:

$$A = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$$

Con questa matrice si costruisce una macchina: entra un vettore, la macchina lo moltiplica per la matrice, esce il risultato. Se entra $(4, 5)$ esce $(13, 19)$, come nel ripasso.

Che cosa esce se entra un vettore qualsiasi $(a, b)$? Stesso conto, con le lettere.

- Prima riga: $2 \cdot a + 1 \cdot b = 2a + b$.
- Seconda riga: $1 \cdot a + 3 \cdot b = a + 3b$.

Esce $(2a + b,\ a + 3b)$. È la macchina dell'Esempio 14.2: la sua regola era, in breve, «moltiplica per questa matrice».

La macchina costruita con una matrice ha un nome: $L_A$, che si legge «elle con A». Il vettore che entra si chiama di solito $x$, e l'uscita si scrive $Ax$, «A per x»:

$$L_A(x) = Ax$$

### Quanti numeri entrano e quanti escono

La matrice non deve per forza essere quadrata. Prendiamone una con 2 righe e 3 colonne:

$$B = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 1 \end{pmatrix}$$

Ogni riga ha 3 numeri, quindi il vettore che entra deve avere 3 numeri. Le righe sono 2, quindi il vettore che esce ha 2 numeri. Proviamo con $(1, 2, 3)$.

- Prima riga: $1 \cdot 1 + 0 \cdot 2 + 2 \cdot 3 = 7$.
- Seconda riga: $0 \cdot 1 + 1 \cdot 2 + 1 \cdot 3 = 5$.

Entra $(1, 2, 3)$, esce $(7, 5)$. Questa macchina va da $\R^3$ a $\R^2$.

> [!TRAPPOLA] Le colonne dicono che cosa entra, le righe che cosa esce
> Una matrice con $m$ righe e $n$ colonne si chiama «di taglia $m \times n$», che si legge «emme per enne». La sua macchina va da $\R^n$ a $\R^m$: l'ordine è rovesciato rispetto al nome della taglia. Il numero delle **colonne** dice quanti numeri entrano. Il numero delle **righe** dice quanti ne escono.

### Come lo scrivono le dispense

La macchina di una matrice è sempre lineare, perché il prodotto di matrici rispetta somme e multipli (Proposizione 8.11, lezione L08). Le dispense scrivono tutto per una matrice qualsiasi, di qualunque taglia. Per questo usano lettere con due numerini in basso.

> [!ESEMPIO] 14.6 · $L_A$
> Prendiamo una matrice $A = (a_{ij})$ di taglia $m \times n$. Con il prodotto fra matrici e vettori costruiamo la macchina
> $$L_A: \K^n \longrightarrow \K^m, \qquad L_A(x) = Ax.$$
> Nel dettaglio:
> $$L_A(x) = Ax = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & \ddots & \vdots \\ a_{m1} & \cdots & a_{mn} \end{pmatrix} \cdot \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} = \begin{pmatrix} a_{11}x_1 + \cdots + a_{1n}x_n \\ \vdots \\ a_{m1}x_1 + \cdots + a_{mn}x_n \end{pmatrix}.$$
> La lettera $L$ sta per *left*, «sinistra» in inglese, perché moltiplichiamo a sinistra per $A$. La macchina $L_A$ è lineare per le proprietà del prodotto di matrici:
> 1. $L_A(x + x') = A(x + x') = Ax + Ax' = L_A(x) + L_A(x')$;
> 2. $L_A(\lambda x) = A(\lambda x) = \lambda Ax = \lambda L_A(x)$.

**Come si legge.** È il conto della spesa del ripasso, scritto con le lettere.

- $a_{ij}$ è il numero che sta nella riga $i$ e nella colonna $j$ della matrice. Per esempio $a_{21}$ sta nella riga 2 e nella colonna 1.
- $\K^n$ è l'insieme delle liste di $n$ numeri. Entrano $n$ numeri, tanti quante le colonne. Ne escono $m$, tanti quante le righe.
- $x_1, \dots, x_n$ sono i numeri del vettore che entra. I puntini vogliono dire «e avanti così».
- Il vettore a destra dell'ultimo uguale è l'uscita. In ogni sua riga c'è una riga della matrice moltiplicata per il vettore.
- $x'$ si legge «x primo»: è solo il nome di un secondo vettore.
- Le righe 1 e 2 in fondo sono le due regole di linearità.

> [!ESEMPIO] 14.7 · La matrice dell'Esempio 14.2
> Nell'esempio precedente scegliamo la matrice con prima riga 2 e 1 e seconda riga 1 e 3. Otteniamo la macchina $L_A: \R^2 \to \R^2$ data da
> $$L_A\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 2a + b \\ a + 3b \end{pmatrix}.$$
> È esattamente l'applicazione lineare dell'Esempio 14.2.

### Nelle colonne c'è scritto dove vanno i vettori della base

Ricorda: la **base canonica** dei vettori di due numeri è fatta dai due vettori più semplici, $e_1 = (1, 0)$ ed $e_2 = (0, 1)$ (lezione L07). Ogni vettore è una ricetta fatta con loro. Per esempio $(4, 5)$ è «4 parti di $e_1$ più 5 parti di $e_2$».

Facciamo entrare questi due vettori nella macchina della matrice $A$ di prima.

| Entra | Conto | Esce |
|---|---|---|
| $e_1 = (1, 0)$ | $(2 \cdot 1 + 1 \cdot 0,\ 1 \cdot 1 + 3 \cdot 0)$ | $(2, 1)$ |
| $e_2 = (0, 1)$ | $(2 \cdot 0 + 1 \cdot 1,\ 1 \cdot 0 + 3 \cdot 1)$ | $(1, 3)$ |

Ora guarda la matrice. I numeri 2 e 1 formano la sua **prima colonna**, letta dall'alto in basso. I numeri 1 e 3 formano la **seconda colonna**.

> [!IDEA]
> Nelle colonne di una matrice c'è scritto dove la sua macchina manda i vettori della base canonica. La prima colonna è l'uscita del primo vettore della base, la seconda colonna è l'uscita del secondo, e avanti così.

Le dispense indicano le colonne con un numerino **in alto**: $A^1$ è la prima colonna, $A^2$ la seconda. Qui il numerino in alto non è una potenza. Con questa scrittura la regola diventa

$$L_A(e_i) = A^i.$$

Si legge: la macchina manda il vettore numero $i$ della base canonica nella colonna numero $i$.

Adesso usiamo il fatto che le ricette restano ricette. Il vettore $(4, 5)$ è «4 parti di $e_1$ più 5 parti di $e_2$». Quindi la sua uscita è «4 parti della prima colonna più 5 parti della seconda»:

$$4 \cdot (2, 1) + 5 \cdot (1, 3) = (8, 4) + (5, 15) = (13, 19).$$

È lo stesso risultato del ripasso, trovato per un'altra strada. Vale per ogni matrice: **l'uscita è la ricetta fatta con le colonne, e i coefficienti sono i numeri del vettore che entra.** Con le lettere:

$$Ax = x_1 A^1 + x_2 A^2 + \cdots + x_n A^n.$$

Nello strumento qui sotto la macchina della matrice $A$ trasforma la griglia a quadretti del piano in una griglia di parallelogrammi. Che cosa guardare e che cosa provare:

- le rette restano rette e l'origine resta ferma;
- le due frecce con le etichette «A e₁» e «A e₂» sono le due colonne della matrice;
- trascina il vettore «x» e guarda dove finisce «A x»;
- premi «rotazione di 90°» (il quarto di giro) e «proiezione» (l'ombra);
- scrivi nelle caselle la matrice con prima riga 1 e 2 e seconda riga 2 e 4: tutto il piano viene schiacciato su una retta. Lo ritrovi nella sezione sul nucleo.

```widget matrice
titolo: La matrice degli Esempi 14.2 e 14.7 come trasformazione del piano
a: 2 1; 1 3
x: 1 1
raggio: 5
```

> [!OLTRE] ogni macchina lineare tra liste di numeri viene da una matrice
> Vale anche il contrario (Martelli, Proposizione 4.1.19). Ogni macchina lineare che prende liste di numeri e restituisce liste di numeri è la macchina di una matrice, e di una sola. Per trovarla, metti **in colonna** le uscite dei vettori della base canonica.
>
> Un esempio: la macchina che manda $(x, y, z)$ in $(x - z,\ y + 2z)$.
>
> 1. Entra $(1, 0, 0)$. Esce $(1 - 0,\ 0 + 2 \cdot 0) = (1, 0)$.
> 2. Entra $(0, 1, 0)$. Esce $(0 - 0,\ 1 + 2 \cdot 0) = (0, 1)$.
> 3. Entra $(0, 0, 1)$. Esce $(0 - 1,\ 0 + 2 \cdot 1) = (-1, 2)$.
> 4. Metti le tre uscite in colonna, una accanto all'altra:
>    $$A = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & 2 \end{pmatrix}.$$
>
> C'è un modo ancora più rapido: **nelle righe della matrice ci sono i numeri che moltiplicano le entrate.** La prima uscita è $1x + 0y - 1z$, e la prima riga è fatta dai numeri 1, 0 e $-1$. Negli appelli questa matrice si chiama «matrice associata rispetto alla base canonica» (lezione L15).

> [!NOTA] Collegamento con l'informatica: reti neurali (p. 70)
> Una delle operazioni di base di una rete neurale è la moltiplicazione di una matrice per un vettore. Un singolo strato della rete prende un vettore, lo moltiplica per una matrice e poi aggiunge un vettore fisso:
> $$x \longmapsto Ax + b$$
> La freccia con il trattino all'inizio si legge «viene mandato in». I numeri della matrice e del vettore fisso sono i parametri che vengono modificati durante l'addestramento.
>
> Il pezzo «moltiplica per la matrice» è la macchina lineare di questa sezione. Se il vettore aggiunto non è zero, la trasformazione intera **non** è lineare: manda lo zero in $b$, come il taxi. Una macchina fatta così si chiama **affine**. Gli strati di una rete alternano trasformazioni di questo tipo e operazioni non lineari: per questo matrici e applicazioni lineari sono il linguaggio di base del *machine learning*.

::: prova Una matrice ha prima riga 1 e 2, seconda riga 0 e 1. Che cosa esce dalla sua macchina se entra $(3, 1)$?
Prima riga: $1 \cdot 3 + 2 \cdot 1 = 5$. Seconda riga: $0 \cdot 3 + 1 \cdot 1 = 1$. Esce $(5, 1)$.
:::

::: prova Una matrice ha 3 righe e 2 colonne. Da dove parte e dove arriva la sua macchina?
Parte da $\R^2$, perché le colonne sono 2: entrano vettori di 2 numeri. Arriva in $\R^3$, perché le righe sono 3: escono vettori di 3 numeri.
:::

::: prova Scrivi la matrice della macchina che manda $(x, y)$ in $(x + 2y,\ 3x)$.
Nelle colonne vanno le uscite dei vettori della base canonica.

Entra $(1, 0)$: esce $(1 + 2 \cdot 0,\ 3 \cdot 1) = (1, 3)$. È la prima colonna.

Entra $(0, 1)$: esce $(0 + 2 \cdot 1,\ 3 \cdot 0) = (2, 0)$. È la seconda colonna.

La matrice ha prima riga 1 e 2, seconda riga 3 e 0. Controllo con le righe: la prima uscita è $1x + 2y$, la seconda è $3x + 0y$.
:::

> [!RICORDA]
> - Ogni matrice dà una macchina lineare: entra un vettore, esce la matrice per il vettore. Si chiama $L_A$.
> - Le **colonne** dicono quanti numeri entrano, le **righe** quanti ne escono.
> - Nelle colonne della matrice ci sono le uscite dei vettori della base canonica.
> - L'uscita di un vettore è la ricetta fatta con le colonne, con i numeri del vettore come coefficienti.

## Macchine che lavorano su matrici e polinomi (p. 70)

Le macchine lineari non lavorano solo su liste di numeri. In entrata possono prendere una matrice intera, oppure un polinomio.

Ricorda: anche le matrici di una stessa taglia formano uno spazio vettoriale (lezione L06). Si sommano casella per casella, e si moltiplicano per un numero casella per casella.

### La traccia

Ricorda: la **traccia** di una matrice quadrata è la somma dei numeri sulla diagonale, quella che va dall'angolo in alto a sinistra all'angolo in basso a destra (Definizione 8.12, lezione L08). Si scrive $\tr A$ e si legge «traccia di A».

La traccia è una macchina: entra una matrice, esce un numero. Proviamola con due matrici.

$$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, \qquad B = \begin{pmatrix} 5 & 0 \\ 1 & -2 \end{pmatrix}$$

| Entra | Numeri sulla diagonale | Traccia |
|---|---|---|
| $A$ | 1 e 4 | $1 + 4 = 5$ |
| $B$ | 5 e $-2$ | $5 - 2 = 3$ |
| la somma $A + B = \begin{pmatrix} 6 & 2 \\ 4 & 2 \end{pmatrix}$ | 6 e 2 | $6 + 2 = 8$ |
| il triplo $3A = \begin{pmatrix} 3 & 6 \\ 9 & 12 \end{pmatrix}$ | 3 e 12 | $3 + 12 = 15$ |

Le tracce delle due matrici, sommate, danno $5 + 3 = 8$: è la traccia della somma. Il triplo della traccia della prima matrice è $3 \cdot 5 = 15$: è la traccia del triplo.

Il motivo è che la somma di matrici si fa casella per casella. Le dispense lo scrivono per matrici di qualunque grandezza.

> [!ESEMPIO] 14.8 · La traccia è lineare
> La traccia $\tr: M(n, \K) \to \K$ è un'applicazione lineare.
>
> Prendiamo due matrici quadrate $A = (a_{ij})$ e $B = (b_{ij})$, con $n$ righe e $n$ colonne. I numeri sulla diagonale di $A$ sono quelli con i due numerini uguali: $a_{11}, a_{22}, \dots, a_{nn}$.
>
> 1. La somma si fa casella per casella: $A + B = (a_{ij} + b_{ij})$. Sulla sua diagonale ci sono i numeri $a_{11} + b_{11},\ \dots,\ a_{nn} + b_{nn}$.
> 2. La traccia della somma è la somma di questi numeri. In una somma l'ordine non conta: mettiamo prima tutti i numeri di $A$ e poi tutti quelli di $B$.
>    $$\tr(A + B) = (a_{11} + b_{11}) + \cdots + (a_{nn} + b_{nn}) = \tr(A) + \tr(B)$$
> 3. La matrice $\lambda A$ ha sulla diagonale i numeri $\lambda a_{11},\ \dots,\ \lambda a_{nn}$. Li sommiamo e portiamo fuori $\lambda$:
>    $$\tr(\lambda A) = \lambda a_{11} + \cdots + \lambda a_{nn} = \lambda \cdot \tr(A).$$

**Come si legge.** $M(n, \K)$ è l'insieme delle matrici quadrate con $n$ righe e $n$ colonne: è il dominio. Il codominio è $\K$, cioè i numeri stessi, che formano uno spazio vettoriale di dimensione 1. Quindi la prima riga dice: la traccia prende una matrice quadrata e restituisce un numero.

> [!TRAPPOLA] Il determinante non è lineare
> Anche il **determinante** prende una matrice e restituisce un numero. Per due righe e due colonne è il prodotto dei numeri sulla diagonale meno il prodotto degli altri due (lezione L09). Ma **non** rispetta le somme. Controesempio con due copie della matrice identità $I_2$, che ha 1 sulla diagonale e 0 altrove.
>
> - Se entra la somma: $I_2 + I_2$ ha 2 sulla diagonale e 0 altrove. Il suo determinante è $2 \cdot 2 - 0 \cdot 0 = 4$.
> - Se entrano una alla volta: i due determinanti valgono 1 e 1, e la loro somma è 2.
>
> Non rispetta nemmeno i multipli: per una matrice con $n$ righe vale $\det(\lambda A) = \lambda^n \det A$ (Corollario 9.12, lezione L09).

### Altre macchine lineari che trovi nei quiz

Nei quiz compaiono spesso macchine tra spazi di matrici o di polinomi. La loro regola è scritta di solito con la freccia $\mapsto$, che si legge «viene mandato in». A sinistra c'è quello che entra, a destra quello che esce.

> [!RIPASSO] i polinomi come vettori
> Un **polinomio** è un'espressione come $x^2 + 1$ oppure $2x$ (lezione L04). I polinomi si sommano e si moltiplicano per un numero, quindi formano uno spazio vettoriale (lezione L05).
>
> $\R_2[x]$ si legge «erre due di x». È lo spazio dei polinomi di grado al massimo 2, cioè quelli del tipo $ax^2 + bx + c$. Per scriverne uno servono tre numeri, quindi la sua dimensione è 3.
>
> Se $p$ è un polinomio, $p(3)$ è il numero che ottieni mettendo 3 al posto di $x$. Con $p = x^2 + 1$ viene $p(3) = 3 \cdot 3 + 1 = 10$.

Queste tre macchine sono lineari (Martelli, Esempi 4.1.10, 4.1.13 e 4.1.15).

- **La trasposizione**, scritta $A \mapsto {}^tA$. Entra una matrice, esce la sua **trasposta**, cioè la matrice con le righe e le colonne scambiate (lezione L08).
- **La valutazione**, scritta $p \mapsto p(3)$. Entra un polinomio, esce il numero che si ottiene mettendo 3 al posto di $x$. Al posto del 3 può esserci qualunque numero fissato.
- **La derivata**. Entra un polinomio, esce la sua derivata. La incontri nel corso di Analisi: se non l'hai ancora vista, salta questa riga.

Un controllo sulla valutazione. I polinomi $x^2 + 1$ e $2x$ valgono 10 e 6 in 3. La loro somma $x^2 + 2x + 1$ vale $9 + 6 + 1 = 16$ in 3, cioè $10 + 6$.

::: prova Quanto vale la traccia della matrice con prima riga 2 e 7, seconda riga 1 e $-5$?
I numeri sulla diagonale sono 2 e $-5$. La traccia è $2 + (-5) = -3$.
:::

::: prova Una macchina prende una matrice con due righe e due colonne e restituisce il numero in alto a sinistra. È lineare?
Sì. La somma di due matrici si fa casella per casella: il numero in alto a sinistra della somma è la somma dei due numeri in alto a sinistra. Lo stesso vale per i multipli.
:::

::: prova Il polinomio è $p = x^2 - 4$. Quanto vale $p(3)$? E quanto vale in 3 il polinomio $2p$?
$p(3) = 3 \cdot 3 - 4 = 5$. Il doppio del polinomio è $2x^2 - 8$: in 3 vale $2 \cdot 9 - 8 = 10$, cioè il doppio di 5.
:::

> [!RICORDA]
> - Una macchina lineare può lavorare anche su matrici e polinomi.
> - Sono lineari: la **traccia**, la **trasposizione**, la **valutazione** di un polinomio in un numero fissato, la derivata.
> - **Non** è lineare il determinante.

## Che cosa va perso e che cosa esce: nucleo e immagine (pp. 70–71)

Un'applicazione lineare è una macchina: metti dentro un vettore, ne esce un altro. Di ogni macchina conviene sapere due cose: che cosa distrugge e che cosa riesce a produrre.

Partiamo da un esempio con i numeri. La macchina si chiama $T$. Prende un vettore fatto di due numeri e ne restituisce un altro fatto di due numeri. La regola è:

$$T(x, y) = (x + y,\ 2x + 2y)$$

A parole: il primo numero in uscita è la somma dei due in entrata. Il secondo numero in uscita è il doppio di quella somma.

Proviamo la macchina con qualche vettore.

| Entra | Conto | Esce |
|---|---|---|
| $(1, 0)$ | $(1 + 0,\ 2 + 0)$ | $(1, 2)$ |
| $(0, 1)$ | $(0 + 1,\ 0 + 2)$ | $(1, 2)$ |
| $(2, 1)$ | $(2 + 1,\ 4 + 2)$ | $(3, 6)$ |
| $(1, -1)$ | $(1 - 1,\ 2 - 2)$ | $(0, 0)$ |
| $(3, -3)$ | $(3 - 3,\ 6 - 6)$ | $(0, 0)$ |

Guarda la tabella: si notano due cose.

**Prima cosa: alcuni vettori vengono distrutti.** Entrano $(1, -1)$ e $(3, -3)$, ed esce il vettore fatto di soli zeri. Succede ogni volta che i due numeri in entrata sono uno l'opposto dell'altro, perché allora la loro somma è zero. Tutti i vettori che la macchina manda in zero formano il **nucleo**.

**Seconda cosa: non può uscire qualunque vettore.** In uscita il secondo numero è sempre il doppio del primo. Un vettore come $(1, 0)$ non esce mai. Tutti i vettori che possono uscire formano l'**immagine**.

> [!IDEA]
> Il **nucleo** è tutto quello che la macchina schiaccia su zero. L'**immagine** è tutto quello che la macchina riesce a produrre.

Il nucleo è fatto di vettori che **entrano**. L'immagine è fatta di vettori che **escono**. Sono due posti diversi.

### Il nucleo e l'immagine di questa macchina

Ricorda: lo **Span** di un vettore è l'insieme di tutti i suoi multipli (lezione L06). Sulla mappa è una retta che passa per l'origine.

**Il nucleo.** Esce zero quando il secondo numero in entrata è l'opposto del primo. I vettori fatti così sono del tipo $(t, -t)$, dove la lettera $t$ sta per un numero qualsiasi. Sono i multipli di $(1, -1)$. Quindi il nucleo è $\Span\big((1, -1)\big)$: una retta per l'origine.

**L'immagine.** In uscita il secondo numero è il doppio del primo: le uscite sono del tipo $(s, 2s)$, cioè i multipli di $(1, 2)$. E ogni multiplo esce davvero: se entra $(s, 0)$ esce $(s + 0,\ 2s + 0) = (s, 2s)$. Quindi l'immagine è $\Span\big((1, 2)\big)$: un'altra retta per l'origine.

Guarda la figura. La retta blu è il nucleo, la retta ambra è l'immagine. Qui i vettori che entrano e quelli che escono stanno tutti e due nel piano, e per questo le due rette si possono disegnare insieme. Ma la retta blu vive tra i vettori che entrano, la retta ambra tra quelli che escono.

```grafico
titolo: Per $T(x, y) = (x + y,\ 2x + 2y)$ il nucleo (blu) è la retta $y = -x$ del dominio, l'immagine (ambra) è la retta $y = 2x$ del codominio
x: -3 3
y: -3 3
retta: 0 0 -1.5 1.5 | blu | spesso | $\Ker T$ | no
retta: 0 0 1.2 2.4 | ambra | spesso | $\Imm T$ | e
punto: 1 -1 | blu
punto: 1 2 | ambra
```

### Come lo scrivono le dispense

Le dispense lo scrivono così.

> [!DEF] 14.9 · Nucleo e immagine
> Sia $f: V \to W$ un'applicazione lineare. Il **nucleo** di $f$ è il sottoinsieme di $V$ definito da
> $$\Ker f = \{v \in V \mid f(v) = 0\}.$$
> L'**immagine** di $f$ è il sottoinsieme di $W$ definito da
> $$\Imm f = \{w \in W \mid \exists\, v \in V \text{ con } f(v) = w\}.$$

**Come si legge.**

- $\Ker f$ si legge «ker di effe», cioè «nucleo di effe». Viene dall'inglese *kernel*, che vuol dire «nucleo».
- Le parentesi graffe racchiudono un insieme. La barretta verticale si legge «per cui»: a sinistra c'è dove si cercano gli elementi, a destra la condizione che devono rispettare.
- La riga del nucleo, a parole: «i vettori $v$ di $V$ per cui $f(v)$ è zero». Sono i vettori che la macchina manda in zero.
- $\Imm f$ si legge «immagine di effe».
- La riga dell'immagine, a parole: «i vettori $w$ di $W$ per cui esiste un vettore $v$ di $V$ con $f(v) = w$». Il simbolo $\exists$ si legge «esiste». Sono i vettori che escono davvero da qualche entrata.

Attenzione alla parola «immagine», che si usa in due modi. L'immagine **di un vettore** è la sua uscita. L'immagine **della macchina** è l'insieme di tutte le uscite.

::: prova Per la macchina $T(x, y) = (x + y,\ 2x + 2y)$: il vettore $(2, -2)$ sta nel nucleo? E $(2, 1)$?
$T(2, -2) = (2 - 2,\ 4 - 4) = (0, 0)$. Esce zero, quindi $(2, -2)$ sta nel nucleo.

$T(2, 1) = (2 + 1,\ 4 + 2) = (3, 6)$. Non esce zero, quindi $(2, 1)$ non sta nel nucleo.
:::

::: prova Per la stessa macchina: il vettore $(4, 8)$ sta nell'immagine? E $(4, 7)$?
$(4, 8)$ sì: il secondo numero è il doppio del primo. Esce per esempio da $(4, 0)$. Invece $(4, 7)$ no: 7 non è il doppio di 4.
:::

### Nucleo e immagine sono sottospazi

Ricorda: un **sottospazio** è una stanza dentro uno spazio vettoriale da cui non si esce né sommando né moltiplicando per un numero. Contiene sempre lo zero (Definizione 6.2, lezione L06). Una retta che passa per l'origine è un sottospazio.

Nell'esempio il nucleo e l'immagine erano due rette per l'origine, cioè due sottospazi. Un controllo con i numeri: $(1, -1)$ e $(3, -3)$ stanno nel nucleo, e anche la loro somma $(4, -4)$ va in zero. Succede per ogni macchina lineare.

> [!PROP] 14.10
> Il nucleo $\Ker f$ è un sottospazio vettoriale di $V$, l'immagine $\Imm f$ è un sottospazio di $W$.

**Come si legge.** I vettori mandati in zero formano una stanza chiusa dentro lo spazio di partenza. Le uscite formano una stanza chiusa dentro lo spazio di arrivo.

Il perché, a parole. Se due vettori vanno in zero, la loro somma va in «zero più zero», che è zero. Se un vettore va in zero, un suo multiplo va in un multiplo di zero, che è zero. E la somma di due uscite è l'uscita della somma delle due entrate.

> [!DIM] della Proposizione 14.10
> Bisogna controllare le tre condizioni che definiscono un sottospazio (Definizione 6.2): c'è lo zero, la somma di due elementi resta dentro, un multiplo di un elemento resta dentro.
>
> **Per il nucleo.**
>
> 1. Lo zero sta nel nucleo, perché $f(0) = 0$.
> 2. Se $v$ e $w$ stanno nel nucleo, allora $f(v + w) = f(v) + f(w) = 0 + 0 = 0$. Quindi anche $v + w$ sta nel nucleo.
> 3. Se $v$ sta nel nucleo e $\lambda$ è un numero, allora $f(\lambda v) = \lambda f(v) = \lambda \cdot 0 = 0$. Quindi anche $\lambda v$ sta nel nucleo.
>
> **Per l'immagine.**
>
> 1. Lo zero sta nell'immagine, perché $f(0) = 0$.
> 2. La somma di due uscite è $f(v) + f(v') = f(v + v')$: è l'uscita di $v + v'$, quindi sta nell'immagine.
> 3. Il multiplo di un'uscita è $\lambda f(v) = f(\lambda v)$: è l'uscita di $\lambda v$, quindi sta nell'immagine.

> [!TRAPPOLA] Il nucleo non è mai vuoto
> Lo zero va sempre nello zero. Quindi il vettore nullo sta sempre nel nucleo, e anche nell'immagine. Nel caso più piccolo il nucleo contiene **solo** il vettore nullo: si scrive $\{0\}$. Non è l'insieme vuoto, perché un elemento c'è.

> [!RICORDA]
> - Il **nucleo** è l'insieme dei vettori che vanno in zero. Sta nello spazio di partenza.
> - L'**immagine** è l'insieme dei vettori che escono. Sta nello spazio di arrivo.
> - Tutti e due sono sottospazi, e contengono sempre il vettore nullo.

## Due domande su una macchina: iniettiva, suriettiva (p. 71)

Di una macchina ci si fa spesso due domande.

**Prima domanda: due entrate diverse possono dare la stessa uscita?** Se non succede mai, la macchina si chiama **iniettiva**. Con una macchina iniettiva si può tornare indietro: guardando l'uscita sai qual era l'entrata, perché non ci sono doppioni.

**Seconda domanda: ogni vettore dello spazio di arrivo esce da qualche entrata?** Se sì, la macchina si chiama **suriettiva**. Una macchina suriettiva riempie tutto lo spazio di arrivo.

Queste due parole valgono per tutte le funzioni, non solo per quelle lineari. Le ritrovi anche in Matematica Discreta. Ecco tre macchine a confronto.

| Macchina | È iniettiva? | È suriettiva? |
|---|---|---|
| da $\R^2$ a $\R^3$: $(x, y)$ va in $(x, y, 0)$ | sì: i due numeri in entrata si rileggono nell'uscita | no: $(0, 0, 1)$ non esce mai, perché il terzo numero in uscita è sempre 0 |
| da $\R^3$ a $\R^2$: $(x, y, z)$ va in $(x, y)$ | no: $(0, 0, 1)$ e $(0, 0, 2)$ vanno tutti e due in $(0, 0)$ | sì: per far uscire $(a, b)$ basta far entrare $(a, b, 0)$ |
| da $\R^2$ a $\R^2$: $(x, y)$ va in $(x + y,\ 2x + 2y)$ | no: $(1, 0)$ e $(0, 1)$ vanno tutti e due in $(1, 2)$ | no: $(1, 0)$ non esce mai |

### La scorciatoia: guardare il nucleo

Per sapere se una macchina è iniettiva sembra di dover confrontare tutte le coppie di entrate. Per le macchine lineari c'è una scorciatoia: basta guardare il nucleo.

Guarda la terza macchina della tabella. Le entrate $(1, 0)$ e $(0, 1)$ danno la stessa uscita. La differenza tra le due entrate è $(1, -1)$: un vettore del nucleo. Non è un caso, e il ragionamento funziona in tutti e due i versi.

- Se due entrate diverse danno la stessa uscita, la loro differenza non è zero ma va in zero. Il motivo: una macchina lineare manda la differenza di due entrate nella differenza delle due uscite, e qui le uscite sono uguali.
- Al contrario, se un vettore diverso da zero va in zero, allora lui e il vettore nullo sono due entrate diverse con la stessa uscita.

> [!IDEA]
> Una macchina lineare è iniettiva esattamente quando l'unico vettore che manda in zero è lo zero.

Per la seconda domanda non c'è niente da scoprire: «ogni vettore dello spazio di arrivo esce» vuol dire proprio che l'immagine è tutto lo spazio di arrivo.

> [!PROP] 14.11
> La funzione $f: V \to W$ è iniettiva $\Longleftrightarrow \Ker f = \{0\}$. La funzione $f$ è suriettiva $\Longleftrightarrow \Imm f = W$.

**Come si legge.** La doppia freccia $\Longleftrightarrow$ si legge «se e solo se», cioè «esattamente quando»: le due frasi ai suoi lati sono vere insieme oppure false insieme. Prima frase: la macchina è iniettiva esattamente quando il nucleo contiene solo il vettore nullo. Seconda frase: è suriettiva esattamente quando l'immagine è tutto lo spazio di arrivo.

> [!DIM] della Proposizione 14.11
> Per la suriettività non c'è niente da dimostrare. Per l'iniettività ci sono due versi.
>
> **Se la macchina è iniettiva, nel nucleo c'è solo lo zero.**
>
> 1. Sappiamo già che $f(0) = 0$.
> 2. La macchina è iniettiva: un vettore $v$ diverso da zero non può andare dove va lo zero. Quindi $f(v) \neq 0$.
> 3. Allora l'unico vettore che va in zero è lo zero: $\Ker f = \{0\}$.
>
> **Se nel nucleo c'è solo lo zero, la macchina è iniettiva.**
>
> 1. Prendiamo due vettori diversi $v$ e $v'$. La loro differenza $v - v'$ non è il vettore nullo.
> 2. Nel nucleo c'è solo lo zero, quindi la differenza non va in zero: $f(v - v') \neq 0$.
> 3. La macchina è lineare, quindi $f(v - v') = f(v) - f(v')$.
> 4. Allora $f(v) - f(v') \neq 0$, cioè $f(v) \neq f(v')$. Due entrate diverse hanno uscite diverse.

Il vantaggio è grande. Per decidere se una macchina è iniettiva non servono confronti: basta cercare i vettori che vanno in zero, cioè risolvere un solo sistema.

> [!NOTA] Collegamento con l'informatica: il nucleo come insieme di direzioni ammissibili (p. 71)
> In molti problemi un vettore deve rispettare un **vincolo**, cioè una condizione fissa. Un esempio: tre numeri la cui somma deve fare 3. Il vettore $(1, 1, 1)$ rispetta il vincolo.
>
> In quali direzioni ci si può spostare senza rompere il vincolo? Proviamo a spostarci di $(1, -1, 0)$. Arriviamo in $(2, 0, 1)$, e la somma fa ancora 3. Funziona perché i numeri dello spostamento hanno somma zero.
>
> Le dispense lo dicono in generale. Il vincolo è un sistema, scritto $Ax = b$. Parti da una soluzione $x$ e fai $t$ passi nella direzione $y$: arrivi in $x + ty$, e
> $$A(x + ty) = Ax + t\,Ay = b + t\,Ay.$$
> Il vincolo resta rispettato, per ogni numero di passi, precisamente quando $Ay = 0$. Cioè quando la direzione sta nel nucleo della macchina della matrice: le dispense scrivono $y \in \Ker A$. Il nucleo descrive tutte le direzioni lungo cui ci si può muovere mantenendo i vincoli di uguaglianza. È un'idea usata direttamente negli algoritmi di ottimizzazione lineare, ed è la Proposizione 12.3 della lezione L12 vista dalla parte del nucleo.

::: prova La macchina manda $(x, y)$ in $(x,\ 0)$: è l'ombra sull'asse orizzontale. Qual è il nucleo? È iniettiva?
Esce $(0, 0)$ quando il primo numero in entrata è 0, e il secondo può essere qualsiasi. Il nucleo è fatto dai vettori $(0, t)$: è l'asse verticale. Nel nucleo non c'è solo lo zero, quindi la macchina non è iniettiva. Infatti $(0, 1)$ e $(0, 2)$ hanno la stessa uscita.
:::

::: prova La macchina manda $(x, y)$ in $(2x,\ 3y)$. Qual è il nucleo? È iniettiva?
Esce $(0, 0)$ solo se $2x = 0$ e $3y = 0$, cioè solo se entra $(0, 0)$. Nel nucleo c'è solo lo zero, quindi la macchina è iniettiva.
:::

> [!RICORDA]
> - **Iniettiva**: entrate diverse danno sempre uscite diverse. Per una macchina lineare vuol dire: nel nucleo c'è solo lo zero.
> - **Suriettiva**: ogni vettore dello spazio di arrivo esce. Vuol dire: l'immagine è tutto lo spazio di arrivo.
> - Per controllare l'iniettività basta risolvere un sistema: quali vettori vanno in zero?

## Come si trovano nucleo e immagine con Gauss (p. 72)

Per la macchina di una matrice, il nucleo e l'immagine si trovano con conti che conosci già.

**Il nucleo è un sistema con tutti zeri a destra.** Il nucleo è fatto dai vettori $x$ che la macchina manda in zero, cioè quelli per cui $Ax = 0$. Questo è un sistema lineare **omogeneo**, cioè con tutti zeri dopo l'uguale (lezione L12). Si risolve con Gauss.

**L'immagine è fatta da tutte le ricette delle colonne.** Nella sezione sulle matrici hai visto che l'uscita di un vettore è la ricetta fatta con le colonne. I coefficienti sono i numeri del vettore. Se entrano tutti i vettori possibili, escono tutte le ricette possibili.

> [!IDEA]
> L'immagine della macchina di una matrice è lo Span delle colonne della matrice.

Riprendiamo la macchina che manda $(x, y)$ in $(x + y,\ 2x + 2y)$. La sua matrice ha prima riga 1 e 1, seconda riga 2 e 2. Le due colonne sono uguali: tutte e due sono $(1, 2)$. Il loro Span è fatto dai multipli di $(1, 2)$: è la retta ambra della figura.

Ricorda: dei vettori sono **generatori** di uno spazio se con le loro ricette si ottiene tutto lo spazio (lezione L06). Le dispense dicono la stessa cosa per una macchina lineare qualsiasi, con la parola «generatori».

> [!OSSERVAZIONE] Generatori dell'immagine (p. 72)
> Se $v_1, \dots, v_n$ sono generatori di $V$, allora $f(v_1), \dots, f(v_n)$ sono generatori di $\Imm f$. In particolare, se $A$ è una matrice $m \times n$, l'immagine di $L_A: \K^n \to \K^m$ è lo spazio generato dalle colonne,
> $$\Imm L_A = \Span\left(A^1, \dots, A^n\right),$$
> e per ogni matrice $A$ vale
> $$\rk(A) = \dim \Span\left(A^1, \dots, A^n\right) = \dim \Imm L_A.$$

**Come si legge.**

- La prima frase: se fai entrare dei generatori dello spazio di partenza, le loro uscite sono generatori dell'immagine.
- «In particolare»: i vettori della base canonica generano lo spazio di partenza, e le loro uscite sono le colonne. Quindi le colonne generano l'immagine.
- Nell'ultima riga, $\rk(A)$ si legge «rango di A» e $\dim$ si legge «dimensione di». Il **rango** di una matrice è la dimensione dello Span delle sue colonne (Definizione 8.3, lezione L08). Quindi il rango è la dimensione dell'immagine. In pratica si trova contando i pivot dopo Gauss (lezione L12).

> [!DIM] perché le uscite dei generatori generano l'immagine
> 1. Prendiamo un vettore $w$ dell'immagine: esiste un vettore $v$ di $V$ con $f(v) = w$.
> 2. I vettori $v_1, \dots, v_n$ generano $V$. Quindi $v$ è una loro ricetta: $v = \lambda_1 v_1 + \cdots + \lambda_n v_n$.
> 3. Le ricette restano ricette: $w = f(v) = \lambda_1 f(v_1) + \cdots + \lambda_n f(v_n)$. Quindi $w$ sta nello Span delle uscite.
> 4. Al contrario, l'immagine è un sottospazio (Proposizione 14.10) e contiene tutte le uscite $f(v_i)$: quindi contiene anche tutte le loro ricette. In conclusione $\Imm f = \Span\big(f(v_1), \dots, f(v_n)\big)$.

> [!METODO] Nucleo e immagine di $L_A$
> 1. **Riduci la matrice con Gauss–Jordan.** Segna in quali colonne stanno i pivot.
> 2. **Nucleo.** Scrivi il sistema con tutti zeri a destra, usando la matrice ridotta. Ogni colonna senza pivot dà un'incognita libera. Ogni incognita libera dà un vettore della base del nucleo (lezione L12).
> 3. **Immagine.** Prendi le colonne della matrice **di partenza** che stanno nei posti dei pivot (lezione L13). Formano una base dell'immagine. Sono tante quante il rango.
> 4. **Controllo.** La dimensione del nucleo più quella dell'immagine deve dare il numero delle colonne. È il teorema della dimensione, nella prossima sezione.

> [!ESEMPIO] Nucleo e immagine, tutto il conto
> La matrice è
> $$A = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 4 & 1 \\ 1 & 2 & 1 \end{pmatrix}.$$
> Ha 3 righe e 3 colonne, quindi la sua macchina va da $\R^3$ a $\R^3$.
>
> **Passo 1: Gauss–Jordan.** Ricorda: la mossa $R_2 \to R_2 - 2R_1$ si legge «la riga 2 diventa la riga 2 meno 2 volte la riga 1» (lezione L11). Sotto l'1 in alto a sinistra ci sono un 2 e un 1: vogliamo farli diventare 0. Poi la riga 2 e la riga 3 diventano uguali, e togliamo l'una dall'altra.
>
> | Mossa | Conto, un numero alla volta | Nuova riga |
> |---|---|---|
> | $R_2 \to R_2 - 2R_1$ | $(2 - 2 \cdot 1,\ 4 - 2 \cdot 2,\ 1 - 2 \cdot 0)$ | $(0, 0, 1)$ |
> | $R_3 \to R_3 - R_1$ | $(1 - 1,\ 2 - 2,\ 1 - 0)$ | $(0, 0, 1)$ |
> | $R_3 \to R_3 - R_2$ | $(0 - 0,\ 0 - 0,\ 1 - 1)$ | $(0, 0, 0)$ |
>
> La matrice è diventata
> $$\begin{pmatrix} 1 & 2 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}.$$
> Ricorda: il **pivot** di una riga è il suo primo numero diverso da zero. Qui i pivot sono due: l'1 della riga 1, nella colonna 1, e l'1 della riga 2, nella colonna 3. La colonna 2 non ha pivot.
>
> **Passo 2: il nucleo.** Il sistema con tutti zeri a destra, letto sulla matrice ridotta, è
> $$\begin{cases} x_1 + 2x_2 = 0 \\ x_3 = 0 \end{cases}$$
> La colonna 2 non ha pivot, quindi l'incognita $x_2$ è libera: la chiamiamo $t$. La prima equazione dà $x_1 = -2t$. La seconda dà $x_3 = 0$. Le soluzioni sono i vettori $(-2t,\ t,\ 0)$, cioè i multipli di $(-2, 1, 0)$.
> $$\Ker L_A = \Span\big((-2, 1, 0)\big)$$
> Il nucleo ha dimensione 1: è una retta. Controllo con la riga 2 della matrice di partenza: $2 \cdot (-2) + 4 \cdot 1 + 1 \cdot 0 = 0$. Anche le righe 1 e 3 danno $-2 + 2 + 0 = 0$.
>
> **Passo 3: l'immagine.** I pivot stanno nelle colonne 1 e 3. Prendiamo le colonne 1 e 3 **della matrice di partenza**: sono $(1, 2, 1)$ e $(0, 1, 1)$.
> $$\Imm L_A = \Span\big((1, 2, 1),\ (0, 1, 1)\big)$$
> L'immagine ha dimensione 2: è un piano. La colonna 2 non serve, perché è il doppio della colonna 1.
>
> **Passo 4: il controllo.** $1 + 2 = 3$, che è il numero delle colonne.

Lo strumento qui sotto rifà questo conto: riduce la matrice, scrive una base del nucleo e prende come base dell'immagine le colonne di partenza nei posti dei pivot. Prova a cambiare la matrice. Scrivi le due righe «1 2» e «2 4», quelle della trappola qui sotto. Poi scrivi una matrice invertibile, per esempio con le righe «2 1» e «1 3»: il nucleo si riduce al solo vettore nullo.

```widget gauss
titolo: Nucleo e immagine di $L_A$ con i passaggi (qui la matrice dell'esempio)
matrice: 1 2 0; 2 4 1; 1 2 1
modo: nucleo
```

> [!TRAPPOLA] L'immagine si legge sulle colonne di partenza
> Le mosse di Gauss lavorano sulle righe, ma cambiano anche le colonne. E con le colonne cambia lo spazio che generano.
>
> Un esempio: la matrice con prima riga 1 e 2 e seconda riga 2 e 4. La mossa $R_2 \to R_2 - 2R_1$ dà la nuova seconda riga $(2 - 2,\ 4 - 4) = (0, 0)$. La prima colonna della matrice ridotta è $(1, 0)$.
>
> Ma l'immagine è lo Span della prima colonna **di partenza**, cioè di $(1, 2)$. Il vettore $(1, 0)$ non è un multiplo di $(1, 2)$: nell'immagine non c'è. Dalla matrice ridotta si leggono solo le **posizioni** dei pivot.

::: prova Una matrice ha prima riga 1 e 3, seconda riga 2 e 6. Trova il nucleo della sua macchina.
Il sistema è $x + 3y = 0$ e $2x + 6y = 0$. La seconda equazione è il doppio della prima: resta $x + 3y = 0$.

Chiamo $t$ l'incognita $y$. Allora $x = -3t$. Le soluzioni sono $(-3t,\ t)$: il nucleo è $\Span\big((-3, 1)\big)$.

Controllo: riga 1, $1 \cdot (-3) + 3 \cdot 1 = 0$. Riga 2, $2 \cdot (-3) + 6 \cdot 1 = 0$.
:::

::: prova Per la stessa matrice, qual è l'immagine?
Le colonne sono $(1, 2)$ e $(3, 6)$. La seconda è il triplo della prima, quindi non aggiunge niente. L'immagine è $\Span\big((1, 2)\big)$, una retta.
:::

> [!RICORDA]
> - Il nucleo della macchina di una matrice è l'insieme delle soluzioni del sistema con tutti zeri a destra.
> - L'immagine è lo Span delle colonne. La sua dimensione è il rango, cioè il numero dei pivot.
> - Una base dell'immagine: le colonne **di partenza** nei posti dei pivot.

## Entra, si perde, esce: il teorema della dimensione (p. 72)

C'è una regola di conteggio che lega il nucleo e l'immagine. Prima la vediamo sugli esempi già fatti.

Ricorda: la **dimensione** di uno spazio dice quanti numeri servono per dire dove sei (lezione L07). Un punto solo ha dimensione 0, una retta 1, un piano 2, lo spazio 3. Si scrive $\dim$ e si legge «dimensione di».

| Macchina | Che cosa entra | Che cosa si perde: il nucleo | Che cosa esce: l'immagine | Conteggio |
|---|---|---|---|---|
| $(x, y)$ va in $(x + y,\ 2x + 2y)$ | un piano: 2 | una retta: 1 | una retta: 1 | $1 + 1 = 2$ |
| $(x, y, z)$ va in $(x, y)$ | lo spazio: 3 | una retta, l'asse verticale: 1 | un piano: 2 | $1 + 2 = 3$ |
| la matrice dell'esempio svolto | lo spazio: 3 | una retta: 1 | un piano: 2 | $1 + 2 = 3$ |
| la funzione nulla, su uno spazio di dimensione $n$ | $n$ | tutto: $n$ | solo lo zero: 0 | $n + 0 = n$ |
| l'identità, su uno spazio di dimensione $n$ | $n$ | solo lo zero: 0 | tutto: $n$ | $0 + n = n$ |

> [!IDEA]
> Quello che entra è uguale a quello che si perde più quello che esce. Le dimensioni che il nucleo schiaccia sullo zero vanno perse. Quelle che restano formano l'immagine.

Le dispense lo scrivono così.

> [!TEOREMA] 14.12 · Teorema della dimensione
> Sia $f: V \to W$ una funzione lineare. Se $V$ ha dimensione finita $n$, allora
> $$\dim \Ker f + \dim \Imm f = n.$$

**Come si legge.** La formula dice: dimensione del nucleo, più dimensione dell'immagine, uguale a $n$.

- Il numero $n$ è la dimensione dello spazio di **partenza**, non di quello di arrivo. È l'errore più frequente.
- Lo spazio di arrivo può essere qualsiasi.
- La formula lega tre numeri. Se ne conosci due, il terzo viene con una sottrazione.

Perché è vero? Le dispense danno l'idea. Scegli una base del nucleo. Poi aggiungi altri vettori, fino ad avere una base di tutto lo spazio di partenza. I vettori del nucleo vanno in zero e non producono niente. Le uscite dei vettori aggiunti formano una base dell'immagine. I passaggi completi sono nel libro di Martelli (Teorema 4.2.9).

Controlliamo sulla macchina che manda $(x, y)$ in $(x + y,\ 2x + 2y)$. Una base del nucleo è $(1, -1)$. Aggiungiamo $(1, 0)$ per avere una base del piano. L'uscita del vettore aggiunto è $(1, 2)$: è proprio una base dell'immagine.

### Per le matrici è il teorema di Rouché–Capelli

Guardiamo la macchina di una matrice con $n$ colonne.

- La dimensione del nucleo è il numero delle incognite libere, cioè delle colonne **senza** pivot.
- La dimensione dell'immagine è il rango, cioè il numero delle colonne **con** il pivot.
- Ogni colonna o ha il pivot o non ce l'ha. Quindi i due numeri, sommati, danno $n$.

Le dispense chiamano $S$ l'insieme delle soluzioni del sistema omogeneo e scrivono:

$$\Ker L_A = \{x \in \K^n \mid L_A(x) = 0\} = \{x \in \K^n \mid Ax = 0\} = S.$$

A parole: il nucleo è fatto dai vettori che la macchina manda in zero, cioè dalle soluzioni del sistema. Il teorema della dimensione diventa

$$\dim S = n - \rk(A).$$

È il teorema di Rouché–Capelli per i sistemi omogenei (Teorema 12.6, lezione L12). Due strade molto diverse, una con le mosse di Gauss e una con le basi, portano allo stesso risultato.

### Tre conseguenze

Dal teorema vengono subito tre fatti. Le dispense li raccolgono in un corollario, cioè in una conseguenza diretta di un teorema.

> [!COROLLARIO] 14.13
> Sia $f: V \to W$ un'applicazione lineare. Vale
> $$\dim \Imm f \le \dim V.$$
> Inoltre:
> 1. $f$ iniettiva $\Longleftrightarrow \dim \Imm f = \dim V$;
> 2. $f$ suriettiva $\Longleftrightarrow \dim \Imm f = \dim W$.

**Come si legge.** Il simbolo $\le$ si legge «minore o uguale». La doppia freccia si legge «esattamente quando».

- La prima riga: l'immagine non ha mai più dimensioni dello spazio di partenza. Il motivo: la sua dimensione è quella dello spazio di partenza meno quella del nucleo.
- Il punto 1: la macchina è iniettiva esattamente quando esce tutto quello che entra. Il motivo: iniettiva vuol dire che il nucleo ha dimensione 0 (Proposizione 14.11), e allora non si toglie niente.
- Il punto 2: la macchina è suriettiva esattamente quando l'immagine è grande quanto lo spazio di arrivo. Il motivo: un sottospazio con la stessa dimensione dello spazio che lo contiene è tutto lo spazio.

Qui, come nel teorema, le dimensioni sono finite.

> [!OLTRE] tre regole per i quiz, senza conti
> Dal Corollario 14.13 vengono tre regole (Martelli, Corollario 4.2.23 e Proposizione 4.2.24). Per usarle basta confrontare la dimensione dello spazio di partenza con quella dello spazio di arrivo.
>
> 1. **Partenza più grande dell'arrivo: la macchina non può essere iniettiva.** L'immagine sta nello spazio di arrivo, quindi è più piccola dello spazio di partenza: qualcosa va perso per forza. Esempio: da $\R^3$ a $\R^2$.
> 2. **Partenza più piccola dell'arrivo: la macchina non può essere suriettiva.** L'immagine non è mai più grande dello spazio di partenza, quindi non riempie lo spazio di arrivo. Esempio: da $\R^2$ a $\R^3$.
> 3. **Stessa dimensione: iniettiva esattamente quando suriettiva.** O valgono tutte e due, o nessuna delle due.
>
> Per la macchina di una matrice con $m$ righe e $n$ colonne (Martelli, Esempio 4.2.16): è iniettiva esattamente quando il rango è $n$, il numero delle colonne. È suriettiva esattamente quando il rango è $m$, il numero delle righe.

> [!ESEMPIO] Il teorema della dimensione al posto dei conti (sul modello del libro di Martelli, Esempio 4.2.12, che usa il punto $2$)
> Chiamiamo $W$ l'insieme dei polinomi di grado al massimo 2 che in 1 valgono 0:
> $$W = \{p \in \R_2[x] \mid p(1) = 0\}.$$
> Quanto vale la sua dimensione?
>
> 1. **Riconosci un nucleo.** Prendi la macchina «calcola in 1»: entra un polinomio $p$, esce il numero $p(1)$. È una valutazione, quindi è lineare. I polinomi che manda in zero sono proprio quelli di $W$: quindi $W$ è il suo nucleo.
> 2. **Conta quello che entra.** Entrano i polinomi di $\R_2[x]$, uno spazio di dimensione 3.
> 3. **Conta quello che esce.** Escono numeri, ed esce ogni numero: per far uscire il numero $\lambda$ basta far entrare il polinomio costante $\lambda$. Quindi l'immagine è tutto $\R$, che ha dimensione 1.
> 4. **Usa il teorema.** Quello che si perde è quello che entra meno quello che esce: $\dim W = 3 - 1 = 2$.
>
> **Una base.** I polinomi $x - 1$ e $x^2 - 1$ stanno in $W$: in 1 valgono $1 - 1 = 0$. Hanno grado diverso, quindi nessuno dei due è un multiplo dell'altro: sono indipendenti. Due vettori indipendenti in uno spazio di dimensione 2 formano una base (Teorema 7.12, lezione L07). Quindi $W = \Span(x - 1,\ x^2 - 1)$.

> [!OLTRE] dove trovarlo nel libro
> - **§4.1 «Introduzione»** (pp. 115–123). Ci sono la definizione, gli esempi di base e la macchina di una matrice (Proposizione 4.1.6, Corollario 4.1.7). Poi trasposizione, valutazione, derivata, coordinate e la Proposizione 4.1.19. Nel libro «lo zero va nello zero» è il primo assioma della definizione: le dispense invece lo ricavano dagli altri due.
> - **§4.2 «Nucleo e immagine»** (pp. 123–130). Ci sono le Proposizioni 4.2.1, 4.2.2, 4.2.5 e 4.2.6 e i Corollari 4.2.7, 4.2.8 e 4.2.14. Il teorema della dimensione, con la dimostrazione completa, è il Teorema 4.2.9 (pp. 124–125). Seguono gli Esempi 4.2.10–4.2.13.

::: prova Una macchina lineare va da $\R^5$ a $\R^3$ e il suo nucleo ha dimensione 2. Che dimensione ha l'immagine? La macchina è suriettiva?
Quello che esce è quello che entra meno quello che si perde: $5 - 2 = 3$. Lo spazio di arrivo $\R^3$ ha dimensione 3, come l'immagine: la macchina è suriettiva.
:::

::: prova Può esistere una macchina lineare iniettiva da $\R^3$ a $\R^2$?
No. L'immagine sta in $\R^2$, quindi ha dimensione al massimo 2. Entra uno spazio di dimensione 3: il nucleo ha dimensione almeno $3 - 2 = 1$, quindi non contiene solo lo zero.
:::

> [!RICORDA]
> - **Teorema della dimensione**: dimensione del nucleo più dimensione dell'immagine uguale dimensione dello spazio di **partenza**.
> - Per una matrice: colonne senza pivot più colonne con pivot uguale numero delle colonne.
> - Da uno spazio grande a uno più piccolo una macchina lineare non è mai iniettiva. Da uno piccolo a uno più grande non è mai suriettiva.
> - Con la stessa dimensione in partenza e in arrivo: iniettiva esattamente quando suriettiva.

## I simboli di questa lezione

| Simbolo | Si legge | Vuol dire | Esempio |
|---|---|---|---|
| $f(x)$ | «effe di x» | quello che esce dalla macchina $f$ quando entra $x$ | se $f(x) = 3x$, allora $f(2) = 6$ |
| $\R^2$, $\R^3$, $\R^n$ | «erre due», «erre tre», «erre enne» | le liste di 2, di 3, di $n$ numeri reali | $(3, 2)$ sta in $\R^2$ |
| $\K$ | «cappa» | i numeri reali oppure i numeri complessi | $\K^n$: le liste di $n$ numeri |
| $\in$ | «appartiene a» | sta dentro l'insieme | $(1, 2) \in \R^2$ |
| $f: V \to W$ | «effe da V a W» | la macchina prende vettori di $V$ e restituisce vettori di $W$ | $S: \R^2 \to \R^2$ |
| $\mapsto$ | «viene mandato in» | a sinistra l'entrata, a destra l'uscita | $x \mapsto 3x$ |
| $\lambda$ | «lambda» | un numero qualsiasi, cioè uno scalare | $\lambda = 3$ |
| $0$ | «zero» | il numero zero oppure il vettore nullo: lo dice il contesto | $(0, 0)$ in $\R^2$ |
| $v_1, \dots, v_k$ | «vu uno, …, vu cappa» | un elenco di $k$ vettori | $v_1 = (1, 0)$, $v_2 = (0, 1)$ |
| $\begin{pmatrix} a \\ b \end{pmatrix}$ | «il vettore colonna a, b» | il vettore $(a, b)$ scritto in verticale | $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$ è $(2, 1)$ |
| $\id$ | «identità» | la macchina che manda ogni vettore in sé stesso | $\id(v) = v$ |
| $a_{ij}$ | «a con i, j» | il numero nella riga $i$ e nella colonna $j$ di una matrice | $a_{21}$: riga 2, colonna 1 |
| $m \times n$ | «emme per enne» | la taglia di una matrice: $m$ righe e $n$ colonne | $2 \times 3$: 2 righe, 3 colonne |
| $L_A$ | «elle con A» | la macchina «moltiplica per la matrice $A$» | $L_A(x) = Ax$ |
| $e_1, e_2$ | «e uno, e due» | i vettori della base canonica | $e_1 = (1, 0)$, $e_2 = (0, 1)$ |
| $A^1, A^2$ | «la colonna 1, la colonna 2 di A» | le colonne della matrice; il numero in alto non è una potenza | $L_A(e_1) = A^1$ |
| $x'$ | «x primo» | il nome di un secondo vettore | $x + x'$ |
| $\tr A$ | «traccia di A» | la somma dei numeri sulla diagonale | diagonale 1 e 4: traccia 5 |
| $\det A$ | «determinante di A» | per due righe e due colonne: $ad - bc$ | $\det I_2 = 1$ |
| ${}^tA$ | «A trasposta» | la matrice con righe e colonne scambiate | la riga 1 diventa la colonna 1 |
| $M(n, \K)$ | «emme di enne, cappa» | le matrici quadrate con $n$ righe e $n$ colonne | $M(2, \R)$: due righe, due colonne |
| $\R_2[x]$ | «erre due di x» | i polinomi di grado al massimo 2 | $x^2 + 1$ |
| $p(3)$ | «pi di 3» | il valore del polinomio $p$ quando al posto di $x$ c'è 3 | se $p = x^2 + 1$, $p(3) = 10$ |
| $\Ker f$ | «ker di effe», «nucleo di effe» | i vettori che la macchina manda in zero | la retta dei multipli di $(1, -1)$ |
| $\Imm f$ | «immagine di effe» | i vettori che escono dalla macchina | la retta dei multipli di $(1, 2)$ |
| $\{0\}$ | «l'insieme con il solo zero» | l'insieme che contiene solo il vettore nullo | $\Ker f = \{0\}$ |
| $\{v \in V \mid \dots\}$ | «i $v$ di $V$ per cui…» | l'insieme dei vettori che rispettano la condizione | $\{v \in V \mid f(v) = 0\}$ |
| $\exists$ | «esiste» | ce n'è almeno uno | $\exists\, v$ con $f(v) = w$ |
| $\neq$ | «diverso da» | non uguale | $f(v) \neq 0$ |
| $\Span(\dots)$ | «span di…» | tutte le ricette fatte con quei vettori | $\Span\big((1, 2)\big)$: i multipli di $(1, 2)$ |
| $\dim$ | «dimensione di» | quanti numeri servono per dire dove sei | $\dim \R^3 = 3$ |
| $\rk(A)$ | «rango di A» | il numero dei pivot dopo Gauss | una matrice con due righe uguali e non nulle ha rango 1 |
| $\le$ | «minore o uguale» | più piccolo, oppure uguale | $\dim \Imm f \le \dim V$ |
| $\Longleftrightarrow$ | «se e solo se» | esattamente quando: vere insieme o false insieme | iniettiva $\Longleftrightarrow$ nucleo $\{0\}$ |
| $\lvert x \rvert$ | «valore assoluto di x» | il numero senza il segno meno | $\lvert -1 \rvert = 1$ |

## Verso l'esame

La prova scritta di Algebra lineare e Geometria ha 10 quiz con 5 risposte ciascuno. Servono almeno 6 risposte giuste perché vengano corretti i 2 problemi da 11 punti. Dura 2 ore, senza calcolatrice, e si possono portare solo 4 facciate di appunti scritti a mano. Gli appelli 2026/27 sono il 22/01 e il 05/02/2027 alle 14:00. Tutti i dettagli sono nella lezione L01.

**Che cosa di questa lezione viene chiesto**

Quasi ogni appello ha almeno una domanda su questi argomenti.

1. **«È lineare?»** Appelli del 10/07/2024 (domanda 7: quale formula descrive un'applicazione lineare da $\R^3$ a $\R^2$) e del 10/07/2025 (domanda 3: la valutazione di un polinomio in 7).
2. **Il nucleo.** Appello del 24/01/2024 (domanda 8, con i polinomi di $\R_2[x]$). Appello del 08/02/2024 (domanda 6, con la macchina che manda una matrice nella somma di sé stessa e della sua trasposta). Appello del 15/01/2026 (domanda 10, il nucleo di due macchine messe una dopo l'altra).
3. **L'immagine.** Appelli del 07/02/2025 (domanda 7), del 10/07/2025 (domanda 7), del 05/02/2026 (domanda 7) e del 07/09/2026 (domanda 4): quasi sempre per una macchina che prende e restituisce polinomi di $\R_2[x]$. Appelli del 03/06/2025 (domanda 7, il rango di una macchina) e del 03/07/2026 (domanda 4, la dimensione dell'immagine).
4. **Il teorema della dimensione senza conti.** Appelli del 06/09/2024 (domanda 3, letta qui sotto) e del 02/09/2025 (domanda 5). Nell'appello del 03/07/2026 (domanda 1) si chiede la dimensione di uno spazio di polinomi che valgono 0 in 2 e in $-2$: si trova come dimensione di un nucleo, con il metodo dell'esercizio 10.
5. **Problemi aperti.** Negli appelli del 08/02/2024 e del 10/07/2025 (problema 12) si chiedono quattro cose. La matrice di una macchina rispetto alla base canonica. Il suo rango. Tutti i vettori che vanno in un vettore assegnato. I valori di un parametro per cui un vettore sta nell'immagine. Nell'appello del 06/09/2024 (problema 11) si chiede una base del nucleo di una matrice con un parametro. Gli esercizi 13 e 14 seguono questi due schemi.

> [!METODO] L'immagine di una macchina tra polinomi, nel quiz
> La macchina prende un polinomio con i tre numeri $a$, $b$, $c$ e ne restituisce un altro. Esempio: $ax^2 + bx + c$ va in $(a - b)x^2 + (b - a)x + c$.
>
> 1. **Raccogli** i numeri che compaiono in uscita. Qui $(b - a)x$ è lo stesso di $-(a - b)x$, quindi l'uscita è $(a - b)(x^2 - x) + c \cdot 1$.
> 2. **Leggi i generatori.** I polinomi che restano accanto ai numeri generano l'immagine. Qui sono $x^2 - x$ e $1$.
> 3. **Togli i doppioni e conta.** Se un generatore è una ricetta degli altri, toglilo. Quelli rimasti dicono la dimensione. Qui sono 2. Se viene 3, l'immagine è tutto $\R_2[x]$.
> 4. **Confronta con le risposte.** Due Span sono uguali se hanno la stessa dimensione e ogni generatore dell'uno sta nell'altro.

### Una domanda vera, letta insieme

Appello del 06/09/2024, domanda 3:

«Sia $T: \R^6 \to \R_3[x]$ una applicazione lineare. Se $T$ è suriettiva, allora $\ker T$ ha dimensione: (a) 3. (b) 4. (c) 2. (d) 6. (e) 1.»

In pratica chiede: una macchina lineare prende vettori di 6 numeri e restituisce polinomi di grado al massimo 3. Riesce a produrre tutti i polinomi di quel tipo. Quante dimensioni perde?

1. **Quello che entra.** I vettori di 6 numeri formano uno spazio di dimensione 6.
2. **Lo spazio di arrivo.** Un polinomio di grado al massimo 3 è del tipo $ax^3 + bx^2 + cx + d$. Servono 4 numeri, quindi la dimensione è 4, non 3.
3. **Quello che esce.** La macchina è suriettiva: l'immagine è tutto lo spazio di arrivo, e ha dimensione 4.
4. **Quello che si perde.** Per il teorema della dimensione il nucleo ha dimensione $6 - 4 = 2$.

La risposta giusta è la (c). La (a) viene dall'errore di contare 3 per i polinomi di grado al massimo 3. La (b) è la dimensione dell'immagine, non del nucleo. La (d) è la dimensione dello spazio di partenza.

Il metodo vale per tutte le domande di questo tipo: scrivi la dimensione dello spazio di partenza, usa quello che dice il testo («suriettiva», «iniettiva», il rango) e sottrai. Nelle soluzioni ufficiali degli appelli il teorema della dimensione è chiamato anche «teorema del rango». È lo stesso teorema.

> [!TRAPPOLA] Gli errori da evitare
> - Confondere partenza e arrivo. Il nucleo sta nello spazio di **partenza**, l'immagine in quello di **arrivo**. Nel teorema della dimensione si usa la dimensione dello spazio di partenza.
> - Prendere le colonne della matrice ridotta come base dell'immagine. Vanno prese dalla matrice di partenza.
> - Dire che una macchina è lineare solo perché manda lo zero nello zero.
> - Sbagliare le dimensioni. $\R_n[x]$ ha dimensione $n + 1$: i polinomi di grado al massimo 3 hanno dimensione 4, non 3. Le matrici con $m$ righe e $n$ colonne hanno dimensione $m \cdot n$: quelle con due righe e due colonne hanno dimensione 4.

> [!ESAME] Il foglio da 4 facciate
> Da questa lezione conviene copiare cinque righe.
>
> - Le due regole di linearità, e il test: se lo zero non va nello zero, non è lineare.
> - Per la macchina di una matrice: le colonne sono le uscite della base canonica. L'immagine è lo Span delle colonne. Il rango è la dimensione dell'immagine. Il nucleo è fatto dalle soluzioni del sistema con tutti zeri a destra.
> - Il teorema della dimensione: nucleo più immagine uguale spazio di partenza.
> - Iniettiva esattamente quando il nucleo contiene solo lo zero.
> - Le tre regole: partenza più grande dell'arrivo, non iniettiva. Partenza più piccola dell'arrivo, non suriettiva. Stessa dimensione: iniettiva esattamente quando suriettiva.

## Quiz

```quiz
D: Quale delle funzioni sotto definisce un'applicazione lineare $T: \R^3 \to \R^2$?
+ $T(x, y, z) = (2x + 3y,\ x + 2z)$
- $T(x, y) = (2x - 3y,\ x + 2y)$
- $T(x, y, z) = (x^2 + y,\ x - 2z^2)$
- $T(x, y, z) = (2x + 1,\ y + z)$
- $T(x, y) = (x + 2y,\ y + 2z,\ x - 3z)$
= Appello del 10/07/2024, domanda 7. Servono due cose insieme: la macchina deve prendere tre numeri e restituirne due, e deve essere lineare. La prima formula lo fa, e in uscita ha solo multipli delle entrate sommati: è la macchina della matrice $\begin{pmatrix} 2 & 3 & 0 \\ 1 & 0 & 2 \end{pmatrix}$. La risposta più tentatrice è la seconda: è lineare, ma prende solo due numeri, quindi parte da $\R^2$. La terza ha dei quadrati. La quarta ha un numero fisso aggiunto: manda lo zero in $(1, 0)$. L'ultima prende due numeri ma usa anche $z$, e restituisce tre numeri.

D: Sia $f: V \to W$ una mappa lineare, con $\dim V = 4$ e $\dim W = 2$. Quale delle seguenti è necessariamente vera?
- $f$ deve essere suriettiva.
- $f$ non può essere suriettiva.
+ $f$ non può essere iniettiva.
- $f$ deve essere iniettiva.
- $f$ è un isomorfismo.
= Appello del 02/09/2025, domanda 5. La macchina parte da uno spazio di dimensione 4 e arriva in uno di dimensione 2: che cosa si può dire di sicuro? L'immagine sta nello spazio di arrivo, quindi ha dimensione al massimo 2. Per il teorema della dimensione il nucleo ha dimensione almeno $4 - 2 = 2$: non contiene solo lo zero, quindi la macchina non è iniettiva. La risposta tentatrice è «deve essere suriettiva». Può esserlo, come la macchina che manda $(x_1, x_2, x_3, x_4)$ in $(x_1, x_2)$. Ma può anche non esserlo, come la funzione nulla. Un isomorfismo è una macchina iniettiva e suriettiva insieme (lezione L15): qui è impossibile.

D: Il nucleo della mappa lineare $T: \R_2[x] \to \R_2[x]$, $T(ax^2 + bx + c) = bx^2 + cx$, è:
- $\{\}$
- $\R_1[x]$
- $\Span(x + 1,\ x - 1)$
+ $\Span(x^2)$
- $\R_2[x] \setminus \R_1[x]$
= Appello del 24/01/2024, domanda 8. Il nucleo è fatto dai polinomi che vanno nel polinomio zero. L'uscita $bx^2 + cx$ è zero quando $b = 0$ e $c = 0$, mentre $a$ può essere un numero qualsiasi. Restano i polinomi del tipo $ax^2$, cioè i multipli di $x^2$: il nucleo è $\Span(x^2)$. Le graffe vuote indicano l'insieme vuoto, ma un nucleo non è mai vuoto, perché contiene lo zero. La barra rovesciata dell'ultima risposta si legge «meno»: sono i polinomi di grado esattamente 2. Quell'insieme non contiene lo zero, quindi non può essere un nucleo.

D: L'immagine dell'applicazione lineare $T: \R_2[x] \to \R_2[x]$, $T(ax^2 + bx + c) = (a - b)x^2 + (b - a)x + c$, è:
- $\R_2[x]$
+ $\Span(x^2 - x,\ 1)$
- $\Span(x^2,\ x)$
- $\R_1[x]$
- $\{p \in \R_2[x] \mid p(0) = 0\}$
= Simile all'appello del 07/09/2026, domanda 4. La domanda chiede quali polinomi possono uscire. Si raccoglie: $(b - a)x$ è lo stesso di $-(a - b)x$, quindi l'uscita è $(a - b)(x^2 - x) + c \cdot 1$. Ogni uscita è una ricetta dei polinomi $x^2 - x$ e $1$, con coefficienti qualsiasi: l'immagine è il loro Span, di dimensione 2. La risposta tentatrice è $\R_2[x]$, che però ha dimensione 3. La terza e la quinta risposta non contengono il polinomio $1$. La quarta non contiene $x^2 - x$.

D: Sia $T: \R^5 \to \R_2[x]$ un'applicazione lineare suriettiva. Allora $\Ker T$ ha dimensione:
- $1$
+ $2$
- $3$
- $5$
- $0$
= Simile all'appello del 06/09/2024, domanda 3. Entra uno spazio di dimensione 5. Lo spazio di arrivo è fatto dai polinomi $ax^2 + bx + c$: servono 3 numeri, quindi ha dimensione 3. La macchina è suriettiva, quindi l'immagine ha dimensione 3. Per il teorema della dimensione il nucleo ha dimensione $5 - 3 = 2$. La risposta tentatrice è 3: è la dimensione dell'immagine, non quella del nucleo.

D: Quale di queste funzioni **non** è lineare?
+ $\det: M(2, \R) \to \R$
- $\tr: M(2, \R) \to \R$
- $M(2, \R) \to M(2, \R)$, $A \mapsto {}^tA$
- $\R_2[x] \to \R$, $p \mapsto p(3)$
- $M(2, \R) \to M(2, \R)$, $A \mapsto 2A$
= Il determinante non rispetta le somme. Controesempio con la matrice identità $I$ con due righe: $\det(I + I) = \det(2I) = 2 \cdot 2 = 4$, mentre $\det I + \det I = 1 + 1 = 2$. Le altre quattro macchine rispettano somme e multipli. La traccia è la più tentatrice, perché anche lei manda una matrice in un numero: ma somma i numeri della diagonale, non li moltiplica.

D: Sia $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$. Il nucleo di $L_A: \R^2 \to \R^2$ è:
+ $\Span((-2, 1))$
- $\Span((1, 2))$
- $\Span((1, -2))$
- $\{0\}$
- $\R^2$
= Il nucleo è fatto dai vettori che la macchina manda in zero. Il sistema è $x_1 + 2x_2 = 0$ e $2x_1 + 4x_2 = 0$: la seconda equazione è il doppio della prima. Chiamo $t$ l'incognita $x_2$: allora $x_1 = -2t$, e le soluzioni sono i multipli di $(-2, 1)$. Controllo: la riga 1 dà $1 \cdot (-2) + 2 \cdot 1 = 0$, la riga 2 dà $2 \cdot (-2) + 4 \cdot 1 = 0$. La risposta tentatrice è $\Span((1, 2))$: quella è l'immagine, cioè lo Span delle colonne. Il vettore $(1, -2)$ non va in zero: la riga 1 dà $1 - 4 = -3$.

D: Sia $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{pmatrix}$. Qual è la dimensione dell'immagine di $L_A: \R^3 \to \R^2$?
- $0$
+ $1$
- $2$
- $3$
- $6$
= Simile all'appello del 03/07/2026, domanda 4. La dimensione dell'immagine è il rango, cioè il numero dei pivot. La seconda riga è il doppio della prima: togliendo 2 volte la riga 1 dalla riga 2 resta una riga di zeri. C'è un solo pivot, quindi il rango è 1. Le risposte tentatrici sono 2 e 3, il numero delle righe e quello delle colonne: ma il rango conta solo le righe che dicono qualcosa di nuovo.

D: Sia $f: \R^3 \to \R^3$ lineare con $\Ker f = \{0\}$. Allora:
+ $f$ è anche suriettiva.
- $f$ è la funzione nulla.
- $\dim \Imm f = 0$.
- $f$ non può essere suriettiva.
- $\dim \Imm f = 2$.
= Simile all'appello del 02/09/2025, domanda 5. Nel nucleo c'è solo lo zero, quindi il nucleo ha dimensione 0. Per il teorema della dimensione l'immagine ha dimensione $3 - 0 = 3$. Lo spazio di arrivo ha dimensione 3, quindi l'immagine lo riempie tutto: la macchina è suriettiva. Quando partenza e arrivo hanno la stessa dimensione, iniettiva e suriettiva vanno sempre insieme.

D: Una matrice $A$ di taglia $3 \times 5$ ha rango 2. Qual è la dimensione del nucleo di $L_A: \R^5 \to \R^3$?
N: 3
= La matrice ha 5 colonne, quindi entra uno spazio di dimensione 5. L'immagine ha dimensione 2, come il rango. Per il teorema della dimensione il nucleo ha dimensione $5 - 2 = 3$. L'errore tipico è partire dal numero delle righe e scrivere $3 - 2 = 1$: conta lo spazio di partenza, cioè il numero delle colonne.
```

## Esercizi

::: esercizio base Far girare una macchina
La macchina $T: \R^2 \to \R^2$ ha la regola $T(x, y) = (x + 2y,\ 3x)$. Calcola $T(1, 0)$, $T(0, 1)$ e $T(2, 1)$. Poi controlla che $T(2, 1) = 2 \cdot T(1, 0) + T(0, 1)$.
::: soluzione
Ogni volta metto i due numeri del vettore al posto di $x$ e di $y$.

1. $T(1, 0) = (1 + 2 \cdot 0,\ 3 \cdot 1) = (1, 3)$.
2. $T(0, 1) = (0 + 2 \cdot 1,\ 3 \cdot 0) = (2, 0)$.
3. $T(2, 1) = (2 + 2 \cdot 1,\ 3 \cdot 2) = (4, 6)$.

**Controllo.** $2 \cdot (1, 3) + (2, 0) = (2, 6) + (2, 0) = (4, 6)$: è uguale a $T(2, 1)$. Il motivo: $(2, 1)$ è la ricetta «2 parti di $(1, 0)$ più 1 parte di $(0, 1)$», e le ricette restano ricette.
:::

::: esercizio base Il test dello zero
Per ogni macchina calcola l'uscita del vettore nullo e di' che cosa puoi concludere: (a) $T(x, y) = (x + 3,\ y)$; (b) $T(x, y) = (2x - y,\ x)$; (c) $T(x, y) = (x^2,\ y)$.
::: soluzione
(a) $T(0, 0) = (0 + 3,\ 0) = (3, 0)$. Non esce il vettore nullo, quindi la macchina **non è lineare**.

(b) $T(0, 0) = (2 \cdot 0 - 0,\ 0) = (0, 0)$. Il test è superato, ma da solo non basta. Guardo la formula: in uscita ci sono solo multipli delle entrate, sommati. Quindi la macchina **è lineare**.

(c) $T(0, 0) = (0^2,\ 0) = (0, 0)$. Il test è superato, ma nella formula c'è un quadrato. Cerco un controesempio con i multipli.

1. Entra $(1, 0)$: esce $(1^2,\ 0) = (1, 0)$. Il doppio dell'uscita è $(2, 0)$.
2. Entra il doppio, cioè $(2, 0)$: esce $(2^2,\ 0) = (4, 0)$.

$(4, 0)$ e $(2, 0)$ sono diversi, quindi la macchina **non è lineare**.
:::

::: esercizio base Contare con il teorema della dimensione
(a) Una macchina lineare va da $\R^4$ a $\R^3$ e la sua immagine ha dimensione 3. Che dimensione ha il nucleo? (b) Una macchina lineare va da $\R^3$ a $\R^5$ ed è iniettiva. Che dimensione ha l'immagine? (c) Una matrice con 6 colonne ha rango 4. Che dimensione ha il nucleo della sua macchina?
::: soluzione
La regola è sempre: quello che entra è uguale a quello che si perde più quello che esce.

(a) Entra uno spazio di dimensione 4 ed esce uno spazio di dimensione 3. Il nucleo ha dimensione $4 - 3 = 1$.

(b) La macchina è iniettiva, quindi nel nucleo c'è solo lo zero: non si perde niente. L'immagine ha dimensione $3 - 0 = 3$.

(c) Le colonne sono 6, quindi entra uno spazio di dimensione 6. L'immagine ha la dimensione del rango, cioè 4. Il nucleo ha dimensione $6 - 4 = 2$.
:::

::: esercizio base Lineari o no?
Stabilisci quali sono lineari; per le altre dai un controesempio. (a) $T: \R^2 \to \R^2$, $T(x, y) = (3x - y,\ 0)$. (b) $T: \R^2 \to \R^2$, $T(x, y) = (x + y,\ 1)$. (c) $T: \R^3 \to \R^2$, $T(x, y, z) = (xz,\ y)$. (d) $T: \R_2[x] \to \R$, $T(p) = p(0) \cdot p(1)$.
::: soluzione
(a) **Lineare.** In uscita ci sono solo multipli delle entrate, sommati: il primo numero è $3x + (-1)y$, il secondo è $0x + 0y$. È la macchina della matrice con prima riga 3 e $-1$ e seconda riga 0 e 0.

(b) **Non lineare.** Test dello zero: $T(0, 0) = (0 + 0,\ 1) = (0, 1)$. Non esce il vettore nullo.

(c) **Non lineare.** Il test dello zero non basta: $T(0, 0, 0) = (0, 0)$. Ma nella formula c'è un prodotto tra due entrate. Cerco un controesempio con il vettore $(1, 0, 1)$ e il numero 2.

1. Prima moltiplico, poi entro: $T(2, 0, 2) = (2 \cdot 2,\ 0) = (4, 0)$.
2. Prima entro, poi moltiplico: $T(1, 0, 1) = (1 \cdot 1,\ 0) = (1, 0)$, e il doppio è $(2, 0)$.

$(4, 0)$ e $(2, 0)$ sono diversi.

(d) **Non lineare.** La macchina prende un polinomio, lo calcola in 0 e in 1, e moltiplica i due numeri. Uso il polinomio costante $1$, che vale 1 dappertutto, e il numero 2.

1. Entra il polinomio $1$: esce $1 \cdot 1 = 1$. Il doppio dell'uscita è 2.
2. Entra il doppio, cioè il polinomio costante $2$: esce $2 \cdot 2 = 4$.

4 e 2 sono diversi. Anche qui il polinomio zero va in $0 \cdot 0 = 0$: il test dello zero non bastava.
:::

::: esercizio base Conoscere $T$ dai valori sulla base
(a) $T: \R^2 \to \R^2$ è lineare, con $T(1, 0) = (2, 1)$ e $T(0, 1) = (-1, 3)$. Calcola $T(3, -2)$ e la matrice $A$ con $T = L_A$. (b) Se invece si sa che $T(1, 1) = (3, 0)$ e $T(1, -1) = (1, 2)$, quanto vale $T(1, 0)$?
::: soluzione
(a) Scrivo $(3, -2)$ come ricetta dei due vettori di cui conosco l'uscita.

1. La ricetta è $(3, -2) = 3 \cdot (1, 0) - 2 \cdot (0, 1)$.
2. Le ricette restano ricette: $T(3, -2) = 3 \cdot (2, 1) - 2 \cdot (-1, 3)$.
3. Faccio i due multipli: $3 \cdot (2, 1) = (6, 3)$ e $2 \cdot (-1, 3) = (-2, 6)$.
4. Sottraggo posto per posto: $(6 - (-2),\ 3 - 6) = (8, -3)$.

Quindi $T(3, -2) = (8, -3)$. La matrice ha come colonne le uscite dei vettori della base canonica:

$$A = \begin{pmatrix} 2 & -1 \\ 1 & 3 \end{pmatrix}$$

**Controllo.** Moltiplico la matrice per $(3, -2)$. Riga 1: $2 \cdot 3 + (-1) \cdot (-2) = 8$. Riga 2: $1 \cdot 3 + 3 \cdot (-2) = -3$.

(b) Questa volta conosco le uscite di $(1, 1)$ e di $(1, -1)$. Devo scrivere $(1, 0)$ come loro ricetta.

1. Sommo i due vettori: $(1, 1) + (1, -1) = (2, 0)$. È il doppio di $(1, 0)$.
2. Quindi $(1, 0)$ è «mezza parte del primo più mezza parte del secondo».
3. Le ricette restano ricette: $T(1, 0) = \frac 12 \cdot (3, 0) + \frac 12 \cdot (1, 2)$.
4. Faccio i conti: $\left(\frac 32, 0\right) + \left(\frac 12, 1\right) = (2, 1)$.
:::

::: esercizio base Nucleo e immagine di una proiezione obliqua
Trova nucleo e immagine di $T: \R^3 \to \R^2$, $T(x, y, z) = (x - z,\ y + z)$, e di' se $T$ è iniettiva o suriettiva.
::: soluzione
1. **La matrice.** Nelle righe metto i numeri che moltiplicano le entrate: la prima riga è fatta da 1, 0 e $-1$, la seconda da 0, 1 e 1. È già ridotta. I pivot stanno nelle colonne 1 e 2, quindi il rango è 2.
2. **Il nucleo.** Il sistema è $x - z = 0$ e $y + z = 0$. L'incognita $z$ è libera: la chiamo $t$. Allora $x = t$ e $y = -t$. Il nucleo è $\Span\big((1, -1, 1)\big)$, di dimensione 1.
3. **L'immagine.** Ha la dimensione del rango, cioè 2. Lo spazio di arrivo $\R^2$ ha dimensione 2, quindi l'immagine è tutto $\R^2$.
4. **Iniettiva o suriettiva?** È **suriettiva**, perché l'immagine è tutto lo spazio di arrivo. **Non è iniettiva**, perché nel nucleo non c'è solo lo zero. Da $\R^3$ a $\R^2$ non poteva esserlo in nessun caso.

**Controllo.** $T(1, -1, 1) = (1 - 1,\ -1 + 1) = (0, 0)$. Il teorema della dimensione torna: $1 + 2 = 3$.
:::

::: esercizio medio Esercizio 14.14 delle dispense, punto 1
Sia $f_1: \R^3 \to \R^2$, $f_1(x, y, z) = (x + y + z,\ 2x + 3y + 4z)$. Controlla che $f_1$ è lineare, trova $\Ker f_1$ e $\Imm f_1$ e verifica il teorema della dimensione.
::: soluzione
**È lineare.** In uscita ci sono solo multipli delle entrate, sommati. Quindi $f_1$ è la macchina di una matrice (Esempio 14.6). Nelle righe ci sono i numeri che moltiplicano le entrate:

$$A = \begin{pmatrix} 1 & 1 & 1 \\ 2 & 3 & 4 \end{pmatrix}$$

**Il nucleo.** Riduco la matrice con Gauss–Jordan.

1. Mossa $R_2 \to R_2 - 2R_1$: la nuova riga 2 è $(2 - 2,\ 3 - 2,\ 4 - 2) = (0, 1, 2)$.
2. Mossa $R_1 \to R_1 - R_2$: la nuova riga 1 è $(1 - 0,\ 1 - 1,\ 1 - 2) = (1, 0, -1)$.
3. I pivot stanno nelle colonne 1 e 2. La colonna 3 non ha pivot, quindi $z$ è libera: la chiamo $t$.
4. La riga 1 dice $x - z = 0$, cioè $x = t$. La riga 2 dice $y + 2z = 0$, cioè $y = -2t$.

Le soluzioni sono $(t, -2t, t)$: il nucleo è $\Span\big((1, -2, 1)\big)$, di dimensione 1.

**L'immagine.** I pivot sono 2, quindi l'immagine ha dimensione 2. Lo spazio di arrivo $\R^2$ ha dimensione 2: l'immagine è tutto $\R^2$. Una base: le colonne 1 e 2 della matrice di partenza, cioè $(1, 2)$ e $(1, 3)$.

**Il teorema della dimensione.** $1 + 2 = 3$, la dimensione di $\R^3$.

**Controllo.** $f_1(1, -2, 1) = (1 - 2 + 1,\ 2 - 6 + 4) = (0, 0)$.
:::

::: esercizio medio Esercizio 14.14 delle dispense, punto 2
Sia $f_2: \R_2[x] \to \R$, $f_2(p(x)) = p(1) + p(-1)$. Controlla che $f_2$ è lineare, trova $\Ker f_2$ e $\Imm f_2$ e verifica il teorema della dimensione.
::: soluzione
A parole: la macchina prende un polinomio di grado al massimo 2, lo calcola in 1 e in $-1$ e somma i due numeri.

**Una formula comoda.** Scrivo il polinomio con tre numeri: $p = a_0 + a_1 x + a_2 x^2$.

1. In 1: $p(1) = a_0 + a_1 + a_2$.
2. In $-1$: $p(-1) = a_0 - a_1 + a_2$, perché $(-1)^2 = 1$.
3. Sommo: i due pezzi con $a_1$ si cancellano, e resta $f_2(p) = 2a_0 + 2a_2$.

**È lineare.** Per calcolare in un punto la somma di due polinomi si sommano i due valori. Quindi, per due polinomi $p$ e $q$ e un numero $\lambda$:

$$f_2(p + q) = p(1) + q(1) + p(-1) + q(-1) = f_2(p) + f_2(q),$$

$$f_2(\lambda p) = \lambda p(1) + \lambda p(-1) = \lambda f_2(p).$$

**Il nucleo.** Cerco i polinomi che vanno in zero.

1. La condizione è $2a_0 + 2a_2 = 0$, cioè $a_2 = -a_0$. Il numero $a_1$ è libero.
2. Sostituisco: $p = a_0 + a_1 x - a_0 x^2 = a_0 (1 - x^2) + a_1 x$.
3. I polinomi $1 - x^2$ e $x$ hanno grado diverso, quindi nessuno è un multiplo dell'altro: sono indipendenti.

Il nucleo è $\Span(1 - x^2,\ x)$, di dimensione 2.

**L'immagine.** Il polinomio costante $\frac 12$ va in $\frac 12 + \frac 12 = 1$. Quindi il numero 1 esce, e con lui tutti i suoi multipli, cioè tutti i numeri. L'immagine è tutto $\R$, di dimensione 1.

**Il teorema della dimensione.** $2 + 1 = 3$, la dimensione di $\R_2[x]$.

**Controllo.** Il polinomio $1 - x^2$ vale 0 sia in 1 sia in $-1$. Il polinomio $x$ vale 1 in 1 e $-1$ in $-1$: la somma è 0.
:::

::: esercizio medio Esercizio 14.14 delle dispense, punto 3
Sia $f_3: M_2(\R) \to M_2(\R)$, $f_3(A) = A - {}^tA$ (dove $M_2(\R) = M(2, \R)$ sono le matrici reali $2 \times 2$). Controlla che $f_3$ è lineare, trova $\Ker f_3$ e $\Imm f_3$ e verifica il teorema della dimensione.
::: soluzione
A parole: la macchina prende una matrice con due righe e due colonne e le toglie la sua trasposta, cioè la matrice con righe e colonne scambiate (lezione L08).

**Una formula comoda.** Nella trasposta i numeri $b$ e $c$ si scambiano di posto.

$$f_3(A) = \begin{pmatrix} a & b \\ c & d \end{pmatrix} - \begin{pmatrix} a & c \\ b & d \end{pmatrix} = \begin{pmatrix} 0 & b - c \\ c - b & 0 \end{pmatrix}$$

**È lineare.** La trasposta rispetta somme e multipli (lezione L08). Quindi:

$$f_3(A + B) = (A + B) - {}^t(A + B) = A - {}^tA + B - {}^tB = f_3(A) + f_3(B),$$

$$f_3(\lambda A) = \lambda A - \lambda\,{}^tA = \lambda f_3(A).$$

**Il nucleo.** Cerco le matrici che vanno nella matrice di soli zeri.

1. Dalla formula: serve $b - c = 0$, cioè $b = c$. I numeri $a$ e $d$ sono liberi.
2. Le matrici con $b = c$ sono le matrici **simmetriche**. Ognuna è una ricetta di tre matrici:
   $$\begin{pmatrix} a & b \\ b & d \end{pmatrix} = a\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + b\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} + d\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}.$$
3. Le tre matrici sono indipendenti: ognuna ha un 1 in un posto dove le altre due hanno 0.

Il nucleo ha dimensione 3.

**L'immagine.** Le uscite hanno 0 sulla diagonale, un numero $s$ in alto a destra e $-s$ in basso a sinistra. Il numero $s$ può essere qualsiasi: basta scegliere $b = s$ e $c = 0$. Sono le matrici **antisimmetriche**, cioè i multipli di una sola matrice:

$$\Imm f_3 = \Span\left(\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}\right).$$

**Il teorema della dimensione.** $3 + 1 = 4$, la dimensione di $M_2(\R)$: per scrivere una matrice con due righe e due colonne servono 4 numeri.
:::

::: esercizio medio Un sottospazio di polinomi come nucleo
Sia $W = \{p \in \R_3[x] \mid p(0) = 0,\ p(1) = 0\}$. Trova $\dim W$ con il teorema della dimensione e poi una base di $W$.
::: soluzione
A parole: $W$ è fatto dai polinomi di grado al massimo 3 che valgono 0 sia in 0 sia in 1.

1. **Riconosco un nucleo.** Prendo la macchina che manda un polinomio $p$ nel vettore $(p(0),\ p(1))$. Parte da $\R_3[x]$ e arriva in $\R^2$. È fatta di due valutazioni, quindi è lineare. I polinomi che manda in $(0, 0)$ sono proprio quelli di $W$.
2. **Conto quello che entra.** Un polinomio di grado al massimo 3 si scrive con 4 numeri: $\R_3[x]$ ha dimensione 4.
3. **Conto quello che esce.** Il polinomio $1 - x$ va in $(1 - 0,\ 1 - 1) = (1, 0)$. Il polinomio $x$ va in $(0, 1)$. Queste due uscite generano tutto $\R^2$: l'immagine ha dimensione 2.
4. **Uso il teorema.** Il nucleo ha dimensione $4 - 2 = 2$. Quindi $\dim W = 2$.

**Una base.** I polinomi $x^2 - x$ e $x^3 - x$ stanno in $W$: valgono $0 - 0 = 0$ in 0 e $1 - 1 = 0$ in 1. Hanno grado diverso, quindi sono indipendenti. Due vettori indipendenti in uno spazio di dimensione 2 formano una base (Teorema 7.12, lezione L07). Quindi $W = \Span(x^2 - x,\ x^3 - x)$.

È lo schema della domanda 1 dell'appello del 03/07/2026.
:::

::: esercizio difficile Esercizio 14.15 delle dispense
Sia $f: \R^4 \to \R^3$ l'applicazione lineare $f(x_1, x_2, x_3, x_4) = (x_1 + x_2 + x_3,\ x_2 + x_3 + x_4,\ x_1 - x_4)$. (1) Trova una base di $\Ker f$. (2) Determina $\dim \Imm f$ con il teorema della dimensione. (3) Trova una base di $\Imm f$. (4) Stabilisci se $f$ è iniettiva e se è suriettiva.
::: soluzione
**La matrice.** In ogni riga metto i numeri che moltiplicano le quattro entrate. Dove un'entrata manca, il numero è 0.

$$A = \begin{pmatrix} 1 & 1 & 1 & 0 \\ 0 & 1 & 1 & 1 \\ 1 & 0 & 0 & -1 \end{pmatrix}$$

**Gauss–Jordan.**

1. Mossa $R_3 \to R_3 - R_1$: la nuova riga 3 è $(1 - 1,\ 0 - 1,\ 0 - 1,\ -1 - 0) = (0, -1, -1, -1)$.
2. È l'opposto della riga 2. Mossa $R_3 \to R_3 + R_2$: la nuova riga 3 è $(0, 0, 0, 0)$.
3. Mossa $R_1 \to R_1 - R_2$: la nuova riga 1 è $(1 - 0,\ 1 - 1,\ 1 - 1,\ 0 - 1) = (1, 0, 0, -1)$.

$$\begin{pmatrix} 1 & 0 & 0 & -1 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$

**(1) Una base del nucleo.**

1. I pivot stanno nelle colonne 1 e 2. Le incognite $x_3$ e $x_4$ sono libere: le chiamo $s$ e $t$.
2. La riga 1 dice $x_1 - x_4 = 0$, cioè $x_1 = t$.
3. La riga 2 dice $x_2 + x_3 + x_4 = 0$, cioè $x_2 = -s - t$.
4. Separo i pezzi con $s$ da quelli con $t$:
   $$(t,\ -s - t,\ s,\ t) = s \cdot (0, -1, 1, 0) + t \cdot (1, -1, 0, 1).$$

Una base del nucleo è fatta da $(0, -1, 1, 0)$ e $(1, -1, 0, 1)$. Il nucleo ha dimensione 2.

**(2) La dimensione dell'immagine.** Entra uno spazio di dimensione 4 e il nucleo ha dimensione 2. L'immagine ha dimensione $4 - 2 = 2$.

**(3) Una base dell'immagine.** Prendo le colonne 1 e 2 della matrice **di partenza**, quelle nei posti dei pivot: $(1, 0, 1)$ e $(1, 1, 0)$. Non sono uno multiplo dell'altro, e l'immagine ha dimensione 2: formano una base.

**(4) Iniettiva? Suriettiva?** Non è iniettiva, perché nel nucleo non c'è solo lo zero. Non è suriettiva, perché l'immagine ha dimensione 2 e lo spazio di arrivo ha dimensione 3. Un vettore che non esce mai è $(0, 0, 1)$: le uscite $(x, y, z)$ rispettano tutte $x - y - z = 0$, e qui viene $-1$.

**Controllo.** I due vettori della base del nucleo vanno in zero:

- $f(0, -1, 1, 0) = (0 - 1 + 1,\ -1 + 1 + 0,\ 0 - 0) = (0, 0, 0)$;
- $f(1, -1, 0, 1) = (1 - 1 + 0,\ -1 + 0 + 1,\ 1 - 1) = (0, 0, 0)$.
:::

::: esercizio difficile Che cosa fa un'applicazione lineare ai vettori dipendenti e indipendenti
Sia $f: V \to W$ lineare e siano $v_1, \dots, v_k \in V$. (a) Dimostra che se $v_1, \dots, v_k$ sono dipendenti, anche $f(v_1), \dots, f(v_k)$ lo sono. (b) Dimostra che se $f$ è iniettiva e $v_1, \dots, v_k$ sono indipendenti, anche $f(v_1), \dots, f(v_k)$ sono indipendenti. (c) Mostra con un esempio che in (b) l'iniettività serve.
::: soluzione
Ricorda (lezione L07): dei vettori sono **dipendenti** se una loro ricetta dà il vettore nullo anche con coefficienti non tutti zero. Sono **indipendenti** se una loro ricetta dà il vettore nullo solo quando tutti i coefficienti sono zero.

(a) I passi sono quattro.

1. I vettori sono dipendenti: esistono numeri $\lambda_1, \dots, \lambda_k$, non tutti zero, con $\lambda_1 v_1 + \cdots + \lambda_k v_k = 0$.
2. Faccio entrare nella macchina i due lati. A destra entra lo zero, ed esce lo zero.
3. A sinistra le ricette restano ricette: $\lambda_1 f(v_1) + \cdots + \lambda_k f(v_k) = 0$.
4. È una ricetta delle uscite che dà zero, con coefficienti non tutti zero. Quindi le uscite sono dipendenti.

(b) Anche qui quattro passi.

1. Prendo una ricetta delle uscite che dà zero: $\lambda_1 f(v_1) + \cdots + \lambda_k f(v_k) = 0$. Devo mostrare che tutti i coefficienti sono zero.
2. Le ricette restano ricette: il vettore $\lambda_1 v_1 + \cdots + \lambda_k v_k$ va in zero, cioè sta nel nucleo.
3. La macchina è iniettiva, quindi nel nucleo c'è solo lo zero (Proposizione 14.11). Allora $\lambda_1 v_1 + \cdots + \lambda_k v_k = 0$.
4. I vettori di partenza sono indipendenti: la loro ricetta dà zero solo se tutti i coefficienti sono zero.

(c) Prendo la macchina che manda $(x, y)$ in $(x + y,\ 2x + 2y)$, che non è iniettiva. I vettori $(1, 0)$ e $(0, 1)$ sono indipendenti, ma le loro uscite sono tutte e due $(1, 2)$. Due vettori uguali sono dipendenti: il primo meno il secondo dà zero.
:::

::: esercizio esame Come all'esame: rango, controimmagini e immagine con un parametro
Sia $T: \R^3 \to \R^3$, $T(x, y, z) = (x + y + 2z,\ 2x + y + 3z,\ x + 2y + 3z)$. (1) Scrivi la matrice $A$ con $T = L_A$ e calcola il rango di $T$. (2) Trova tutti i vettori $v$ con $T(v) = (3, 4, 5)$. (3) Per quali $k \in \R$ il vettore $(k, k^2, 2)$ appartiene all'immagine di $T$? (4) Trova una base di $\Ker T$ e di' se $T$ è iniettiva o suriettiva.
::: soluzione
Una parola del titolo: i vettori che vanno in un vettore assegnato si chiamano le sue **controimmagini**. La domanda (2) chiede le controimmagini di $(3, 4, 5)$.

**(1) La matrice e il rango.** Nelle righe metto i numeri che moltiplicano le entrate. Le domande (2) e (3) chiedono se certi vettori escono dalla macchina: conviene fare Gauss una volta sola, con un'uscita qualsiasi $(a, b, c)$ a destra della barra.

$$\left(\begin{array}{ccc|c} 1 & 1 & 2 & a \\ 2 & 1 & 3 & b \\ 1 & 2 & 3 & c \end{array}\right)$$

1. Mossa $R_2 \to R_2 - 2R_1$. A sinistra: $(2 - 2,\ 1 - 2,\ 3 - 4) = (0, -1, -1)$. A destra: $b - 2a$.
2. Mossa $R_3 \to R_3 - R_1$. A sinistra: $(1 - 1,\ 2 - 1,\ 3 - 2) = (0, 1, 1)$. A destra: $c - a$.
3. Mossa $R_3 \to R_3 + R_2$. A sinistra: $(0, 0, 0)$. A destra: $(c - a) + (b - 2a) = b + c - 3a$.

$$\left(\begin{array}{ccc|c} 1 & 1 & 2 & a \\ 0 & -1 & -1 & b - 2a \\ 0 & 0 & 0 & b + c - 3a \end{array}\right)$$

A sinistra della barra ci sono due pivot: il rango è 2.

**(2) I vettori che vanno in $(3, 4, 5)$.** Metto $a = 3$, $b = 4$, $c = 5$.

1. L'ultima riga dice $0 = 4 + 5 - 9$. È vera, quindi le soluzioni ci sono.
2. La riga 2 dice $-y - z = 4 - 6 = -2$, cioè $y + z = 2$. La riga 1 dice $x + y + 2z = 3$.
3. La colonna 3 non ha pivot: $z$ è libera, e la chiamo $t$. Dalla riga 2: $y = 2 - t$.
4. Dalla riga 1: $x = 3 - (2 - t) - 2t = 1 - t$.

I vettori cercati sono $v = (1 - t,\ 2 - t,\ t)$, per ogni numero $t$. Controllo con $t = 0$: $T(1, 2, 0) = (1 + 2 + 0,\ 2 + 2 + 0,\ 1 + 4 + 0) = (3, 4, 5)$.

**(3) Per quali $k$ il vettore $(k, k^2, 2)$ sta nell'immagine.** Un vettore $(a, b, c)$ esce dalla macchina quando il sistema ha soluzione, cioè quando l'ultima riga non è impossibile: $b + c - 3a = 0$.

1. Metto $a = k$, $b = k^2$, $c = 2$: la condizione diventa $k^2 - 3k + 2 = 0$.
2. Cerco due numeri che sommati danno 3 e moltiplicati danno 2: sono 1 e 2. Quindi $k^2 - 3k + 2 = (k - 1)(k - 2)$.
3. Un prodotto è zero quando uno dei due pezzi è zero: $k = 1$ oppure $k = 2$.

Il vettore sta nell'immagine per **$k = 1$ e per $k = 2$**. Controllo: con $k = 1$ il vettore è $(1, 1, 2)$, e $1 + 2 - 3 = 0$. Con $k = 2$ è $(2, 4, 2)$, e $4 + 2 - 6 = 0$.

**(4) Il nucleo.** Uso la stessa matrice ridotta, con $a = b = c = 0$.

1. La riga 2 dice $y = -z$. Con $z = t$ viene $y = -t$.
2. La riga 1 dice $x = -y - 2z = t - 2t = -t$.

Le soluzioni sono $(-t, -t, t)$: una base del nucleo è $(-1, -1, 1)$. La macchina **non è iniettiva**, perché nel nucleo non c'è solo lo zero. **Non è suriettiva**, perché l'immagine ha dimensione 2 e lo spazio di arrivo ha dimensione 3.

Controllo: $T(-1, -1, 1) = (-1 - 1 + 2,\ -2 - 1 + 3,\ -1 - 2 + 3) = (0, 0, 0)$. Il teorema della dimensione torna: $1 + 2 = 3$.

Lo schema è quello dei problemi 12 degli appelli del 08/02/2024 e del 10/07/2025.
:::

::: esercizio esame Come all'esame: il nucleo al variare di $k$
Sia $A = \begin{pmatrix} 1 & 1 & k \\ 1 & k & 1 \\ k & 1 & 1 \end{pmatrix}$ con $k \in \R$. Al variare di $k$, trova una base di $\Ker L_A$ e di' per quali $k$ l'applicazione $L_A: \R^3 \to \R^3$ è iniettiva.
::: soluzione
L'idea: nella matrice c'è una lettera $k$ al posto di un numero, e la matrice è quadrata. Se il suo determinante non è zero, il sistema con tutti zeri a destra ha solo la soluzione zero (lezione L12). I valori speciali di $k$ sono quelli che rendono il determinante uguale a zero.

**Il determinante.** Sviluppo lungo la prima riga (lezione L09).

1. I tre pezzi: $\det A = 1 \cdot (k \cdot 1 - 1 \cdot 1) - 1 \cdot (1 \cdot 1 - 1 \cdot k) + k \cdot (1 \cdot 1 - k \cdot k)$.
2. Faccio i conti nelle parentesi: $\det A = (k - 1) - (1 - k) + k(1 - k^2)$.
3. Il pezzo $-(1 - k)$ è uguale a $k - 1$. E $1 - k^2 = -(k - 1)(k + 1)$. Quindi $\det A = 2(k - 1) - k(k - 1)(k + 1)$.
4. In tutti e due i pezzi c'è $k - 1$: lo porto fuori. $\det A = (k - 1)(2 - k - k^2)$.
5. Cambio segno alla seconda parentesi: $2 - k - k^2 = -(k^2 + k - 2) = -(k - 1)(k + 2)$.

$$\det A = -(k - 1)^2 (k + 2)$$

Il determinante è zero solo per $k = 1$ e per $k = -2$.

**Primo caso: $k$ diverso da 1 e da $-2$.** Il determinante non è zero. Nel nucleo c'è solo il vettore nullo: ha dimensione 0 e non ha una base. La macchina è **iniettiva**, e quindi anche suriettiva.

**Secondo caso: $k = 1$.** Tutte e tre le righe sono $(1, 1, 1)$: il rango è 1.

1. Resta una sola equazione: $x + y + z = 0$.
2. Le incognite $y$ e $z$ sono libere: le chiamo $s$ e $t$. Allora $x = -s - t$.
3. Le soluzioni sono $(-s - t,\ s,\ t) = s \cdot (-1, 1, 0) + t \cdot (-1, 0, 1)$.

Una base del nucleo è fatta da $(-1, 1, 0)$ e $(-1, 0, 1)$. Il nucleo ha dimensione $3 - 1 = 2$.

**Terzo caso: $k = -2$.** Le righe sono $(1, 1, -2)$, $(1, -2, 1)$ e $(-2, 1, 1)$.

1. Mossa $R_2 \to R_2 - R_1$: la nuova riga 2 è $(1 - 1,\ -2 - 1,\ 1 + 2) = (0, -3, 3)$.
2. Mossa $R_3 \to R_3 + 2R_1$: la nuova riga 3 è $(-2 + 2,\ 1 + 2,\ 1 - 4) = (0, 3, -3)$.
3. Mossa $R_3 \to R_3 + R_2$: la nuova riga 3 è $(0, 0, 0)$. I pivot sono 2, quindi il rango è 2.
4. L'incognita $z$ è libera: la chiamo $t$. La riga 2 dice $-3y + 3z = 0$, cioè $y = t$.
5. La riga 1 dice $x + y - 2z = 0$, cioè $x = -t + 2t = t$.

Le soluzioni sono $(t, t, t)$: una base del nucleo è $(1, 1, 1)$. Il nucleo ha dimensione $3 - 2 = 1$. Controllo: i numeri di ogni riga, sommati, danno zero. Per esempio $1 + 1 - 2 = 0$.

**Conclusione.** La macchina è iniettiva esattamente per $k$ diverso da 1 e da $-2$. Lo schema è quello del problema 11, punto 2, dell'appello del 06/09/2024.
:::

## Domande di ripasso

::: domanda Che cos'è un'applicazione lineare?
È una macchina che trasforma vettori in vettori rispettando due regole. Somme: far entrare una somma dà la somma delle uscite. Multipli: far entrare un multiplo dà lo stesso multiplo dell'uscita.
:::

::: domanda Perché un'applicazione lineare manda $0$ in $0$? Quali tre zeri compaiono?
Il vettore nullo si può scrivere come «numero zero per vettore nullo». Per la regola dei multipli il numero zero esce dalla macchina, e il numero zero per qualunque vettore dà il vettore nullo. I tre zeri sono: il vettore nullo dello spazio di partenza, il numero zero e il vettore nullo dello spazio di arrivo.
:::

::: domanda Come si dimostra che una funzione non è lineare?
Basta un controesempio con i numeri. Ci sono tre possibilità: lo zero non va nello zero; due vettori per cui le somme non tornano; un vettore e un numero per cui i multipli non tornano. Il test dello zero da solo può non bastare.
:::

::: domanda Che cos'è $L_A$ e perché è lineare?
È la macchina «moltiplica per la matrice $A$». Se la matrice ha $m$ righe e $n$ colonne, entrano vettori di $n$ numeri ed escono vettori di $m$ numeri. È lineare perché il prodotto di matrici rispetta somme e multipli.
:::

::: domanda Che cosa sono le colonne di $A$ per l'applicazione $L_A$?
Sono le uscite dei vettori della base canonica: il primo va nella prima colonna, il secondo nella seconda, e avanti così. L'uscita di un vettore qualsiasi è la ricetta fatta con le colonne, con i numeri del vettore come coefficienti.
:::

::: domanda Che cosa sono nucleo e immagine, e dove vivono?
Il nucleo è l'insieme dei vettori che la macchina manda in zero: è un sottospazio dello spazio di partenza. L'immagine è l'insieme dei vettori che escono dalla macchina: è un sottospazio dello spazio di arrivo.
:::

::: domanda Perché $f$ è iniettiva se e solo se $\Ker f = \{0\}$?
Se la macchina è iniettiva, solo lo zero può andare dove va lo zero. Al contrario, supponi che nel nucleo ci sia solo lo zero e prendi due entrate diverse. La loro differenza non è zero, quindi non va in zero. Ma l'uscita della differenza è la differenza delle uscite: quindi le due uscite sono diverse.
:::

::: domanda Come si trovano nucleo e immagine di $L_A$?
Il nucleo è l'insieme delle soluzioni del sistema con tutti zeri a destra: ogni incognita libera dà un vettore della base. L'immagine è lo Span delle colonne: una base è fatta dalle colonne di partenza nei posti dei pivot.
:::

::: domanda Che cosa dice il teorema della dimensione? Qual è l'idea della dimostrazione?
Dice che la dimensione del nucleo più la dimensione dell'immagine dà la dimensione dello spazio di partenza, se questa è finita. L'idea: si prende una base del nucleo e la si completa a una base di tutto lo spazio di partenza. Le uscite dei vettori aggiunti formano una base dell'immagine.
:::

::: domanda Perché per le matrici il teorema della dimensione è Rouché–Capelli?
Il nucleo della macchina di una matrice è l'insieme delle soluzioni del sistema omogeneo, e la dimensione dell'immagine è il rango. Il teorema dice allora: la dimensione dello spazio delle soluzioni è il numero delle colonne meno il rango.
:::

::: domanda Se $\dim V = 4$ e $\dim W = 2$, che cosa si sa di $f: V \to W$ lineare? E se $\dim V = \dim W$?
Nel primo caso la macchina non può essere iniettiva: l'immagine ha dimensione al massimo 2, quindi il nucleo ha dimensione almeno $4 - 2 = 2$. Nel secondo caso la macchina è iniettiva esattamente quando è suriettiva (Corollario 14.13).
:::

::: domanda Quali di queste sono lineari: traccia, determinante, trasposizione, valutazione di un polinomio in un punto?
Traccia, trasposizione e valutazione sono lineari. Il determinante no: per la matrice identità con due righe, il determinante del suo doppio è 4, mentre la somma dei due determinanti è $1 + 1 = 2$.
:::

## Glossario

```glossario
Applicazione lineare | Una macchina che trasforma vettori in vettori e rispetta somme e multipli. Esempio: quella che manda $(x, y)$ in $(2x, y)$.
Dominio e codominio | Lo spazio dei vettori che entrano e lo spazio in cui stanno i vettori che escono. Nella scrittura $f: V \to W$ sono $V$ e $W$.
Funzione nulla | La macchina che manda ogni vettore nel vettore nullo. È lineare. Il suo nucleo è tutto lo spazio di partenza, la sua immagine contiene solo lo zero.
Identità $\id$ | La macchina che manda ogni vettore in sé stesso. È lineare. Il suo nucleo contiene solo lo zero, la sua immagine è tutto lo spazio.
$L_A$ | La macchina «moltiplica per la matrice $A$». Con $m$ righe e $n$ colonne, entrano liste di $n$ numeri ed escono liste di $m$ numeri.
Base canonica | I vettori con un 1 in un posto e 0 negli altri, come $(1, 0)$ e $(0, 1)$. Le loro uscite sono le colonne della matrice.
Traccia | La somma dei numeri sulla diagonale di una matrice quadrata. È una macchina lineare: entra una matrice, esce un numero.
Valutazione | La macchina lineare che prende un polinomio e restituisce il suo valore in un numero fissato, per esempio in 3.
Applicazione affine | Una macchina che moltiplica per una matrice e poi aggiunge un vettore fisso $b$. Se $b$ non è zero non è lineare, perché manda lo zero in $b$.
Controesempio | Un esempio con i numeri in cui una regola non funziona. Ne basta uno per dire che una macchina non è lineare.
Nucleo $\Ker f$ | L'insieme dei vettori che la macchina manda in zero. È un sottospazio dello spazio di partenza.
Immagine $\Imm f$ | L'insieme dei vettori che escono dalla macchina. È un sottospazio dello spazio di arrivo.
Iniettiva | Una macchina in cui entrate diverse danno sempre uscite diverse. Se è lineare, vuol dire che nel nucleo c'è solo lo zero.
Suriettiva | Una macchina che produce ogni vettore dello spazio di arrivo: l'immagine è tutto lo spazio di arrivo.
Rango di $f$ | La dimensione dell'immagine. Per la macchina di una matrice è il rango della matrice, cioè il numero dei pivot.
Teorema della dimensione | Dimensione del nucleo più dimensione dell'immagine uguale dimensione dello spazio di partenza, se questa è finita.
Corollario 14.13 | L'immagine non ha mai più dimensioni dello spazio di partenza. Iniettiva: l'immagine ha la dimensione dello spazio di partenza. Suriettiva: ha la dimensione dello spazio di arrivo.
Controimmagine | Un vettore che la macchina manda in un vettore assegnato. Le controimmagini dello zero formano il nucleo.
```

## Checklist

```checklist
- So dire che cos'è un'applicazione lineare e perché manda lo zero nello zero.
- So mostrare che una macchina è lineare (con le lettere) o che non lo è (con un controesempio con i numeri).
- So riconoscere a occhio le formule non lineari: numeri fissi aggiunti, quadrati, prodotti tra le entrate.
- So scrivere la macchina di una matrice e so che le colonne sono le uscite dei vettori della base canonica.
- So che traccia, trasposizione e valutazione sono lineari e che il determinante non lo è.
- So dire che cosa sono nucleo e immagine e perché sono sottospazi.
- So spiegare perché una macchina lineare è iniettiva esattamente quando nel nucleo c'è solo lo zero.
- So calcolare nucleo e immagine della macchina di una matrice con Gauss, prendendo le colonne di partenza per l'immagine.
- So enunciare il teorema della dimensione e usarlo per trovare una dimensione senza conti.
- So rispondere ai quiz su iniettività e suriettività confrontando le dimensioni dello spazio di partenza e di quello di arrivo.
```

## Fonti

- **Dispense 2026 del corso** (Buzano, Radeschi), lezione 14 «Applicazioni Lineari I», pp. 68–73: le sezioni 14.A–14.D sono seguite in ordine, con la pagina indicata accanto a ogni titolo; definizioni, proposizioni, teorema, corollario ed esempi mantengono la loro numerazione (Definizioni 14.1 e 14.9, Esempi 14.2–14.8, Proposizioni 14.10 e 14.11, Teorema 14.12, Corollario 14.13, Esercizi 14.14 e 14.15), compresi l'osservazione di p. 72 e i due riquadri «Collegamento con l'informatica» (reti neurali; il nucleo come insieme di direzioni ammissibili).
- **B. Martelli, *Geometria e algebra lineare***, testo di riferimento del corso, gratuito online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Qui: §4.1 (pp. 115–123) e §4.2 (pp. 123–130), in particolare la dimostrazione completa del Teorema 4.2.9, gli Esempi 4.1.10, 4.1.13, 4.1.15, 4.2.12 e 4.2.16, il Corollario 4.2.23 e le Proposizioni 4.1.19 e 4.2.24.
- **Appelli d'esame** di Algebra lineare 2023/24–2025/26 con soluzioni ufficiali (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): riportate le domande 8 del 24/01/2024, 7 del 10/07/2024, 3 del 06/09/2024 e 5 del 02/09/2025; citate le domande su linearità, nucleo, immagine e dimensioni degli altri appelli (08/02/2024, 07/02/2025, 03/06/2025, 10/07/2025, 15/01/2026, 05/02/2026, 03/07/2026, 07/09/2026) e i problemi 12 del 08/02/2024 e del 10/07/2025 e 11 del 06/09/2024. Le soluzioni qui sono scritte da capo.
- Le parti **«Oltre le dispense»** (ogni macchina lineare tra liste di numeri viene da una matrice, le tre regole per i quiz, i riferimenti al libro, gli esempi con il determinante e con i polinomi, gli esercizi non numerati) sono aggiunte di questi appunti per collegare la lezione al resto del corso e all'esame.
- Le spiegazioni a parole, gli esempi con i numeri, i riquadri «Ripasso» e «Prova tu» e gli esercizi di riscaldamento sono di questi appunti.
