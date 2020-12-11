/* 
* This class creates an arraylist that will receive input from class
* Now also pushes arraylist back and pops number off of stack
*
* @author  Douglass Jeffrey
* @version 4.0
* @since   2020-12-09
*/

class MrCoxallStackV4 {
  constructor() {
    this.stackAsArray = [];
  }

  // This method adds user input to stack
  pushNumber(userInt) {
    this.stackAsArray.push(userInt);
  }

  // This method pops the item on top of the stack and returns it
  popper() {
    if (this.stackAsArray.length <= 0) {
      throw "Invalid input more numbers popped than in stack";
    }
    let poppedNum = this.stackAsArray[this.stackAsArray.length - 1];
    this.stackAsArray.length = this.stackAsArray.length - 1;
    return poppedNum;
  }

  /**
   * peek method to observe top number on stack without removing it.
   */
  peek() {
    if (this.stackAsArray.length <= 0) {
      throw "Invalid input no numbers to peek";
    } else {
      let peekNumber = this.stackAsArray[this.stackAsArray.length - 1];
      return peekNumber;
    }
  }

  /**
   * Clears the stack of all values when called.
   */
  clearer() {
    this.stackAsArray.length = 0;
    const arrayClearCommand = "Array cleared Successfully! ";
    return arrayClearCommand;
  }



  // This getter tells the user the most recent iteration of the array
  currentStack() {
    let arrayVal = "Current ArrayList: ";
    for (let counter = 0; counter <= this.stackAsArray.length - 1;
         counter++) {
      arrayVal = arrayVal + this.stackAsArray[counter] + ", ";
    }
    return arrayVal;
  }
}

// Exporting the class
module.exports = MrCoxallStackV4;