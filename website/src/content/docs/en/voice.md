---
title: Voice assistant
description: Set up the microphone, the local speech model and the «Ehi Dynamic» wake word.
order: 4
icon: mic
---

Speech recognition and speech synthesis run locally on your CPU. Microphone audio is never written to disk. **Voice commands and the voice are in Italian.**

## Set up

1. Open **Settings → Voce**.
2. Under **Microfono**, choose your microphone and use the level test.
3. Under **Riconoscimento vocale**, download **Parakeet Ultra** (about 550 MB, from Hugging Face). It runs on the CPU and needs AVX2.
4. Optional: turn on the **«Ehi Dynamic»** wake word under **Attivazione vocale**. It is processed locally.

## Talk to Dynamic

- Press the microphone in the icon bar, use <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>V</kbd> once it is enabled, or say «Ehi Dynamic».
- Local commands (timers, reminders, notes, calendar, music, volume, folders, devices, quiet mode and navigation) are handled by Dynamic itself and are never sent to an AI.
- Anything else goes to the AI provider you selected, as text only.
- Sensitive actions ask for confirmation.

Examples, in Italian: «Imposta un timer di 10 minuti», «Metti in pausa la musica», «Apri le note».

## Memory and games

The speech models are released when listening pauses. During a fullscreen game the wake word pauses automatically and the microphone closes (see [Gaming mode](../gaming-mode/)).
