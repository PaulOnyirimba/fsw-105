function capitalizeAndLowercase(str){
    var upperAndLower = str.toUpperCase() + str.toLowerCase();
    return upperAndLower;
}
console.log(capitalizeAndLowercase("Hello"));
console.log("===")

function findMiddleIndex(str){
    var middleOfTheString = Math.floor(str.length / 2 );
    return middleOfTheString;
}
console.log(findMiddleIndex("Hello"));
console.log(findMiddleIndex("Hello World"));
console.log("===")

function returnFirstHalf(str){
    var firstHalf = str.slice(0,str.length /2) 
    return firstHalf
}
console.log(returnFirstHalf("Hello"))
console.log(returnFirstHalf("Hello World"))
console.log("===")

function firstHalfCapital(str){
    var firstHalf = str.slice(0, str.length /2).toUpperCase()
    var secondHalf = str.slice(str.length /2).toLowerCase()
    return firstHalf + secondHalf
}
console.log(firstHalfCapital("Hello"));
console.log(firstHalfCapital("Hello World"))
