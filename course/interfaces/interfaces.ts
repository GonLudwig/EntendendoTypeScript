interface Humano
{
    nome: string
    idade?: number
    [props: string]: any
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano)
{
    console.log('Ola, ' + pessoa.nome)
}

function mudarNome(pessoa: Humano)
{
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'Joao',
    idade: 27,
    saudar(sobrenome: string){
        console.log('Ola, meu nome é '+ this.nome + ' '+ sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({nome: 'Jonas', idade: 23, seste: true})

// Usando Classes...
class Cliente implements Humano
{
    nome: string = 'Cliente'

    ultimaCompra: Date = new Date

    saudar(sobrenome: string): void
    {
        console.log('Ola, meu nome é '+ this.nome + ' '+ sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
console.log(meuCliente.nome)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)

// Interface Funcao
interface FuncaoCalculo
{
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number
{
    return Array(exp).fill(base).reduce((total, atual) => { total * atual})
}

console.log(potencia(3, 10))
console.log(Math.pow(3, 10))
console.log(3 ** 10)

// Heranca

interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B{
    c(): void
}

class RealA implements A {
    a(): void {}
}

class RealAB implements A, B{
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

abstract class AbstrataABD implements A, B {
    a(): void {}
    b(): void {}
    abstract d(): void
}

interface Object {
    log(): void
}

Object.prototype.log = function () {
    console.log(this.toString())
}

const x = 2
const y = 3
const z = 4

x.log()
y.log()
z.log()