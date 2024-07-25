const html = document.getElementById('some')
html.textContent = "Hello web App"
const changeColor = document.getElementsByClassName('bg')[0].style.backgroundColor = "pink"



//create Elements and Append

const div = document.createElement('div')
div.textContent = "This is first div"

const body = document.body
body.appendChild(div)

const ul = document.getElementById('container')

const li = document.createElement('li')

ul.appendChild(li)



const remEl = document.getElementById('divEl')

remEl.remove()


const newEl = document.createElement('div')

newEl.textContent = "remove this child"

body.appendChild(newEl)

body.lastElementChild.remove()


//modifying attributes

const img = document.getElementById('img-id')

img.setAttribute("alt", "this is alt")
img.setAttribute("weight", "200")
img.setAttribute("height", "200")

img.removeAttribute("class")

const p= document.getElementById('p')
const btn=document.getElementsByTagName('button')[0]
btn.addEventListener('click',()=>{
    p.textContent="hello sir"
})
p.addEventListener('mouseover',(e)=>{
    
    e.target.style.color='red'
})
