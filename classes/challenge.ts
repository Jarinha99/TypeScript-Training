// Exercício 1 - Classe

class Motorcicle {
    constructor(
        public nome:string = '',
        public velocidade:number = 0
    ){}
    
    buzinar() {
        console.log('Toooooooooot!')
    }
 
    acelerar(delta:number) {
        this.velocidade = this.velocidade + delta
    }
}
 
var newMotorcicle = new Motorcicle('Ducati')
newMotorcicle.buzinar()
console.log(newMotorcicle.velocidade)
newMotorcicle.acelerar(30)
console.log(newMotorcicle.velocidade)
 
// Exercício 2 - Herança
abstract class Object2D {
    constructor(
        public base: number,
        public height: number,
    ){}

    abstract area(): number
}
 
class Rectangle extends Object2D{
    area() {
        return this.base * this.height
    }
}

console.log(new Rectangle(5, 7).area())
 
// Exercício 3 - Getters & Setters
class Intern{
    private _firstName: string = ''

    set firstName(firstName: string){
        if (firstName.length >= 3) {
            this._firstName = firstName
        } else {
            this._firstName = ''
        }
    }

    get firstName(): string{
        return this._firstName
    }
}

let newIntern = new Intern()
console.log(newIntern.firstName)
newIntern.firstName = 'Le'
console.log(newIntern.firstName)
newIntern.firstName = 'Leonardo'
console.log(newIntern.firstName)