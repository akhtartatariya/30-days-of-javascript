const nameJ = "john"
const age = 18

console.log(`My name is ${nameJ}
and age is ${age}`)


const arr = [1, 23, 4, 5, 6, 7, 8, 9]

const [first, second] = arr

console.log(first, second)

const book = {
    title: "chrestopher",
    author: "chris",
    year: 2004,
}

const {title,author}=book
console.log(title,author)


const existingArr=[1,2,3,45,6,7,78]

const newArr=[...existingArr,12,24,36]
console.log(newArr)


const newFun=(...value)=>{
   return value.reduce((prev,curr)=>(
     prev+curr
   ))
}

const newVal=newFun(2,3,4)
console.log(newVal)


const newFun1=(para1,para2=1)=>{
    return `${para1} , ${para2}`
}

const funCall=newFun1(12)
const funCall2=newFun1(12,24)
console.log(funCall)
console.log(funCall2)



let fullName="meraName"
let nameMethod="meraMethod"
const obj2={
    [fullName]:"ye name he",
    [nameMethod]:()=>{
        console.log('ye method ko call bhi kar diya!')
    }
}

console.log(obj2.meraName)
console.log(obj2)
console.log(obj2.meraMethod())