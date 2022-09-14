//automatisch groß (uppercase sensitivity)
//wiederholung von buchstaben message
//quit on command
//Win message 
//Main menu 
//difficulty




const constants = require('./constants');
// In node.js: install a prompt library by running: `npm install prompt-sync` in the current folder
const prompt = require("prompt-sync")();

// Here you see an example how to get your
// constants from constants.js
/*for(let figure of constants.HANGMAN_PICS)
{
   console.log(figure);
}
*/
let Answer = [];
let count = 0;


var Words = constants.WORDS_TO_GUESS[Math.floor(Math.random()*constants.WORDS_TO_GUESS.length)];


/*console.log(Words.length);                 //Wortlänge von random Word
*/



for(let i=0; i < Words.length; i++) {
   Answer[i]="_";
}

console.log(Answer.join(" "));

for(;Answer!==Words;) {

input = prompt (`Finde das Wort.`);

if(Words.includes(input)) {
   for(let i=0; i < Words.length; i++) {
   if (Words[i]===input) {
   console.clear();
   Answer[i]=Words[i];
   console.log("Good Job, fast geschafft!");
   console.log(constants.HANGMAN_PICS[count]);
} 
}
}else if(!Words.includes(input)){
   console.clear();
   console.log("Falsche Eingabe - keep trying!");
   count++;
   console.log(constants.HANGMAN_PICS[count]);

}
console.log(Answer.join(" "));

}






// how to use the prompt - e.g.:
// const name = prompt('What is your name?');