---
title: Command Palette
description: Reach any screen, setting or quick action from the keyboard, and set up global shortcuts.
order: 6
icon: command
---

## Open the palette

Use the search button in the icon bar, **Altro → Command Palette**, or <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>K</kbd> while Dynamic is focused.

## What you can find

- Every screen of Dynamic and every Settings page and section.
- The audio centre and **Allega file** (attach a file to the chat).
- Quick actions: music, Windows volume, timers, notifications, folders, devices, lock the PC, Gaming, microphone and agents.

Two actions accept a typed value: a duration («timer 7», «25 min», «1 ora») and the exact name of an application in the list. Any other text you type is only used to search, never executed. Sensitive actions ask for confirmation.

## Keyboard

- <kbd>↑</kbd> <kbd>↓</kbd> choose, <kbd>Enter</kbd> runs.
- <kbd>Alt</kbd> <kbd>P</kbd> pins or unpins a favourite; <kbd>Delete</kbd> removes a recent item.
- <kbd>Esc</kbd> clears the search, then closes the palette.

Favourites and recents are stored locally as identifiers only, never as typed text.

## Shortcuts

**Settings → Scorciatoie** lists the defaults, all with <kbd>Ctrl</kbd> <kbd>Alt</kbd>: D show/hide, V voice, A chat, M music, N notes, T time, H home, S settings, K palette, U audio centre. On first start only **Show/hide** is global; you can make others global, change or disable them.

Global shortcuts use the Windows RegisterHotKey API, with no keyboard hooks, and need at least two of Ctrl, Alt and Shift. They can pause automatically during fullscreen games.
