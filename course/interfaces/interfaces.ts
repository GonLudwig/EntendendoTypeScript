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