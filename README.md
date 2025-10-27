# Gioco di Mario — Esercizio Moneta (Settimana 1)
# GameForBeginners 
In the making of this game you'll learn the basics of HTML CSS and JS


## 📌 Descrizione

Un micro‑platform 2D in **HTML5 Canvas + JavaScript** per prendere confidenza con: game loop, input da tastiera, gravità base e collisione **player↔moneta**. Quando la moneta viene raccolta, scompare e incrementa il punteggio.

> **Nota**: progetto didattico non affiliato a Nintendo. Usa asset originali o liberi.

---

## 🎯 Obiettivi (Settimana 1)

* Gestire **rendering** su Canvas.
* Implementare **movimento orizzontale** + **salto** con gravità semplice.
* Rilevare **collisione AABB** tra rettangoli (player e moneta).
* Mostrare **HUD** minimale con punteggio.

---

## 🧰 Stack

* **HTML5, CSS, JavaScript (ES Modules)**
* **Canvas API**

---

## ✅ Requisiti

* Browser moderno
* VS Code + Live Server


---

## ⚡ Avvio rapido

```bash
# Clona il repo
git clone <URL_DEL_REPO>
cd <NOME_REPO>

# Avvio 
# 1) Live Server da VS Code
```

---

## 🗂️ Struttura minima del progetto

```
├─ index.html
├─ styles.css
├─ script.js
├─ mario.png
└─ coin.png
```

---

## 🎮 Controlli

* **← / →** o **A / D**: muovi
* **↑**: salta

---

## ✅ Cosa deve funzionare (checklist)

* [ ] Il player appare e si muove orizzontalmente
* [ ] Gravità + salto (atterra su un pavimento semplice)
* [ ] Una **moneta** visibile nella scena
* [ ] **Collisione** player↔moneta (AABB)
* [ ] Alla collisione: la moneta **scompare** e il **punteggio** aumenta
* [ ] HUD: mostra punteggio corrente

---

## 🧠 Dettagli tecnici essenziali

**Collisione AABB (rettangoli)**

```js
function rectsOverlap(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

if (!coin.collected && rectsOverlap(player.bounds(), coin.bounds())) {
  coin.collected = true;
  score += 1;
}
```

---

## 🔧 Troubleshooting

* **Non vedo nulla** → verifica che stai aprendo via server (non `file://`).
* **Collisione non parte** → controlla che `bounds()` restituisca `{x,y,w,h}` coerenti e che `coin.collected` sia considerato nel render.
* **Il player cade all’infinito** → aggiungi un pavimento (y costante) e clamp della posizione.

---

## 📄 Licenza

MIT (modifica se necessario). Aggiungi le fonti degli asset se usi sprite/icone.

---

## 🗒️ Changelog

* **v0.1 — Moneta**: prima versione con raccolta singola moneta e HUD minimale.


