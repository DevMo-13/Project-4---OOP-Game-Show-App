# Project 4 - OOP Game Show App
 OOP Game Show App

This project uses JavaScript and OOP (Object-Oriented Programming) to create a browser-based, word guessing game: "Phrase Hunter." The game selects a random, hidden phrase, which a player then tries to guess.

---

Game Rules:
- The player’s goal is to guess all the letters in a hidden, random phrase. At the beginning, the player only sees the number of letters and words in the phrase, represented by blank boxes on the screen.
- The player clicks an onscreen keyboard (or uses their physical keyboard) to guess letters in the phrase.
- The letter is disabled and a player can't select that letter again.
- If the selected letter is in the phrase at least once, the letter and its position in the phrase is highlighted on screen. All instances of the letter are made visible (so if there are 3 A's, all of the A's in the phrase appear at once).
- If the selected letter is not in the phrase, one of the player's hearts in the scoreboard is changed from a "live" heart to a "lost" heart.
- The player keeps choosing letters until they reveal all the letters in the phrase, or they make five incorrect guesses.

---

CSS changes made for Exceeds Expectations:
- changed overlay background color when game is won
- changed overlay background color when game is lost
- changed background color of the phrase buttons when they are still hidden
- changed / set background color of the START button
- set the text of the START button to be uppercase
- changed text color of the PHRASE HUNTER header
- added a shadow to the PHRASE HUNTER header
- changed background color of the phrase buttons that match the chosen letter
- changed background color of the onscreen keyboard buttons that are correct
- changed background color of the onscreen keyboard buttons that are incorrect
- added a shadow to the 'PHRASE HUNTER' title on the start screen
- changed overlay background color when game on the start screen