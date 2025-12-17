# Analisi Arciere - Manuale d'Uso

## Indice
1. [Introduzione](#introduzione)
2. [Requisiti](#requisiti)
3. [Primo Avvio](#primo-avvio)
4. [Interfaccia Principale](#interfaccia-principale)
5. [Modalità Live](#modalità-live)
6. [Registrazione Video](#registrazione-video)
7. [Playback e Analisi](#playback-e-analisi)
8. [Modelli AI](#modelli-ai)
9. [Allineamenti](#allineamenti)
10. [Modalità Schermo Intero](#modalità-schermo-intero)
11. [Risoluzione Problemi](#risoluzione-problemi)

---

## Introduzione

**Analisi Arciere** è un'applicazione web per l'analisi della postura degli arcieri. Utilizza l'intelligenza artificiale per rilevare la posizione del corpo in tempo reale e fornire feedback sugli allineamenti chiave per migliorare la tecnica di tiro.

### Caratteristiche Principali
- Rilevamento pose in tempo reale
- Supporto per arco Olimpico, Compound e Nudo
- Registrazione e playback video
- Analisi frame-by-frame
- Overlay griglia personalizzabile
- Modalità schermo intero con menu dedicato

---

## Requisiti

### Hardware
- Computer, tablet o smartphone con fotocamera
- Connessione internet (per il primo caricamento dei modelli AI)

### Software
- Browser moderno: Chrome, Firefox, Edge, Safari o Opera
- **IMPORTANTE**: L'applicazione richiede HTTPS per accedere alla fotocamera

### Permessi
- Accesso alla fotocamera (verrà richiesto al primo avvio)

---

## Primo Avvio

1. Apri l'applicazione nel browser
2. Attendi il caricamento del modello AI (schermata con logo)
3. Quando richiesto, **consenti l'accesso alla fotocamera**
4. L'applicazione mostrerà il feed video con lo scheletro sovrapposto

---

## Interfaccia Principale

### Header
- **Logo e Titolo**: "Analisi Arciere"
- **Selettore Tipo Arco**: Olimpico | Compound | Nudo

### Area Video
- **Indicatore LIVE**: Mostra lo stato (Live/Registrazione/Playback)
- **FPS**: Frame per secondo correnti
- **Overlay Allineamenti**: Angoli in tempo reale (alto a sinistra)

### Barra Controlli
Da sinistra a destra:
1. **Specchia Video**: Inverte orizzontalmente l'immagine
2. **Scheletro**: Mostra/nasconde lo scheletro
3. **Griglia**: Mostra/nasconde la griglia di riferimento
4. **Allineamenti**: Mostra/nasconde l'overlay degli angoli
5. **Selettore Densità Griglia**: 8×8 fino a 48×48
6. **Registra** (pulsante rosso): Avvia/ferma registrazione
7. **Screenshot**: Cattura immagine
8. **Schermo Intero**: Attiva modalità fullscreen

### Sidebar Destra
- **Impostazioni**: Selezione fotocamera, posizione arciere, modello AI
- **Registrazioni**: Lista video registrati

---

## Modalità Live

### Visualizzazione Scheletro
Lo scheletro viene disegnato con colori diversi per ogni segmento:
- 🔴 **Spalle**: Linea rossa tra le spalle
- 🔵 **Fianchi**: Linea turchese tra i fianchi
- 🟡 **Braccio Arco**: Giallo (braccio che tiene l'arco)
- 🟢 **Braccio Trazione**: Verde acqua (braccio che tira la corda)
- 🟣 **Busto**: Viola (connessioni spalle-fianchi)
- 🔵 **Testa**: Azzurro (occhi, orecchie, naso)
- 🟠 **Collo**: Arancione (da spalle a naso)
- ⚪ **Gambe**: Bianco

### Overlay Allineamenti
Sotto l'indicatore "LIVE" vengono mostrati gli angoli:
- **Valore Verde**: Allineamento corretto
- **Valore Giallo**: Allineamento da migliorare
- **Valore Rosso**: Allineamento da correggere

### Griglia di Riferimento
- Attiva con il pulsante griglia
- Linee bianche semi-trasparenti
- Linee centrali più spesse
- Densità regolabile (8×8 a 48×48)

---

## Registrazione Video

### Avviare una Registrazione
1. Premi il pulsante rosso **Registra**
2. L'indicatore cambia in "REC" con punto rosso lampeggiante
3. Esegui il tiro o il movimento da analizzare
4. Premi di nuovo il pulsante per fermare

### Gestione Registrazioni
Le registrazioni appaiono nella lista "Registrazioni" nella sidebar:
- **Click** sulla registrazione per visualizzarla
- **Pulsante Download**: Scarica il video
- **Pulsante Elimina**: Rimuove la registrazione

---

## Playback e Analisi

### Controlli Playback
Quando visualizzi una registrazione:
- **Play/Pausa**: Avvia o ferma la riproduzione
- **Frame Precedente** (◀): Torna indietro di 1 frame
- **Frame Successivo** (▶): Avanza di 1 frame
- **Timeline**: Trascina per navigare nel video
- **Velocità**: Riproduzione rallentata di default

### Analisi HD
- Premi il pulsante **HD** per analizzare con BlazePose
- Attendi il completamento (mostra percentuale)
- Una volta completata, lo scheletro sarà più preciso

### Tornare al Live
- Premi **Torna al Live** per riprendere la visualizzazione in tempo reale

---

## Modelli AI

### MoveNet Thunder
- **Precisione**: Alta
- **Velocità**: Media
- **Punti**: 17
- **Consigliato per**: Analisi accurata

### MoveNet Lightning
- **Precisione**: Media
- **Velocità**: Alta
- **Punti**: 17
- **Consigliato per**: Dispositivi meno potenti

### MediaPipe Holistic
- **Precisione**: Alta
- **Velocità**: Media
- **Punti**: Corpo + Mani + Viso
- **Consigliato per**: Analisi dettagliata delle mani

### BodyPix
- **Tipo**: Segmentazione
- **Visualizzazione**: Maschera colorata sul corpo
- **Consigliato per**: Visualizzazione sagoma

### Cambiare Modello
1. Vai nella sezione "Modello AI" nella sidebar
2. Seleziona il modello desiderato
3. Attendi il caricamento (schermata di loading)

---

## Allineamenti

### Spalle
- **Ideale**: 0° (spalle orizzontali)
- Misura l'inclinazione della linea delle spalle

### Fianchi
- **Ideale**: 0° (fianchi orizzontali)
- Misura l'inclinazione della linea dei fianchi

### Braccio Arco
- **Ideale**: ~180° (braccio disteso)
- Misura l'angolo del braccio che tiene l'arco

### Braccio Trazione
- **Ideale**: Angolo acuto
- Misura l'angolo del braccio che tira la corda

### Busto
- **Ideale**: 0° (busto verticale)
- Misura l'inclinazione del torso

### Testa
- **Ideale**: 0° (testa dritta)
- Misura l'inclinazione della testa

---

## Modalità Schermo Intero

### Attivare
- Premi il pulsante **Schermo Intero** nella barra controlli
- Oppure usa F11 (su desktop)

### Menu Hamburger
In schermo intero, premi il pulsante ☰ in alto a destra per accedere a:

1. **Tipo Arco**: Olimpico / Compound / Nudo
2. **Posizione Arciere**: Sinistra / Destra
3. **Modello AI**: Thunder / Lightning / Holistic / BodyPix
4. **Visualizzazione**:
   - Scheletro (on/off)
   - Griglia (on/off)
   - Allineamenti (on/off)
   - Specchia (on/off)
5. **Densità Griglia**: 8×8 / 16×16 / 32×32
6. **Azioni**: Registra / Screenshot
7. **Esci**: Torna alla visualizzazione normale

### Chiudere il Menu
- Tocca fuori dal menu
- Oppure premi di nuovo il pulsante ☰

---

## Risoluzione Problemi

### La fotocamera non funziona
1. Verifica di aver concesso i permessi
2. Controlla che nessun'altra app stia usando la fotocamera
3. Prova a ricaricare la pagina
4. Assicurati di usare HTTPS

### Lo scheletro non appare
1. Assicurati di essere inquadrato completamente
2. Verifica che "Scheletro" sia attivo
3. Prova a cambiare modello AI
4. Migliora l'illuminazione

### L'applicazione è lenta
1. Passa al modello "Lightning" (più veloce)
2. Chiudi altre applicazioni
3. Riduci la densità della griglia
4. Usa un browser aggiornato

### Holistic non funziona
1. Ricarica la pagina
2. Prova con un browser diverso (Chrome consigliato)
3. Verifica la connessione internet

### I punti si disallineano in fullscreen
1. Attendi qualche secondo dopo il cambio orientamento
2. L'applicazione si ricalibra automaticamente

---

## Supporto

Per segnalare problemi o richiedere nuove funzionalità, contatta il club:

**Polisportiva Tiro con l'Arco**
**Gonone - Dorgali**

---

*Versione corrente: 17*
*Ultimo aggiornamento: 14 Dicembre 2024*
