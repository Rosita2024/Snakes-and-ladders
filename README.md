# Snakes and Ladders

## Overview

This project is a digital version of the classic board game Snakes and Ladders. The game allowing players to enjoy the game on their digital devices. The main features include dice rolling, player movement, encountering snakes and ladders, and a visually appealing game board.

## Table of Contents

- [Game Features](#game-features)
- [Setup](#setup)
- [Usage](#usage)
- [Code Structure](#code-structure)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)
- [Favorite Function](#favorite-function)
- [Challenges and Solutions](#challenges-and-solutions)
- [Key Learnings](#key-learnings)
- [Future Enhancements](#future-enhancements)

## Game Features

- **Game Setup:** Displays a standard Snakes and Ladders board with 100 numbered squares.
- **Dice Rolling:** Players can roll by clicking a button. The dice shows a random number between 1 and 6.
- **Player Movement:** Players move their pieces according to the dice roll. Interaction with snakes and ladders moves the pieces down or up the board.
- **Winning the Game:** The game ends when a player lands exactly on the 100th square, displaying a winning message.
- **Multiplayer Functionality:** Supports multiple players taking turns. The current player's turn is highlighted.
- **User Interface:** The game board is clearly visible with distinct player pieces. There are buttons to roll the dice and reset the game.
- **Sound Effects:** Includes sound effects for dice rolling and interactions with snakes and ladders.

## Setup

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Open the `index.html` file in your web browser.

## Usage

1. Open the game in your web browser.
2. Click the "Roll Dice" button for each player to roll the dice.
3. Players take turns rolling the dice and moving their pieces on the board.
4. If a player lands on a ladder, their piece moves up. If they land on a snake, their piece moves down.
5. The first player to reach the 100th square wins the game.
6. Click the "New Game" button to reset the game and start again.

## Code Structure

### HTML

The `index.html` file contains the structure of the game, including the game board, player dice, buttons, and instructions.

### CSS

The `style.css` file handles the styling of the game, including the board layout, player pieces, and overall design.

### JavaScript

The `app.js` file contains the game logic, including dice rolling, player movement, and interactions with snakes and ladders.

Key JavaScript functions:

- `rollDice()`: Generates a random number between 1 and 6.
- `player1Turn()`: Handles the logic for Player 1's turn.
- `player2Turn()`: Handles the logic for Player 2's turn.
- `renderBoard()`: Dynamically generates the game board.
- `init()`: Initializes the game and sets up event listeners.
- `reset()`: Resets the game to its initial state.

### Favorite Function

One of my favorite functions in the code is `rollDice()`. This function adds an element of randomness and excitement to the game by simulating a dice roll:

```javascript
function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}
```
