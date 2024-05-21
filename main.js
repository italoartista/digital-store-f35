import { produtos } from './api.js';



// ES5 
// let nome = produtos[0].nome; 
// let preco = produtos[0].preco;
// let descricao = produtos[0].descricao;
// let image = produtos[0].image;
// let cor = produtos[0].detalhes.cor;
// let tamanho = produtos[0].detalhes.tamanho;
// let peso = produtos[0].detalhes.peso;


// ES6
// Destructuring
// let { nome, preco, descricao, image, detalhes: { cor, tamanho, peso } } = produtos[0];


// console.log(nome, preco, descricao, image, cor, tamanho, peso); // Tenis 200 'Um tenis top de linha' './assets/produto.png' 'Preto' '42' '500g'


let { detalhes: { tamanho, cor }} = produtos[produtos.length-1];


console.log(tamanho, cor); // M Preto