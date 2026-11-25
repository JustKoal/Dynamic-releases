---
title: Command Palette
description: Raggiungi qualsiasi schermata, impostazione o azione rapida dalla tastiera e configura le scorciatoie globali.
order: 6
icon: command
---

## Aprire la palette

Usa il pulsante di ricerca nella barra di icone, **Altro → Command Palette**, oppure <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>K</kbd> con Dynamic in primo piano.

## Cosa puoi trovare

- Tutte le schermate di Dynamic e tutte le pagine e sezioni delle Impostazioni.
- Il Centro audio e **Allega file** (per allegare un file alla chat).
- Azioni rapide: musica, volume di Windows, timer, notifiche, cartelle, dispositivi, blocco del PC, Gaming, microfono e agenti.

Due azioni accettano un valore scritto: una durata («timer 7», «25 min», «1 ora») e il nome esatto di un'applicazione dell'elenco. Il resto del testo serve solo alla ricerca e non viene mai eseguito. Le azioni sensibili chiedono conferma.

## Tastiera

- <kbd>↑</kbd> <kbd>↓</kbd> scelgono, <kbd>Invio</kbd> esegue.
- <kbd>Alt</kbd> <kbd>P</kbd> fissa o toglie un preferito; <kbd>Canc</kbd> rimuove un recente.
- <kbd>Esc</kbd> svuota la ricerca, poi chiude la palette.

Preferiti e recenti vengono salvati in locale solo come identificativi, mai come testo digitato.

## Scorciatoie

**Impostazioni → Scorciatoie** elenca le combinazioni predefinite, tutte con <kbd>Ctrl</kbd> <kbd>Alt</kbd>: D mostra/nascondi, V voce, A chat, M musica, N note, T tempo, H Home, S impostazioni, K palette, U Centro audio. Al primo avvio è globale solo **Mostra/nascondi**; le altre si possono rendere globali, modificare o disattivare.

Le scorciatoie globali usano l'API RegisterHotKey di Windows, senza hook della tastiera, e richiedono almeno due tasti fra Ctrl, Alt e Maiusc. Possono sospendersi automaticamente durante i giochi a schermo intero.
