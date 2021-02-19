function displayGameRules(){
    document.write(`Welcome to Dice Bowling.  Dice Bowling is a lot like regular bowling, except ZERO physical skill is required.
    \n Just click a few things and let us do the work for you.  After rolling 6 different dice (4, 6, 8, 10, 12, and 20-sided),
    \n on your first roll, we'll check if there are two dice that equal 10.  If so, you've just 
    \n rolled a strike.  If you don't have 2 dice that equal 10, then select two dice that you want that
    \n are less than 10 for your initial roll.  The sum of those dice will be entered and you'll be ready for your 
    \n second roll. On your second roll, you will have to choose one more die to complete the frame for a spare, or 
    \n leave the frame open and your score entered!`);
}



//runGame();

function runGame(){
   // alert("Welcome to Dice Bowling!");
    //console.log(prompt("What is your name?"));
    //displayGameRules();
        let gameArray = [
            createStandardFrameObject(rollTwo(rollOne())),
            createStandardFrameObject(rollTwo(rollOne())),
            createStandardFrameObject(rollTwo(rollOne())),
            createStandardFrameObject(rollTwo(rollOne())),
            createStandardFrameObject(rollTwo(rollOne())),
            createStandardFrameObject(rollTwo(rollOne())),
            createStandardFrameObject(rollTwo(rollOne())),
            createStandardFrameObject(rollTwo(rollOne())),
            createStandardFrameObject(rollTwo(rollOne()))
        ]
        console.log(gameArray);
    }

    function createStandardFrameObject(bothShots){
        var frame = {
            ShotOne: bothShots[0],
            ShotTwo: bothShots[1]
        }
        return frame;
    }
    
    function createShotObject(shotType, shotValue){
        let shot = {
            ShotType: shotType,
            ShotValue: shotValue
        }
        return shot;
    }

    function createTenthFrameObject(shotOne,shotTwo,shotThree){
        var frame = {
            ShotOne: {shotOne},
            ShotTwo: {shotTwo},
            ShotThree: {shotThree}
        }
        return frame;
    }

    function rollOne(){
        let firstShot;
        let diceArray = rollDice();
        displayDiceValues(diceArray);
        firstShot = checkValuesRollOne(diceArray);
        console.clear();
        return firstShot;
    }
    
    function rollTwo(firstShot){
        let diceArray = rollDice();
        displayDiceValues(diceArray);
        secondShot = checkValuesRollTwo(diceArray, firstShot);
        console.clear();
        return [{firstShot}, {secondShot}];
    }

    

    function checkValuesRollOne(diceArray){
        if(splitFrameOrPickupYesOrNo(diceArray)){
            return createShotObject("split", 8);
        }else if(gutterBallCheck(diceArray)){
            return createShotObject("gutter ball", 0);
        }else if(strikeCheck(diceArray)){
            return createShotObject("strike", 10);
        }else{
            return diceSelect(diceArray);
        }

    }

    function checkValuesRollTwo(diceArray,firstShot){
        if(firstShot.ShotType === "split"){
            if(splitFrameOrPickupYesOrNo(diceArray)){
                return createShotObject("spare", 2);
            }else{
                return createShotObject("open", 1);
            }
        }else if(firstShot.ShotType === "strike"){
            return createShotObject("empty", 0);
        }else{
            return diceSelect(diceArray, firstShot.ShotValue);
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

        //need a function to create dice collection objects?
        let diceCollection = [
            {
                diceNumber: "1",
                value: dieOne
            },
            {
                diceNumber: "2", 
                value: dieTwo
            },
            {
                diceNumber: "3",
                value: dieThree
            },
            {
                diceNumber: "4",
                value: dieFour
            },
            {
                diceNumber: "5",
                value: dieFive
            },
            {
                diceNumber: "6",
                value: dieSix
            }];
        return diceCollection;                     
    }

    function displayDiceValues(diceArray){
        for(let i = 0; i < diceArray.length; i++){
            console.log(`Dice number: ${diceArray[i].diceNumber}'s value is ${diceArray[i].value}`);
        }
    }


   

    function splitFrameOrPickupYesOrNo(diceArray){
        let splitYesOrNo = diceArray.filter(el => {
            if(el.value === 1){
                return true;
            }
        });
        if(splitYesOrNo.length > 1){
            return true;
        }
        return false;
    }

    function gutterBallCheck(diceArray){
        let rollAmount = 0;
        for(let i = 0; i < diceArray.length; i++){
            rollAmount += diceArray[i].value;
        }

        if(rollAmount > 50){
            return true;
        }

        return false;
    }
    

    function checkArrayCombosForATenValue(arrayCombos){
        let combosEqualingTen = arrayCombos.filter(el => {
            if(el[0] + el[1] === 10){
                return true;
            }
            else{
                return false;
            }
        })

        if(combosEqualingTen.length > 0){
            return true;
        }
        return false;
    }

    function strikeCheck(diceArray){
        let arrayCombos = [];
        for(let i = 0; i < diceArray.length; i++){
            
            for(let j = diceArray.length - 1; j > i; j--){
                    arrayCombos.push([diceArray[i].value,diceArray[j].value]);
            }
        }

        return checkArrayCombosForATenValue(arrayCombos);
    }


    function canASpareBeMade(valueOfFirstRoll, allDiceValues){
        for(let i = 0; i < allDiceValues.length; i++){
            if(valueOfFirstRoll + allDiceValues[i].value <= 10){
                return true;
            }
        }
        return false;
    }

    function chooseTwoDistinctDice(){
        let tempPinValue = 0;
        let counter = 0;
        let firstChoice;
       
        while(tempPinValue > 10 || counter < 2){
            if(tempPinValue > 10){
                tempPinValue = 0;
            }
            //need to create validation for different types of prompts.
            let userInput = prompt("Which dice do you choose? (one at a time)");
            if(userInput === firstChoice){
                continue;
            }
            //this switch case needs to be another function
            switch(userInput){
                case "1":
                        tempPinValue += rolledDice[0].value;
                        counter++;
                        firstChoice = "1";
                        break;
                case "2":
                        tempPinValue += rolledDice[1].value;
                        counter++;
                        firstChoice = "2";
                        break;
                case "3":
                        tempPinValue += rolledDice[2].value;
                        counter++;
                        firstChoice += "3";
                        break;
                case "4":
                        tempPinValue += rolledDice[3].value;
                        counter++;
                        firstChoice = "4";
                        break;
                case "5":
                        tempPinValue += rolledDice[4].value;
                        counter++;
                        firstChoice = "5";
                        break;
                case "6":
                        tempPinValue += rolledDice[5].value;
                        counter++;
                        firstChoice = "6";
                        break;
                default:
                        console.log(prompt("That is not an accurate selection."))
            }

    }



    function diceSelectFirstRoll(rolledDice){
        //need to create separate functions for better flow
        //taking in the value of the first roll, I need to see if any of the values of the dice are less than what is allowed to make a spare
        //if not, I need to create an empty shot value
        //
        let tempPinValue = 0;
        
        let counter = 0;
        if(tempPinValue){
            counter = 1;
        }
        let firstChoice;
        //need to create constraint values for these magic numbers
        while(tempPinValue > 10 || counter < 2){
            if(tempPinValue > 10){
                tempPinValue = 0;
            }
            //need to create validation for different types of prompts.
            let userInput = prompt("Which dice do you choose? (one at a time)");
            if(userInput === firstChoice){
                continue;
            }
            //this switch case needs to be another function
            switch(userInput){
                case "1":
                        tempPinValue += rolledDice[0].value;
                        counter++;
                        firstChoice = "1";
                        break;
                case "2":
                        tempPinValue += rolledDice[1].value;
                        counter++;
                        firstChoice = "2";
                        break;
                case "3":
                        tempPinValue += rolledDice[2].value;
                        counter++;
                        firstChoice += "3";
                        break;
                case "4":
                        tempPinValue += rolledDice[3].value;
                        counter++;
                        firstChoice = "4";
                        break;
                case "5":
                        tempPinValue += rolledDice[4].value;
                        counter++;
                        firstChoice = "5";
                        break;
                case "6":
                        tempPinValue += rolledDice[5].value;
                        counter++;
                        firstChoice = "6";
                        break;
                default:
                        console.log(prompt("That is not an accurate selection."))
            }
        }
        return createShotObject("basic", tempPinValue);
    }    
    

    function diceSelectSecondRoll(){
        if(valueOfFirstRoll){
            tempPinValue = valueOfFirstRoll;
            if(!canASpareBeMade(tempPinValue, rolledDice)){
                return createShotObject("open", 0);
            }
        }
    }