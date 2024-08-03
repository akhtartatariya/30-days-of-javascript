//closures

function outer() {
    let a = { fullName: "john dow" }
    function inner() {
        console.log(a.fullName)
    }
    inner()
}
console.log(outer())



function createCounter() {

    let count = 0


    return {
        increment: function () {
            count++
            // console.log(count)
        },
        getValue: function () {
            return count
        },
    }
}
const counter = createCounter()
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.getValue())


const generateId = () => {
    let lastid = 0

    return function () {
        lastid += 1
        return `ID_${lastid}`
    }
}


// const generator = generateId()
// console.log(generator())
// console.log(generator())


const closuresOne = (name) => {

    return function () {
        console.log(`a welcome to closures ${name}`)
    }
}

const result = closuresOne("farhan")
console.log(result())



const arrayFunction = (n) => {
    let listArray = []
    for (let i = 0; i < n; i++) {
        listArray.push((function (index) {
            return function () {
                console.log(index)
            }
        })(i))
    }
    return listArray
}

const rst = arrayFunction(3)
console.log(rst[0]())
console.log(rst[1]())
console.log(rst[2]())



const moduleCollection = () => {
    let list = []

    return {
        add: (item) => {
            list.push(item)
            console.log(`added in list ${item}`)
        },
        remove: (item) => {
            const index = list.indexOf(item)
            console.log(index)
            if (index !== -1) {
                list.splice(index, 1)
                console.log(`remove from list ${item}`)
            }

        },
        allList: () => {
            if (list.length > 0) {
                list.map((val) => (
                    console.log(val)
                ))
            }
        }
    }
}


const module1 = moduleCollection()
console.log(module1.add("Apple"))
console.log(module1.add("banana"))
console.log(module1.add("watermelon"))
console.log(module1.remove("banana"))
console.log(module1.allList())



//memoize function



function memoizeFunction(fn) {

    let cache = {}
    
    return function (...args) {
        const key = JSON.stringify(args)
        if (cache[key]) {
            console.log("Fetching with optimized method")
            return cache[key]
        }
        else {
            const result = fn(...args)
            console.log("give ",fn(...args))
            cache[key] = result
            console.log("run the argument function")
            return result
        }
    }
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const rsl = memoizeFunction(factorial)
// console.log(rsl(1))
// console.log(rsl(1))
console.log(rsl(5))
console.log(rsl(5))




