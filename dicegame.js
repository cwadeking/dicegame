// function displayGameRules(){
//     document.write(`Welcome to Dice Bowling.  Dice Bowling is a lot like regular bowling, except ZERO physical skill is required.
//     \n Just click a few things and let us do the work for you.  After rolling 6 different dice (4, 6, 8, 10, 12, and 20-sided),
//     \n on your first roll, we'll check if there are two dice that equal 10.  If so, you've just 
//     \n rolled a strike.  If you don't have 2 dice that equal 10, then select two dice that you want that
//     \n are less than 10 for your initial roll.  The sum of those dice will be entered and you'll be ready for your 
//     \n second roll. On your second roll, you will have to choose one more die to complete the frame for a spare, or 
//     \n leave the frame open and your score entered!`);
// }





    function runGame(){
    //alert("Welcome to Dice Bowling!");
    //console.log(prompt("What is your name?"));
    //displayGameRules();
    let shotBasic = createShotObject("basic", 7);
    let shotSpare = createShotObject("spare", 3);
    let shotOpen = createShotObject("open", 2);
    let shotStrike = createShotObject("strike", 10);
    let shotEmpty = createShotObject("empty", 0);
    let tenthFrame = [shotStrike, shotStrike, shotStrike];
        // let gameArray = [
        //     createStandardFrameObject(shotOne = rollOne(),rollTwo(shotOne)),
        //     createStandardFrameObject(shotOne = rollOne(),rollTwo(shotOne)),
        //     createStandardFrameObject(shotOne = rollOne(),rollTwo(shotOne)),
        //     createStandardFrameObject(shotOne = rollOne(),rollTwo(shotOne)),
        //     createStandardFrameObject(shotOne = rollOne(),rollTwo(shotOne)),
        //     createStandardFrameObject(shotOne = rollOne(),rollTwo(shotOne)),
        //     createStandardFrameObject(shotOne = rollOne(),rollTwo(shotOne)),
        //     createStandardFrameObject(shotOne = rollOne(),rollTwo(shotOne)),
        //     createStandardFrameObject(shotOne = rollOne(),rollTwo(shotOne)),
        //     createTenthFrameObject(playTheTenthFrame())
        // ]
        let gameArray = [
            createStandardFrameObject(shotBasic, shotOpen),
            createStandardFrameObject(shotBasic, shotSpare),
            createStandardFrameObject(shotStrike, shotEmpty),
            createStandardFrameObject(shotBasic, shotSpare),
            createStandardFrameObject(shotBasic, shotOpen),
            createStandardFrameObject(shotStrike, shotEmpty),
            createStandardFrameObject(shotBasic, shotOpen),
            createStandardFrameObject(shotBasic, shotSpare),
            createStandardFrameObject(shotStrike, shotEmpty),
            createTenthFrameObject(tenthFrame)
        ]


        let gameScore = calculateScore(gameArray);
        console.log(gameArray);
        
    }

    function calculateScore(gameArray){
        for(let i = 0; i < gameArray.length; i++){
            if(gameArray[i].ShotOne.ShotType === "strike"){
                console.log("found a shot strike");
            }
        }
    }
    function createStandardFrameObject(shotOne,shotTwo){
        var frame = {
            ShotOne: shotOne,
            ShotTwo: shotTwo
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

    function createTenthFrameObject(threeShots){
        var frame = {
            ShotOne: threeShots[0],
            ShotTwo: threeShots[1],
            ShotThree: threeShots[2]
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
        return secondShot;
    }

    

    function checkValuesRollOne(diceArray){
        if(splitFrameOrPickupYesOrNo(diceArray)){
            return createShotObject("split", 8);
        }else if(gutterBallCheck(diceArray)){
            return createShotObject("gutter ball", 0);
        }else if(strikeCheck(diceArray)){
            return createShotObject("strike", 10);
        }else{
            return diceSelectFirstRoll(diceArray);
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
            return diceSelectSecondRoll(diceArray, firstShot.ShotValue);
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
        console.log("Splitframe check");
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
            console.log("Gutterball");
            return true;
        }

        return false;
    }
    

    function checkArrayCombosForATenValue(arrayCombos){
        let combosEqualingTen = arrayCombos.filter(el => {
            if(el[0] + el[1] === 10){
                console.log("Strike!");
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

    function chooseTwoDistinctDice(rolledDice){
        let tempPinValue = 0;
        let counter = 0;
        let firstChoice;
       
        while((tempPinValue > 10)||(tempPinValue < 10 && counter < 2)){
            if(tempPinValue > 10){
                tempPinValue = 0;
                counter = 0;
                firstChoice = null;
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
                        continue;
            }
        }
        return tempPinValue;
    }

    function chooseOneDie(rolledDice, currentPinValue){
        let badInput;
        let selectedPinValue;
        let userInput = prompt(`Try to pick up the spare.  You need ${10 - currentPinValue} to close out the frame!`);
        while(!badInput){
            switch(userInput){
                case "1":
                    selectedPinValue = rolledDice[0].value;
                    break;
                case "2":
                    selectedPinValue = rolledDice[0].value;
                    break;
                case "3":
                    selectedPinValue = rolledDice[0].value;
                    break;
                case "4":
                    selectedPinValue = rolledDice[0].value;
                    break;
                case "5":
                    selectedPinValue = rolledDice[0].value;
                    break;
                case "6":
                    selectedPinValue = rolledDice[0].value;
                    break;
                default:
                        console.log(prompt("That is not an accurate selection."))
                        continue;
            }

            if(selectedPinValue + currentPinValue <= 10){
                badInput = true;
            }
        }
        return selectedPinValue;
    }

    function diceSelectFirstRoll(rolledDice){
        let firstRollValue = chooseTwoDistinctDice(rolledDice);
        return createShotObject("basic", firstRollValue);
    }    
    

    function diceSelectSecondRoll(rolledDice, valueOfFirstRoll){

        if(!canASpareBeMade(valueOfFirstRoll, rolledDice)){
            return createShotObject("open", 0);
        }
        let tempPinValue = chooseOneDie(rolledDice, valueOfFirstRoll);
        if(tempPinValue + valueOfFirstRoll == 10){
            return createShotObject("spare", tempPinValue);
        }
        return createShotObject("open", tempPinValue);

    }

    function playTheTenthFrame(){
        //if you roll a spare in the first two shots, you get a third shot.  If you roll a strike in the first roll, you get two more shots.
        let firstShot = rollOne();
        let secondShot;
        let thirdShot;
        switch(firstShot.ShotType){
            case "strike":
                secondShot = rollOne();
                break;
            case "basic":
            case "split":
            case "gutterball":
                secondShot = rollTwo(firstShot);
                break;
        }
        switch(secondShot.ShotType){
            case "strike":
                thirdShot = rollOne();
                break;
            case "basic":
            case "split":
            case "gutterball":
                thirdShot = rollTwo(firstShot);
                break;
            case "open":
                thirdShot = createShotObject("open", 0);
        }

        return [firstShot, secondShot, thirdShot];//needs to return 3 shot objects
    }