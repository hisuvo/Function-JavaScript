
function make_avg(numbers, size) {

    if(size === 0) { // if array element is null this case it work
        return 0; // Avoide division by zero whin size is zero
    }

    // 1st way do the sum
    let sum = 0;
    for(let number of numbers) {
        sum += number;
    }

    // 2nd way do the sum
    // let sum = numbers.reduce((pare, pre) => pare + pre, 0)

    let average = sum / size;
    return average;
}

let numbers = [12];
let size = numbers.length;

let average = make_avg(numbers, size)
console.log(average)


