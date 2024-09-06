
// function myFunc() {
//     let counter = 0;
//     function plus() {
//         counter += 0
//     }

//     setInterval(function () {
//         plus();
//     }, 1000)

//     return counter;
// }

// let x = myFunc();

// console.log(x)


//--------------------------------------

// function func() { // parent scope
//     let cuntr = "Bangladesh";

//     function func1() { // chile scope
//         let bike = "jawa"
//         cuntr = "India"
//         console.log(cuntr)
//     }

//     func1();
//     // console.log(bike) // don't access bike becaulse bike not define in scope
//     console.log(cuntr)
// }

// func()


//--------------------------------------

// function parent(changeHome) {
//     let homeName = "Ministorbari";
    
//     function child() {
//         if(changeHome){
//             homeName = `${changeHome}`
//         }
//     }
//     child()

//     return homeName;
// }

// parent("DarogaBari")
// parent();

//--------------------------------------

// function outer () {
//     let x = 10 
//     function inner() {
//         console.log(x)
//     }
//     x = 20;
//     return inner

// }

// let innerFunc = outer();
// console.log(innerFunc())

//--------------------------------------


// function count (num) {
//     function count1() {
//         if(num % 2 === 0){
//             let num1 = 12;
//             console.log(num + num1)
//         }
//     }
//     count1();
//     console.log(num);
// }
// count(230);

//--------------------------------------

// for(var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i)
//     }, 1000)
// }



// for(var i = 0; i < 5; i++){
//     function outer(j){
//         setTimeout(function() {
//             console.log(j)
//         })
//     }
//     outer(i)
// }




//--------------------------------------

// for(let i = 0; i < 5; i++) {
//     // setTimeout(()=> console.log(i))
//     setTimeout(function () {
//         console.log(i)
//     })
// }