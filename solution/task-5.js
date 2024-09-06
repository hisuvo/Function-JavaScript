

function odd_even(number = 0) {

    if(number === 0) {
        return `${number} isn't a even or odd number.`

    } else if(number % 2 === 0){
        return `${number} is even Number.` 

    } else {
        return `${number} is odd Number.` 

    }
} 

let number = 10
let result = odd_even(number)

console.log(result)