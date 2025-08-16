# 🎲 Pig Dice Game

A simple browser-based implementation of the classic Pig Dice Game. Two players take turns rolling a dice, holding scores, and racing to reach 100 points first!

---

## 📂 Project Structure
```graphql
├── roll-dice.html       # Main HTML file (UI layout)
├── scripts/
│   └── roll-dice.js     # Game logic in JavaScript
├── styles/
│   └── style.css        # Game styling
├── dice-1.png ... dice-6.png   # Dice face images
└── pig-game-flowchart.png        # Game flowchart (rules visualization)
```


---

## 🎮 How to Play  

1. Open **roll-dice.html** in a web browser.  
2. Two players take turns:  
   - **Roll Dice** 🎲: Adds the roll to your *current round score*.  
   - **Hold** 🏆: Saves the round score to your *global score* and passes the turn.  
   - ⚠️ If you roll a **1**, your round score resets to **0** and your turn ends immediately.  
3. First player to reach **100 points** wins!  

---

## 🚀 Features  

- 🎲 Random dice rolls with images (`dice-1.png` to `dice-6.png`)  
- 🔄 Switching turns automatically  
- 🏆 Victory detection at **100 points**  
- 🔄 New Game button to reset instantly  

---

## 🛠️ Technologies  

- **HTML5** for structure  
- **CSS3** for styling  
- **JavaScript (Vanilla JS)** for game logic  

---

## 📖 Rules Reference (Flowchart)  

The included `flowchart.png` visually explains the game flow:  
- Player rolls → Adds score → Can keep rolling or hold  
- If a `1` is rolled → Round score lost → Next player's turn  
- First to 100 wins 🎉  

---

## 📌 Setup  

1. Clone or download this repo.  
2. Make sure all files (`roll-dice.html`, `scripts/`, `styles/`, `dice-*.png`) are in the same structure.  
3. Open `roll-dice.html` in your favorite browser.  
4. Start playing!  
