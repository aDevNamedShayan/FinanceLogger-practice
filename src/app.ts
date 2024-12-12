// this file doesnt have direct access to the html file so
// without the ! mark its gonna give us an error cuz it thinks that maybe the querySelector wouldn't be able to pickup any <a> tag
// but with the ! mark we force it to know that one or more <a> tags exist 
// const anchor = document.querySelector('a')!

// console.log(anchor.href)

// alternative way to check if the <a> tags exists ⬇
// if(anchor){
//     console.log(anchor.href)
// }

// const form = document.querySelector('form')! //possible to select another form not our target form

// when grabbing elements by className, it doesnt automatically detect what tag our target is, so it cant provide intellisense
//                           so we specify it manually😊    ⬇⬇       also it doesnt need the ! mark anymore
const form = document.querySelector('.new-item-form') as HTMLFormElement
// console.log(form.children)

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