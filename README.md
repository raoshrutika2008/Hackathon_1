# KhataVoice

KhataVoice is an ambient zero-typing POS, inventory, and udhaar management concept built for Indian kirana stores, pharmacies, and tea counters. The prototype here is a single-page dashboard that demonstrates the core workflow: turning a spoken Hindi/Hinglish sentence into a live bill, customer ledger update, and stock deduction in real time.

## What this demo includes

- High-contrast dark command-center dashboard
- Live speech transcript panel with microphone trigger
- Bill and GST breakdown for loose goods and packaged items
- Customer udhaar ledger cards with WhatsApp-style actions
- Inventory tracker with reorder alerts for critical stock
- Demo preset buttons for quick product walkthroughs
- Structured JSON output preview matching the KhataVoice system prompt format

## Run locally

Open [index.html](index.html) directly in a browser, or serve the workspace with any static server:

```bash
cd "c:\Users\ASUS\OneDrive\Documents\GitHub\xyz"
python -m http.server 8000
```

Then visit http://localhost:8000 in your browser.

## Files

- [index.html](index.html) — dashboard structure
- [styles.css](styles.css) — visual styling and animations
- [script.js](script.js) — mock voice parsing, inventory updates, and dashboard state

## Product concept

The app is designed around the idea that small shops cannot afford to type while serving customers. Instead, spoken commands are converted into immediate financial and inventory actions, helping the store owner work faster while keeping records accurate.

This prototype is intentionally front-end only, focused on demonstrating the interface and core user flow rather than a full backend or live AI integration.
