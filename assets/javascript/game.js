//create array
var wordBank = ["Drake", "Baby Shark", "BTS", "Frank Sinatra", "Cardi B"]

var randNum = Math.floor(Math.random() * wordBank.length);



var docSlots = document.getElementsByClassName('slots');
var docrightGuess = document.getElementsByClassName('rightGuess');
var docwrongGuess = document.getElementsByClassName('wrongGuess');

var chosenWord = wordBank[randNum];
var arrayWrongGuess=[]
var arrayRightGuess=[]
var arrayWord = chosenWord.split("");
var arraySlots = []
console.log(arrayWord)


//display slots  based on length
    for (var i = 0; i < arrayWord.length; i++) {

        arraySlots.push("_");

    }

    $("#slots").html(arraySlots.toString());
   

//how many guesses users get-max5-and convert key code into a character
document.keyup = function(event) {
    var guess = event.key;

    
   if (arrayWord.indexOf(guess) > -1) {

    arrayRightGuess.push(guess);
    $("#rightGuess").html(arrayRightGuess.toString());
   };
};
    





