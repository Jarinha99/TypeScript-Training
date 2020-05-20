// --- String implicita
let fullName = 'Gabriel Jara'
console.log(fullName)

// --- number implicita
let age = 21
console.log(age)

// --- booleano implicita
let hasBrothers = true
console.log(hasBrothers)

// --- tipo dinâmico || no TS é considerado tipo Any
let dynamicType
dynamicType = 27
console.log(typeof dynamicType)
dynamicType = 'Not a number anymore'
console.log(typeof dynamicType)

// --- tipo any explicito
let anyType: any
anyType = 27
console.log(typeof anyType)
anyType = 'Not a number anymore'
console.log(typeof anyType)

// --- tipo number explicito (string e boolean igual)
let realAge:number = 22
// realAge = 'Gabriel' acarreta em erro.
console.log(realAge, typeof realAge)

// --- tipo array, com a tipagem dos itens internos implicita
let newArray = ["OneString", "AnyString"]
console.log(newArray[0])
console.log(typeof newArray) // object
// newArray.push(1) acarreta em erro, pois o tipo do valor que o array recebe já foi tipado como string

// --- array dinamico
let dynamicArray: any[] = ["String", 5]
// dynamicArray = 0 Acarreta em erro por mudar o fato de ser um array.
console.log(dynamicArray)

// --- Tupla (array com posições e tipos definidos)
let tupleExample: [string, number, string] = ["Street of TypeScript", 99, "Apartment 31"]
// error tupleExample = [11, "a", "a"]]
// error tupleExample = ["Street of TypeScript", 99, "Apartment 31", 12]
tupleExample = ["Another Street", 123, ""]
console.log(tupleExample)

// --- Enum
enum DaysOfWeek {
     Monday, // 0
     Tuesday, // 1
     Wednesday = 100, // 100
     Thursday, // 101
     Friday = 4, // 4
     Saturday, // 5
     Sunday = 100, // 100, Não é um problema para o Enum
}

console.log(DaysOfWeek.Friday, DaysOfWeek.Monday)
let today: DaysOfWeek
today = DaysOfWeek.Wednesday
console.log(today)

// --- Funções
function multiplication(num1: number, num2: number): number {
    return num1 * num2
}

console.log(multiplication(3, 5))
console.log(multiplication(3.2, 5))
// console.log(multiplication(3, 'SomeString')) error

// Explicitando que não retorna nada.
function Log(): void{
    console.log('Hi')
}

Log()

// --- Tipo função
let calculate: (x:number, y:number) => number
// calculate = Log() error

calculate = multiplication
console.log(calculate(1, 6));

// --- Tipo Objeto
let objectExample: {name: string, age:number, hasBrothers: boolean} = {
    name: "Gabriel",
    age: 21,
    hasBrothers: true,
}

// error objectExample = { name: 'Gabriel', age:12 }

objectExample = {
    name: "Fernando",
    age: 28,
    hasBrothers: true,
}

// --- Challenge 1 - Done

let employee: {
    Supervisors: string[],
    punchTheClock: (hours: number) => string,
}

employee = {
    Supervisors: ["Otavio", "Bruno"],
    punchTheClock: (hours: number) => {
        if(hours <= 8){
            return 'Normal working day'
        }

        return 'Working day with extra hours'
    }
}

console.log(employee.punchTheClock(7))
console.log(employee.punchTheClock(9))

// --- Alias, using Type
type employee =  {
    Supervisors: string[],
    punchTheClock: (hours: number) => string,
}

let newEmployee : employee = {
    Supervisors: ["Otavio", "Bruno"],
    punchTheClock: (hours: number) => {
        if(hours <= 8){
            return 'Normal working day'
        }

        return 'Working day with extra hours'
    }
}

console.log(newEmployee.punchTheClock(10));
console.log(newEmployee.Supervisors);

// --- UnionTypes
let grade: string | number = 10
console.log(`My grade is: ${grade}`);
grade = '+A'
console.log(`My grade is: ${grade}`);
// grade = true error

// --- Type never, usado para funções que nunca retornam (Diferente de retornar nada.)

function fail(msg: string): never {
    throw new Error(msg)
}

function infiniteLoop(): never {
    while(true){
        console.log('Infinite loop');
    }
}

let product = {
    name: 'sword',
    price: 1,
    validate() {
        if(!this.name || this.name.trim().length === 0){
            fail('Invalid name')
        }

        if(!this.price || this.price <= 0){
            fail('Invalid price')
        }
    }
}

product.validate()

// --- Optinal Types || Or in tsconfig.json set false on "strictNullChecks"

let optionalWeight: null | number = 10
optionalWeight = null

// --- Challenge 2 - Done

type BankAccount = {
    balance: number,
    deposit: (value: number) => void,
}

type AccountHolder = {
    name: string,
    bankAccount: BankAccount,
    contacts: string[]
}

let newBankAccount: BankAccount = {
    balance: 3456,
    deposit(value: number) {
        this.balance += value
    }
}

let newAccountHolder: AccountHolder = {
    name: 'Gabriel',
    bankAccount: newBankAccount,
    contacts: ['34567890', '98765432']
}

newAccountHolder.bankAccount.deposit(3000)
console.log(newAccountHolder)














