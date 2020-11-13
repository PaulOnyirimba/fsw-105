function capitalizeAndLowercase(str){
    var upperAndLower = str.toUpperCase() + str.toLowerCase();
    return upperAndLower;
}
console.log(capitalizeAndLowercase("Hello"));
console.log("===")

function findMiddleIndex(str){
    var middleOfTheString = Math.floor(str.length / 2);
    return middleOfTheString;
}
console.log(findMiddleIndex("Hello"));
console.log(findMiddleIndex("Hello World"));
console.log("===")

function returnFirstHalf(str){
    var firstHalf = str.slice() 
    return firstHalf
}
console.log(returnFirstHalf("Hello"))
console.log(returnFirstHalf("Hello World"))

function 