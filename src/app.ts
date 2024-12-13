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

// ENUMS
enum ResourceType { BOOk, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resouce<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docOne: Resouce<object> = {
    uid: 1,
    resourceType: ResourceType.BOOk,
    data: { title: "name of the wind" }
}

const docTwo: Resouce<object> = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: { location: "windy city" }
}

console.log(docOne, docTwo)