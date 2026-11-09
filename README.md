<h1 align="center">Dynamic</h1>

<p align="center">
  <strong>A Dynamic Island for the Windows 11 desktop.</strong><br>
  A tiny pill at the top of your screen that grows into your chat, calendar, notes, timers, music and coding agents —<br>
  and that you can simply talk to. Speech runs on your own PC.
</p>

<p align="center">
  <img src="docs/assets/screenshots/01-compact.webp" alt="Dynamic in its compact form: a thin black pill at the top edge of the screen with two glowing eyes" width="376">
</p>

<p align="center">
  <a href="https://github.com/andrea4546/Dynamic-releases/releases/latest"><img src="https://img.shields.io/github/v/release/andrea4546/Dynamic-releases?label=version&color=0A84FF" alt="Latest version"></a>
  <img src="https://img.shields.io/badge/Windows%2011-x64-0078D4?logo=windows&logoColor=white" alt="Windows 11 x64">
  <img src="https://img.shields.io/badge/speech-100%25%20local-3DDC84" alt="Speech runs locally">
  <img src="https://img.shields.io/badge/updates-signed-8A63D2" alt="Signed updates">
  <img src="https://img.shields.io/github/downloads/andrea4546/Dynamic-releases/total?label=downloads&color=blueviolet" alt="Downloads">
</p>

<p align="center">
  <a href="https://github.com/andrea4546/Dynamic-releases/releases/latest"><b>⬇️ Download for Windows</b></a> ·
  <a href="#a-look-inside">A look inside</a> ·
  <a href="#four-notch-styles">Notch styles</a> ·
  <a href="#what-it-does">What it does</a> ·
  <a href="#updates">Updates</a> ·
  <a href="#privacy">Privacy</a> ·
  <a href="#honest-status">Honest status</a>
</p>

<p align="center">
  <img src="docs/assets/screenshots/02-home.webp" alt="The Dynamic panel: the Now card, an at-a-glance list and the side navigation rail" width="540">
</p>

> Dynamic is a personal project for Windows. This page hosts the **installers** and the update feed; the source code is private.
> The app interface and voice are in Italian. The installer is not code-signed, so Windows SmartScreen may warn you the first time.

---

## Why

Most assistants live in a browser tab you have to go and find. Dynamic stays at the top edge of your screen, tiny until you need it, and keeps
the useful things one glance away: your chat, your agents, your calendar, the song playing, a running timer. It listens and speaks
**on your PC** (Whisper and Piper) and it never reads your screen or your other apps.

## A look inside

Every image is a capture of the **real app**, taken in a throw-away profile with invented data: no personal account, conversation or calendar appears.
Images marked *demo data* come from a browser simulator that runs the same interface with a fake API and invented devices («di prova»); they are used
where the real list would show the names of personal devices.

| | |
|---|---|
| ![Chat with action cards](docs/assets/screenshots/04-chat-actions.webp)<br>**Chat and actions** — «metti un timer», «ricordami domani alle 18…»: local commands answer with a result card | ![Confirmation card](docs/assets/screenshots/05-actions-confirm.webp)<br>**Confirmation** — anything destructive shows a preview and waits for your yes or no |
| ![Calendar, month grid](docs/assets/screenshots/06-calendar-month.webp)<br>**Calendar** — expand the island and a full month grid appears, with the day's agenda below | ![Notes](docs/assets/screenshots/08-notes.webp)<br>**Notes** — local, autosaved, searchable, pinnable |
| ![Time](docs/assets/screenshots/10-tempo.webp)<br>**Time** — timers, alarms and reminders in one place | ![Music](docs/assets/screenshots/11-music.webp)<br>**Music** — cover, timeline, transport and volume of the player you pick *(a stand-in player here)* |
| ![AI agents](docs/assets/screenshots/13-agents.webp)<br>**Agents** — your Claude Code and Codex sessions at a glance; *Apri* brings the terminal to the front | ![Settings, About page](docs/assets/screenshots/15-settings-about.webp)<br>**Settings** — one consistent layout (label, switch, explanation); ordinary, sensitive and advanced options are grouped; updates live under *Informazioni* |
| ![Home devices](docs/assets/screenshots/20-home-devices-demo.webp)<br>**Devices on Home** *(demo data)* — connected and sleeping devices with their batteries; the star picks the one shown on the card | ![Settings, Devices](docs/assets/screenshots/21-settings-devices-demo.webp)<br>**Settings → Devices** *(demo data)* — connected devices stay in view, paired-but-disconnected ones sit in a collapsible section |
| ![Bluetooth popup](docs/assets/screenshots/22-bluetooth-popup-demo.webp)<br>**Bluetooth popup** *(demo data)* — a temporary notice over the compact island when a device connects | ![Notification](docs/assets/screenshots/17-notice.webp)<br>**Notices** — the same compact island shows timers, agents and system events, one at a time |

