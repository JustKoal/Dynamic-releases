---
title: Risoluzione dei problemi
description: Soluzioni ai problemi più comuni con installazione, voce, AI, Companion e aggiornamenti.
order: 10
icon: wrench
---

## Installazione

- **SmartScreen blocca l'installer**: scegli **Ulteriori informazioni → Esegui comunque**. L'installer non ha ancora un certificato Authenticode. Se vuoi, confronta prima lo SHA-256 con quello della pagina Download.
- **Non trovo l'isola**: premi <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>D</kbd> oppure usa l'icona di Dynamic nell'area di notifica. Con più monitor controlla **Impostazioni → Generale → Monitor e posizione**.

## Voce

- **Dynamic non mi sente**: controlla il microfono in **Impostazioni → Voce → Microfono** con la prova del livello e verifica che Windows consenta l'accesso al microfono alle app desktop.
- **Il riconoscimento vocale non è disponibile**: scarica Parakeet Ultra in **Impostazioni → Voce**. Richiede una CPU con AVX2.
- **La parola di attivazione non risponde durante un gioco**: è la modalità Gaming. L'ascolto riprende quando l'app a schermo intero si chiude.

## AI

- **ChatGPT è collegato ma non si può usare**: OpenAI non ha concesso a Dynamic l'uso del piano per il tuo account. Dynamic lo mostra in **Impostazioni → AI e Chat**; in alternativa puoi usare Gemini con la tua chiave.
- **Le sessioni degli agenti non compaiono**: apri **Impostazioni → Agenti AI** ed esegui la prova del collegamento. Dopo un aggiornamento Codex può richiedere `/hooks` per riapprovare gli hook modificati.

## Companion

- **Lo smartphone non apre la pagina**: verifica che i due dispositivi siano sulla stessa rete privata (non una rete ospiti con isolamento dei client), che Companion sia acceso e che Windows Firewall consenta Dynamic sulle **reti private**.
- **Il browser mostra un avviso sul certificato**: completa i passaggi HTTPS di [Dynamic Companion](../companion/), compresa l'attendibilità completa su iPhone e iPad.
- **Il mio layout è sparito**: ogni indirizzo (IP o `.local`) è un sito diverso per il browser. Apri l'indirizzo che usavi prima.

## Audio

- **Non riesco a cambiare l'uscita predefinita da Dynamic**: Windows non offre un'API supportata per farlo. Usa <kbd>Win</kbd> <kbd>Ctrl</kbd> <kbd>V</kbd>.

## Aggiornamenti

- **Non viene proposto alcun aggiornamento**: controlla **Impostazioni → Informazioni**. Gli aggiornamenti arrivano dal feed ufficiale su GitHub e attendono sempre la tua conferma.

## Serve altro aiuto?

**Impostazioni → Connessioni** può copiare un rapporto diagnostico delle connessioni. Apri una segnalazione sul [repository GitHub](https://github.com/JustKoal/Dynamic-releases/issues) e incollalo dopo aver verificato che non contenga dati personali.
