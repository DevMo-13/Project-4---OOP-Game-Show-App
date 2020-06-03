/******************************************
Treehouse Techdegree:
FSJS project 4 - OOP Game App
app.js
--aiming for exceeds expectations--
******************************************/

 let game;
 const startGameButton = document.querySelector('#btn__reset');
 const keyboardDiv = document.querySelector('#qwerty');
 const overlayDiv = document.querySelector('#overlay');


 // Adds a click event listener to the 'Start Game' button, which creates a new instance of the game.
 startGameButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
 });

 // Adds an event listener to the 'Start Game' button, 
 // which allows the user to press 'Enter' on the keyboard to create a new instance of the game.
 document.addEventListener("keyup", (e) => {
   if (overlayDiv.style.display !== 'none') {
     if (e.keyCode === 13) {
       game = new Game();
       game.startGame();
     };
   };
 });

 // Adds click event listeners to each of the onscreen keyboard buttons.
 keyboardDiv.addEventListener('click', (e) => {
   if(e.target.className === 'key') {
      game.handleInteraction(e.target);
   };
 });


 // Adds event listener for the keyboard, which allows player to use physical computer keyboard to enter guesses.
 document.addEventListener('keyup', (e) => {
   const keysArray = document.querySelectorAll('.key');
   if (overlayDiv.style.display === 'none')
      keysArray.forEach(key => {
         if(key.textContent === e.key) {
            game.handleInteraction(key);
         };
      });
 });

