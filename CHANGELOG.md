# Analisi Arciere - Changelog

## Versione 22 (Corrente)
**Data:** 18 Dicembre 2025

### Nuove Funzionalità
- **Pagina Launcher**: Nuova pagina iniziale con installazione e selezione versioni
- **5 Modelli AI**: Holistic (default), Lightning, UltraLight, PoseNet, BodyPix
- **Offline Completo**: Download di tutti i modelli AI durante installazione
- **Holistic Default**: Modello più compatibile come default

### Modifiche
- Rimosso PIN atleti (accesso diretto)
- Rimosso Thunder (problemi compatibilità)
- Aggiunto PoseNet come alternativa leggera
- Separato index.html (launcher) da app.html (applicazione)
- Manifest aggiornato per avvio corretto da icona home

### File Principali
- `index.html` - Pagina launcher (versioni + installazione)
- `app.html` - Applicazione principale v22
- `sw.js` - Service Worker per offline
- `manifest.json` - Configurazione PWA

---

## Versione 21
**Data:** 18 Dicembre 2025

### Nuove Funzionalità
- **UltraLight**: Nuovo modello BlazePose Lite per telefoni vecchi
- Default cambiato a UltraLight

---

## Versione 20
**Data:** 15 Dicembre 2025

### Nuove Funzionalità
- **PWA (Progressive Web App)**: App installabile su telefono, funziona offline
- **Archivio Club**: Quando connesso al server locale, salva/visualizza video per atleta
- **Pulsante Installa**: Nel modal versioni, pulsante per installare l'app
- **Aggiornamenti automatici**: Notifica quando disponibile nuova versione

### Modifiche
- Rimosso PIN atleti (accesso diretto)
- Service Worker per cache offline
- Manifest PWA per installazione
- API server per gestione archivio video

