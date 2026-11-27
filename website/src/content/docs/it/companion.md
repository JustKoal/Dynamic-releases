---
title: Dynamic Companion
description: Apri la dashboard del PC su uno smartphone o un tablet della stessa rete, configura l'HTTPS e concedi i permessi.
order: 7
icon: smartphone
---

Nelle impostazioni di Companion scegli **Lingua** per usare italiano o inglese. La scelta viene salvata sul dispositivo. Gli esiti delle azioni rapide seguono la lingua di Companion anche se il PC usa l’altra.

Companion è una pagina web servita da Dynamic sul tuo PC e aperta nel browser di uno smartphone, di un tablet o di un altro computer **sulla stessa rete privata**. Nessuna app da installare, nessun servizio cloud. È spento di default.

## Attivazione e associazione

1. Sul PC apri **Impostazioni → Companion** e attivalo. La prima volta Windows Firewall può chiedere l'accesso: consenti le **reti private**.
2. Sullo smartphone o sul tablet inquadra il QR, oppure apri l'indirizzo mostrato e digita il codice a sei cifre. I codici scadono dopo due minuti e valgono una sola volta.
3. Si apre la dashboard. Usa sempre lo stesso indirizzo (l'IP o `<nome-del-pc>.local`) per conservare associazione e layout: per il browser ogni indirizzo è un sito diverso.

## Connessione sicura (HTTPS)

I controlli remoti richiedono HTTPS. Dynamic crea un'autorità di certificazione (CA) locale che può firmare solo nomi locali e indirizzi privati.

**iPhone e iPad**

1. Sul PC apri **Impostazioni → Companion → Configura iPhone o iPad** e inquadra il QR.
2. In Safari scarica il profilo. Contiene solo il certificato pubblico.
3. In **Impostazioni → Profilo scaricato** confronta l'impronta SHA-256 con quella mostrata sul PC, poi installa.
4. Vai in **Generali → Info → Attendibilità certificati** e abilita l'attendibilità completa per la CA di Dynamic del tuo PC ([guida Apple](https://support.apple.com/it-it/102390)).
5. Apri l'indirizzo HTTPS mostrato sul PC. Deve aprirsi senza avvisi.

**Android e altri dispositivi**: scarica il certificato `.cer` dalla guida alla connessione sicura, confronta l'impronta, installalo come certificato CA dalle impostazioni di sicurezza del sistema, poi apri l'indirizzo HTTPS.

Proseguire oltre un avviso del browser non crea una fiducia duratura. Dynamic non installa mai certificati o profili al posto tuo.

## Aggiungere alla schermata Home

Dalla pagina HTTPS usa **Condividi → Aggiungi alla schermata Home** in Safari, oppure **Aggiungi a schermata Home** dal menu di Chrome su Android. Una scorciatoia creata in precedenza può mantenere l'icona vecchia.

## Personalizzare

Tocca **Personalizza** per riordinare, ridimensionare, aggiungere o rimuovere widget e per scegliere il tema. Ogni dispositivo conserva il proprio layout nel browser; nulla viene inviato al PC.

Widget: CPU, GPU, RAM, rete, dischi, agenti AI, musica, Centro audio, batterie, timer (timer sul dispositivo, Pomodoro e cronometro), timer del PC e azioni rapide.

## Permessi

Ogni dispositivo parte con la sola **consultazione**. Sul PC puoi concedere, per dispositivo e solo su HTTPS: controllo della musica, audio, microfono, timer del PC, modalità (Non disturbare), azioni rapide e nomi dei progetti degli agenti. Non esistono terminale, accesso ai file, avvio di programmi o comandi arbitrari. Puoi revocare un dispositivo in qualsiasi momento da **Impostazioni → Companion**.

## Da sapere

- Le reti ospiti con isolamento dei client bloccano Companion.
- La pagina non usa un service worker, quindi non funziona offline.

## Utilizzo degli agenti

Controlla quote a 5 ore e settimanali, ripristini, modello, contesto e token quando disponibili. Attiva avvisi e storico locale facoltativo. Le quote compaiono anche in Home e nel widget Agenti di Companion.

In Impostazioni → Agenti collega la status line di Claude Code con anteprima o usa Leggi ora per Codex. Claude fornisce le quote con piani compatibili, dopo la prima risposta. Per Codex CLI contesto e token della sessione non sono disponibili.
