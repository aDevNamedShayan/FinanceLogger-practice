// let greet = () => {
//     console.log("HelloWorld")
// }

let greet: Function

// greet = 'hello'

greet = () => {
    console.log("HelloWorldAgain")
}
// optional parameter can be defined like (c?: number | string) but it should not include the default value (= 10)
//                          Type of fuctions return parameter VV     here there isnt anything being returned so its just void
const add = (a: number, b: number, c: number | string = 10): void => {
    console.log(a + b)
    console.log(c)
}

add(5, 10 , "20")
//   but here the return type is number VV    because there is a return and its type is number 
const minus = (a: number, b: number): number => {
    return a - b
}

let result = minus(100, 60)
// result = "something else"