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
