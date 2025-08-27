// Seleciona o elemento <div class="controles"> que está dentro do <aside>
const controlesElement = document.querySelector("aside .controles");

// Seleciona o input de texto dentro do bloco de controles
const inputNomeElement = document.querySelector("aside .controles input[type='text']");

// Seleciona o <select> dentro do bloco de controles
const selectTipoElement = controlesElement.querySelector("select");

// Seleciona o container <div class="cards"> onde os <article> serão adicionados
const cardsElement = document.querySelector(".cards");

// Adiciona um listener no input de texto para capturar teclas pressionadas
inputNomeElement.addEventListener("keydown", (event) => {
    // Se a tecla pressionada NÃO for Enter, sai da função
    if (event.key !== "Enter") {
        return;
    }

    // Cria um novo elemento <article> para representar um card
    const articleElement = document.createElement("article");

    // Adiciona um listener de clique nesse card
    articleElement.addEventListener("click", (event) => {
        // Pega o elemento atual clicado
        const currentElement = event.currentTarget;

        // Remove a classe "selecionado" de todos os outros <article>
        cardsElement.querySelectorAll("article").forEach((element) => {
            element.classList.remove("selecionado");
        });

        // Adiciona a classe "selecionado" somente ao card clicado
        currentElement.classList.add("selecionado");
    })

    // Cria o elemento <h3> que vai conter o texto digitado no input
    const h3Element = document.createElement("h3");
    h3Element.innerText = inputNomeElement.value; // atribui o valor digitado
    articleElement.append(h3Element); // insere o h3 dentro do <article>

    // Cria o elemento <h4> que vai mostrar a área selecionada no select
    const h4Element = document.createElement("h4");
    h4Element.innerText = selectTipoElement.value; // atribui o valor selecionado
    articleElement.append(h4Element); // insere o h4 dentro do <article>

    // Finalmente, insere o novo <article> dentro do container .cards
    cardsElement.append(articleElement);

    // Reseta os valores dos forms
    inputNomeElement.value = "";
    selectTipoElement.value = "";
})
