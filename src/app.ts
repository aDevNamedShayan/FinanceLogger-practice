interface isPerson {
    name: string;
    age: number;
    speak(a: string): void
    spend(a: number): number
}

const me: isPerson = {
    name: "Ali",
    age: 30,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        console.log("I spent", amount)
        return amount
    }
};

const greetPerson = (person: isPerson) => {
    console.log("hello", person.name)
}

greetPerson(me)

console.log(me)

import { invoice } from "./classes/invoice.js"

const invOne = new invoice("Ali", "Kebab", 1000)
const invTwo = new invoice("Mestefa", "KayiPela", 5000)

let invoices: invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
})

const form = document.querySelector('.new-item-form') as HTMLFormElement

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})