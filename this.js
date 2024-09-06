
// Note : this keyword alawys find her Object


function myFunc() {
    return this.name + " is a " + this.language + " developer";
}

const person = {
    name: "Jhone duo",
    language : "JavaScript"
}

// here has been called myfunc().
// person.x = myFunc() 

// But i want to myfunc deffination. so use
person.x = myFunc;

// console.log(person.x())
console.log(person)
