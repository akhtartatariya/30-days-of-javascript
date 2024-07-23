
//for loop 
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
let table = 5
for (let i = 1; i <= 10; i++) {
    console.log(`${table} * ${i} = ${table * i}`)
}


//while loop

let num = 1
let save = 1
while (num < 10) {
    num++
    save += num

}

console.log(save)


let minus = 10

while (minus > 0) {
    console.log(minus)
    minus--
}


//do while loop
let unit = 1
do {
    console.log(unit)
    unit++
} while (unit <= 5);



let input = 7
let answer = 1
let plus = 1
do {
    answer *= plus
    plus++
} while (plus <= input);

console.log(answer)


//nested loops



for (let i = 0; i < 5; i++) {
    let row = ""
    for (let j = 0; j <=i; j++) {
        row += "*"
    }
    console.log(row)
}

// *
// **
// ***
// ****
// *****



//loop control statements



for(let i=1;i<=10;i++){
    if(i==7)continue
    console.log(i)
}
for(let i=1;i<=10;i++){
    console.log(i)
    if(i==7)break
}