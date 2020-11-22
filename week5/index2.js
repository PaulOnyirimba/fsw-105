// Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John", but instead "spot" is returned). You only need to delete var and insert let and const.
const name = "John"
const age = 101
function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}
runForLoop(["cat", "dog"])

// Re-write this .map() using an arrow function:
const carrots = ["bright orange", "ripe", "rotten",]
const mapVegetables=(arr) => arr.map((carrot) => ({ type: "carrot", name: carrot })
)
console.log(mapVegetables(carrots))

// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
var printString = (firstName, lastName, age) =>{
    return ("Hi " + firstName + " " + lastName + " " + "how does it feel to be " + age + " ? ") 
}
console.log(printString("Kat", "Stark", "40"))

