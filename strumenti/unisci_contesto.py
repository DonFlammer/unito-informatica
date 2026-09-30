"""Unisce i file di contesto_ai/ in contesto_ai/_TUTTO_IN_UNO.md, da allegare a un'AI in un colpo solo.

Uso (dalla cartella UniTo):  python strumenti/unisci_contesto.py
"""
from pathlib import Path

RADICE = Path(__file__).resolve().parent.parent
CONTESTO = RADICE / "contesto_ai"
USCITA = CONTESTO / "_TUTTO_IN_UNO.md"

# file generali, in ordine di lettura
GENERALI = ["istruzioni_per_ai.md", "studente.md", "unito_informatica.md"]
# corsi in ordine di semestre; eventuali cartelle nuove vengono aggiunte in fondo
ORDINE_CORSI = ["PROG1", "FDA", "MDAG", "ANMAT", "ARCH", "PROG2", "RO", "INGLESE"]
# per ogni corso: prima la scheda, poi l'indice, gli esercizi e le lezioni
PER_CORSO = ["corso.md", "indice_lezioni.md", "esercizi_esame.md"]

INTESTAZIONE = (
    "# Contesto completo (tutti i file di contesto_ai/ uniti)\n\n"
    "Generato da strumenti/unisci_contesto.py: non modificare a mano, "
    "modifica i singoli file e rigenera.\n\n"
    "> Avvertenze: le ricerche (corso di laurea, schede dei corsi, esami, esercizi d'esame) vengono da "
    "fonti pubbliche e da alcune pagine Moodle riservate agli iscritti; gli appunti delle lezioni "
    "rielaborano le slide dei docenti. "
    "Sono accurati e con fonti, ma possono contenere errori o dati superati; io, DonFlammer, che curo "
    "questa raccolta, non mi assumo alcuna responsabilità. Per date, regole e scadenze fanno fede solo le fonti ufficiali "
    "(Moodle, sito del corso di laurea, Esse3). Testo completo: AVVERTENZE.md nella radice del repository.\n"
)


def cartelle_corsi():
    presenti = {p.name: p for p in CONTESTO.iterdir() if p.is_dir()}
    for nome in ORDINE_CORSI:
        if nome in presenti:
            yield presenti.pop(nome)
    yield from (presenti[n] for n in sorted(presenti))


def file_in_ordine():
    for nome in GENERALI:
        yield CONTESTO / nome
    for corso in cartelle_corsi():
        for nome in PER_CORSO:
            if (corso / nome).exists():
                yield corso / nome
        lezioni = corso / "lezioni"
        if lezioni.is_dir():
            yield from sorted(lezioni.glob("*.md"))


def main():
    parti = [INTESTAZIONE]
    for percorso in file_in_ordine():
        relativo = percorso.relative_to(RADICE).as_posix()
        testo = percorso.read_text(encoding="utf-8").strip()
        if testo.startswith("---\n"):  # intestazione YAML: a metà file diventerebbe un titolo H2
            fine = testo.find("\n---", 4)
            if fine > 0:
                testo = "```yaml\n" + testo[4:fine].strip() + "\n```" + testo[fine + 4:]
        parti.append(f"\n\n---\n\n<!-- FILE: {relativo} -->\n> File: `{relativo}`\n\n{testo}\n")
    USCITA.write_text("".join(parti), encoding="utf-8", newline="\n")
    print(f"scritto {USCITA.relative_to(RADICE).as_posix()} ({len(parti) - 1} file)")


if __name__ == "__main__":
    main()
