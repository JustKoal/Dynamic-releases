<h1 align="center">Dynamic</h1>

<p align="center">
  <strong>Smart Desktop Assistant for Windows 11.</strong><br>
  A compact Dynamic Island for AI, local voice commands, notifications, music, devices, notes, time and coding agents.
</p>

<p align="center">
  <img src="docs/assets/screenshots/01-compact.webp" alt="Dynamic in its compact form" width="376">
</p>

<p align="center">
  <a href="https://github.com/andrea4546/Dynamic-releases/releases/latest"><img src="https://img.shields.io/github/v/release/andrea4546/Dynamic-releases?label=version&color=0A84FF" alt="Latest version"></a>
  <img src="https://img.shields.io/badge/Windows%2011-x64-0078D4?logo=windows&logoColor=white" alt="Windows 11 x64">
  <img src="https://img.shields.io/badge/speech-local-3DDC84" alt="Speech runs locally">
  <img src="https://img.shields.io/badge/updates-minisign%20verified-8A63D2" alt="Signed updates">
  <img src="https://img.shields.io/github/downloads/andrea4546/Dynamic-releases/total?label=downloads&color=blueviolet" alt="Downloads">
</p>

<p align="center">
  <a href="https://github.com/andrea4546/Dynamic-releases/releases/latest"><b>⬇️ Download for Windows</b></a> ·
  <a href="#whats-new-in-029">What's new</a> ·
  <a href="#screenshots">Screenshots</a> ·
  <a href="#features">Features</a> ·
  <a href="#privacy-and-security">Privacy</a> ·
  <a href="#known-limitations">Known limitations</a>
</p>

<p align="center">
  <img src="docs/assets/screenshots/02-home.webp" alt="Dynamic Home with four large icon cards; the time card shows a running timer" width="540">
</p>

> Dynamic is a personal Windows project. This repository hosts the public installers and update feed; the source repository is private.
> The «Source code» archives that GitHub attaches automatically to every release contain only this README and the screenshots, not the application code.
> The app interface and voice are in Italian. The installer is not Authenticode-signed, so Windows SmartScreen may warn on first run.

## What Dynamic is

Dynamic stays at the top of the desktop as a small, low-distraction pill and expands only when needed. It combines an AI chat with local,
deterministic actions: timers, reminders, notes, calendar, media controls and navigation work without giving the AI permission to operate the PC.
Speech recognition and synthesis run locally on the CPU; only conversational text is sent to the provider selected by the user.

The V6.1 Refined interface uses static theme surfaces and event-driven Windows integrations. It does not capture the screen, inject into other
processes or run speech inference on the GPU.

## What's new in 0.2.9

- **One speech engine: Parakeet Ultra.** Whisper Base and Small are gone: push-to-talk, live text, the «Ehi + name» wake word and the microphone test all use Parakeet Ultra. It is a 550 MB download from Settings → Voice (official sources, size and SHA-256 checked) that never starts by itself; if it is already installed, Dynamic uses it immediately. Without it, Voice explains what is missing and the rest of the app keeps working.
- **Smaller installer**: 382,091,473 bytes instead of 616,794,825 bytes in 0.2.8 — 234,703,352 bytes less (38.1%). Updating also removes the two old Whisper model files from the installation folder.
- **Lighter wake word at rest**: only the small Silero voice detector stays loaded; Parakeet is loaded when speech is detected and released after the configured inactivity.
- **Simpler Voice settings**: one «Speech recognition — Parakeet Ultra» section with status, download and progress; model, revision, updates and the separate recognition, voice-detection and speech-synthesis components live under Advanced. Microphone, wake word, assistant name, sending and reading choices are preserved.

Settings, accounts, notes, timers, conversations and shortcuts are preserved when updating from 0.2.8. An existing Parakeet download is kept.
## What's new in 0.2.8

