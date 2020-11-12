var readlineSync = require('readline-sync');

var firstNumber = readlineSync.questionInt("Please enter your first number: ")
var secondNumber = readlineSync.questionInt("Please enter your second number: ")
var userOperation = readlineSync.questionInt("Please enter the operation to perform: add, sub, mul, div: ");

function addTwoNumber(num1, num2){
    var addedNumbers = num1 + num2;
    return "Adding Number1: " + num1 + "with Number2: " + num2 + "results in: " + addedNumbers;
}
if (userOperation == "add"){
    console.log(addTwoNumber(firstNumber, secondNumber));
}
else if (userOperation == "sub"){

}
else if (userOperation == "mul"){

}
else if (userOperation == "div"){

}
else 
console.log("Unexpected Operation. Please enter the operation again!");