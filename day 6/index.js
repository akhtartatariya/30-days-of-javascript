const arr=[1,2,3,4,5]

console.log(arr[0], arr[4])

arr.push(2)
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift(12)
console.log(arr)


//Intermediate


const arr1=[12,435,54,23,78,34]

const newArray=arr1.map((val)=>val +val)
console.log(newArray)


const arr2=[1,24,53,54,25,75,445,24,76,24,667]

const newArray1=arr2.filter((val)=>val%2==0)
console.log(newArray1)

const newArr=[1,23,45,6,3,23,53]
const result=newArr.reduce((prevVal,currentVal)=>{
    return prevVal+currentVal
})
console.log(result)
// const arr3=[12,24,53,54,25,75,24,76,24]

// const newArray2=arr3.reduce((1,arr3.length,0,[])=>{})
// console.log(newArray2)


const arr4=["tiger","lion","goat",1,2,3]

for (let index = 0; index < arr4.length; index++) {
    // console.log(arr4[index])

}

arr4.forEach(val => {
    console.log(val)
});


const arr5=[12,32,[23,43,[54,14]],23]

// we can do manually and using function also
console.log(arr5.flat(3))

console.log([arr5[0],arr5[1],arr5[2][0],arr5[2][1],arr5[2][2][0],arr5[2][2][1],arr5[3]])

console.log(arr5[3])

