---
title: Installazione
description: Scarica l'installer ufficiale, installa Dynamic per il tuo account utente e mantienila aggiornata.
order: 1
icon: download
---

## Prima di iniziare

- Windows 11 x64. Windows 10 non è stato testato.
- Una CPU con AVX2 se vuoi il riconoscimento vocale locale.
- Circa 431 MB per l'installer. Il modello vocale facoltativo Parakeet Ultra si scarica a parte (circa 550 MB).

## Installa

1. Apri la [pagina Download](../../download/) e scegli **Scarica per Windows**. Il file arriva direttamente dalla release ufficiale su GitHub.
2. Facoltativo: verifica il file. In PowerShell, nella cartella Download, esegui `Get-FileHash .\Dynamic_<versione>_x64-setup.exe -Algorithm SHA256` e confronta il risultato con lo SHA-256 indicato nella pagina Download.
3. Avvia l'installer. Installa Dynamic solo per l'utente corrente e non richiede diritti di amministratore.
4. Se compare **Windows SmartScreen**, scegli **Ulteriori informazioni → Esegui comunque**. L'avviso compare perché l'installer non ha ancora un certificato Authenticode.

Al termine, Dynamic compare come una piccola pillola in cima al monitor principale.

## Aggiornamenti

Dynamic controlla il feed firmato degli aggiornamenti poco dopo l'avvio e poi periodicamente, se i controlli automatici sono attivi. La nuova versione compare in **Impostazioni → Informazioni**: viene scaricata, verificata con la firma minisign e installata solo dopo la tua scelta. Impostazioni, account, note, calendari, dispositivi associati e sessioni di messaggistica vengono conservati.

## Disinstalla

Apri **Impostazioni di Windows → App → App installate**, cerca **Dynamic** e scegli **Disinstalla**.
