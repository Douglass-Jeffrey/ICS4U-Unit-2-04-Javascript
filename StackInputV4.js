/* 
* This program pushes a user input to a program with a class containing an 
* arraylist. The most recent input of the arraylist is then pushed back from
* that class into this program and is outputted, mimicking how the stack works
* now it also prints the popped top integer that was on the stack and is 
* impervious to error now also has peek and clear methods
*
* @author  Douglass Jeffrey
* @version 4.0
* @since   2020-12-09
*/

// Importing the class MrCoxallStack from another file
const MrCoxallStack = require("./MrCoxallStackV4");

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});

// references MrCoxallStack file 
let clasStack = new MrCoxallStack();

// Try to catch invalid inputs
try {
  
  // Finds amount of numbers to input
  const inputNum = prompt("Enter the amount of integers you wish to push, "
                          + "non integer numbers will be rounded up: ");

  // calculates if inputs are valid
  if (isNaN(inputNum) == true || inputNum < 1) {
    
    //if they are not valid print that they arent
    console.log("Invalid Input. Must be an integer above 0.");
    
  //if they are valid execute the rest of the code
  } else {
    
    // for loop to find inputs
    for (let counter = 0; counter < inputNum; counter++) {
  
      // User input to place in pseudostack array
      const userInt = prompt("Enter an Integer to place on the stack: ");
      console.log();
      
      // places userinput on stack (only if the input is an integer)
      if (isNaN(userInt) == true) {
        throw("Invalid input");

      // if user enters a blank space catch it
      } else if (userInt == ("")){
        throw("Invalid input. Please do not input whitespaces.");

      // else, round up user inputted number and pass it into the stack
      } else {
        const roundInt = Math.ceil(userInt);
        clasStack.pushNumber(roundInt);
      }
    }
    
    // finds how many numbers should be popped
    const popNum = prompt("Enter how many integers you wish to pop: ");

    // checks if popNum is a valid integer
    if (isNaN(popNum) == true || popNum < 1) {
      console.log("Invalid pop number assuming you want nothing popped...");

    // if its valid, begin popping
    } else {
      for (let popCounter = 0; popCounter < popNum; popCounter++) {
        // Prints last integer that was pushed to the array that was popped
        console.log("Popped integer: ", clasStack.popper());
      }
    }
            
    // peeking num
    console.log();
    console.log("Peeked Num: " + clasStack.peek());

    // allows user to clear if they choose
    console.log();
    const clearInputLow = prompt("Would you like to clear the stack?"
                                 + "(Yes/No) ");
      
    // converts input to upper to prevent case based errors
    const clearInput = clearInputLow.toUpperCase();
        
    // checks if user wants to clear
    if (clearInput == ("YES")) {
      console.log();
      // if they want to clear call clear method
      console.log(clasStack.clearer());
    // if they dont want to clear acknowledge their response
    } else if (clearInput == ("NO")) {
      console.log();
      console.log("Answer acknowledged, continuing ...");
      // if they input something wrong, tell them
    } else {
      console.log();
      console.log("Invalid input, presuming you dont want to "
                         + "clear");
    }

    // Prints integer that was pushed to the array that acts as a stack
    console.log(clasStack.currentStack());
  }

// catches any errors
} catch (err) {
  console.error(err);
}