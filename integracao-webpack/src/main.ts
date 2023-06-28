import Livro from "./modelo/livro";
import $ from 'jquery'

const livro = new Livro('Dom Quixote', 108.8, 0.10)

$('body').append(`<h1>${livro.nome}</h1>`)
$('body').append(`<h2>Preco: R$${livro.precoComDesconto()}</h2>`)