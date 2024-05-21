
/*
    1. Importar a lista de produtos
    2. Iterar sobre a lista de produtos
    3. Para cada produto, criar um elemento HTML
    4. Adicionar o produto ao elemento HTML
    5. Adicionar o elemento HTML ao container de produtos
    
*/

import { produtos } from './api.js';



produtos.forEach((produto) => {

    
    let { nome, descricao, preco, image, desconto } = produto;
    const div = document.createElement('div');
    div.className = 'produto';
    
    
    div.innerHTML = `
        <div class="card">

            <img  src="${image}" alt="${nome}">
            <div class="detalhes">
                <h3>${nome}</h3>
                <p>${descricao}</p>
                <p>R$ ${preco}</p>
                <p>Desconto: ${desconto}%</p>
            </div>
            <button>Comprar</button>
        </div>
    `;

    let rotuloDesconto = document.createElement('span');
    rotuloDesconto.className = 'desconto';
    rotuloDesconto.innerText = `-${desconto}%`;

    if(desconto > 0){
        div.querySelector('.card').appendChild(rotuloDesconto);
    }
});
