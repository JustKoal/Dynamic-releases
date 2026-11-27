---
title: AI integrations
description: Connect ChatGPT or Gemini for conversation, and follow Claude Code and Codex sessions.
order: 5
icon: sparkles
---

## Choose a provider

Open **Settings → AI e Chat → Provider**.

- **ChatGPT**: choose **Account ChatGPT** and sign in through your browser. Dynamic uses OAuth with PKCE and never sees your password. Use of your plan depends on what OpenAI grants when you sign in; if it is not granted, Dynamic says so and local features keep working.
- **Gemini**: create a key in Google AI Studio and paste it under **Gemini**. The key is encrypted with Windows DPAPI.

There is no automatic fallback to a paid API. The chat is temporary: it stays in memory and disappears when Dynamic closes or when you start a new chat.

## What is sent

Only messages that are not local commands are sent to the provider, as text. Text files you attach in the composer are sent only when you press **Send**. AI replies are never executed as commands.

## Coding agents: Claude Code and Codex

1. Open **Settings → Agenti AI → Collegamento** and connect Claude Code and/or Codex. Dynamic installs local hooks.
2. The **Agenti** page and the Home widget show each session: working, waiting for input or permission, finished.
3. Optional alerts in the island tell you when a session needs you.

Monitoring is observation only: prompt and tool contents are discarded, and Dynamic never approves a request. You answer in the agent itself, on the PC.

After an update, Codex may ask you to re-approve changed hooks with `/hooks`; Dynamic detects this and tells you.

## Agent usage

See five-hour and weekly quotas, reset times, model, context and tokens when available. Enable optional alerts and local history. Quotas also appear on Home and in the Companion Agents widget.

Under Settings → Agents, preview and connect the Claude Code status line or use Read now for Codex. Claude reports quotas on supported plans after the first response. Codex CLI session context and token counts are unavailable.

## GitHub dashboard

Follow Actions, builds, deployments, releases, pull requests and issues across up to eight repositories, including private ones. Use browser-based sign-in or a fine-grained personal access token. Access is read-only.

Only authorised repositories you select. Windows DPAPI encrypts the token. GitHub receives no requests while the feature is off. Alerts are optional and checks pause during gaming. The dashboard does not report local Git folder status.

Use **Read now** or enable checks at the start and end of a turn. Dynamic closes the Codex process after reading. You can remove the Claude link from Settings to restore your previous status line. In GitHub, enable the dashboard, sign in through your browser and select repositories. You can turn it off or disconnect from Settings.
