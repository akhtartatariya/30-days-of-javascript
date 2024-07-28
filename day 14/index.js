class Person {
    constructor(name, lastName, age) {
        this.name = name
        this.age = age
        this.lastName = lastName
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
    updateAge(age) {
        console.log(` age is updated successfully ${this.age = age}`)
    }
    static greetAgain(name = "ganguly") {
        return `Hi ${name}`
    }

    get name() {
        return this._name.toUpperCase() + " " + this.lastName.toUpperCase()
    }
    set name(value) {
        this._name = value
    }
}


class Student extends Person {
    static count = 0
    constructor(studentId) {
        super()
        this.studentId = studentId
        Student.count++
    }

    show() {
        console.log(`the student id is ${this.studentId}`)
    }
    greet() {
        console.log(`the student id is ${this.studentId} overridden greet`)
    }
}
const chai = new Person('allies', "doe", 19)
// console.log(chai.greet())
// console.log(chai.updateAge(20))
// console.log(chai)

const stuChai = new Student('123456789')
const stuChai1 = new Student('123456789')
const stuChai2 = new Student('123456789')
// console.log(stuChai)
// console.log(stuChai.show())
// console.log(stuChai.greet())


// console.log(Person.greetAgain("godo"))
// console.log(Student.count)

chai.name = "Johhny"
// console.log(chai.name)



class Account {
    #balance;
    constructor(value) {
        this.#balance = value
    }

    deposit(amount) {
       return ` the value is after deposit ${this.#balance += amount}`
    }
    withdraw(amount) {
        return ` the value is after withdraw ${this.#balance -= amount}`
    }

    // showDeposit(value){
    //     return this.#deposit(value)
    // }
    // showWithdraw(value){
    //     return this.#withdraw(value)
    // }
}

const Customer=new Account(2000)
    
// console.log(Customer.withdraw(10))
// console.log(Customer.deposit(10))
console.log(Customer.withdraw(100))

console.log(Customer.deposit(100))
console.log(Customer.withdraw(799))
