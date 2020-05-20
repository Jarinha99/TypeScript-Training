// Anotei apenas as diferenças que temos com essas funcionalidades dentro do TS em relação ao JS.

// Diferença de JS pro TS usando Arrow Function

// JS - assim é permitido em JS, mas não em TS.
// const speakWith = pessoa => console.log(pessoa);

// TS, o parenteses é obrigatório até para é apenas um único parâmetro.
const speakWith = (person: string) => console.log(`Hey ${person}`);
speakWith('Guilherme')

// Rest & Spread (Tupla)
const tuple: [number, string, boolean] = [21, 'Gabriel', true]

function LogTupleExample1(a:number, b:string, c:boolean): void{
    console.log(`${a} ${b} ${c}`)
}

function LogTupleExample2(...params: [number, string, boolean]): void{
    console.log(...params)
}

LogTupleExample1(...tuple)
LogTupleExample2(...tuple)

// Challenge 1 - Done

// Exercicio 1
const dobro = (valor: number): number => valor * 2
console.log(dobro(10))
 
// Exercicio 2
const dizerOla = (nome:string = 'Pessoa'): void => console.log("Ola, " + nome)
 
dizerOla()
dizerOla("Anna")

// Exercicio 3
const nums = [-3, 33, 38, 5]
console.log(Math.min(...nums))
 
// Exercicio 4
const array = [...nums, 55, 20]
console.log(array)
 
// Exercicio 5
const notas = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)
 
// Exercicio 6
const cientista = {primeiroNome: "Will", experiencia: 12}
const { primeiroNome, experiencia } = cientista
console.log(primeiroNome, experiencia)