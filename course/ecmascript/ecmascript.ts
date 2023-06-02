// this

// function normalComThis() {
//     console.log(this)
// }
// normalComThis()

// const normalComThisEspecial = normalComThis
//     .bind({ nome: 'Ana' })
// normalComThisEspecial()

// // this???
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()

// const arrowComThisEspecial = arrowComThis
//     .bind({ nome: 'Ana' })
// arrowComThisEspecial()

// Rest & Spread
const numbers: number[] = [1, 10, 99, -5]
console.log(Math.max(...numbers))

const turmaA: string[] = ['Joao', 'maria', 'Fernanda']
const turmaB: string[] = ['Joaozinho', 'Marcia', 'Fernandao', ...turmaA]

console.log(turmaB)

function retornaArray(a: number, ...args: number[]): number[]
{
    console.log(a)
    return args
}

const numeros: number[] = retornaArray(1, 2, 3, 4, 5, 6)
console.log(numeros)
console.log(retornaArray(10, ...numeros))

// Rest & Spread (tupla)

const tupla: [number, string, boolean] = [1, 'teste', true]

function tuplaParam1(a: number, b:string, c:boolean): void
{
    console.log(`Tupla 1 a) ${a} b) ${b} c) ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...args: [number, string, boolean]): void
{
    console.log(`Tupla 2 a) ${args[0]} b) ${args[1]} c) ${args[2]}`)
}

tuplaParam2(...tupla)

// Destructuring Array

const caracteristicas: [string, number] = ['Motor1', 1234]
const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)

// Destructuring Objeto

const atributos: {
    nome: string, 
    preco: number,
    caracteristicas: {local: string}
} = {
    nome: 'SSd',
    preco: 123,
    caracteristicas: {
        local: 'china'
    }
}

console.log(atributos.nome)
console.log(atributos.preco)
console.log(atributos.caracteristicas.local)

const { 
    nome: nomeExterno,
    preco,
    caracteristicas: {local: localExterno},
    caracteristicas: caracteristicasExternas
} = atributos

console.log(nomeExterno)
console.log(preco)
console.log(localExterno)
console.log(caracteristicasExternas)

// Callback

function esperar3s(callback: (dado: string) => void, dado: string)
{
    setTimeout(() => {
        callback(dado)
    }, 3000);
}

esperar3s(function (dado: string) {
    console.log(dado + ' 3 sec depois')
}, 'Teste')


function esperar3sPromise(dado: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dado)
        }, 3000);
    },)
}

esperar3sPromise('teste').then(dado => console.log(dado))