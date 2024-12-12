// let greet: Function;


//Example 1
let greet: (a: string, b: string) => void

//  no need to define the fuction type V (:void) cause TypeScript automatically detects that we have no return
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

//Example 2
let calc: (a: number, b: number, c:string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if(action === 'add'){
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
} 

//Example 3
let logDetails: (obj: {name: string, age: number}) => void

type person = {name: string, age: number}
logDetails = (samurai: person) => {
    console.log(`${samurai.name} is ${samurai.age} years old`)
}