//Arithmetic operations


let a = 200
let b = 40


console.log(a + b)
console.log(a * b)
console.log(a - b)
console.log(a / b)
console.log(a % b)


//assign operations

let c = 21

console.log(c += 4)
console.log(c -= 4)

//comparison operations

let d = 21
let e = 34
let f = 43
let g = 34

let h = 12
let i = "12"
console.log("e is greater than d", d < e)//return  boolean  type
console.log("f is greater than d", f > d)//return  boolean  type


console.log("g is greater than or equal to e", g >= e)
console.log("g is less than or equal to e", g <= e)


console.log("h is ==  i", h == i)
console.log("h is === i", h === i)


//logical operations


if (i == 12 && h == 12) console.log("condition true")
if (i == 12 || h == 3) console.log("condition true")

let j = ""
if (!j) {
    console.log("convert to number")
}

//ternary operations

console.log(i < 0 ? "negative" : "positive")




