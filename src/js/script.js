
const ul = document.querySelector('.containerListaProdutos ul');

function montarListaProdutos(listaProdutos) {
    
    ul.innerHTML = '';

    listaProdutos.forEach((produto) => {

        const li       = document.createElement('li');
        const img      = document.createElement('img');
        const h3       = document.createElement('h3');
        const p        = document.createElement('p');
        const span     = document.createElement('span');

        img.src        = produto.img;
        img.alt        = produto.nome;
        h3.innerText   = produto.nome;
        p.innerText    = produto.preco;
        span.innerText = produto.secao;

        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);

        ul.appendChild(li);

    });
}

function exibirPorNomes() {
   
    const inputBusca = document.querySelector('input');

    const listaPorNome = produtos.filter((produto) => {
        return produto.nome === inputBusca.value;
    });

    montarListaProdutos(listaPorNome);
    exibirPreço(listaPorNome);

    const botaoMostrarPorNome = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');
    
    botaoMostrarPorNome.addEventListener('click', exibirPorNomes);
}
exibirPorNomes(); 

function filtrarPorHortifruti() {
    
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });

    montarListaProdutos(listaHortifruti);
    exibirPreço(listaHortifruti);

    const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');
    
    botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);
}
filtrarPorHortifruti(); 

function exibirTodosProdutos() {
    
    const listaTodos = produtos.filter((produto) => {
        return produto;
    });

    montarListaProdutos(listaTodos);
    exibirPreço(listaTodos);

    const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos');
    
    botaoMostrarTodos.addEventListener('click', exibirTodosProdutos);
}
exibirTodosProdutos(); 

function exibirPreço(produtosFiltrados) {

    let precoTotal = document.getElementById('precoTotal');

    let precoProdutos = produtosFiltrados.reduce((acc,produto) => acc+produto.preco,0)

    precoTotal.innerText = precoProdutos;
}