<p align="center">
  <img src="docs/assets/screenshots/03-home-expanded.webp" alt="Home, expanded vertically" width="320">
  &nbsp;&nbsp;
  <img src="docs/assets/screenshots/07-calendar-agenda.webp" alt="Calendar agenda in the normal panel" width="540">
</p>
<p align="center"><sub>One button grows the island vertically and the page uses the whole height · the same calendar as a compact agenda</sub></p>

## Four notch styles

Pick how the compact island looks in **Settings → Appearance → Stile notch compatta**. Only the *shape* changes; the avatar, the activities, the notices and the
expanded panel are the same in every style, and your choice is kept across restarts and updates.

<p align="center">
  <img src="docs/assets/screenshots/18-notch-styles.webp" alt="The four compact styles with no activity, one timer, and a timer plus music" width="880">
</p>

| Style | Size | What it shows |
|---|---|---|
| **Premium V5.1** (default) | 188 × 48 | Eyes in the middle and up to two activities at the sides, with their text |
| **Capsula** | 148 × 40 | A smaller, rounder capsule: the same activities as symbols, with a «+N» when there are more |
| **Indicatore** | 116 × 34 | The most discreet: the avatar and a single button with the main activity and how many there are |
| **Adattiva** | 104 / 140 / 178 × 40 | The width follows what is going on: eyes only, then symbols, then symbols with text; it grows at once and shrinks only after 900 ms of calm |

<p align="center">
  <img src="docs/assets/screenshots/19-style-picker.webp" alt="The style picker in Settings, with static previews" width="540">
</p>

Battery percentages are never shown permanently on the compact island; they live on Home and in Settings. Eleven themes apply to every style:

<p align="center">
  <img src="docs/assets/screenshots/23-theme-sunset-home.webp" alt="Sunset theme" width="260">
  <img src="docs/assets/screenshots/24-theme-ocean-home.webp" alt="Ocean theme" width="260">
  <img src="docs/assets/screenshots/25-theme-graphite-home.webp" alt="Graphite theme" width="260">
</p>

## What it does

- 🔘 **Four compact styles** — Premium V5.1, Capsula, Indicatore and Adattiva (see above).
- 🔋 **Devices and batteries** — Bluetooth devices already paired with Windows and **Logitech LIGHTSPEED / Unifying / Bolt** receivers (battery read through HID++, read-only) in one list on Home and in *Settings → Devices*. A battery is shown only when the device reports it; a sleeping device shows its *last known* value, labelled as such.
- 🔔 **Bluetooth popups** — when a Bluetooth device **connects**, a short notice shows its name and, if Windows reports it, its real battery; headphones **disconnecting** is a quiet notice; a device that keeps flapping does not flood you; a battery update alone never notifies. It is driven by Windows events, with no polling. *Tested with a state machine, UI tests and native probes using a test notice; not yet seen with a real device connecting.*
- 🏝️ **A real Dynamic Island** — a borderless pill docked to the top edge that morphs between compact, listening, chat, panel and settings. Drag it down and it detaches into a floating capsule; drag it back and it docks again. Three visibility modes, multi-monitor aware, and it steps aside when a fullscreen app takes the screen.
- ✨ **Premium design (V5 / 5.1)** — tonal surfaces instead of outlined boxes, a side navigation rail (icons in the normal window, labels when expanded), a *Now* card plus an at-a-glance list on Home, a real music-player layout, a focused timer with a ring and a month grid that fills the tall window. Same eleven themes, system fonts only, no extra animation or polling.
- 🤖 **Three avatars, nine states** — the original *eyes*, a little *robot* or a *hitodama* (a floating spirit flame) show whether it is idle, listening, thinking, speaking, waiting for you or done. Eleven themes and static gradients (no animated background, no GPU load at rest).
- ⚡ **Actions from chat or voice** — «metti un timer di 10 minuti», «ricordami domani alle 15 di chiamare Marco», «crea una nota: …», «che appuntamenti ho domani?», «apri Spotify», «pausa», «volume al 40», «apri il calendario», «com'è lo stato degli agenti?». Commands are understood by a **deterministic parser on your PC**, so the AI model can never trigger an action on its own, and your notes, calendar and timers are not sent to ChatGPT. Sensitive operations ask for confirmation first; per-category switches live in Settings → Azioni.
- 📅 **Calendar** — connect Google Calendar or Outlook with their private iCal address (read-only: no account access). Agenda for today and the week, a month grid when expanded, recurring events, time zones, reminders before events. Creating or editing an event opens your browser pre-filled.
- 📝 **Notes and clipboard history** — local notes with autosave and search; an opt-in clipboard history kept in memory only.
- ⏱️ **Timers, alarms, reminders** — driven by a native scheduler, no polling.
- 🎵 **Music** — controls whatever Windows is playing: cover, timeline, transport and per-player volume. Local commands can open Spotify, Apple Music or TIDAL using Windows' app catalogue, with an explicit preference and a manual executable fallback. No service account and no AI request.
- 🛰️ **Coding-agent monitor** *(optional, off by default)* — see which Claude Code and Codex sessions are working, waiting for authorisation or done, and jump to the right terminal window. Observation only: prompts and tool contents are discarded.
- 💬 **WhatsApp Web** notifications in an isolated window with an encrypted local history. *(Telegram support exists but is not working yet.)*
- 🧠 **ChatGPT** — *Sign in with ChatGPT*, streaming answers, no API key and no pay-per-use fallback.
- 🎙️ **Local speech** — Whisper and the optional Parakeet Ultra Q5_K_M (speech-to-text), plus Piper (Italian voice), run offline on the CPU. Parakeet is off by default and downloaded only when you choose it. An experimental, off-by-default wake word: «Ehi» + a name you choose.
- 🚀 **Start with Windows** — optional and off by default; uses the current user's startup entry, shows the effective Windows state and never overrides a block set by Windows or the user.
- 🔄 **Self-updating** — see below.

