---
title: Monitoraggio hardware
description: Leggi l'uso di CPU, GPU, RAM, rete e dischi e aggiungi la temperatura della CPU da strumenti che usi già.
order: 8
icon: gauge
---

## La pagina Sistema

Apri **Sistema** dalla barra di icone o da **Altro**, oppure cercala nella Command Palette. Mostra:

- uso e frequenza della CPU; uso della GPU, VRAM, potenza e frequenza;
- RAM in uso;
- traffico della rete fisica (download e upload);
- attività dei dischi e spazio per volume.

I dati arrivano dalle API di Windows. L'intervallo di campionamento (1, 2 o 5 secondi) è condiviso: un solo campionatore serve la pagina Sistema e tutti i dispositivi Companion, e si ferma quando nessuno lo usa.

## Temperatura della CPU

Windows non espone alle app una temperatura della CPU affidabile. Dynamic può leggerla dalla memoria condivisa di strumenti che potresti già usare:

- **MSI Afterburner**, con la memoria condivisa disponibile;
- **HWiNFO**, con il supporto alla memoria condivisa attivo.

Scegli la sorgente in **Impostazioni → Sistema e monitoraggio**. Dynamic non installa driver; se nessuno dei due strumenti è in esecuzione, la temperatura non viene mostrata.

## Dispositivi e batterie

I dispositivi Bluetooth collegati e quelli con ricevitore USB compaiono negli indicatori della Home e in Companion, con il livello della batteria quando Windows lo espone. Le impostazioni sono in **Impostazioni → Dispositivi**.
