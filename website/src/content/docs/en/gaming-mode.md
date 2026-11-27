---
title: Gaming mode
description: What Dynamic suspends while a fullscreen app is running, and how to configure it.
order: 9
icon: gamepad-2
---

Gaming mode starts automatically when a fullscreen app occupies Dynamic's monitor, and ends when it closes.

## What happens

- The **«Ehi Dynamic»** wake word pauses: the microphone closes and the speech models are released. It resumes after the game.
- Hidden **WhatsApp and Telegram** views close, keeping your session and profile. When the game ends they reopen in the background, one every few seconds. A messaging window you left visible stays open.
- Optionally, global shortcuts pause and the island hides.

Dynamic does not inject code into games and draws no overlay.

## Configure

Open **Settings → Generale → Schermo intero e giochi**. Both Gaming-mode options are on by default and can be turned off separately. While messaging is closed for a game, the Messaggistica page says so.

## What to expect

Gaming mode reduces Dynamic's background processes and memory. In our test on a development build it took the full process tree from 13 to 7 processes and from 509 MB to 177–190 MB of private memory (details and limits on the [Performance page](../../performance/#benchmarks)).

No FPS improvement is claimed, real-game measurements are still pending, and compatibility with every anti-cheat system has not been verified.

## Manual mode and battery power

Turn on manual mode in **Settings → General → Full screen and games** for games in a window. On battery, Dynamic spaces active hardware readings at least five seconds apart. The Windows power plan is unaffected.
