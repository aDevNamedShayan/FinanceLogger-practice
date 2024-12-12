//  classes
class invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c
        this.details = d
        this.amount = a
    }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne = new invoice("Ali", "Kebab", 1000)
const invTwo = new invoice("Mestefa", "KayiPela", 5000)

let invoices: invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)


invOne.client = "Mamad"
invTwo.amount = 6000

console.log(invOne, invTwo)

console.log(invoices)

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