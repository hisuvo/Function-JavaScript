
// function count_Zero(binaryStr) {

//     let zero = []

//     for(let text of binaryStr) {
//         if(text === "0") {
//             zero.push(text)
//         } 
//     }

//     return zero.length
// }

// let bionaryString = "1010100010";

// let str = count_Zero(bionaryString)
// console.log(`Zero is in the string ${str}`)





function count_zero(binaryString) {
    let zeroCount = 0;

    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '0') {
            zeroCount++;
        }
    }

    return zeroCount;
}


let binaryStr = "1010100010";
let zeroCount = count_zero(binaryStr);

console.log(zeroCount); // Output: 6
