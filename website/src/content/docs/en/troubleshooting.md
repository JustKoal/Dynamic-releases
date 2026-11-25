---
title: Troubleshooting
description: Solutions to the most common problems with installation, voice, AI, Companion and updates.
order: 10
icon: wrench
---

## Installation

- **SmartScreen blocks the installer**: choose **More info → Run anyway**. The installer has no Authenticode certificate yet. If you want, compare its SHA-256 with the Download page first.
- **I can't find the island**: press <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>D</kbd>, or use the Dynamic icon in the notification area. With several monitors, check **Settings → Generale → Monitor e posizione**.

## Voice

- **Dynamic doesn't hear me**: check the microphone in **Settings → Voce → Microfono** with the level test, and make sure Windows allows microphone access for desktop apps.
- **Speech recognition is unavailable**: download Parakeet Ultra in **Settings → Voce**. It requires a CPU with AVX2.
- **The wake word doesn't react during a game**: that is Gaming mode. Listening resumes when the fullscreen app closes.

## AI

- **ChatGPT is connected but cannot be used**: OpenAI did not grant plan usage to Dynamic for your account. Dynamic shows this in **Settings → AI e Chat**; you can use Gemini with your own key instead.
- **Agent sessions don't appear**: open **Settings → Agenti AI** and run the connection test. After an update, Codex may need `/hooks` to re-approve changed hooks.

## Companion

- **The phone can't open the page**: make sure both devices are on the same private network (not a guest network with client isolation), Companion is on, and Windows Firewall allows Dynamic on **Private networks**.
- **The browser shows a certificate warning**: complete the HTTPS steps in [Dynamic Companion](../companion/), including full trust on iPhone and iPad.
- **My layout disappeared**: each address (IP or `.local`) is a separate site for the browser. Open the address you used before.

## Audio

- **I can't change the default output from Dynamic**: Windows offers no supported API for that. Use <kbd>Win</kbd> <kbd>Ctrl</kbd> <kbd>V</kbd>.

## Updates

- **No update is offered**: check **Settings → Informazioni**. Updates come from the official feed on GitHub and always wait for your confirmation.

## Still stuck?

**Settings → Connessioni** can copy a diagnostic report of the connections. Open an issue on the [GitHub repository](https://github.com/JustKoal/Dynamic-releases/issues) and paste it after checking it contains no personal data.
