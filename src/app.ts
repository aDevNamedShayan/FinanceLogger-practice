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

    let values: [string, string, number]
    values = [ tofrom.value, details.value, amount.valueAsNumber ]

    let doc: HasFormatter
    if(type.value === "invoice"){
        doc = new invoice(...values)
    } else {
        doc = new Payment(...values)
    }
    console.log(doc)
    list.render(doc, type.value, "end")

});

// Tuples

let arr = ["rar", 25 , true]
arr[0] = false;
arr[1] = 65
arr = [10, false, 'Aria']

let tup: [string, number, boolean] = ['Atomic', 60, true ]
tup[0] = 'ken'
tup[1] = 30

// let student: [string, number]
// student = ["Mamad", 25] 