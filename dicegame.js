alert("Welcome to Dice Bowling!");
console.log(prompt("What is your name?"));
document.write(`Welcome to Dice Bowling.  Dice Bowling is a lot like regular bowling, except ZERO physical skill is required.
                 \n Just click a few things and let us do the work for you.  After rolling 6 different dice (4, 6, 8, 10, 12, and 20-sided),
                  \n on your first roll, we'll check if there are two dice that equal 10.  If so, you've just 
                  \n rolled a strike.  If you don't have 2 dice that equal 10, then select two dice that you want that
                  \n are less than 10 for your initial roll.  The sum of those dice will be entered and you'll be ready for your 
                  \n second roll. On your second roll, you will have to choose one more die to complete the frame for a spare, or 
                  \n leave the frame open and your score entered!`);



runGame();

    function createStandardFrameObject(shotOne,shotTwo){
        var frame = {
            valueOfShotOne: {shotOne},
            valueOfShotTwo: {shotTwo}
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
        return firstShot;
    }

    function rollTwo(firstShot){
        rollDice();
        checkValuesRollTwo();
        return tempPinValue;
    }

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
        let rollAmount;
        for(let i = 0; i < diceArray.length; i++){
            rollAmount += diceArray[i].value;
        }

        if(rollAmount > 50){
            return true;
        }

        return false;
    }
    
    function strikeCheck(diceArray){
        
    }

    function diceSelect(rolledDice){
        let tempPinValue;
        let counter = 0;
        while(tempPinValue > 10 || counter < 2){
            if(tempPinValue > 10){
                tempPinValue = 0;
            }
            let userInput = prompt("Which dice do you choose? (one at a time)");
            let firstChoice;
            if(userInput === firstChoice){
                continue;
            }
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
            return createShotObject("basic", tempPinValue);

        }
    }    
    