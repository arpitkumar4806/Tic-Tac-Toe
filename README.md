# Tic-Tac-Toe Game

A simple, interactive Tic-Tac-Toe game built with HTML, CSS, and JavaScript. Play against a computer opponent with basic AI that tries to win or block your moves.

## Features

-   Classic 3x3 Tic-Tac-Toe board
-   Play as "X" against the computer ("O")
-   Computer AI tries to win, block, or play strategically
-   Game status messages (your turn, computer's turn, win, lose, draw)
-   Restart button to play again
-   Responsive and modern UI

## How to Play

1. Open `index.html` in your browser.
2. Click any empty box to make your move (as "X").
3. The computer will respond as "O".
4. The first to get three in a row (horizontally, vertically, or diagonally) wins.
5. If all boxes are filled and no one wins, it's a draw.
6. Click the **Restart** button to play again.

## Project Structure

-   `index.html` – Main HTML file, sets up the game layout and links assets
-   `assets/style.css` – Styles for layout, board, buttons, and responsiveness
-   `assets/script.js` – Game logic, player/computer turns, win/draw detection

## Game Logic Overview

-   The board is a 3x3 grid of buttons.
-   Player always starts first as "X".
-   After each move, the script checks for a win or draw.
-   The computer AI:
    -   Tries to win if possible
    -   Blocks the player from winning
    -   Takes the center if available
    -   Otherwise, picks a random corner or any available box
-   Game messages update after each move.
-   The board is disabled after a win or draw until restarted.

## License

This project is for educational and personal use.
