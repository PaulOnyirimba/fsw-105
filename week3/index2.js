function sum(num1, num2){
    return num1 + num2
}
var result = sum(11, 26)
console.log(result)


function mynumbers(array){
    if(array % 2 == 0){
        console.log("it is even")
    }
    else {
        console.log("the number is odd")
    }
}
mynumbers(4) 


function number(num1){
    return num1
}
number(4)



function character(num1){
    if(num1.length < 20){
    var name = num1+num1
    console.log(name)
        
    }
    else {
     var first_half = num1.slice(0, num1.length / 2)
     console.log(first_half)
    }
}
character("more than 20 characters")
