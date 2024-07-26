const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = false
        if (err) {
            console.log("error occurred ")
            reject(false)
        }
        else {
            console.log("2 second completed")
            resolve(true)
        }
    }, 1000);
})


promiseOne.then((bool) => {
    console.log(bool)
}).catch((err)=>{
    console.log(err)
})


using promise
fetch('https://api.github.com/users/akhtartatariya')
.then((response)=>{
    return response.json()
}).then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err)
})

const newPromise = new Promise((resolve, reject) => {
    const err = false
    if (err) {
        reject({ data: "something went wrong", status: false })
    }
    else {

        setTimeout(() => {
            resolve({ data:  "your waiting is over", status: true })
        }, 2000);
    }

})
async function asyncHand() {
    try {
        const data = await newPromise
        console.log(data)
    } catch (error) {
        console.log(error, "something went wrong")
    }

}

asyncHand()

//using async - await
const getData=async()=>{
    try {
        const response=await fetch('https://api.github.com/users/akhtartatariya')
        const data=await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


getData()



    Promise.all([newPromise,promiseOne]).then((values)=>{

        console.log(values)
    })
    Promise.race([newPromise,promiseOne]).then((values)=>{

        console.log(values)
    })
