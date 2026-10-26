[readme.md](https://github.com/user-attachments/files/33952442/readme.md)
# DoodleSquad 🐣
> **Where Brainstorms Hatch! — Homework is way better together.**

DoodleSquad is a playful, neubrutalist collaborative homework and creative study platform. It combines an infinite digital sketchpad, Gemini-powered pedagogical AI superpowers, real-time study squads with synchronized Pomodoro timers, a community Wall of Fame, and an interactive animated video walkthrough with AI voice dubbing.

---

## 🌟 Key Features

### 1. 🖌️ Interactive Live Canvas & Sandbox
- **Natural Drawing Tools**: Fine ink pen, neon textured crayons, semi-transparent highlighters (35% opacity), and precision erasers.
- **Student Notebook Grid**: Authentic graph paper grid with realistic margins and customizable colors (Charcoal Black, Sunny Yellow, Coral Pink, Sky Blue, Leaf Green, Purple Gem).
- **Draggable Sticky Notes**: Tilt-styled colorful post-it notes with live text editing for formulas, hints, and reminders.
- **Emoji Stamp Stickers**: Stamp collection (`🐣`, `⭐`, `💡`, `🚀`, `🧠`, `📐`, `🔥`, `🏆`) to annotate homework.
- **Export & Share**: Download canvas as high-resolution PNG or publish directly to the community Wall of Fame.
- **One-Click AI Solver**: Send drawings and problem statements directly to the AI study engine.

---

### 2. 🎬 Feature Video Tour & AI Voice Dubbing
- **Scene-by-Scene Animated Walkthrough**:
  - **Scene 1 (Intro 🐣)**: Welcome to DoodleSquad & platform overview.
  - **Scene 2 (Live Canvas 🖌️)**: Digital sketchpad, sticky notes, and drawing tools demonstration.
  - **Scene 3 (AI Superpowers ⚡)**: Step-by-step chalkboard proofs and memory rhymes showcase.
  - **Scene 4 (Study Squads 👥)**: Synchronized Pomodoro focus sessions and peer chat.
  - **Scene 5 (Wall of Fame 🌟)**: Community sketchnote gallery, star upvotes, and daily streaks.
- **AI Voice Dubbing Engine**:
  - Voice narration synchronized with real-time teleprompter subtitles.
  - Audio waveform visualizer indicator.
  - Voice selection (Kore, Puck, Zephyr, and natural Web Speech synthesis).
  - Play, pause, speed control (0.75x – 1.5x), chapter markers, and interactive "Try this feature" shortcuts.

---

### 3. ⚡ AI Homework Superpowers (Powered by Google Gemini)
- **📐 Step-by-Step Chalkboard Solver**: Breaks down complex math, physics, and chemistry equations into bite-sized chalkboard proofs with ASCII diagrams and verification checks.
- **🎨 Visual Concept Explainer**: Translates tough scientific and historical concepts into intuitive metaphors and sketchnotes.
- **🎵 Memory Rhyme & Mnemonic Forge**: Generates catchy rhythms and rhymes to anchor facts into long-term memory for exams.
- **⚡ Interactive Game Quiz**: 3 rapid-fire multiple-choice questions with instant feedback and XP awards.

---

### 4. 👥 Collaborative Study Squads
- **Subject Squads**: Pre-configured rooms for *Algebra Avengers ⚡*, *BioHatchlings 🧬*, *Python Pixels 💻*, and *Time Travelers ⏳*.
- **Synchronized Focus Timer**: 25-minute Pomodoro study sprint with play, pause, and reset controls.
- **Real-Time Group Chat**: Exchange formulas, study hints, and encouragement with peers.
- **Live Member Presence**: Active student indicators and current study task statuses.
- **Squad Creator**: Create custom squads with custom avatars, subjects, and study goals.

---

### 5. 🏆 Community Wall of Fame & Daily Challenges
- **Sketchnote Gallery**: Browse visual explanations submitted by students with subject filtering (Math, Science, Coding, History).
- **Star Upvoting**: Micro-animated star ratings with celebratory confetti bursts.
- **Clone to My Canvas**: Load any community sketchnote directly into your sandbox to edit or build upon it.
- **Daily Brain Warm-ups**: Bite-sized challenges to keep your streak alive and unlock rare sticker stamps.
- **Gamified Profile**: Track active streak days (🔥), earned XP (⭐), and achievement badges.

---

## 🛠️ Tech Stack & Architecture

- **Frontend**:
  - [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
  - [Tailwind CSS 4](https://tailwindcss.com/) (Neubrutalist design system, custom typography, notebook grids)
  - [Lucide React](https://lucide.dev/) (Clean icons)
  - [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) (Celebratory micro-interactions)
  - Web Speech API (Zero-latency client-side AI voice dubbing engine)
- **Backend**:
  - [Express 4](https://expressjs.com/) on Node.js (Mounted via `server.ts` with Vite middlewares in development)
  - [@google/genai SDK](https://www.npmjs.com/package/@google/genai) (`gemini-3.8-flash` & `gemini-3.8-flash-lite-tts`)
  - In-memory reactive state store for squads, canvases, wall of fame, and gamification.
- **Build & Dev Tooling**:
  - [Vite 8](https://vite.dev/) (Ultra-fast HMR and bundle compilation)
  - [TSX](https://github.com/privatenumber/tsx) (Direct TypeScript server execution)

---

## 📡 API Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Health check and server uptime |
| `GET` | `/api/user` | Fetch current student profile, streak, badges, and XP |
| `GET` | `/api/squads` | List all active study squads |
| `POST` | `/api/squads` | Create a new study squad |
| `GET` | `/api/squads/:id` | Get squad room details and messages |
| `POST` | `/api/squads/:id/messages` | Post a chat message or study hint in squad room |
| `POST` | `/api/squads/:id/join` | Join a study squad |
| `GET` | `/api/canvases` | List saved user sketchpads |
| `POST` | `/api/canvases` | Save canvas strokes, notes, and stickers |
| `GET` | `/api/wall-of-fame` | Retrieve community sketchnotes with subject filter and sorting |
| `POST` | `/api/wall-of-fame` | Publish a sketchnote to the Wall of Fame |
| `POST` | `/api/wall-of-fame/:id/star` | Star/upvote a community sketchnote |
| `GET` | `/api/challenges` | Get daily homework challenges |
| `POST` | `/api/challenges/:id/complete`| Mark challenge complete and claim XP reward |
| `POST` | `/api/ai/solve` | Solve problem using Gemini AI (Step-by-Step, Explainer, Mnemonic, Quiz) |
| `GET` | `/api/video/scenes` | Retrieve the 5 video tour scenes and scripts |
| `POST` | `/api/ai/tts` | Generate AI audio speech narration with automatic fallback |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- Gemini API Key (automatically configured in Google AI Studio or set via `.env`)

### Installation & Run

1. **Clone & Install Dependencies**:
   ```bash
   npm install