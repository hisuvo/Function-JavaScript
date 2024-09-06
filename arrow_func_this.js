

// In Arrow function don't use this keyword. Beacuse it alawys refare global Object

// function exprssion
const aro = () => {
    console.log("x ", this)
}
aro()  // it show window object


// inside object
const student1 = {
    nam: "X",
    age: 23,
    inf: () => { // arrow function
        return `${this.nam} is ${this.age} years old`
    }
}

console.log(student1.inf())  //undefined is undefined years old



const student2 = {
    nam: "X",
    age: 23,
    inf: function () { // regulor funtion
        return `${this.nam} is ${this.age} years old`
    }
}

console.log(student2.inf()) // X is 23 years old