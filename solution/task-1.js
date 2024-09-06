

function myFunc(num1 = 1, num2 = 1, num3 = 1, num4 = 1) {
    let result = num1 * num2 * num3 * num4;
    return result
}

let result = myFunc(1, 23, 1, 34)

console.log(result)