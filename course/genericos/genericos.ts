function echo(objeto: any)
{
    return objeto
}

console.log(echo('joao').length)
console.log(echo(27).length)
console.log(echo({nome:'joao', idade: 27}))

function echoMelhorado<T>(objeto: T): T{
    return objeto
}

console.log(echoMelhorado('joao').length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({nome:'joao', idade: 27}).nome)

//Generics disponiveis na API
const avaliacoes: Array<number> = [2, 3, 5]
avaliacoes.push(2.4)
// avaliacoes.push('2.3')
console.log(avaliacoes)

// Array

function imprimir<T>(args: T[]): void
{
    args.forEach((ele) => console.log(ele))
}

imprimir([2, 4, 5])
imprimir<number>([2, 4, 5])
imprimir<string>(['joao', 'maria', 'fernando'])
imprimir<{nome: string, idade: number}>([
    {nome: 'Glauco', idade: 29},
    {nome: 'Lucas', idade: 29},
    {nome: 'Wanderley', idade: 29},
])

type Aluno = {
    nome: string,
    idade: number
}
imprimir<Aluno>([
    {nome: 'Glauco', idade: 29},
    {nome: 'Lucas', idade: 29},
    {nome: 'Wanderley', idade: 29},
])

// Tipo Generics
type Echo = <T>(arg: T) => T

const chamarEcho: <T>(arg: T) => T = echoMelhorado
const chamarEcho2: Echo = echoMelhorado

// Class com Generics
class OperacaoBinaria{
    constructor(
        public operando1: any,
        public operando2: any,
    ) {}

    executar(){
        return this.operando1 + this.operando2
    }
}

console.log(new OperacaoBinaria('Bom', 'dia').executar())
console.log(new OperacaoBinaria(3, 7).executar())
console.log(new OperacaoBinaria(3, 'opa').executar())
console.log(new OperacaoBinaria({}, {}).executar())

abstract class AbstractOperacaoBinaria<T, R>{
    constructor(
        public operando1: T,
        public operando2: T,
    ) {}

    abstract executar(): R
}

class SomaBinaria extends AbstractOperacaoBinaria<number, number>
{
    executar(): number {
        return this.operando1 + this.operando2
    }
}

console.log(new SomaBinaria(3, 5).executar())

class DiffDates extends AbstractOperacaoBinaria<Date, number>
{
    executar(): number {
        return this.operando1.getTime() - this.operando2.getTime()
    }
}

// Desafio

class Fila<T>
{
    private fila: Array<T>

    constructor(...args: T[]){
        this.fila = args
    }

    entrar(att: T): void
    {
        this.fila.push(att)
    }

    proximo(): T | null
    {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0]
            this.fila.splice(0, 1)
            return primeiro
        }

        return null
    }

    imprimir(): void
    {
        console.log(this.fila)
    }
}

const fila = new Fila<string>('Gui', 'Pedro', 'Ana', 'Lu')
fila.imprimir()
fila.entrar('Rafel')
fila.imprimir()
console.log(fila.proximo())
console.log(fila.proximo())