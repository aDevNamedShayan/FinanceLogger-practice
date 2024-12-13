import { invoice } from "./classes/invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from "./classes/ListTemplate.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul') as HTMLUListElement;
const list = new ListTemplate(ul)

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

    let doc: HasFormatter
    if(type.value === "invoice"){
        doc = new invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    console.log(doc)
    list.render(doc, type.value, "end")

});

// GENERICS

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}
}

let docOne = addUID({name: 'Mamad', age: 20})
// let docTwo = addUID('hello')

console.log(docOne.name)

// with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T; // has to be Generic instead of (object or string)
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName: 'Person',
    data: { name: 'shaun' }
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['apple', 'bread', 'milk']
}

console.log(docThree, docFour)