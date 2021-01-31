    alert("Welcome to Dice Bowling!");
    console.log(prompt("What is your name?"));
    document.write("Welcome to Dice Bowling.  Dice Bowling is a lot like regular bowling, except ZERO physical skill is required. \n Just click a few things and let us do the work for you.  After rolling 6 different dice (4, 6, 8, 10, 12, and 20-sided), \n on your first roll, you will need to select 2 dice that are equal to 10.  If you can do that, you've just \n rolled a strike.  If you don't have 2 dice that are equal to by 10, then select two dice that you want that\n are less than 10 for your initial roll.  The sum of those dice will be entered and you'll be ready for your \n second roll. On your second roll, you will have to chose one more die to complete the frame for a spare, or \n leave the frame open and your score entered!");

    var frameScoreArray = new Array();

    runGame();

    function runGame(){
        frameStandard();
        // frameStandard();
        // frameStandard();
        // frameStandard();
        // frameStandard();
        // frameStandard();
        // frameStandard();
        // frameStandard();
        // frameStandard();
        // tenthFrame();
        
    }

    function frameStandard(){
        var frameScore;
        var tempFrameScore;
        let tempPinValue = rollOne();
        if(tempPinValue == 10){
            strikeFrame();
            frameTwo();
        }else{
            tempFrameScore = tempPinValue;
        }

        tempPinValue = rollTwo();

        if(tempPinValue + tempFrameScore == 10){
            spareFrame();
        }

        
    }

    function rollSingleDie(sides){
        return Math.floor(Math.random() * sides) + 1
    }

   

    function rollDice(){
        let dieOne = rollSingleDie(4);
        let dieTwo = rollSingleDie(6);
        let dieThree = rollSingleDie(8);
        let dieFour = rollSingleDie(10);
        let dieFive = rollSingleDie(12);
        let dieSix = rollSingleDie(20);
        let diceCollection = [
            {
                diceNumber: "One",
                value: dieOne
            },
            {
                diceNumber: "Two", 
                value: dieTwo
            },
            {
                diceNumber: "Three",
                value: dieThree
            },
            {
                diceNumber: "Four",
                value: dieFour
            },
            {
                diceNumber: "Five",
                value: dieFive
            },
            {
                diceNumber: "Six",
                value: dieSix
            }];
        return diceCollection;                     
    }

    function displayDiceValues(diceArray){
        for(let i = 0; i < diceArray.length; i++){
            console.log(`Dice number: ${diceArray[i].diceNumber}'s value is ${diceArray[i].value}`);
        }
    }
    function rollOne(){
        rollDice();
        tempPinValue = checkValuesRollOne();
        return tempPinValue;
    }

    function rollTwo(tempPinValue){
        rollDice();
        checkValuesRollTwo();
        return tempPinValue;
    }


    function strikeFrame(){

    }

    function spareFrame(){

    }

    function splitFrame(tempPinValue){
        rollTwo();
        return tempPinValue;

    }


    function checkValuesRollOne(tempPinValue){
         //let tempPinValue;
         let firstSelection = 0;
         let secondSelection = 0;
         if(dieOne + dieTwo + dieThree + dieFour + dieFive + dieSix >= 50){
			console.log("Gutterball");
			tempPinValue == 0;
		}else if(dieOne + dieTwo == 2 || dieOne + dieThree == 2 || dieOne + dieFour == 2 || dieOne + dieFive == 2 || dieOne + dieSix == 2 || dieTwo + dieThree == 2 || dieTwo + dieFour == 2 || dieTwo + dieFive == 2 || dieTwo + dieSix == 2 || dieThree + dieFour == 2 || dieThree + dieFive == 2 || dieThree + dieSix == 2 || dieFour + dieFive == 2 || dieFour + dieSix == 2 || dieFive + dieSix == 2){
			console.log("Split");
            splitFrame();
            }
		    else{
                firstSelection = diceSelect();
                secondSelection = diceSelect();
                tempPinValue = firstSelection + secondSelection;
		    }
		    return tempPinValue;
    }

    function checkValuesRollTwo(tempPinValue){
        var tempPinValue;
         
            if((dieOne + dieTwo != 2 || dieOne + dieThree != 2 || dieOne + dieFour != 2 || dieOne + dieFive != 2 || dieOne + dieSix != 2 || dieTwo + dieThree != 2 || dieTwo + dieFour != 2 || dieTwo + dieFive != 2 || dieTwo + dieSix != 2 || dieThree + dieFour != 2 || dieThree + dieFive != 2 || dieThree + dieSix != 2 || dieFour + dieFive != 2 || dieFour + dieSix != 2 || dieFive + dieSix != 2)){
                console.log("Open frame!")
                tempPinValue == 8;    
                }
            else if(dieOne + dieTwo + dieThree + dieFour + dieFive + dieSix >= 50){
                console.log("Gutterball")
                tempPinValue += 0;
            }
            else{
                tempPinValue == diceSelect();
            }
            return tempPinValue;
    }

    function diceSelect(){
        var tempPinValue = 0;
        let selectedRolls = [dieOne, dieTwo, dieThree, dieFour, dieFive, dieSix];
        let userInput = prompt("Which dice do you choose? (one at a time)");
            if(userInput == 1){
                tempPinValue = selectedRolls[0];
                return tempPinValue;
            }else if(userInput == 2){
                tempPinValue = selectedRolls[1];
                return tempPinValue;
            }else if(userInput == 3){
                tempPinValue = selectedRolls[2];
                return tempPinValue;
            }else if(userInput == 4){
                tempPinValue = selectedRolls[3];
                return tempPinValue;
            }else if(userInput == 5){
                tempPinValue = selectedRolls[4];
                return tempPinValue;
            }else if(userInput == 6){
                tempPinValue = selectedRolls[5];
                return tempPinValue;
            }else{
                console.log(prompt("That is not an accurate selection."))
            }
    }    
    