let reviews = [
    {
        "id": 1,
        "hotelId": 1,
        "title": "Best holiday ever",
        "description": "Donec a nisi in mi pellentesque placerat vel eu leo. Nulla facilisi. Duis dui nulla, ornare sed efficitur vitae, aliquam vel tortor. Nunc porta varius ex. Donec id porta lacus, ac facilisis nulla. Proin sed felis nec tellus dictum commodo nec quis lorem. Nam ultrices, risus ut maximus ullamcorper, elit tellus tincidunt tortor, eu euismod turpis ipsum et leo.",
        "rating": 5
    },
    {
        "id": 2,
        "hotelId": 1,
        "title": "Very clean",
        "description": "Duis blandit, dolor sed posuere sodales, diam lorem tempor libero, at vestibulum turpis nisl porttitor enim. Cras accumsan felis orci, a sagittis lectus porta ut.",
        "rating": 4
    },
    {
        "id": 5,
        "hotelId": 2,
        "title": "Exceeded all expectations",
        "description": "Donec a nisi in mi pellentesque placerat vel eu leo. Nulla facilisi. Duis dui nulla, ornare sed efficitur vitae, aliquam vel tortor. Nunc porta varius ex. Donec id porta lacus, ac facilisis nulla. Proin sed felis nec tellus dictum commodo nec quis lorem. Nam ultrices, risus ut maximus ullamcorper, elit tellus tincidunt tortor, eu euismod turpis ipsum et leo.",
        "rating": 5
    },
    {
        "id": 6,
        "hotelId": 2,
        "title": "Very clean",
        "description": "Duis blandit, dolor sed posuere sodales, diam lorem tempor libero, at vestibulum turpis nisl porttitor enim. Cras accumsan felis orci, a sagittis lectus porta ut.",
        "rating": 4
    },
    {
        "id": 8,
        "hotelId": 2,
        "title": "Very clean",
        "description": "Duis blandit, dolor sed posuere sodales, diam lorem tempor libero, at vestibulum turpis nisl porttitor enim. Cras accumsan felis orci, a sagittis lectus porta ut.",
        "rating": 4
    },
    {
        "id": 9,
        "hotelId": 3,
        "title": "Best holiday ever",
        "description": "Donec a nisi in mi pellentesque placerat vel eu leo. Nulla facilisi. Duis dui nulla, ornare sed efficitur vitae, aliquam vel tortor. Nunc porta varius ex. Donec id porta lacus, ac facilisis nulla. Proin sed felis nec tellus dictum commodo nec quis lorem. Nam ultrices, risus ut maximus ullamcorper, elit tellus tincidunt tortor, eu euismod turpis ipsum et leo.",
        "rating": 5
    },
    {
        "id": 11,
        "hotelId": 3,
        "title": "Best holiday ever",
        "description": "Donec a nisi in mi pellentesque placerat vel eu leo. Nulla facilisi. Duis dui nulla, ornare sed efficitur vitae, aliquam vel tortor. Nunc porta varius ex. Donec id porta lacus, ac facilisis nulla. Proin sed felis nec tellus dictum commodo nec quis lorem. Nam ultrices, risus ut maximus ullamcorper, elit tellus tincidunt tortor, eu euismod turpis ipsum et leo.",
        "rating": 5
    },
    {
        "id": 12,
        "hotelId": 3,
        "title": "Very clean",
        "description": "Duis blandit, dolor sed posuere sodales, diam lorem tempor libero, at vestibulum turpis nisl porttitor enim. Cras accumsan felis orci, a sagittis lectus porta ut.",
        "rating": 4
    },
    {
        "id": 18,
        "hotelId": 4,
        "title": "Exceeded all expectations",
        "description": "Donec a nisi in mi pellentesque placerat vel eu leo. Nulla facilisi. Duis dui nulla, ornare sed efficitur vitae, aliquam vel tortor. Nunc porta varius ex. Donec id porta lacus, ac facilisis nulla. Proin sed felis nec tellus dictum commodo nec quis lorem. Nam ultrices, risus ut maximus ullamcorper, elit tellus tincidunt tortor, eu euismod turpis ipsum et leo.",
        "rating": 5
    },
    {
        "id": 20,
        "hotelId": 4,
        "title": "Exceeded all expectations",
        "description": "Donec a nisi in mi pellentesque placerat vel eu leo. Nulla facilisi. Duis dui nulla, ornare sed efficitur vitae, aliquam vel tortor. Nunc porta varius ex. Donec id porta lacus, ac facilisis nulla. Proin sed felis nec tellus dictum commodo nec quis lorem. Nam ultrices, risus ut maximus ullamcorper, elit tellus tincidunt tortor, eu euismod turpis ipsum et leo.",
        "rating": 5
    },
    {
        "id": 22,
        "hotelId": 4,
        "title": "Best holiday ever",
        "description": "Donec a nisi in mi pellentesque placerat vel eu leo. Nulla facilisi. Duis dui nulla, ornare sed efficitur vitae, aliquam vel tortor. Nunc porta varius ex. Donec id porta lacus, ac facilisis nulla. Proin sed felis nec tellus dictum commodo nec quis lorem. Nam ultrices, risus ut maximus ullamcorper, elit tellus tincidunt tortor, eu euismod turpis ipsum et leo.",
        "rating": 5
    }
]
let id = JSON.parse(localStorage.getItem('idPagina'));
let arrayComentarios = reviews.filter((e) => e.hotelId == id)
function imprimirComentarios() {
    let sectionContainer = document.getElementById("SectionContainerDetalles");
    sectionContainer.innerHTML = "";
    arrayComentarios.forEach(element => {
        let divContenedor = document.createElement('div');
        let containerEstreH3 = document.createElement('div');
        let titleComentario = document.createElement('h3');
        let containerText = document.createElement('div');
        let TextoComentario = document.createElement('p');
        let estrellaGris = 5 - element.rating;
        sectionContainer.className = "sectionContenedora";
        divContenedor.className = "contenedorComentario"
        containerEstreH3.className = "h3EstrellaComentario";
        TextoComentario.textContent = element.description;
        titleComentario.textContent = element.title;
        sectionContainer.insertAdjacentElement('beforeend', divContenedor);
        divContenedor.insertAdjacentElement('beforeend', containerEstreH3);
        divContenedor.insertAdjacentElement('beforeend',containerText)
        containerEstreH3.insertAdjacentElement('beforeend', titleComentario);
        containerText.insertAdjacentElement('beforeend',TextoComentario)
        for (i = 0; i < element.rating; i++) {
            let EstrellaLet = document.createElement("i");
            EstrellaLet.className = "fa-solid fa-star";
            containerEstreH3.insertAdjacentElement("beforeend", EstrellaLet);
        }
        for (o = 0; o < estrellaGris; o++) {
            let EstrellaLet = document.createElement("i");
            EstrellaLet.className = "fa-solid fa-star starGray";
            containerEstreH3.insertAdjacentElement("beforeend", EstrellaLet);
        }
    })
}
function crearNuevoComentario(title,raiting,comentarioo){
    let comentario = {
        "id": 1,
        "hotelId": id,
        "title": title,
        "description": comentarioo,
        "rating": raiting
    }
    arrayComentarios.push(comentario)
}
let formulario = document.getElementById("form");
formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    let titleComentarioInput = document.getElementById("TitleComentario").value;
    let ratingComentarioInput  = document.getElementById("raiting").value;
    let textAreaComentarioInput  = document.getElementById("textoComentario").value;
    crearNuevoComentario(titleComentarioInput,ratingComentarioInput,textAreaComentarioInput)
    formulario.reset()
    imprimirComentarios()
})
document.addEventListener('DOMContentLoaded', imprimirComentarios)