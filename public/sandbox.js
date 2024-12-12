"use strict";
// let greet: Function;
//Example 1
let greet;
//  no need to define the fuction type V (:void) cause TypeScript automatically detects that we have no return
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//Example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//Example 3
let logDetails;
logDetails = (samurai) => {
    console.log(`${samurai.name} is ${samurai.age} years old`);
};
