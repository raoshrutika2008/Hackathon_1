[readme.md](https://github.com/user-attachments/files/33952442/readme.md)
# DoodleSquad 🐣 • Where Brainstorms Hatch!

**DoodleSquad** is a feature-rich, fully self-contained, hand-drawn sketch and collaborative whiteboard studio built for students, study groups, hackathon teams, and remote brainstorms. It combines a rustic sketchbook aesthetic (notebook spiral bindings, washi tape, polaroids, and pastel notes) with powerful vector math algorithms, AI neatification, OCR handwriting recognition, and live co-presence simulation.

---

## ✨ Key Features & Capabilities

### 1. ✏️ Zero-Guess AI Vector Neatify
* **No Hallucinations:** Uses pure mathematical geometry instead of guesswork.
* **Ramer-Douglas-Peucker (RDP) Algorithm:** Simplifies hand-drawn tremor jitter.
* **Chaikin's Corner-Cutting Spline Smoother:** Smooths jagged corners into pristine studio vector curves while preserving 100% stroke topology.
* **Laser Scanner Sweep:** Features a glowing laser animation during neatification.

### 2. 🗒️ Supercharged Interactive Sticky System
* **4 Mode Types:** Rich Text Notes, Interactive Task Checklists (with real-time progress bars), Voice Memo Cards (with simulated waveform playback), and Math Formula Ribbons.
* **6 Pastel Color Palettes:** Buttercup, Rose, Sky, Mint, Lavender, and Peach.
* **Washi Tapes & Pins:** Customizable Scotch tape, polka dots, grid washi, and thumbtack pins.
* **Organization:** Auto-cluster notes into clean study columns with a single click.

### 3. 📐 Geometric Shape Prediction & Snapping
* Auto-detects **Circles, Ellipses, Rectangles, Triangle, Directed Arrows, Straight Lines, and Stars**.
* Displays a live confidence HUD with one-click geometric snapping.

### 4. 🔤 Handwriting & Math OCR Recognizer
* Transcribes handwritten student notes and calculus formulas ($E = mc^2$, $\int x^2 dx$, $F = ma$).
* Instantly converts transcribed output into editable sticky notes or interactive to-do checklists.
* Includes quick-insert math formula presets.

### 5. 👥 Live Squad Co-Presence & Chat
* **Simulated Live Peer Cursors:** Follow real-time peer activities on the whiteboard.
* **Squad Chat Drawer:** Exchange brainstorm notes and coordinate study milestones.
* **Floating Emoji Reactions:** Send instant cheers ($\🔥$, $\⭐$, $\🧠$, $\🙌$).

### 6. 🐾 Mascot Roster & Gamification
* Meet **Barnaby Owl** (Logician), **Nova Rocket** (Sprint Booster), **Pippin Pencil** (Master Sketcher), and **Mochi Cat** (Creative Chaos). Click any mascot for study cheers and focus stats.

### 7. 📤 Multi-Format Export & Portable Sharing
* **High-Res PNG Snapshot:** Exports a clean 2x retina image complete with paper grid textures, sticky notes, and stickers.
* **Standalone Shareable Board (`.html`):** Saves a portable single-file HTML bundle with all whiteboard drawings and sticky notes baked in so anyone can open it offline in any browser.
* **QR Code & Invite Links:** Built-in SVG QR code generator for mobile and tablet handoff.

---

## 🚀 Quick Start / Installation

Because DoodleSquad is **100% self-contained in a single file (`index.html`)**, you do not need Node.js, databases, or external asset servers!

1. Download or save the `index.html` file.
2. Double-click the file to open it directly in **any modern web browser** (Chrome, Safari, Firefox, Edge).
3. Start drawing, adding stickies, or load one of the starter templates (**Mind Map**, **Physics Lab**, or **Study Sprint Kanban** via the *Templates* menu).

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| **`P`** | Switch to Ink Pen Tool |
| **`H`** | Switch to Highlighter Tool |
| **`E`** | Switch to Eraser Tool |
| **`L`** | Switch to Laser Pointer |
| **`N`** | Spawn New Sticky Note |
| **`Space`** | Trigger ✨ AI Neatify |
| **`Ctrl + Z`** | Undo Stroke |
| **`Ctrl + Y`** | Redo Stroke |
| **`Enter`** | Snap Detected Geometric Shape |
| **`Esc`** | Close Modals & Dropdown Menus |

---

## 🛠️ Built With

* **HTML5 Canvas & Web Audio API** (Zero external sound asset dependencies)
* **Tailwind CSS** (via CDN with custom hand-drawn shadow effects)
* **FontAwesome v6 & Google Fonts** (Fredoka, Patrick Hand, Kalam)
* **Canvas Confetti** for celebratory milestone animations
