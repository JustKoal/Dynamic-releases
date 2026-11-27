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

## Utilizzo degli agenti

Controlla quote a 5 ore e settimanali, ripristini, modello, contesto e token quando disponibili. Attiva avvisi e storico locale facoltativo. Le quote compaiono anche in Home e nel widget Agenti di Companion.

In Impostazioni → Agenti collega la status line di Claude Code con anteprima o usa Leggi ora per Codex. Claude fornisce le quote con piani compatibili, dopo la prima risposta. Per Codex CLI contesto e token della sessione non sono disponibili.

## Dashboard GitHub

Segui Actions, build, deployment, release, pull request e issue di un massimo di otto repository, anche privati. Accesso guidato dal browser o token personale a grana fine. Permessi di sola lettura.

Solo ai repository autorizzati e selezionati. Il token è cifrato con Windows DPAPI. Quando la funzione è spenta non ci sono richieste a GitHub. Gli avvisi sono facoltativi e i controlli si sospendono durante il gioco. La dashboard non legge lo stato delle cartelle Git locali.

Usa **Leggi ora** o attiva la lettura a inizio e fine turno. Dynamic chiude il processo Codex dopo la lettura. Puoi scollegare Claude dalle Impostazioni per ripristinare la status line precedente. Nella scheda GitHub, attiva la dashboard, accedi dal browser e scegli i repository. Puoi spegnerla o scollegarla dalle Impostazioni.

## Stato degli hook Codex

Corregge l’esecuzione degli hook Codex quando la shell di sessione è PowerShell e i falsi avvisi di approvazione. In **Impostazioni → Agenti AI → Verifica in Codex** puoi vedere le voci rilevate, abilitate e autorizzate, oltre all’ultimo evento ricevuto da Dynamic.

Se usi ancora le definizioni precedenti, apri **Agenti AI → Aggiorna…**, controlla l’anteprima e rivedi le voci modificate con `/hooks` in Codex. Le definizioni già corrette mantengono posizione e approvazione.
