function logarClasse(constructor: Function): void
{
    console.log(constructor)
}

function decoratorVazio(_: Function): void
{
}

function logarClasseSe(type: boolean): Function
{
    return type ? logarClasse : decoratorVazio
}

function decorator(obj: {a: string, b?: number}): Function
{
    return function (_): void {
        console.log(obj.a + ' '+ obj?.b)
    }
}

type Construtor = { new(...args: any[]): {} }

function logarObjeto(construtor: Construtor) {
    console.log('Carregado...')
    return class extends construtor {
        constructor(...args: any[]) {
            console.log('Antes...')
            super(...args)
            console.log('Depois...')
        }
    }
}

// new Eletrodomestico()
// new Eletrodomestico()
// new Eletrodomestico()

interface Eletrodomestico {
    imprimir?(): void
}

// @logarClasse
// @decorator({ a: 'Teste', b: 123 })
// @logarClasseSe(true)
// @logarObjeto
// @imprimivel
class Eletrodomestico {
    constructor(){
        console.log('Novo...')
    }
}

function imprimivel(constructor: Function): void
{
    constructor.prototype.imprimir = function () {
        console.log(this)
    }
}

// (<any>new Eletrodomestico()).imprimir()
const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()

// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}

new MudancaAdministrativa().critico()

function perfilAdmin<T extends Construtor>(construtor: T) {
    return class extends construtor {
        constructor(...args: any[]) {
            super(...args)
            if(!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão!')
            }
        }
    }
}