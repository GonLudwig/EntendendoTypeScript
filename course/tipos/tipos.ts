//string
let nome: string = 'joao'
console.log(nome)
// nome = 12

//numbers
let idade: number = 27
// idade = 'Ana'
idade = 27.5
console.log(idade)

//bollean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

//tipos explicitos
let minhaIdade
minhaIdade = 27
console.log(typeof minhaIdade)
minhaIdade = '27'
console.log(typeof minhaIdade)

//array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100]

//tuplas
let endereco: [string, number] = ['Av principal', 99]
console.log(endereco)
endereco = ["Rua importante", 1260]

//enums
enum Cor {
    Cinza, //0
    Verde = 100, //100
    Azul = 2 // 2
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

//any
let carro: any = 'bmw'
console.log(carro)
carro = {marca: 'BMW', ano: 2019}
console.log(carro)

// funcoes

function retornaNome(): string
{
    // return minhaIdade
    return nome
}

console.log(retornaNome())

function digaOi(): void
{
    console.log('oi')
    // return minhaCor
}

digaOi()

function multiplicar(numA: number, numB: number): number
{
    return numA * numB
}

// console.log(multiplicar(2, 'bia'))
console.log(multiplicar(2, 9)) 

// funcao
let calculo: (numA: number, numB: number) => number
// calculo = digaOi
// calculo()

calculo = multiplicar
console.log(calculo(2, 9))

// objetos
let usuario: {nome:string, idade:number} = {
    nome: 'Glauco',
    idade: 24
}

console.log(usuario)
// usuario = {}
// usuario = {
//     name: 'maria',
//     age:31
// }

usuario = {
    idade: 31,
    nome: 'maria'
}