---
title: Voice assistant
description: Set up the microphone, the local speech model and the “Hey Dynamic” or “Ehi Dynamic” wake word.
order: 4
icon: mic
---

Speech recognition and speech synthesis run locally on your CPU. Microphone audio is never written to disk. M9 voice commands support English and Italian. One Parakeet model detects the language automatically.

## Set up

1. Open **Settings → Voice**.
2. Under **Microphone**, choose your microphone and use the level test.
3. Under **Speech recognition**, download **Parakeet Ultra** (about 550 MB, from Hugging Face). It runs on the CPU and needs AVX2.
4. Optional: turn on the wake word. Say **“Hey Dynamic”** or **“Ehi Dynamic”**. Both run locally.
5. Under **Settings → Voice**, choose the speaking voice independently of the interface. Serena (Italian) is included. Download Kristin (English) on demand. Dynamic verifies the files and lets you remove the download.

## Talk to Dynamic

- Press the microphone in the icon bar, use <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>V</kbd> once it is enabled, or say “Hey Dynamic” or “Ehi Dynamic”.
- Local commands (timers, reminders, notes, calendar, music, volume, folders, devices, quiet mode and navigation) are handled by Dynamic itself and are never sent to an AI.
- Anything else goes to the AI provider you selected, as text only.
- Sensitive actions ask for confirmation.

English examples: “Set a timer for 10 minutes”, “Pause the music”, “Open notes”.

Italian examples: «Imposta un timer di 10 minuti», «Metti in pausa la musica», «Apri le note».

## Memory and games

The speech models are released when listening pauses. During a fullscreen game the wake word pauses automatically and the microphone closes (see [Gaming mode](../gaming-mode/)).

## Dynamic Dictation

Dictate offline in English or Italian with Ctrl+Alt+W. Edit the preview, then insert the text into the original app or copy it.

Enable dictation under Settings → Voice. Each preview can be inserted once within ten minutes in supported apps. Use Copy for elevated apps. Dictation pauses while gaming. Direct insertion turns line breaks and tabs into spaces.
