---
title: Dynamic Companion
description: Open your PC's dashboard on a phone or tablet on the same network, set up HTTPS and grant permissions.
order: 7
icon: smartphone
---

In Companion settings, choose **Language** to use English or Italian. The choice is saved on that device. Quick-action results follow the Companion language even when the PC uses the other language.

Companion is a web page served by Dynamic on your PC and opened in the browser of a phone, tablet or another computer **on the same private network**. There is no app to install and no cloud service. It is off by default.

## Turn it on and pair

1. On the PC, open **Settings → Companion** and turn it on. The first time, Windows Firewall may ask for access: allow **Private networks**.
2. On the phone or tablet, scan the QR code, or open the address shown and type the six-digit code. Codes expire after two minutes and work once.
3. The dashboard opens. Keep using the same address (the IP or `<pc-name>.local`) to keep your pairing and layout: for the browser each address is a different site.

## Secure connection (HTTPS)

Remote controls need HTTPS. Dynamic creates a local certificate authority (CA) that can sign only local names and private addresses.

**iPhone and iPad**

1. On the PC, open **Settings → Companion → «Configura iPhone o iPad»** and scan the QR code.
2. In Safari, download the profile. It contains only the public certificate.
3. In **Settings → Profile Downloaded**, compare the SHA-256 fingerprint with the one shown on the PC, then install.
4. Go to **General → About → Certificate Trust Settings** and enable full trust for your PC's Dynamic CA ([Apple guide](https://support.apple.com/en-us/102390)).
5. Open the HTTPS address shown on the PC. It should load without warnings.

**Android and other devices**: download the `.cer` certificate from the secure-connection guide, compare the fingerprint, install it as a CA certificate in the system security settings, then open the HTTPS address.

Tapping through a browser warning does not create lasting trust. Dynamic never installs certificates or profiles for you.

## Add to the Home screen

From the HTTPS page, use **Share → Add to Home Screen** in Safari, or **Add to Home screen** from the Chrome menu on Android. A shortcut created earlier may keep the old icon.

## Customise

Tap **Personalizza** to reorder, resize, add or remove widgets, and to choose the theme. Each device keeps its own layout in its browser; nothing is sent to the PC.

Widgets: CPU, GPU, RAM, network, disks, AI agents, music, audio centre, batteries, timers (on-device timer, Pomodoro and stopwatch), PC timers and quick actions.

## Permissions

Each device starts with **view** only. On the PC you can grant, per device and over HTTPS only: music control, audio, microphone, PC timers, modes (Do Not Disturb), quick actions and agent project names. There is no terminal, file access, app launching or arbitrary command. Revoke a device at any time from **Settings → Companion**.

## Good to know

- Guest networks with client isolation block Companion.
- The page has no service worker, so it does not work offline.

## Agent usage

See five-hour and weekly quotas, reset times, model, context and tokens when available. Enable optional alerts and local history. Quotas also appear on Home and in the Companion Agents widget.

Under Settings → Agents, preview and connect the Claude Code status line or use Read now for Codex. Claude reports quotas on supported plans after the first response. Codex CLI session context and token counts are unavailable.
