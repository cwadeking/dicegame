// alert("Welcome to Dice Bowling!")
// console.log(prompt("What is your name?"))
// document.write("Welcome to Dice Bowling.  Dice Bowling is a lot like regular bowling, except ZERO physical skill is required.  Just enter the 'roll' command and let us do the work for you.  After rolling 6 different dice (4, 6, 8, 10, 12, and 20-sided), on your first roll, you will need to select 3 (or more) dice that are equal to/divisible by 10.  If you can do that, you've just rolled a strike.  If you don't have 3 (or more) dice that are equal to/divisible by 10, then select as many dice as you want that are less than 10 for your initial roll.  The sum of those dice will be entered and you'll be ready for your second roll")

function rollDice(min,max){
	//need to create a button to initiate the function//
	return (Math.floor(Math.random(min) * max) + 1);
}
let dieOne = rollDice(1,4)
console.log(dieOne)
let dieTwo = rollDice(1,6)
console.log(dieTwo)
let dieThree = rollDice(1,8)
console.log(dieThree)
let dieFour = rollDice(1,10)
console.log(dieFour)
let dieFive = rollDice(1,12)
console.log(dieFive)
let dieSix = rollDice(1,20)
console.log(dieSix)

function defaultScore(){
	//There needs to be a function to set up default scores for certain rolls. If values equal 1 for two or more of the inputs = 8 split.  If 1 is not input for two dice on second roll, enter any 1 input as second score.  If neither, enter 0.  If total sum equals >=50, default 0.
}

function diceSelect(){
///create a function that allows player to select which dice to keep for calc.  Select >= 2 dice.//
	//for()
}

function calcRoll(){
//create a function to calculate input (dice selection) and return sums to the scoreboard//
}

function scoreRolls(){
//create function to take in calcRoll inputs into two rolls per frame (unless strike).  Strike automatically moves frame over for next roll//
}
