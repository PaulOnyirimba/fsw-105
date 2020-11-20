var readlineSync = require('readline-sync');

var firstNumber = readlineSync.questionInt("Please enter your first number: ")
var secondNumber = readlineSync.questionInt("Please enter your second number: ")
var userOperation = readlineSync.question("Please enter the operation to perform: add, sub, mul, div: ");

function addTwoNumber(num1, num2){
    var addedNumbers = num1 + num2;
    return "Adding Number1: " + num1 + "with Number2: " + num2 + "results in: " + addedNumbers;
}
function subtractTwoNumbers(num1, num2){
    var subNumbers = num1 - num2;
    return "Subtracting Number1: " + num1 + "with Number2: " + num2 + "results in: " + subNumbers;}
    function multiplyTwoNumbers(num1, num2){
        var mulNumbers = num1 * num2;
        return "Multiplying Number1: " + num1 + "with Number2: " + num2 + "results in: " + mulNumbers;}
    function divideTwoNumbers(num1, num2){
        var divNumbers = num1 / num2;
        return "Dividing Number1: " + num1 + "with Number2: " + num2 + "results in: " + divNumbers;
    }

if (userOperation == "add"){
    console.log(addTwoNumber(firstNumber, secondNumber));
}
else if (userOperation == "sub"){
// function subtractTwoNumbers(num1, num2){
//     var subNumbers = num1 + num2;
//     return "Subtracting Number1: " + num1 + "with Number2: " + num2 + "results in: " + subNumbers;
    console.log(subtractTwoNumbers(firstNumber, secondNumber));
}

else if (userOperation == "mul"){
console.log(multiplyTwoNumbers(firstNumber, secondNumber));
}
else if (userOperation == "div"){
console.log(divideTwoNumbers(firstNumber, secondNumber));
}
else 
console.log("Unexpected Operation. Please enter the operation again!");