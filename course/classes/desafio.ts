// Exercício 1 - Classe
class Moto
{
    private velocidade: number = 0
 
    constructor(){
    }

    public buzinar() {
        console.log('Toooooooooot!')
    }
 
    public acelerar(delta: number) {
        return this.velocidade = this.velocidade + delta
    }
}
 
let moto = new Moto()
moto.buzinar()
console.log(moto.acelerar(30))
 
// Exercício 2 - Herança
abstract class Objeto2D
{
    constructor(
        protected base: number,
        protected altura: number
    ){}

    abstract area(): number
}

class Retangulo extends Objeto2D
{
    area(): number {
        return this.base * this.altura
    }
}
 
let retangulo = new Retangulo(5, 7)
console.log(retangulo.area())
 
// Exercício 3 - Getters & Setters
class Estagiario
{
    private _primeiroNome: string = ''

    get primeiroNome(): string
    {
        return this._primeiroNome
    }

    set primeiroNome(valor: string)
    {
        if (valor.length >= 3) {
            this._primeiroNome = valor
        } else {
            this._primeiroNome = ''
        } 
    }
}
 
let estagiario = new Estagiario
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)