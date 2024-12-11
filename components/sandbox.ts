// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'heh'
age = 20

// isLoggedIn = 25
isLoggedIn = true;

// arrays
let samurais: string[] = [];

// samurais = [10, 20]
samurais = ["hah", "heh"]

samurais.push("huh") //Wont work without initializing the array samurais (with a '= []' after defining the type)

// union types
let mixed: (string|number|boolean)[] = []
mixed.push('hello')
mixed.push(20)
mixed.push(false)
console.log(mixed)

let uid: string|number
uid = '123'
uid = 123
// uid = false

// objects
let samuraiOne: object
samuraiOne = { name: 'E...Ali', age: 30 }
// samuraiOne = 'hih'
samuraiOne = [] //Array in a kind of object, thats why there isnt any type error

let samuraiTwo: {
    name: string,
    age: number,
    isLoggedIn: boolean
}

// samuraiTwo = { name: 'E...AliNabood', age: 35, isLoggedIn: true, skills:[]}
samuraiTwo = { name: 'E...AliNabood', age: 35, isLoggedIn: true}