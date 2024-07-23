
//if-else statements
const val = 2

if (val >= 0) {
    if (val == 0) {
        console.log("value is 0")
    }
    else {
        console.log("value is positive")
    }
}

else if (val < 0) {
    console.log("value is negative")
}


const age = 18


if (age >= 18) {
    console.log("you are eligible to vote")
}
else {
    console.log("You are not eligible to vote")
}



//nested if


let a = 12
let b = 18
let c = 23

if (a > b) {
    if (a > c) {
        console.log("a is bigger")
    }

}
if (b > c) {
    if (b > a) {
        console.log("b is bigger")
    }

}
if (c > a) {
    if (c > b) {
        console.log("c is bigger")
    }
}




let day = 7


switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")

        break;
    case 4:
        console.log("Thursday")

        break;
    case 5:
        console.log("Friday")

        break;
    case 6:
        console.log("Saturday")

        break;
    case 7:
        console.log("Sunday")

        break;

    default:
        console.log("Invalid day")
}
let marks = 20


switch (true) {
    case marks >= 650:
        console.log("Grade A")
        break;
    case marks >= 550:
        console.log("Grade B")
        break;
    case marks >= 450:
        console.log("Grade C")

        break;
    case marks >= 350:
        console.log("Grade D")

        break;
    case marks >= 250:
        console.log("Grade F")
        break;
    case marks <= 250:
        console.log("Failed")
        break;

}


let evenOrOdd = 12
console.log(evenOrOdd % 2 == 0 ? "even" : "odd")





// leap year 
const year = 2025

if (year % 400 == 0) {
    console.log(`${year} is a leap year`)
}
else if (year % 4 == 0) {
    console.log(`${year} is a leap year`)
}
else if (year % 100 == 0) {
    console.log(`${year} is  not a leap year`)
}
else {

    console.log(`${year} is  not a leap year`)
}
