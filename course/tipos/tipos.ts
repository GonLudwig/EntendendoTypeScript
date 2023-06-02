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

// Desafio

// Alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (numero: number) => string
}

let funcionario: Funcionario = {
    supervisores: ['Ana', 'Fernamdo'],
    baterPonto: function (num) {
        if (num <= 8) {
            return 'Ponto normal'
        }
        return 'Fora do Horario'
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

// Unio Types

let nota: number | string = 10
console.log(nota)
nota = '10'
console.log(nota)

// Return Never
function falha(msg: string): never {
    throw new Error(msg)
}

// Null value

let altura = 12
// altura = null

let alturaOpcional: number | null = 12
alturaOpcional = null

// Desafio js to ts
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor
    }
}
 
let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)