- **Settings that are easier to find**: the four Home cards and the navigation bar moved to **Appearance & Home**, next to theme, island shape and character (your choices are kept). Switching page starts from the top. Search prefers whole words and singular/plural forms (typing «tema» finds the themes first), in Settings and in the Command Palette.
- **Audio centre opens wide**: it uses the large layout of Settings in a single step, so the app volumes are visible without scrolling; closing it brings the island back to its size.
- **Messages**: disconnecting WhatsApp or Telegram lives only in Settings → Messaging (a settings button in the service bar takes you there); the note about previews wraps instead of being cut.
- **Themes**: the AI and Messages cards follow the theme (warm tones on Red and Sunset instead of a fixed green), a honey music card in the green themes, and a deeper Blue that is easy to tell apart from Dynamic Original.
- **Smaller details**: «More» in the sidebar has a grid icon (different from the «···» menu), the Home shows the date once, monitors are called «Monitor 2», the Codex row in Connections shows Check and Manage, and the microphone text in Voice matches the wake word setting.
- **Updates leave nothing behind**: each update used to leave a ~590 MB copy of the installer in the Windows temporary folder; from 0.2.8 Dynamic removes it at the next start (only the updater's own folder, never a file in use). Copies left by earlier versions are removed the first time 0.2.8 starts.

## What's new in 0.2.7

- **Visual Home cards**: each of the four quick cards is now a large themed icon (music, time, devices, AI, calendar, messages, agents). A short line appears on the card only when there is something real to show: the track playing or paused, today's next event, the devices actually connected, a running timer, alarm or reminder, unread messages. Long text scrolls inside the card once (never with reduced motion). The Home header shows only the date, the time and the eyes.
- **Messages**: WhatsApp and Telegram are one **Messages** destination with a WhatsApp | Telegram switch, unread counts per tab and one badge for both. Accounts, sessions and notifications stay separate. Pinned destinations, palette favourites, voice commands and shortcuts that pointed to WhatsApp or Telegram keep working and open the right tab.
- **Settings always wide**: every way of opening Settings goes straight to the large layout in one step, and leaving Settings brings the island back to its normal size with the focus where it was.
- **Attach files in the Chat**: the paperclip in the composer opens the Windows file picker. Text files only (notes, CSV, JSON, code…), sent **as text** together with your message when you press Send; PDFs, images and Office documents are not supported by the ChatGPT and Gemini connectors in Dynamic. The separate «Share with AI» panel is gone.
- **Clearer details**: a red warning with the reason when a player's volume cannot be adjusted; Settings → Overview summarises connected and unconfigured services; AI agents and Actions pages highlight the main switch and move specialist details into Advanced.

## What's new in 0.2.6

- **Simpler Settings**: a new **Overview** page (AI, voice, messaging and island at a glance, with anything that needs attention), clear groups (Dynamic, Assistant, Integrations, Privacy & info) and collapsible **Advanced** sections for technical options. Search reaches every section, including the advanced ones. The gear on the Home opens the Overview.
- **Clearer first run**: the welcome explains the island, how to open it (click or Ctrl+Alt+D) and close it (Esc); visibility and island shape are chosen in the preferences; a one-time hint shows how to reopen Dynamic; new users get a short **Getting started** list on the Home (hidden forever with one click, never shown to existing users).
- **Fixes**: the guided setup no longer reopens on its own from Settings; the AI state is no longer lost at startup. Keyboard focus rings everywhere and confirmation before destructive resets.

## What's new in 0.2.5

- **One Chat for AI** — «Share with AI» is no longer a separate tool. The **+** button in the Chat composer opens the share panel: paste text or pick a text file, choose Explain, Summarise, Translate or Ask, check the summary and confirm before anything is sent to the connected ChatGPT or Gemini. The provider is picked with the Chat's own switch, and typing a normal message works exactly as before. Dynamic still never reads the clipboard, the screen or other apps by itself.
- **Audio centre from the Home** — a speaker button next to Notifications and Settings opens the audio centre with one click. The mixer is read only when it opens; Ctrl+Alt+U still works.
- **Simpler «···» menu** — Command Palette, Reduce to island, Centre Dynamic and Quit. The audio centre, sharing and Settings already have their own direct buttons.

Settings, accounts, notes, timers, conversations, shortcuts and voice models are kept when updating from 0.2.4.

## What's new in 0.2.4

- **Command Palette** — press the 🔍 button in the island header, use the «···» menu or Ctrl+Alt+K while Dynamic is focused: one search over Dynamic screens, Settings sections, 28 ready-made actions (music, Windows volume, timers, quiet mode, folders, devices, lock), Start-menu apps and typed timers («timer 7», «25 min»). Fully usable from the keyboard; favourites and recents are stored as identifiers only and the history can be switched off. Actions go through the same permissions and confirmations as voice and chat; typed text is never executed.
- **Audio centre** (Ctrl+Alt+U) — Windows master volume and mute with the output in use, per-app volume in the Windows mixer for the apps that really have an audio session, the current player and Dynamic's microphone (device, «Ehi Dynamic» listening on/off, status). It reads the mixer only when opened or used: nothing runs while it is closed.
- **Share with AI** — paste text or pick a text file, choose Explain, Summarise, Translate or Ask, check the summary (action, provider, size) and only then send it to the connected ChatGPT or Gemini. Dynamic never reads the clipboard, the screen or other apps by itself.
- **Shortcuts** — the palette and the audio centre have configurable shortcuts that work only while Dynamic is focused unless you make them global.

Settings, accounts, notes, timers, conversations, shortcuts and voice models are kept when updating from 0.2.3.

## What's new in 0.2.3

- **Customizable Home quick tiles**: in Settings → Appearance («Aspetto» → «Accessi rapidi della Home») you choose what each of the four tiles under «Adesso» shows: Music, Timer, Devices, AI, Calendar (next event), Messages (unread) or Agents. The default layout is unchanged.
- **Logitech mouse no longer stuck on «In sonno»**: opening the Home re-reads the receiver once when a Logitech device looks asleep, so a mouse that just woke up shows its real state and battery without opening the device list.

Settings, accounts, notes, timers, conversations, shortcuts and voice models are kept when updating from 0.2.2.

## What's new in 0.2.2

- **Faster voice commands**: after a successful local command whose confirmation is read aloud («apri TIDAL» → «Ho aperto TIDAL»), the island closes as soon as the reading ends instead of staying open for 8 seconds, so you can give the next command right away. AI replies, errors and notices still stay visible for 8 seconds.

Settings, accounts, notes, timers, conversations, shortcuts and voice models are kept when updating from 0.2.1.

## What's new in 0.2.1

- **Everyday local voice commands**, no cloud involved: «che ore sono?», «che giorno è?», «quanto manca a Natale / al weekend?», «apri Download / Documenti / Immagini / Desktop / Esplora file», «blocca il computer» (with confirmation), Windows volume and mute, the current audio output, devices and battery, «non disturbarmi per 30 minuti», «ho notifiche?», «cosa sai fare?».
- **Reliable music commands**: «brano precedente» really goes back one track instead of restarting the current one; «apri TIDAL e metti un po' di musica» opens the player and starts playback once it is ready; new «chiudi Spotify / TIDAL / Apple Music»; a named player's volume works even when another player is selected. Verified with real TIDAL and Spotify.
- **Changed**: «alza il volume» without a player name now sets the Windows volume; name the player for its own volume («volume di TIDAL al 40»).
- **WhatsApp voice summary** on request («che notifiche WhatsApp ho?», «chi mi ha scritto?») with three levels in Settings → Messaging. The default is the count only; names and message texts stay on the PC and are never sent to the AI.
- **Quiet mode** with a duration; timers, alarms, reminders, appointments and errors still get through.

Settings, accounts, notes, timers, conversations, shortcuts and voice models are kept when updating from 0.2.0.

## What's new in 0.2.0

- **Guided setup** for AI, voice, integrations and preferences. It can be postponed, resumed and reopened; older profiles are migrated without forcing the wizard.
- **Connections** shows the real state and next action for ChatGPT, Gemini, coding agents, messaging, music and calendar, with diagnostics designed not to expose secrets.
- **Offline Settings search**, keyboard navigation included.
- **Cleaner public build**: the former local demo provider is removed and the internal test bench is hidden.
- **Auto-hide reliability**: clicks made while the island is sliding back into view are no longer lost in the reproduced case.
- **Whole-app UI review** across every section, Settings page and all eleven themes, including contrast, empty states, spacing and accessible names.
- **Contextual setup links** from voice errors, such as configuring the microphone or connecting an AI provider.

Existing settings, accounts, notes, timers, conversations, shortcuts and voice models are designed to survive the update from 0.1.13.

## Screenshots

Every image below is a capture of the **real native app** (Tauri + WebView2) from the 0.2.0 release candidate; images marked with a newer version come from that version's build. Captures use a throw-away
profile and invented data; no personal account, conversation, calendar address, credential or private path is shown.

| | |
|---|---|
| ![Guided setup](docs/assets/screenshots/26-setup-ai.png)<br>**Guided setup** — choose ChatGPT, a personal Gemini key or local commands only | ![Connections](docs/assets/screenshots/27-settings-connections.png)<br>**Connections** — real state, explanation and next action for every integration |
| ![Settings search](docs/assets/screenshots/28-settings-search.png)<br>**Settings search** — local, keyboard-driven and linked to the exact option | ![Appearance](docs/assets/screenshots/29-settings-appearance.webp)<br>**Appearance** — eleven themes and the approved Dynamic identity |
| ![Chat and local actions](docs/assets/screenshots/04-chat-actions.webp)<br>**Chat and local actions** — commands still work with no cloud AI connected | ![Sensitive action confirmation](docs/assets/screenshots/05-actions-confirm.webp)<br>**Confirmation** — sensitive operations wait for an explicit yes or no |
| ![Calendar](docs/assets/screenshots/06-calendar-month.webp)<br>**Calendar** — read-only ICS agenda and expanded month view | ![Time](docs/assets/screenshots/10-tempo.webp)<br>**Time** — timers, alarms and reminders from one page |
| ![Music](docs/assets/screenshots/11-music.webp)<br>**Music** — Windows media sessions, transport, timeline and per-player volume | ![Messages](docs/assets/screenshots/43-messages-tabs.webp)<br>**Messages (0.2.8)** — WhatsApp and Telegram in one destination with tabs and a settings button; isolated web connections and local notification history |
| ![Coding agents](docs/assets/screenshots/13-agents.webp)<br>**Coding agents** — Claude Code and Codex sessions, observation only | ![Devices](docs/assets/screenshots/30-settings-devices.webp)<br>**Devices** — Windows Bluetooth and supported Logitech receivers |
| ![Notes](docs/assets/screenshots/08-notes.webp)<br>**Notes** — local, searchable and autosaved | ![Notification](docs/assets/screenshots/17-notice.webp)<br>**Notifications** — Dynamic events appear directly in the compact island |
| ![Command Palette](docs/assets/screenshots/35-command-palette.webp)<br>**Command Palette (0.2.4)** — screens, settings, actions, apps and timers from one keyboard-driven search | ![Audio centre](docs/assets/screenshots/36-audio-center.webp)<br>**Audio centre (0.2.4, wide since 0.2.8)** — Windows volume, per-app mixer volume, player and Dynamic's microphone |
| ![Settings overview](docs/assets/screenshots/39-settings-overview.webp)<br>**Settings → Overview** — always in the wide layout (0.2.7); the state of Dynamic at a glance, every row leads to its setting | ![Advanced section](docs/assets/screenshots/40-settings-advanced.webp)<br>**Voice → Advanced (0.2.6)** — technical options live in a collapsible section (shown open; this screenshot predates 0.2.9 and still shows Whisper) |
| ![Guided setup welcome](docs/assets/screenshots/41-setup-welcome.webp)<br>**Guided setup (0.2.6)** — what the island is, how to open and close it, what works without an AI | ![Getting started](docs/assets/screenshots/42-home-getting-started.webp)<br>**Getting started (0.2.6)** — a short list for new users on the Home, only verified steps get ticked |
| ![Attach a file in the Chat](docs/assets/screenshots/44-chat-attach.webp)<br>**Attach files in the Chat (0.2.7)** — a text file next to your message, sent as text only when you press Send (shown with no AI connected) | ![Home with the audio button](docs/assets/screenshots/38-home-audio.webp)<br>**Audio centre from the Home (0.2.5)** — the speaker button next to Notifications and Settings opens it with one click |
| ![Appearance and Home](docs/assets/screenshots/45-settings-appearance-home.webp)<br>**Settings → Appearance & Home (0.2.8)** — theme, island shape and character, the four Home cards and the navigation bar in one page | |

<p align="center">
  <img src="docs/assets/screenshots/03-home-expanded.webp" alt="Expanded Dynamic Home" width="320">
</p>

### Four compact styles

Choose the shape in **Settings → Appearance**. The avatar, activities, notifications and expanded panel remain shared.

| Premium | Capsule | Indicator | Adaptive |
|---|---|---|---|
| ![Premium style](docs/assets/screenshots/31-notch-premium.png) | ![Capsule style](docs/assets/screenshots/32-notch-capsule.png) | ![Indicator style](docs/assets/screenshots/33-notch-indicator.png) | ![Adaptive style](docs/assets/screenshots/34-notch-adaptive.png) |
| 188 × 48 | 148 × 40 | 116 × 34 | 104 / 140 / 178 × 40 |

<p align="center">
  <img src="docs/assets/screenshots/23-theme-sunset-home.webp" alt="Sunset theme" width="260">
  <img src="docs/assets/screenshots/24-theme-ocean-home.webp" alt="Ocean theme" width="260">
  <img src="docs/assets/screenshots/25-theme-graphite-home.webp" alt="Graphite theme" width="260">
</p>

## Features

- **AI assistant** — ChatGPT through *Sign in with ChatGPT* when the account plan permits it, or Gemini through the user's own Google AI Studio key. There is no automatic paid-API fallback.
- **Local voice** — Parakeet Ultra is the only speech-to-text engine; Piper provides Italian speech synthesis. Both run locally on the CPU. Parakeet is downloaded on request from Settings → Voice.
- **Local actions** — deterministic commands for time and dates, timers, reminders, notes, calendar, music, Windows volume, folders, devices, quiet mode, notifications and navigation. AI replies are never interpreted as commands; sensitive actions require confirmation.
- **Music** — controls Windows media sessions, can open, start and close Spotify, Apple Music or TIDAL using the Windows app catalogue or an explicit executable path, and sets the volume of a single player.
- **Calendar** — read-only Google/Outlook ICS feeds, recurring events, time zones, reminders and offline encrypted cache. Creating or editing an event opens the browser.
- **Messages** — WhatsApp Web and Telegram Web, one destination with two tabs, each in its own isolated WebView2 profile. Dynamic can display their web notifications and keep an optional DPAPI-encrypted local history.
- **Coding agents** — optional, observation-only monitoring for Claude Code and Codex through local hooks. Prompt and tool contents are discarded. Codex hooks require explicit approval through `/hooks`.
- **Devices** — paired Bluetooth devices and supported Logitech LIGHTSPEED, Unifying and Bolt receivers, using read-only Windows/HID data.
- **Quick access** — Command Palette and audio centre as small sheets over the island, opened from the header, the menu or shortcuts; text-file attachments right in the Chat composer.
- **Personalisation** — four compact styles, three avatars, eleven themes, docking/floating modes, multi-monitor placement and configurable shortcuts.
- **Fullscreen awareness** — can hide while a fullscreen app occupies the same monitor; no overlay injection or screen capture.
- **Self-updating** — manual install confirmation, minisign verification and preservation of the user profile.

## Installation

1. Open the [latest release](https://github.com/andrea4546/Dynamic-releases/releases/latest).
2. Download **`Dynamic_x.y.z_x64-setup.exe`** (about 382 MB; Parakeet Ultra is a separate 550 MB download from Settings → Voice).
3. Run the installer. It installs for the current user and does not require administrator rights.
4. Follow the guided setup, or postpone it and use local features first.

## Updates

Dynamic checks this repository's `latest.json` shortly after startup and then periodically when automatic checks are enabled. If a newer version
is available, Settings → Information shows it. Installation starts only after the user chooses it; the app downloads the installer, verifies its
minisign signature against the embedded public key, performs the per-user update and restarts. Settings and local data are retained.

## Requirements

- Windows 11 x64. Windows 10 is not tested.
- A CPU with AVX2; local speech recognition is CPU-only.
- A microphone for voice features.
- Internet only for the selected AI provider, calendar downloads, updates and the optional Parakeet download.
- For conversational AI: a compatible ChatGPT account or a personal Gemini API key. Local commands work without either.

## Privacy and security

| Data | Handling |
|---|---|
| Microphone audio | Processed locally and not written to disk. The optional wake word also runs locally. |
| Chat text | Sent only to the selected ChatGPT or Gemini provider, and only for messages that are not recognised local commands. |
| Credentials and calendar addresses | Stored with Windows DPAPI where sensitive; never placed in screenshots or diagnostics. |
| Notes, timers, conversations and histories | Kept in the user's local profile. |
| Screen and other applications | Dynamic does not capture the screen, inspect app contents or inject code. |
| Chat attachments | Only text files you pick with the paperclip; shown in the composer and sent as text only when you press Send. Kept in memory, never written to disk or logs, never interpreted as a command. |
| Command Palette history | Only identifiers of built-in actions; no typed text, app names, AI content or paths. Can be switched off. |
| Coding-agent hooks | Observation only; prompt and tool payloads are discarded. Dynamic never approves requests for the agent. |

Third-party licence notices, voice attribution and the corresponding Piper source references are included with the installer.

## Performance

Dynamic is designed to remain quiet while hidden or idle: Windows and media events are used where available, themes are static, and no GPU speech
inference or extra overlay process is used. A three-run 0.1.13 → 0.2.0 comparison found the same seven-process tree and CPU, memory, thread and handle
counts within short-sample noise. A 0.2.3 → 0.2.4 comparison on isolated release builds (4–5 alternating runs, whole process tree) measured about
+6 MB of private memory with the compact island (the page's JavaScript heap is unchanged), the same CPU and GPU within noise, the same Home and Settings
opening times, ≈ 8 ms to open the Command Palette and ≈ 72 ms to open the audio centre including the mixer read. **FPS and frametime have not been measured in a real game.**

## Known limitations

- **Codex CLI notifications do not work in 0.2.0 to 0.2.9 on Windows.** With all seven Dynamic hooks approved through `/hooks`, a real Codex CLI 0.163.0 session still cannot launch the generated `commandWindows` (a quoting defect: the quoted executable path is rejected by Codex's `cmd /S /C` launch). Dynamic's local relay works when invoked directly; the fix needs a follow-up release. Claude Code monitoring is unaffected. The VS Code Codex extension is a separate, unverified path.
- Telegram notification reception has not been confirmed with a real account.
- Human-voice accuracy, wake-word false positives, suspend/hibernate, screen readers, real-game FPS/frametime and a clean second PC remain unverified.
- A multi-second Auto-hide stall seen once in an older build has not been reproduced; occasional visual glitches should not be described as definitively fixed.
- TIDAL and Spotify were exercised for real in 0.2.1 (previous track, open-and-play, close, volume); Apple Music was not. TIDAL releases its audio output after a few minutes of pause, so its volume can be adjusted again only once playback resumes.
- Group and sender details in the WhatsApp voice summary depend on what WhatsApp Web puts in its notifications and have not been verified with a real account; without them Dynamic says only the chat name.
- Windows offers no public API for apps to change the default audio output: Dynamic tells you which output is in use and points to Win+Ctrl+V.
- The audio centre does not follow volume changes made by other apps while it is open (it reads the mixer when opened and after each change). Chat attachments accept text files only and are sent as text, not as native provider attachments; sending them to a real ChatGPT or Gemini account has not been tested yet.
- The installer has a valid updater minisign signature but no Authenticode certificate; SmartScreen may warn.

## Release notes

See the [Releases](https://github.com/andrea4546/Dynamic-releases/releases) page for versioned notes and checksums.

---

<sub>Windows 11 x64 · Tauri 2 · Rust · React · TypeScript · Parakeet · Piper</sub>
