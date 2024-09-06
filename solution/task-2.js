

function myFunc(number) {
    if(number % 2 !== 0 ) {
        let result = number * 2
        return `The even number is ${result}`
    } else {
        let result = number / 2
        return `The odd number is ${result}`
    }
}

let number = 220

let result = myFunc(number);
console.log(result)
