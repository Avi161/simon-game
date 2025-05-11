# Simon Game

This is a simple implementation of the Simon Game, a classic memory game where players must repeat a sequence of colors and sounds.

## Project Structure

- `index.html`: The main HTML document for the Simon Game, containing the game interface and links to the CSS and JavaScript files.
- `styles.css`: Contains styles for the Simon Game, defining the appearance of buttons, text, and overall layout.
- `game.js`: Implements the game logic, including functions for handling user interactions, generating game sequences, and managing game state.
- `sounds/`: Directory containing audio files for the game:
  - `blue.mp3`: Sound for the blue button.
  - `green.mp3`: Sound for the green button.
  - `red.mp3`: Sound for the red button.
  - `wrong.mp3`: Sound for an incorrect answer.
  - `yellow.mp3`: Sound for the yellow button.
- `.gitignore`: Specifies files and directories to be ignored by Git.

## How to Play

1. Press any key to start the game.
2. The game will display a sequence of colors.
3. Repeat the sequence by clicking the corresponding buttons.
4. If you make a mistake, the game will play a "wrong" sound and display "Press Any Key to Start".

## Setup Instructions

To set up the project locally:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd simon-game
   ```
3. Open `index.html` in your web browser to play the game.

## Uploading to GitHub

To upload the project to GitHub, follow these steps:

1. Create a new repository on GitHub.
2. Initialize a local Git repository in the project folder using:
   ```
   git init
   ```
3. Add the files to the repository:
   ```
   git add .
   ```
4. Commit the changes:
   ```
   git commit -m "Initial commit"
   ```
5. Link the local repository to the GitHub repository:
   ```
   git remote add origin <repository-url>
   ```
6. Push the changes to GitHub:
   ```
   git push -u origin main
   ```

## Setting Up a Live Demo

To set up a live demo using GitHub Pages:

1. Go to the repository settings on GitHub.
2. Scroll down to the "GitHub Pages" section.
3. Select the main branch as the source and save.
4. Your live demo will be available at `https://<username>.github.io/<repository-name>/`.