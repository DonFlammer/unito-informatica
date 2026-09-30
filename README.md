# UniTo · Informatica — appunti e contesto per le AI

**Sito con gli appunti: https://donflammer.github.io/unito-informatica/**

> **Don't speak Italian? Use the English version: [DonFlammer/unito-computer-science](https://github.com/DonFlammer/unito-computer-science)**, where the notes website opens directly in English. It is the full English translation of this repository, made for students who don't speak Italian. It is updated after the Italian version, which prevails if the two differ.

> **⚠️ Leggi le [AVVERTENZE](AVVERTENZE.md).** Le **ricerche** (schede dei corsi, esami, regole, docenti, orari) vengono da fonti pubbliche e da alcune pagine Moodle riservate agli iscritti, consultate da me. Gli **appunti delle lezioni** rielaborano le slide dei docenti, lezione per lezione. Tutto è fatto con cura e con le fonti indicate, ma **può contenere errori**. **Non mi assumo alcuna responsabilità, per niente.** Chiunque può leggere e usare il repository, **a proprio rischio**. Lo aggiorno **lezione per lezione, niente di più**: nessun supporto e nessuna garanzia. Per date, regole e scadenze fanno fede solo le fonti ufficiali (Moodle, sito del corso di laurea, Esse3).

Appunti di studio della Laurea triennale in Informatica (Università di Torino), A.A. 2026/27, primo anno.

**Seguo il canale B** (cognomi E–O): gli appunti delle lezioni sono scritti sulle slide del canale B, con i riferimenti alle lezioni corrispondenti di A e C. Programma ufficiale ed esame sono comuni ai tre canali, quindi gli appunti dovrebbero valere in gran parte anche per il canale A (cognomi A–D) e il C (P–Z). Docenti, slide, ordine degli argomenti, esempi e parti del programma effettivamente svolte però possono cambiare (per esempio in Fondamenti il canale B omette alcune sezioni del libro): per il proprio canale fanno fede le slide e il Moodle del proprio docente. Le schede di corsi ed esami coprono invece **tutti e tre i canali**.

Il repository è pubblico in sola lettura: chiunque può consultarlo o farne un **fork** (pulsante *Fork* in alto a destra) per avere una copia propria. Le modifiche a questo repository le faccio solo io.

## Corsi del primo anno

Gli appunti sono organizzati **per materia**: ogni materia ha la sua pagina sul sito, con l'elenco delle lezioni, l'esame in breve e i collegamenti alla scheda.