### Server Locale
- Salvataggio video in `C:\AnalisiArciere\archivio\`
- Cartelle separate per ogni atleta
- Conversione MP4 con FFmpeg (opzionale)
- API REST per upload/download/lista video

---

## Versione 19
**Data:** 15 Dicembre 2025

### Nuove Funzionalità
- **Registrazione Canvas**: Ora registra esattamente quello che si vede nel live (scheletro, griglia, allineamenti se attivi)
- **Analisi Frame per Frame**: Per video registrati senza scheletro, pulsante "AI" analizza ogni frame con MoveNet
- **Gestione intelligente playback**: 
  - Video con scheletro → riproduce direttamente
  - Video senza scheletro → mostra pulsante Analizza
  - Video analizzato → usa i dati salvati per disegnare lo scheletro

### Modifiche
- Rimosso BlazePose (non funzionante), usa MoveNet per analisi
- Pulsante analisi cambiato da "HD" a "AI"
- Title pagina: "Analisi Arciere - Polisportiva Gonone Dorgali"
- Creato index.html come file principale

### File
- `index.html` - File principale da caricare
- `logo-pol.png` - Logo (deve stare nella stessa cartella)

---

## Versione 18
**Data:** 15 Dicembre 2025

### Nuove Funzionalità
- **Configurazione Parametri Angoli**: Pulsante ingranaggio accanto alla selezione tipo arco per modificare le soglie (buono/attenzione) per ogni allineamento
- **Gestione Atleti**: Sistema completo per registrare e selezionare atleti
  - Nome e tipo arco obbligatori
  - Selezione atleta cambia automaticamente il tipo arco
  - Lista atleti persistente (localStorage)
- **Protezione PIN**: Accesso alla gestione atleti protetto da PIN a 4 cifre
- **Default Destrorsi**: L'app ora parte con posizione arciere "Destra" (destrorsi sono la maggioranza)

### Parametri Configurabili per Tipo Arco
- Spalle (soglia buono/attenzione)
- Fianchi (soglia buono/attenzione)
- Braccio Arco (soglia buono/attenzione)
- Busto (soglia buono/attenzione)
- Testa (soglia buono/attenzione)

---

## Versione 17
**Data:** 14 Dicembre 2025

### Nuove Funzionalità
- **Menu Hamburger Fullscreen**: In modalità schermo intero, pulsante hamburger in alto a destra con menu a scomparsa contenente tutti i controlli
- **Gestione Orientamento Mobile**: Correzione allineamento punti quando si ruota il dispositivo
- **Fullscreen Migliorato**: Il video riempie tutto lo schermo sia in verticale che orizzontale

### Menu Fullscreen Include
- Selezione tipo arco (Olimpico/Compound/Nudo)
- Selezione posizione arciere (Sinistra/Destra)
- Selezione modello AI (Thunder/Lightning/Holistic/BodyPix)
- Toggle visualizzazione (Scheletro/Griglia/Allineamenti/Specchia)
- Selezione densità griglia
- Pulsanti Registra e Screenshot
- Pulsante esci da schermo intero

---

## Versione 16
**Data:** 14 Dicembre 2025

### Modifiche
- **Colori Scheletro per Segmento**: Ogni parte del corpo ha un colore specifico che corrisponde agli allineamenti
  - Spalle: Rosso (#ff6b6b)
  - Fianchi: Turchese (#4ecdc4)
  - Braccio Arco: Giallo (#ffe66d)
  - Braccio Trazione: Verde acqua (#95e1d3)
  - Busto: Viola (#dda0dd)
  - Testa: Azzurro (#87ceeb)
  - Collo: Arancione (#ff9f43)
  - Gambe: Bianco (#ffffff)
- Colori uniformi tra MoveNet e Holistic

---

## Versione 15
**Data:** 14 Dicembre 2025

### Nuove Funzionalità
- **Pulsante Toggle Allineamenti**: Nuovo pulsante per mostrare/nascondere l'overlay degli allineamenti

### Modifiche
- Rimossa tab "Allineamenti" dalla sidebar destra (ora solo in overlay)
- Logo di apertura ingrandito (220x220px)
- Nomi modelli corretti nel caricamento:
  - "MoveNet Thunder"
  - "MoveNet Lightning"
  - "MediaPipe Holistic"
  - "BodyPix"

---

## Versione 14
**Data:** 14 Dicembre 2025

### Nuove Funzionalità
- **Logo Personalizzato**: Aggiunto logo "Polisportiva Gonone Dorgali - Tiro con l'Arco Gonone-Dorgali"
- Logo grande nella schermata di caricamento
- Logo nel header accanto al titolo

### Modifiche
- Titolo cambiato da "Archery Posture" a "Analisi Arciere"

---

## Versione 13
**Data:** 14 Dicembre 2025

### Nuove Funzionalità
- **Overlay Allineamenti su Video**: Angoli mostrati in sovraimpressione sotto "LIVE"
- Ogni allineamento con colore distintivo e bordo colorato
- Valori in verde/giallo/rosso in base alla correttezza

### Modifiche
- Pulsanti AI su griglia 2x2 (non escono più dal contenitore)
- **Holistic Migliorato**:
  - Linea del collo (arancione)
  - Perimetro testa/viso (contorno ovale)

---

## Versione 12
**Data:** 14 Dicembre 2025

### Nuove Funzionalità
- **Griglia Solo Linee**: Rimossi quadrati colorati, solo linee
- **Selettore Densità Griglia**: 8×8, 16×16, 24×24, 32×32, 48×48
- Linee centrali più spesse e visibili

### Correzioni
- Migliorato caricamento MediaPipe Holistic

---

## Versione 11
**Data:** 14 Dicembre 2025

### Nuove Funzionalità
- **MediaPipe Holistic**: Rilevamento corpo + mani + viso
- **BodyPix**: Segmentazione del corpo (maschera colorata)
- **Pulsante Griglia**: Toggle griglia overlay sul video

### Modelli AI Disponibili
1. Thunder (MoveNet preciso, 17 punti)
2. Lightning (MoveNet veloce, 17 punti)
3. Holistic (MediaPipe, corpo + mani + viso)
4. BodyPix (segmentazione corpo)

---

## Versione 10 e precedenti
**Data:** 14 Dicembre 2025

### Funzionalità Base Implementate
- Rilevamento pose in tempo reale con MoveNet
- Registrazione video WebM
- Playback con slow-motion
- Controlli frame-by-frame
- Analisi HD con BlazePose
- Selezione fotocamera
- Selezione tipo arco (Olimpico/Compound/Nudo)
- Selezione posizione arciere (Sinistra/Destra)
- Flip video (specchia)
- Toggle scheletro
- Screenshot
- Schermo intero
- Calcolo allineamenti:
  - Spalle
  - Fianchi
  - Braccio Arco
  - Braccio Trazione
  - Busto
  - Testa

---

## Note Tecniche

### Librerie Utilizzate
- TensorFlow.js
- @tensorflow-models/pose-detection (MoveNet, BlazePose)
- @tensorflow-models/body-pix
- @mediapipe/holistic
- @mediapipe/camera_utils
- @mediapipe/drawing_utils

### Requisiti
- Browser moderno con supporto WebRTC
- HTTPS (richiesto per accesso fotocamera)
- Connessione internet (per caricare modelli AI)

### File Necessari
- `vXX.html` (file principale)
- `logo-pol.png` (logo nella stessa cartella)
