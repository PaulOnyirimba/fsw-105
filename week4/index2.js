var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


vegetables.pop()
console.log("Vegetables Array: " + vegetables);

fruit.shift();
console.log("Fruits Array: " + fruit);

var orangeIndex = fruit.indexOf("orange")
console.log(orangeIndex)

fruit.push("1")
console.log(fruit)

console.log(vegetables.length)

vegetables.push("3")
console.log(vegetables)

var fruit = ["apple", "orange", "watermelon", "1"]
var vegetables = ["carrot", "tomato", "pepper", "3"]
var food = fruit.concat(vegetables)
console.log(food)

