// return a new array that has only the numbers that are 5 or greater.

// return array that only includes even numbers
var arr = [3, 6, 8, 2]
var result = arr.filter(num => num % 2 === 0)
console.log(result)

// array of numbers that are doubles of the first array
var doubledNumbers = [2, 5, 100]
var result = doubledNumbers.map(num => num*2)
console.log(result)

// Take an array of numbers and make them strings
// var stringItUp = [2, 5, 100]
// var result = stringitUp.from(stringItUp.join(''))
// console.log(result)

// capitalize each of an array of names
var capitalizeNames = ["John", "Jacob", "Jingleheimer", "Schmidt"]
var result = capitalizeNames.map(name => name.toUpperCase())
console.log(result)

// Turn an array of numbers into a total of all the numbers
var total = [1, 2, 3]
var result = total.reduce(function(final, num){
final += num
return final
})
console.log(result)

// // Turn an array of numbers into a long string of all those numbers.
// var stringConcat = [1, 2, 3]
// var result = stringConcat.reduce

// Turn an array of voter objects into a count of how many people voted
// var totalVotes = [
// {name: 'Bob' , age: 30, voted: true}
// {name: 'Jake' , age: 32, voted: true}
// {name: 'Kate' , age: 25, voted: false}
// {}
// {}
// {}
// {}
// {}
// {}
// {}
// ]

// Sort an array from smallest number to largest
var leastToGreatest = [1, 3, 5, 2, 90, 20]
var result = leastToGreatest.sort(function(a, b){
    return a - b
})
console.log(result)

// Sort an array from largest number to smallest
var greatestToLeast = [1, 3, 5, 2, 90, 20]
var result = greatestToLeast.sort(function(a, b){
return b - a
})
console.log(result)

// Sort an array from shortest string to longest
var lengthSort = ["dog", "wolf", "by", "family", "eaten"]
var result = lengthSort.sort((a, b) => b.length - a.length);
console.log(result)