| Materia | Sem. | Pagina della materia (lezioni) | Scheda (docenti per canale, orari, esame, materiale) |
|---|---|---|---|
| Programmazione I (in C) | 1° | [appunti/PROG1](https://donflammer.github.io/unito-informatica/appunti/PROG1/) | [PROG1/corso.md](contesto_ai/PROG1/corso.md) · [esercizi d'esame tipo](contesto_ai/PROG1/esercizi_esame.md) · [indice lezioni](contesto_ai/PROG1/indice_lezioni.md) |
| Fondamenti dell'Informatica | 1° | [appunti/FDA](https://donflammer.github.io/unito-informatica/appunti/FDA/) | [FDA/corso.md](contesto_ai/FDA/corso.md) |
| Matematica Discreta, Algebra e Geometria | 1° | [appunti/MDAG](https://donflammer.github.io/unito-informatica/appunti/MDAG/) | [MDAG/corso.md](contesto_ai/MDAG/corso.md) |
| Analisi Matematica | 2° | [appunti/ANMAT](https://donflammer.github.io/unito-informatica/appunti/ANMAT/) | [ANMAT/corso.md](contesto_ai/ANMAT/corso.md) |
| Architettura degli Elaboratori | 2° | [appunti/ARCH](https://donflammer.github.io/unito-informatica/appunti/ARCH/) | [ARCH/corso.md](contesto_ai/ARCH/corso.md) |
| Programmazione II (in C) | 2° | [appunti/PROG2](https://donflammer.github.io/unito-informatica/appunti/PROG2/) | [PROG2/corso.md](contesto_ai/PROG2/corso.md) |
| Ricerca Operativa | 2° | [appunti/RO](https://donflammer.github.io/unito-informatica/appunti/RO/) | [RO/corso.md](contesto_ai/RO/corso.md) |
| Lingua Inglese I | 2° | [appunti/INGLESE](https://donflammer.github.io/unito-informatica/appunti/INGLESE/) | [INGLESE/corso.md](contesto_ai/INGLESE/corso.md) |

Informazioni generali (canali e turni, docenti per canale, orari, calendario 2026/27, appelli, regole d'esame, Moodle, gruppi Telegram): [contesto_ai/unito_informatica.md](contesto_ai/unito_informatica.md).

## Struttura

| Cartella | Contenuto |
|---|---|
| `appunti/<MATERIA>/` | una cartella per materia. `index.html` è la pagina della materia (lezioni, esame, collegamenti); gli altri file sono gli appunti di ogni lezione in HTML interattivo (simulatori, esercizi con soluzioni a scomparsa, checklist), che si aprono con doppio clic nel browser, anche offline |
| `contesto_ai/` | gli stessi contenuti in Markdown, sempre una cartella per materia, più corso di laurea, schede dei corsi ed esercizi d'esame tipo: **da allegare a qualsiasi AI** per non rifare le ricerche. Istruzioni in [contesto_ai/README.md](contesto_ai/README.md) |
| `strumenti/` | `genera_materie.py` rigenera le pagine delle materie e l'elenco nella pagina iniziale, e prima trasforma con `lezioni.mjs` le lezioni scritte in Markdown (`contesto_ai/<MATERIA>/lezioni/*.md` con `genera_html: true`) nelle pagine HTML (serve Node.js: `npm ci` nella cartella `strumenti`); `unisci_contesto.py` rigenera `contesto_ai/_TUTTO_IN_UNO.md` |
| `index.html` | pagina iniziale del sito GitHub Pages |

Solo in locale (esclusi da git, vedi `.gitignore`): le slide dei docenti in PDF (`slide/`), eventuali pagine salvate da Moodle (`moodle/`) e la copia parziale della guida degli studenti (`guida_degli_studenti_di/`).

## Contatti

Segnalazioni di errori: Telegram **[@rapsodico](https://t.me/rapsodico)** oppure una *issue* su GitHub, senza alcun impegno di risposta o correzione (vedi [AVVERTENZE](AVVERTENZE.md)).

## Licenza

Contenuti rilasciati con licenza [Creative Commons Attribuzione – Non commerciale – Condividi allo stesso modo 4.0 (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.it), testo completo in [LICENSE](LICENSE): puoi copiarli, modificarli e ridistribuirli **citando la fonte** (DonFlammer, github.com/DonFlammer/unito-informatica), **non per scopi commerciali** e **con la stessa licenza**. Le citazioni dalle slide e dal materiale dei docenti restano dei rispettivi autori e sono riportate a scopo di studio.

## Ripristinare la guida degli studenti su un altro PC

Il repository completo pesa circa 3,4 GB, quindi se ne scarica solo una parte:

```bash
git clone --filter=blob:none --no-checkout --depth 1 https://github.com/tsi-unito/guida_degli_studenti_di
cd guida_degli_studenti_di
MSYS_NO_PATHCONV=1 git sparse-checkout set --no-cone '/README.md' '/esami.md' '/Guide di Sopravvivenza/' '/Guide Tecniche/' '/Materie/*/README.md' '/Materie/PROG1/' '!/Materie/PROG1/**/*.o'
git checkout master
```

Per aggiungere il materiale di un altro corso: `MSYS_NO_PATHCONV=1 git sparse-checkout add '/Materie/<SIGLA>/'` (in Git Bash serve `MSYS_NO_PATHCONV=1`).

## Hai l'OFA di matematica?

Chi al TOLC-S ha preso meno di 5/20 in Matematica di base ha l'**OFA di matematica** da recuperare entro il primo anno: finché non lo supera non può registrare gli esami del secondo. Per quello c'è una guida a parte, fatta apposta: regole e date verificate, appunti degli otto moduli del corso ufficiale, test d'ingresso, simulazioni della prova a tempo e un piano di studio calcolato sulla data del turno.

- Sito: https://donflammer.github.io/unito-ofa-matematica/
- Repository, con il contesto per le AI: [DonFlammer/unito-ofa-matematica](https://github.com/DonFlammer/unito-ofa-matematica)

Profili locali, copie cifrate e limiti: [sicurezza](SECURITY.md).
