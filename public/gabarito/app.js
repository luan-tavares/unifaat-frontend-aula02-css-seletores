/** Cards Iniciais */
const cursos = [
    {
        "titulo": "ADS",
        "area": "Exatas"
    },
    {
        "titulo": "Engenharia",
        "area": "Exatas"
    }
]

//
// Obter os elementos chaves
///

// Elementos de formulário via seletores 
const controlesElement = document.querySelector("aside .controles");
const inputTituloElement = controlesElement.querySelector("input[type=\"text\"]");
const selectAreaElement = controlesElement.querySelector("select#area");

// Elemento wrapper dos cards
const sectionCardsElement = document.querySelector("main > section > div.cards");

// Inserir cursos existentes na array
cursos.forEach((curso) => {
    // Criar <article class="item">
    const articleElement = document.createElement("article");
    articleElement.classList.add("item");

    /** Criar Título <h3> */
    const h3Element = document.createElement("h3");
    h3Element.innerText = curso.titulo;
    articleElement.append(h3Element);

    /** Criar Sub Título <h4> */
    const h4Element = document.createElement("h4");
    h4Element.innerText = curso.area;
    h3Element.after(h4Element);

    sectionCardsElement.append(articleElement);
});