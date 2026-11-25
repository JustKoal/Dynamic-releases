---
title: Modalità Gaming
description: Cosa sospende Dynamic mentre un'app è a schermo intero e come configurarlo.
order: 9
icon: gamepad-2
---

La modalità Gaming si attiva da sola quando un'app a schermo intero occupa il monitor di Dynamic e termina quando l'app si chiude.

## Cosa succede

- La parola di attivazione **«Ehi Dynamic»** va in pausa: il microfono si chiude e i modelli vocali vengono rilasciati. Riprende a fine partita.
- Le WebView nascoste di **WhatsApp e Telegram** si chiudono, mantenendo sessione e profilo. A fine partita si riaprono in background, una ogni pochi secondi. Una finestra di messaggistica lasciata visibile resta aperta.
- Facoltativamente, le scorciatoie globali si sospendono e l'isola si nasconde.

Dynamic non inietta codice nei giochi e non disegna overlay.

## Configurazione

Apri **Impostazioni → Generale → Schermo intero e giochi**. Le due opzioni della modalità Gaming sono attive di default e si possono disattivare separatamente. Quando la messaggistica è chiusa per un gioco, la pagina Messaggistica lo indica.

## Cosa aspettarsi

La modalità Gaming riduce processi in background e memoria di Dynamic. Nella nostra prova su una build di sviluppo l'intero albero dei processi è passato da 13 a 7 processi e da 509 MB a 177–190 MB di memoria privata (dettagli e limiti nella [pagina Prestazioni](../../performance/#benchmarks)).

Non dichiariamo aumenti degli FPS, le misure in giochi reali sono ancora da fare e la compatibilità con ogni sistema anti-cheat non è stata verificata.
