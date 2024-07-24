
//function declaration

function evenOrOdd(number) {
    return number % 2 == 0 ? console.log("even") : console.log("odd")
}

evenOrOdd(12)


function squareNum(number) {
    return number * number
}

console.log(squareNum(4))


//function expression


function findMaximum(num1, num2) {
    if (num1 > num2) console.log(num1, "is maximum")
    if (num2 > num1) console.log(num2, "is maximum")
}

findMaximum(12, 23)


function concateString() {
    let str1 = "hello world "
    let str2 = "second time"

    return str1 + str2
}

console.log(concateString())


//Arrow functions


let num1 = 12
let num2 = 34

const addTwoNumber = () => {
    return num1 + num2
}

console.log(addTwoNumber())


const checkCharacter = (str) => {
    if (str.includes('!')) {
        return true
    }
    return false
}

console.log(checkCharacter("greetings!"))


//function parameters and default values


function product(val1, val2 = "product 2") {
    return { val1, val2 };
}

console.log(product("product1"))


function greetingMe(name, age = 18) {
    return `${name} welcome to the my function and you have to age atleast ${age}`
}
console.log(greetingMe("akhtar"))


//higher order function

const highOrderFun = (fn, num) => {
    console.log("Your value is:-", num)
    fn(num)
    fn(num)
    fn(num)
}

function thatFun(num) {
    console.log("call by higher function...", num)
}


console.log(highOrderFun(thatFun, 12))


// 2
function higherFun(fn1, fn2, val1) {
    const valSet = fn1(val1)
    const finalResult = fn2(valSet)
    return finalResult
}

function addSum(val) {
    return val + 1
}
function secondFun(val) {
    return val * val
}

console.log(higherFun(addSum, secondFun, 5))




const asyncHandler = (fn) => {
    return (req, res, next) => {
        fn(req, res, next)
    }
}

const val = asyncHandler((req, res) => {
    console.log("req", req)
    console.log("res", res)
    console.log("dusra fun")
})



console.log(val)