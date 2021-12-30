var texto = document.getElementById("tarefa");
var lista = document.getElementById("lista");
var itens = [];

// Verifica se o usuário digitou algo no input de texto
function digitouAlgo(elemento) {
    if (elemento.value.length > 0) {
        return true
    } else {
        return false
    }
}

// Ao carregar a página, mostra a lista localmente salva 
onload = function () {
    let itens = [];
    itens = JSON.parse(localStorage.getItem("tarefas"));
    for (let i in itens) {
        lista.innerHTML += `<input type="checkbox" class="checkbox"><li>${itens[i]}</li><br><hr>`;
    }
    console.log(itens);
    console.log('Carregou')
}

// Insere informação no vetor, salva localmente e acrescenta na lista
function inserir() {
    if (digitouAlgo(texto)) {
        itens = JSON.parse(localStorage.getItem("tarefas"));
        itens.push(texto.value);
        localStorage.setItem("tarefas", JSON.stringify(itens));
        lista.innerHTML += `<input type="checkbox" class="checkbox"><li>${texto.value}</li><br><hr>`;
        console.log(itens);
        console.log('Inseriu')
        // Apaga texto do input
        texto.value = "";
        texto.focus;
    } else {
        console.log('Digitou nada')
        alert('Digite algo')
    }
}

// Apaga lista e conteúdo o armazenado localmente
function limpar() {
    lista.innerHTML = "";
    localStorage.clear();
    let itens = [];
    localStorage.setItem("tarefas", JSON.stringify(itens));
    console.log(itens)
    console.log('Limpou lista')
}