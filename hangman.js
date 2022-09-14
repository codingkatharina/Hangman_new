console.clear();
const prompt = require("prompt-sync")();
const constants = require('./constants');

var theWord = constants.WORDS_TO_GUESS[Math.floor(Math.random()*constants.WORDS_TO_GUESS.length)];
var lettersLeft = theWord.length;
var punkteStand=0;

var answerArray = [];
for (let i=0; i < theWord.length; i++){
    answerArray[i] = "_";
}
console.log(constants.HANGMAN_PICS[punkteStand]);
console.log(answerArray.join("  "));

do {
  chosenLetter = prompt(`Wählen Sie einen Buchstaben? `);
  if (chosenLetter === null) {
    prompt(`Ungültige Eingabe!`);
  } else if (chosenLetter.length != 1) {
    prompt(`Ungültige Eingabe!`);
  } else if (theWord.includes(chosenLetter)=== true || theWord.includes(chosenLetter.toUpperCase())===true){
    for (var j = 0; j < theWord.length; j++) {
      if (theWord[j]===chosenLetter||theWord[j]===chosenLetter.toUpperCase()){
        answerArray[j] = theWord[j];
        showGame(punkteStand);
        lettersLeft = lettersLeft-1;
        };
      };
    }
   else {
        punkteStand++;
        showGame(punkteStand);
        };
  if (lettersLeft==0){break;};
  } while (punkteStand < 7);

showGame(punkteStand);
(lettersLeft <= 1) ? console.log("Well Done! The answer was " + theWord) : console.log("Verloren");       

function showGame(punkteStand) {
  console.clear();
  console.log(constants.HANGMAN_PICS[punkteStand]);
  console.log(answerArray.join("  "));
}
