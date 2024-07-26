
const para = document.getElementById('para')
const btn = document.getElementById('btn')
const btn2 = document.getElementById('btn2')
const img = document.getElementsByTagName('img')[0]
const input = document.getElementById('input')
const nameInput = document.getElementById('name')
const email = document.getElementById('email')
const newPara = document.createElement('p')
const form = document.getElementsByTagName('form')[0]
const select = document.getElementsByTagName('select')[0]
const list = document.getElementById('myList')
const addChildBtn= document.getElementById('add-child')


btn.addEventListener('click', () => {
    para.textContent = "you have clicked it!"
})
btn2.addEventListener('dblclick', () => {
    img.style.visibility = "hidden"
})

para.addEventListener('mouseover', () => {
    para.style.backgroundColor = "red"
})
para.addEventListener('mouseout', () => {

    para.style.backgroundColor = "white"
})



input.addEventListener('keydown', (e) => {
    console.log("key down", e.key)
})

input.addEventListener('keyup', (e) => {
    newPara.textContent = e.key
    document.body.appendChild(newPara)
})


form.addEventListener('click', (e) => {
    e.preventDefault()
    console.log({ name: nameInput.value, email: email.value })
})

let newPara1 = document.createElement('p')
let container = document.getElementById('cont')

select.addEventListener('change', (e) => {
    newPara1.textContent = e.target.value
    container.appendChild(newPara1)
})

list.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI')console.log(e.target.textContent)
})

function addChild(){
    let element=document.createElement("li")
    element.textContent="new el"
    list.appendChild(element)
}

addChildBtn.addEventListener('click',addChild)

