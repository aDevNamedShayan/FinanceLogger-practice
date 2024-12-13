import { invoice } from "./classes/invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from './interfaces/HasFormatter';

// let docOne: HasFormatter;
// let docTwo: HasFormatter

// docOne = new invoice("Ali", "Kebab", 1000);
// docTwo = new Payment("Mamad", "Stake", 9000) 

// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)

// console.log(docs)

// const invOne = new invoice("Ali", "Kebab", 1000);
// const invTwo = new invoice("Mestefa", "KayiPela", 5000);

// let invoices: invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

    let doc: HasFormatter
    if(type.value === "invoice"){
        doc = new invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

  console.log(doc);
});
