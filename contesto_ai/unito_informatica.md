# Informatica a UniTo — come funziona (A.A. 2026/27)

Aggiornato al 28/09/2026. Fonti primarie: sito del corso di laurea (laurea.informatica.unito.it: Guida e Manifesto 2026/27, Regolamento L-31 coorte 2026, Calendario didattico, Appelli d'esame), bacheca Esse3, pagine di Ateneo sulla verbalizzazione. Fonti secondarie: guida degli studenti TSI (github.com/tsi-unito/guida_degli_studenti_di), scritta da studenti.

## Il corso di laurea

- **Laurea triennale in Informatica**, classe **L-31**, codice CdS 0801L31. Dipartimento di Informatica, via Pessinetto 12 / corso Svizzera 185, Torino.
- 3 anni, **180 CFU**: 156 di insegnamenti, 9 di stage, 3 di prova finale, 12 liberi. 1 CFU = 25 ore di lavoro (di norma 8 h di lezione + 17 di studio, oppure 10 h di laboratorio + 15 di studio).
- Accesso libero con **TOLC-S** (CISIA): superato con almeno 5/20 in Matematica di base; sotto soglia scatta l'**OFA di matematica**, da assolvere entro il 1° anno (corso su www.ofa.unito.it + esame in presenza). Guida dedicata, con regole, date, appunti dei moduli e simulazioni: https://donflammer.github.io/unito-ofa-matematica/ (repository DonFlammer/unito-ofa-matematica, contesto per le AI nella cartella `ai/`).
- Didattica in presenza; frequenza **non obbligatoria** ma fortemente raccomandata.
- A tempo pieno si registrano al massimo 80 CFU all'anno (tempo parziale: 36).

## Canali e turni (1° anno)

- Lezioni divise per iniziale del cognome: **Canale A = A–D, Canale B = E–O, Canale C = P–Z**.
- Laboratori in turni: **turno 1 = matricola dispari, turno 2 = matricola pari** (A1/A2, B1/B2, C1/C2). Assegnazione automatica. I turni valgono solo per i corsi con laboratorio (Programmazione I e II, Architettura).
- Non esiste una procedura per cambiare canale. La FAQ del corso di laurea dice che, finché c'è posto in aula, si possono seguire le lezioni di un altro canale; per gli esami valgono le regole del proprio canale (e i corsi del 1° anno hanno quasi tutti un esame unico).
- Dal 2° anno i canali diventano due: A (A–K) e B (L–Z).
- **Orari** (University Planner, un calendario per canale con tutti i corsi): [Canale A](https://unito.prod.up.cineca.it/calendarioPubblico/linkCalendarioId=613b9237d969e100173d4110) · [Canale B](https://unito.prod.up.cineca.it/calendarioPubblico/linkCalendarioId=613b92a1d969e100173d4111) · [Canale C](https://unito.prod.up.cineca.it/calendarioPubblico/linkCalendarioId=613b9315da7aec0018faeed7). Anche nell'app MyUniTO+, ma solo per i corsi già nel piano carriera. Il 2° semestre non è ancora pubblicato.

## Primo anno 2026/27 (60 CFU)

Schede complete di ogni corso (docenti, orari, esame, programma, materiale, consigli): cartelle `PROG1/`, `FDA/`, `MDAG/`, `ANMAT/`, `ARCH/`, `PROG2/`, `RO/`, `INGLESE/`.

| Insegnamento | CFU | Sem. | Esame (uguale per i tre canali) |
|---|---|---|---|
| **Programmazione I** (MFN0582, in C) | 9 | 1° | scritto al PC su Moodle (programmazione, correttezza, memoria) |
| **Fondamenti dell'Informatica** (INF0348) | 9 | 1° | scritto su Moodle: 9 quiz + domanda aperta facoltativa |
| **Matematica Discreta, Algebra e Geometria** (INF0328) | 12 | 1° | due prove scritte separate (MD e AG), voto = media |
| Analisi Matematica (MFN0570) | 9 | 2° | tre prove al PC (quiz, teoria, esercizi) |
| Architettura degli Elaboratori (INF0326) | 6 | 2° | scritto al PC (ammissione + laboratorio RISC-V) + orale obbligatorio; su Esse3 un appello per canale ("ARCHIT. ELAB. CORSO A/B/C", stessa data e stessi laboratori): iscriversi a quello del proprio canale |
| Programmazione II (INF0330, in C) | 6 | 2° | progetti di laboratorio obbligatori + esonero + scritto |
| Ricerca Operativa (INF0327) | 6 | 2° | scritto al PC + orale facoltativo (da −16 a +6) |
| Lingua Inglese I (MFN0590) | 3 | 2° | test SET al PC, senza voto; riconoscibile con certificazione |

### Docenti per canale

| Insegnamento | Canale A (A–D) | Canale B (E–O) | Canale C (P–Z) |
|---|---|---|---|
| Programmazione I | Fiandrotti · lab A1 Colonnelli, A2 Antelmi | Amparore · lab B1 Basile, B2 Marengo | Mazzei (teoria e lab C1, C2) |
| Fondamenti dell'Informatica | Cardone | Berardi | Paolini |
| MDAG – Matematica Discreta | Longhi e Terracini | Mori | Longhi e Terracini |
| MDAG – Algebra Lineare e Geometria | Buzano | Buzano e Radeschi | Radeschi |
| Analisi Matematica | Soave e Colasuonno | Boscaggin e Tione | Seiler e Tione |
| Architettura degli Elaboratori | Gaeta (teoria e lab A1, A2) | Drago (teoria e lab B1) · lab B2 Lucenteforte | Schifanella (teoria e lab C1) · lab C2 Torta |
| Programmazione II | Damiani (teoria e lab A1, A2) | Birke · lab B1 e B2 Torta | Garetto (teoria e lab C1) · lab C2 Audrito |
| Ricerca Operativa | Grosso | Aringhieri | Hosteins |
| Lingua Inglese I | unica per tutti: Commissione Lingua Inglese, esercitatrice Ieluzzi | | |

### Orari del 1° semestre 2026/27

| Canale | Programmazione I | Fondamenti | MDAG – MD | MDAG – AG |
|---|---|---|---|---|
| **A** · Aula A | mar 9–11, mer 11–13 · lab A1 gio 14–17, A2 mer 14–17 | lun 11–13, gio 9–11, ven 9–11 | mar 11–13, gio 11–13, alcuni mer 9–11 | lun 9–11, ven 11–13, alcuni mer 9–11 |
| **B** · Aula B | mar 11–13, mer 9–11 · lab B1 mar 14–17, B2 lun 14–17 | lun 9–11, gio 9–11, ven 11–13 | lun 11–13, ven 9–11, alcuni mer 11–13 | mar 9–11, gio 11–13, alcuni mer 11–13 |
| **C** · Aula A (pomeriggio) | lun 14–16, gio 14–16 · lab C1 mer 9–12, C2 mar 9–12 | mar 14–16, mer 16–18, ven 13–15 | mar 16–18, ven 15–17, alcuni mer 14–16 | lun 16–18, gio 16–18, alcuni mer 14–16 |

I laboratori di Programmazione I sono al laboratorio Turing e partono dalla 2ª settimana (5–8 ottobre).

### Appelli già pubblicati per i corsi del 1° semestre

| Data | Esame | Iscrizioni |
|---|---|---|
| mar 19/01/2027 14:00 | MDAG – Matematica Discreta | 30/12 – 12/01 |
| ven 22/01/2027 14:00 | MDAG – Geometria | 02/01 – 15/01 |
| lun 25/01/2027 9:00 | Programmazione I | 05/01 – 18/01 |
| ven 29/01/2027 9:00 | Fondamenti dell'Informatica | 09/01 – 22/01 |
| mer 03/02/2027 14:00 | MDAG – Matematica Discreta | 14/01 – 27/01 |
| ven 05/02/2027 14:00 | MDAG – Geometria | 16/01 – 29/01 |
| gio 11/02/2027 9:00 | Programmazione I | 22/01 – 04/02 |
| gio 18/02/2027 9:00 | Fondamenti dell'Informatica | 29/01 – 11/02 |

Gli appelli già in bacheca per i corsi del 2° semestre (Analisi 18/01, Architettura 01/02, Inglese 02/02, Programmazione II 08–09/02, Ricerca Operativa 19/02) sono sessioni pensate per chi ha seguito quei corsi negli anni precedenti (il Regolamento L-31, art. 6 c. 4, fa iniziare gli appelli al termine dell'attività didattica; per Inglese non è chiaro se le matricole possano già usare l'appello del 02/02/2027: vedi INGLESE/corso.md).

### Pagine Moodle 2026/27

| Corso | Moodle (informatica.i-learn.unito.it/course/view.php?id=…) |
|---|---|
| Programmazione I | A 3701 · B 3773 · C 3767 (accesso ospite) |
| Fondamenti dell'Informatica | A 3851 (ospite) · B 3747 (login, iscrizione libera) · C 3635 (ospite) · pagina d'esame su Moodle Esami: esami.i-learn.unito.it id=2673 (login; esercizi delle lezioni e vecchi esami) |
| MDAG | Parte 1 (MD) 3829 · Parte 2 (AG) 3831 (login, comuni ai canali) |
| Analisi Matematica | 3703 (login, comune) |
| Architettura degli Elaboratori | 3833 (login, comune) |
| Programmazione II | A teoria 3651, lab A1 3653, lab A2 3655; lab C2 3757 (login); le altre non ancora create |
| Ricerca Operativa | 3719 "Ricerca Operativa (A,B,C)" (login, comune ai tre canali; 2025/26: 3555) |
| Lingua Inglese I | 3805 (login, comune) |

Tutte le pagine sono nella categoria "Anno Accademico 26/27 > Primo anno Laurea". Iscriversi subito a quelle dei corsi del 1° semestre.

Secondo anno: ASD, Basi di Dati, Probabilità e Statistica, PPOO, Sistemi Operativi (9 CFU ciascuno) + una tra Economia/Diritto e una tra Fisica/Logica (6). Terzo anno: Sviluppo Applicazioni Software, Reti e Sicurezza + insegnamenti a scelta, stage, prova finale.

## Calendario 2026/27

| Periodo | Date |
|---|---|
| 1° semestre (lezioni) | 28/09/2026 – 15/01/2027 · pausa natalizia 23/12/2026 – 06/01/2027 |
| Sessione invernale (+ straordinaria) | 18/01/2027 – 19/02/2027 |
| 2° semestre (lezioni) | 22/02/2027 – 04/06/2027 · pausa pasquale 25–30/03/2027 |
| Esperimento 3° appello insegnamenti del 1° semestre | 31/03 e 1–2/04/2027 (dettagli non ancora pubblicati) |
| Sessione estiva | 07/06/2027 – 30/07/2027 |
| Sessione autunnale | dal 01/09/2027 all'inizio delle lezioni 2027/28 |

Altre date:
- **"1st year survival kit"** (incontro per le matricole, comune ai tre canali): 13 e 14/10/2026, 13:00–14:00, Aula A.
- **Piano carriera 2026/27**: date non ancora pubblicate (nel 2025/26 si compilava dal 10/10). È indispensabile per iscriversi agli esami, anche del 1° anno: compilarlo appena si apre la finestra.
- **Edumeter**: la valutazione del corso va compilata prima di iscriversi all'appello; dal 2026/27 un giudizio negativo richiede un commento. Chi non vuole valutare un aspetto deve scegliere "non applicabile".

## Regole d'esame (coorte 2026 e regole di Ateneo)

- **Appelli**: almeno 5 all'anno per insegnamento; 2 nelle settimane di pausa dopo il semestre in cui si è seguito il corso; almeno 10 giorni tra due appelli dello stesso esame.
- **Tentativi**: allo stesso esame ci si presenta **al massimo 3 volte per anno accademico** (Regolamento L-31, art. 6 c. 13) → non conviene "provare" a ogni appello. Gli appelli da cui ci si ritira non contano nei 3 tentativi (Regolamento didattico di Ateneo, art. 24 c. 7), purché ci si ritiri prima della comunicazione del voto: dopo si può solo rifiutarlo, e quel tentativo conta (pagina d'esame di Fondamenti 2026/27). La presenza all'appello viene comunque registrata (Esse3 traccia anche prove fallite e assenze). Se non ci si presenta, cancellarsi dalla Bacheca prenotazioni entro la chiusura.
- **Iscrizione** da MyUniTo (Esami → Appelli disponibili), entro le 23:59 del giorno di chiusura. Servono: **tasse in regola**, **piano carriera compilato e approvato** (obbligatorio anche per il 1° anno), **valutazione Edumeter** dell'insegnamento (senza, Esse3 blocca l'iscrizione). Chi resta iscritto e non si presenta risulta assente.
- **Voto** in trentesimi, sufficienza 18; lode all'unanimità e solo con 30. Ci si può ritirare fino alla proclamazione dell'esito (la presenza viene comunque registrata).
- **Rifiuto del voto** (scritti con verbalizzazione online): l'esito arriva in "Bacheca esiti" e per email; si hanno **almeno 5 giorni** per rifiutarlo, altrimenti vale il silenzio-assenso. Gli esiti negativi non vanno sul libretto. Negli orali si accetta o rifiuta subito.
- **Modalità d'esame**: fissate dal docente prima dell'anno accademico nella scheda insegnamento, uguali per tutti gli appelli dell'anno.
- **Sbarramento**: per sostenere esami del 2°/3° anno servono almeno **21 CFU del 1° anno** e, per la coorte 2026, l'OFA superato (o la soglia TOLC-S). L'OFA **non** blocca gli esami del 1° anno. Nessun'altra propedeuticità obbligatoria (solo consigliate).
- Il programma della propria coorte si può portare all'esame per altri 3 anni, avvisando il docente.
- DSA e disabilità: supporti da richiedere per tempo agli uffici di Ateneo (referenti CdL: prof.ssa Damiano per DSA, prof.ssa Baroglio per disabilità).

## Piattaforme e contatti

- **Moodle I-Learn**: https://informatica.i-learn.unito.it — iscriversi alla pagina di ogni corso: una per canale per Programmazione I (laboratori compresi) e Fondamenti; per Programmazione II una pagina di teoria per canale più una per ogni turno di laboratorio; una pagina comune ai tre canali per MDAG (parte 1 e parte 2), Analisi, Architettura, Ricerca Operativa e Inglese. Al 28/09/2026 l'accesso ospite funziona solo su Programmazione I A/B/C e Fondamenti A e C.
- **MyUniTo / Esse3**: iscrizione agli appelli, esiti, piano carriera. Bacheca pubblica appelli: https://esse3.unito.it/ListaAppelliOfferta.do
- **Orari**: University Planner o app MyUniTO+.
- **Edumeter**: https://www.edumeter.unito.it (valutazione degli insegnamenti).
- Email istituzionale **nome.cognome@edu.unito.it**: usarla sempre per scrivere ai docenti; lì arrivano anche le convocazioni agli esami.
- **PC dei laboratori**: al Turing si entra con le credenziali SCU/MyUniTo; per i laboratori Dijkstra e Von Neumann può servire un account @educ.di.unito.it (richiesta a aperturalogin@educ.di.unito.it). Gli esami al PC di Prog I si svolgono in questi tre laboratori.
- **Tutorato matricole**: sportello nell'aula studio del complesso Pier della Francesca (da fine settembre, lun–ven) e online su prenotazione, tutorato.informatica@unito.it. Tutorato individuale: pagina Moodle a cui le matricole vengono iscritte d'ufficio (commtutor@educ.di.unito.it). Servizi di Ateneo: SUPERA (metodo di studio), SAMBA (benessere).
- **Aule e laboratori**: via Pessinetto 12, piano rialzato; aule A e B da 218 posti; laboratori Turing e Von Neumann (Windows), Dijkstra e Babbage (Unix). In caso di necessità si usa anche l'aula dell'Hotel Royal, corso Regina Margherita 249.

## Gruppi Telegram

- **Ufficiale del 1° anno** (dalla pagina Tutorato del corso di laurea): https://t.me/+0sR7CugDQlllNzU0 — al 28/09/2026 il link non apre nessun gruppo (invito scaduto o revocato): chiedere quello aggiornato a tutorato.informatica@unito.it. Il gruppo del 1° anno attivo è quello studentesco «Informatica anno 1 @ Unito» (Generale 1° anno, qui sotto).
- **Studenteschi** (Team Studentesco Informatica, indice su https://tsi-unito.eu/links.html; i canali A, B, C del 1° anno sono uniti):

| Gruppo | Link |
|---|---|
| Generale 1° anno | https://t.me/+Ox2fUmU2Un4xYTM0 |
| Programmazione I | https://t.me/+pgWXz9_rIdU2ZGU0 |
| Fondamenti dell'Informatica | https://t.me/+i98q9jlppjZhYzI0 |
| MDAG | https://t.me/+doM_i3uFgYg1MjVk |
| Analisi | https://t.me/+bIy-EgjtRrhhNmE8 |
| Architettura | https://t.me/+REfz_GZ2fytlOWE0 |
| Programmazione II | https://t.me/+xJOmjJInA4VjMDBk |
| Ricerca Operativa | https://t.me/+lRZmXg1uiA4yOTQ0 |
| Off Topic | https://t.me/+Ye04aIAdXfI4Yzlk |

Per Inglese non c'è un gruppo dedicato: si usa il generale. I link di invito possono cambiare: in caso di problemi partire dalla pagina TSI.

## Vita pratica (dalla guida TSI)

- **Tasse**: calcolate sull'ISEE universitario, 4 rate; prima rata 156 € uguale per tutti; senza ISEE si paga il massimo.
- **EDISU**: borse di studio (contano i CFU, non i voti), mensa agevolata, aule studio (corso Svizzera 185). Biblioteca di Dipartimento in via Pessinetto 12 (posto prenotabile con Affluences).
- **Trasporti**: tessera Piemove gratuita per under 26 con ISEE fino a 85.000 € (dal 2025/26).
- Collaborazioni part-time: non disponibili al 1° anno.

## Metodo di studio consigliato

- Dalla guida TSI: **active recall** (flashcard, riassunti a memoria, spiegare ad alta voce) + **ripetizione dilazionata** (ripasso dopo 1 giorno, 1 settimana, 1 mese); tecnica del pomodoro; studiare un po' ogni giorno; fare esercizi.
- Dai docenti di Prog I (introduzione 2026/27): frequentare prendendo appunti, ripassare la lezione precedente, approfondire sul libro, frequentare i laboratori e i tutor; la "maratona" di registrazioni prima dell'esame non funziona.
