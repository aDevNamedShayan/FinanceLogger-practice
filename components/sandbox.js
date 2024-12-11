// explicit types
var character;
var age;
var isLoggedIn;
// age = 'heh'
age = 20;
// isLoggedIn = 25
isLoggedIn = true;
// arrays
var samurais = [];
// samurais = [10, 20]
samurais = ["hah", "heh"];
samurais.push("huh"); //Wont work without initializing the array samurais (with a '= []' after defining the type)
// union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
// uid = false
// objects
var samuraiOne;
samuraiOne = { name: 'E...Ali', age: 30 };
// samuraiOne = 'hih'
samuraiOne = []; //Array in a kind of object, thats why there isnt any type error
var samuraiTwo;
// samuraiTwo = { name: 'E...AliNabood', age: 35, isLoggedIn: true, skills:[]}
samuraiTwo = { name: 'E...AliNabood', age: 35, isLoggedIn: true };
