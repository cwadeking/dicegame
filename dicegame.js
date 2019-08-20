alert("Welcome to Dice Bowling!")
console.log(prompt("What is your name?"))
document.write("Welcome to Dice Bowling.  Dice Bowling is a lot like regular bowling, except ZERO physical skill is required.  Just enter the 'roll' command and let us do the work for you.  After rolling 6 different dice (4, 6, 8, 10, 12, and 20-sided), on your first roll, you will need to select 3 (or more) dice that are equal to/divisible by 10.  If you can do that, you've just rolled a strike.  If you don't have 3 (or more) dice that are equal to/divisible by 10, then select as many dice as you want that are less than 10 for your initial roll.  The sum of those dice will be entered and you'll be ready for your second roll")

function rollDice(min,max){
	return (Math.floor(Math.random(min) * max) + 1);
console.log(rollDice(1,4))
console.log(rollDice(1,6))
console.log(rollDice(1,8))
console.log(rollDice(1,10))
console.log(rollDice(1,12))
console.log(rollDice(1,20))
}