## Download

1. Open the [latest release](https://github.com/andrea4546/Dynamic-releases/releases/latest) and download **`Dynamic_x.y.z_x64-setup.exe`** (about 615 MB: it includes Whisper, Piper and the Windows WebView2 runtime; the optional Parakeet model is not bundled).
2. Run it. It installs for your user only — **no administrator rights needed**.
3. Dynamic appears at the top of your screen. Click it to open the panel.

## Updates

Dynamic checks this repository's `latest.json` shortly after it starts and then every few hours (one HTTPS request to github.com, no personal data;
you can switch it off in Settings → Informazioni). When a newer version exists a **red dot** appears; *Aggiorna a x.y.z* downloads the installer,
**verifies its minisign signature** against the public key built into the app, installs it for your user and restarts. Settings, timers, notes and history are kept.
The v0.1.0 installer has no updater: install v0.1.1 or later once by hand.

## Requirements

- Windows 11 x64 (developed and tested on Windows 11 build 26200; Windows 10 is not tested).
- A CPU with AVX2 (speech recognition runs on the CPU, no GPU is used).
- Internet only for ChatGPT, calendar feeds and updates; speech works offline.
- A microphone for voice; a ChatGPT account whose plan allows *Sign in with ChatGPT* for real chat answers.

## Privacy

| What | Where it goes |
|---|---|
| Microphone audio | Processed **locally**; never recorded to disk, never sent anywhere. It opens only while you talk (or, if you enable the wake word, listens on this PC only). |
| Your chat text | Sent to OpenAI **only** when you are signed in to ChatGPT and send a message. Action commands («timer», «nota», «calendario»…) stay on your PC. |
| Calendar address, notes, history, ChatGPT tokens | Stored on your PC, encrypted with Windows DPAPI where sensitive. Nothing is uploaded. |
| Other apps and your screen | Never read. |

## Release notes

Every version has its notes on the [Releases](https://github.com/andrea4546/Dynamic-releases/releases) page. **0.1.8**: four compact styles and Bluetooth/device refinements. **0.1.9**: compact-island layout and memory-timing fixes. **0.1.10**: optional CPU-only Parakeet Ultra Q5_K_M, opt-in start with Windows, single-instance protection and local commands that open Spotify, Apple Music or TIDAL with deterministic selection and a manual fallback. Known and not yet solved: rarely, a click on the island right after it reappears (Auto-hide) may not open the panel for a few seconds; occasional graphic flicker reported but not reproduced.

## Honest status

What I have verified on my own PC: the installer, the local speech, ChatGPT sign-in, the island and its docking, notes, calendar (with synthetic and public feeds),
timers, music control with a test player and real Spotify, the Windows startup entry and blocked-state handling, the optional Parakeet runtime, the agent monitor, WhatsApp notifications, and, for every release, the native layout of every page in all eleven themes, expanded and compact, docked and floating (an automated check on the real window). The updater has also been exercised with the same signing mechanism used by public releases.
What I have **not** verified: a real Bluetooth device connecting or disconnecting (the popup is tested with simulated events and a test notice), the four compact styles at other display scales or on a second monitor, a clean second PC, real Apple Music / TIDAL / Google / Outlook accounts, spoken replies and wake-word accuracy in everyday noise, opening the browser for calendar events, a fullscreen game, suspend/resume, a second monitor at other scaling, Telegram.
Expect rough edges — this is a one-person project.

---

<sub>Windows 11 x64 · built with Tauri 2, Rust, React and TypeScript · whisper.cpp · Piper</sub>
