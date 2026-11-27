---
title: Assistente vocale
description: Configura il microfono, il modello vocale locale e la parola di attivazione «Ehi Dynamic» o «Hey Dynamic».
order: 4
icon: mic
---

Riconoscimento e sintesi vocale funzionano in locale sulla CPU. L'audio del microfono non viene mai salvato su disco. I comandi vocali M9 sono disponibili in italiano e inglese. Un unico modello Parakeet riconosce automaticamente la lingua parlata.

## Configurazione

1. Apri **Impostazioni → Voce**.
2. In **Microfono** scegli il microfono e usa la prova del livello.
3. In **Riconoscimento vocale** scarica **Parakeet Ultra** (circa 550 MB, da Hugging Face). Funziona sulla CPU e richiede AVX2.
4. Facoltativo: attiva la parola di attivazione **«Ehi Dynamic»** in **Attivazione vocale**. Puoi dire anche **«Hey Dynamic»**. Entrambe le frasi vengono elaborate in locale.
5. In **Impostazioni → Voce** scegli la sintesi indipendentemente dall’interfaccia. Serena (italiano) è inclusa. Scarica Kristin (inglese) su richiesta. Dynamic verifica i file e consente di rimuovere la voce scaricata.

## Parlare con Dynamic

- Premi il microfono nella barra di icone, usa <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>V</kbd> dopo averla attivata, oppure di' «Ehi Dynamic».
- I comandi locali (timer, promemoria, note, calendario, musica, volume, cartelle, dispositivi, modalità silenziosa e navigazione) sono gestiti da Dynamic e non vengono mai inviati a un'AI.
- Tutto il resto va al provider AI scelto, solo come testo.
- Le azioni sensibili chiedono conferma.

Esempi: «Imposta un timer di 10 minuti», «Metti in pausa la musica», «Apri le note».

## Memoria e giochi

I modelli vocali vengono rilasciati quando l'ascolto è in pausa. Durante un gioco a schermo intero la parola di attivazione va in pausa da sola e il microfono si chiude (vedi [Modalità Gaming](../gaming-mode/)).
