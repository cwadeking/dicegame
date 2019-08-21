// alert("Welcome to Dice Bowling!")
// console.log(prompt("What is your name?"))
// document.write("Welcome to Dice Bowling.  Dice Bowling is a lot like regular bowling, except ZERO physical skill is required.  
//Just click a few things and let us do the work for you.  After rolling 6 different dice (4, 6, 8, 10, 12, and 20-sided), 
//on your first roll, you will need to select 2 dice that are equal to by 10.  If you can do that, you've just 
//rolled a strike.  If you don't have 2 dice that are equal to by 10, then select two dice that you want that
// are less than 10 for your initial roll.  The sum of those dice will be entered and you'll be ready for your second roll")

function rollDice(min,max){
	return (Math.floor(Math.random(min) * max) + 1);
	//need to create a button to initiate the function//
}

let dieOne = rollDice(1,4)
console.log("Die 1 is=   " + dieOne)
let dieTwo = rollDice(1,6)
console.log("Die 2 is=   " + dieTwo)
let dieThree = rollDice(1,8)
console.log("Die 3 is=   " + dieThree)
let dieFour = rollDice(1,10)
console.log("Die 4 is=   " + dieFour)
let dieFive = rollDice(1,12)
console.log("Die 5 is=   " + dieFive)
let dieSix = rollDice(1,20)
console.log("Die 6 is=   " + dieSix)


function defaultScore(){
	let knockedPins = 0;
	if(dieOne + dieTwo + dieThree + dieFour + dieFive + dieSix >= 50){
		console.log("Gutterball")
		knockedPins = 0;
		rollDice()
		console.log()
	//figure out how to enter in a zero for first roll in that frame//
	}
	else if(dieOne + dieTwo == 2 || dieOne + dieThree == 2 || dieOne + dieFour == 2 || dieOne + dieFive == 2 || dieOne + dieSix == 2 || dieTwo + dieThree == 2 || dieTwo + dieFour == 2 || dieTwo + dieFive == 2 || dieTwo + dieSix == 2 || dieThree + dieFour == 2 || dieThree + dieFive == 2 || dieThree + dieSix == 2 || dieFour + dieFive == 2 || dieFour + dieSix == 2 || dieFive + dieSix == 2){
		console.log("Split")
		knockedPins = 8;
		rollDice()
		console.log()
	//figure out how to put an 8 down for that frame//
		//When setting up the second roll, should be able to cut and paste this//
	}
	else{
		knockedPins = diceSelect() + diceSelect()
	}
	return knockedPins;
}


function diceSelect(){
	let selectedRolls = [dieOne, dieTwo, dieThree, dieFour, dieFive, dieSix];
	let userInput = prompt("Which dice do you choose? (one at a time)");
	if(userInput == 1){
	console.log(selectedRolls[0]);
	}
	else if(userInput == 2){
	console.log(selectedRolls[1]);
	}
	else if(userInput == 3){
	console.log(selectedRolls[2]);
	}
	else if(userInput == 4){
	console.log(selectedRolls[3]);
	}
	else if(userInput == 5){
	console.log(selectedRolls[4]);
	}
	else if(userInput == 6){
	console.log(selectedRolls[5]);
	}
	else{
	console.log(prompt("That is not an accurate selection."))
	}
}

function calcRoll1(){
	if (diceSelect() + diceSelect() < 10){
		return = rollOneScore;
		console.log()
	}
	else if (diceSelect() + diceSelect() =10){
		return = strikeFrame;
		console.log()
	}
	else {
		prompt("You're trying to cheat!")
	}
}

// function scoreRolls(){
// //create function to take in calcRoll inputs into two rolls per frame (unless strike).  Strike automatically moves frame over for next roll//
// }