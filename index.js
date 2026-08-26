
console.log("welcome to the day 5 of Linkedin challenge");

//Javascript made with 2 version: ES5(ECMAScript5) and ES6
//in ES5 has a var variable
//in ES6 has a let and const variable

function ES5 (){ //behave as a function scope
    console.log("this is ES5");
    for (var i =1;i<12;i++){
        console.log(i);
    }
    console.log(i);
}
ES5();

function ES6 (){ //behave as a block scope
    console.log("this is ES6");
    for (let i =1;i<12;i++){
        console.log(i);
    }
    console.log(i);
}
ES6();