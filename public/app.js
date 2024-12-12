"use strict";
//  classes
class invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new invoice("Ali", "Kebab", 1000);
const invTwo = new invoice("Mestefa", "KayiPela", 5000);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = "Mamad";
invTwo.amount = 6000;
console.log(invOne, invTwo);
console.log(invoices);
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
