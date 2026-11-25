---
title: Integrazioni AI
description: Collega ChatGPT o Gemini per la conversazione e segui le sessioni di Claude Code e Codex.
order: 5
icon: sparkles
---

## Scegli un provider

Apri **Impostazioni → AI e Chat → Provider**.

- **ChatGPT**: scegli **Account ChatGPT** e accedi dal browser. Dynamic usa OAuth con PKCE e non vede mai la tua password. L'uso del piano dipende da ciò che OpenAI concede al momento dell'accesso; se non viene concesso, Dynamic lo segnala e le funzioni locali continuano a funzionare.
- **Gemini**: crea una chiave in Google AI Studio e incollala in **Gemini**. La chiave viene cifrata con DPAPI di Windows.

Non esiste un ripiego automatico su API a pagamento. La chat è temporanea: resta in memoria e sparisce alla chiusura di Dynamic o quando inizi una nuova chat.

## Cosa viene inviato

Al provider arrivano solo i messaggi che non sono comandi locali, come testo. I file di testo allegati nel composer vengono inviati solo quando premi **Invia**. Le risposte dell'AI non vengono mai eseguite come comandi.

## Agenti di coding: Claude Code e Codex

1. Apri **Impostazioni → Agenti AI → Collegamento** e collega Claude Code e/o Codex. Dynamic installa hook locali.
2. La pagina **Agenti** e il widget della Home mostrano ogni sessione: al lavoro, in attesa di una risposta o di un'autorizzazione, terminata.
3. Gli avvisi facoltativi nell'isola ti dicono quando una sessione ti aspetta.

Il monitoraggio è in sola osservazione: i contenuti di prompt e strumenti vengono scartati e Dynamic non approva mai una richiesta. Rispondi direttamente nell'agente, sul PC.

Dopo un aggiornamento, Codex può chiedere di riapprovare gli hook modificati con `/hooks`; Dynamic lo rileva e te lo segnala.
