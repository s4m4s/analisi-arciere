# Analisi Arciere - Changelog

## Versione 17 (Corrente)
**Data:** 14 Dicembre 2024

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
**Data:** 14 Dicembre 2024

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
**Data:** 14 Dicembre 2024

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
**Data:** 14 Dicembre 2024

### Nuove Funzionalità
- **Logo Personalizzato**: Aggiunto logo "Polisportiva Tiro con l'Arco Gonone-Dorgali"
- Logo grande nella schermata di caricamento
- Logo nel header accanto al titolo

### Modifiche
- Titolo cambiato da "Archery Posture" a "Analisi Arciere"

---

## Versione 13
**Data:** 14 Dicembre 2024

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
**Data:** 14 Dicembre 2024

### Nuove Funzionalità
- **Griglia Solo Linee**: Rimossi quadrati colorati, solo linee
- **Selettore Densità Griglia**: 8×8, 16×16, 24×24, 32×32, 48×48
- Linee centrali più spesse e visibili

### Correzioni
- Migliorato caricamento MediaPipe Holistic

---

## Versione 11
**Data:** 14 Dicembre 2024

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
**Data:** 14 Dicembre 2024

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
