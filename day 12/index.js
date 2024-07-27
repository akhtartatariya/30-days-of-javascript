
const funcOne = () => {
    try {

        throw new Error("This is an intentional error.")

    } catch (error) {
        console.log("something went wrong", error.message)
    }
}

funcOne()

const divideByTwo = (val1, val2) => {
    try {
        let result;
        if (val2 == 0) throw new Error("Denominator cannot be zero. ")
        result = val1 / val2
        return result
    } catch (error) {
        console.log(error.message)
    }
}

console.log(divideByTwo(12, 0))



function logFun() {
    try {
        console.log("try block")
        throw new Error("throw")
    } catch (error) {
        console.log(error.message)
    }
    finally {
        console.log("finally")
    }
}

logFun()


class CustomError extends Error {
    constructor(message = "Something Went Wrong", error = [],) {
        super(message);
        this.error = error
        this.message = message

    }
}


function funcTwo() {
    try {
        console.log("custom error show")
        throw new CustomError("custom error occurred")
    } catch (error) {
        console.log(error.message)
    }
}

funcTwo()


// let form = document.getElementsByTagName("form")[0]
// const input = document.getElementById("text-input")
// form.addEventListener('click', (e) => {
//     e.preventDefault()
//     checkUserInputAndDisplay()
// })


// const p = document.createElement("p")

// function checkUserInputAndDisplay() {

//         if (!input.value || !String(input.value) || !input.value <0) {
//             p.textContent="please enter valid input"
//             document.body.appendChild(p)            
//             throw new CustomError("please enter valid input")
//         }
//         p.textContent = input.value
//         document.body.appendChild(p)

// }

// new Promise((resolve, reject) => {
//     let a = Math.floor(Math.random() * 10)
//     if (a > 5) {
//         reject({ status: false, value: a, error: "value is greater than 5" })
//     }
//     else {
//         resolve({ status: true, value: a })
//     }
// }).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })
// const promiseOne = new Promise((resolve, reject) => {
//     let a = Math.floor(Math.random() * 10)
//     setTimeout(() => {
//         if (a > 5) {
//             reject(new CustomError("Error:-value is greater than 5") || { status: false, value: a })
//         }
//         else {
//             resolve({ status: true, value: a })
//         }
//     }, 1000);
// })

async function handlePromise() {
    try {
        const response = await promiseOne
        console.log("res", response)
    } catch (error) {
        console.log(error.message)
    }
}


// handlePromise()







// fetch("https://api.github.com/users/akhtartatariy")
//     .then((res) => {
//         if(!res?.ok){
//             throw new CustomError("error while getting response ")
//         }
//         return res.json()
//     }).then((data) => {
//         console.log(data)
//     }).catch((err) => {
//         console.log("Error:-",err.message)
//     })


const handleWithAsyncAwait = async () => {
    try {

        const respose = await fetch('https://api.github.com/users/akhtartatariy')
        if (!respose?.ok) {
            throw new CustomError("error while getting response from API")
        }
        const data = await respose.json()

        console.log(data)

    } catch (error) {
        console.log(error.message)
    }
}

handleWithAsyncAwait()
