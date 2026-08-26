
/*console.log("welcome to the day 5 of Linkedin challenge");

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

//Window Object :-window object is like a container that containes many features and things that actually not the part of js own but guve to the js 
//whenever needed like scrollbar,alert,prompt,console.log and part of js is while,do..while,array,function,object

//How to copy the reference variable
let arr=[23,45,67,88];
let arr2 =[...arr];
arr2.push(10);
console.log(arr2);
console.log(arr); */

//Promise

let pr =new Promise(function(res,rej){
    const n = Math.floor(Math.random()*10);
    if(n<5){
        return res();
        }else{
            rej();
        }
});

pr.then(function(){
console.log("valid number");
})
.catch(function(){
    console.log("invalid number");
});