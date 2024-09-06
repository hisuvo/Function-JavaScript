function myFunc(callFunc){
        callFunc();
}

function callFunc () {
    console.log(" This a callback Function ")
}

myFunc(callFunc)
