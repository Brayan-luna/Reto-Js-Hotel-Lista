reviews = JSON.parse(localStorage.getItem('reviews'));
let id = JSON.parse(localStorage.getItem('idPagina'));
let arrayComentarios = reviews.filter((e) => e.hotelId == id)
let botonRegresar = document.getElementById("regresar");
botonRegresar.setAttribute("href","index.html")
let hotelesImprimir = true;

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
        divContenedor.insertAdjacentElement('beforeend', containerText)
        containerEstreH3.insertAdjacentElement('beforeend', titleComentario);
        containerText.insertAdjacentElement('beforeend', TextoComentario)
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
        localStorage.setItem("reviews", JSON.stringify(arrayComentarios))
    })
}
function crearNuevoComentario(title, raiting, comentarioo) {
    let comentario = {
        "id": 1,
        "hotelId": id,
        "title": title,
        "description": comentarioo,
        "rating": raiting
    }
    arrayComentarios.push(comentario)
}
function crearItems() {
    let sectionContenedora = document.getElementById("sectionHotel");
    hoteles = JSON.parse(localStorage.getItem('Hoteles'));
    let idHotel = JSON.parse(localStorage.getItem('idPagina'));
    sectionContenedora.innerHTML = "";
    arrayHoteles = hoteles.filter((e) => e.id == idHotel)
    arrayHoteles.forEach(element => {
        sectionContenedora.className = "sectionContenedora"
        let divContainer = document.createElement("div");
        divContainer.className = "DivContainer"
        let ImgHotel = document.createElement("img");
        ImgHotel.className = "imgHotel";
        //titulo del hotel 
        let TitleHotel = document.createElement("a");
        TitleHotel.className = "TitleHotel";
        TitleHotel.addEventListener('click', (e) => {
            posicionamientoPagina(element.id)
        })
        TitleHotel.setAttribute("href", "DetallesHoteles.html")
        let divContenedorImgH3 = document.createElement('div');
        divContenedorImgH3.className = "divContendorImgH3";
        let TextDescricion = document.createElement("p");
        TextDescricion.className = "textDescripcion"
        // corazon
        let contenedorEstrellaH3 = document.createElement("div")
        let corazonFav = document.createElement('i');
        corazonFav.className = "fa-regular fa-heart";
        corazonFav.addEventListener('click', (e) => {
            clickFavorite(element.id, corazonFav)
        })
        if (element.corazon == "activado") {
            corazonFav.className = "fa-regular fa-heart corazon"
            corazonFav.style = "font-weight: 900;"
        }
        // bton filtro favoritos


        contenedorEstrellaH3.className = "containerH3Estrella"
        sectionContenedora.insertAdjacentElement("beforeend", divContainer);
        divContainer.insertAdjacentElement('beforeend', ImgHotel);
        divContainer.insertAdjacentElement('beforeend', corazonFav);
        divContainer.insertAdjacentElement('beforeend', divContenedorImgH3);
        divContenedorImgH3.insertAdjacentElement('beforeend', contenedorEstrellaH3)
        contenedorEstrellaH3.insertAdjacentElement("beforeend", TitleHotel)
        divContenedorImgH3.insertAdjacentElement('beforeend', TextDescricion)
        ImgHotel.src = element.thumbnail;
        TitleHotel.textContent = element.title
        TextDescricion.textContent = element.description
        let estrellaGris = 5 - element.rating;
        for (i = 0; i < element.rating; i++) {
            let EstrellaLet = document.createElement("i");
            EstrellaLet.className = "fa-solid fa-star";
            contenedorEstrellaH3.insertAdjacentElement("beforeend", EstrellaLet);
        }
        for (o = 0; o < estrellaGris; o++) {
            let EstrellaLet = document.createElement("i");
            EstrellaLet.className = "fa-solid fa-star starGray";
            contenedorEstrellaH3.insertAdjacentElement("beforeend", EstrellaLet);
        }
    })
}
let formulario = document.getElementById("form");
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    let titleComentarioInput = document.getElementById("TitleComentario").value;
    let ratingComentarioInput = document.getElementById("raiting").value;
    let textAreaComentarioInput = document.getElementById("textoComentario").value;
    crearNuevoComentario(titleComentarioInput, ratingComentarioInput, textAreaComentarioInput)
    formulario.reset()
    imprimirComentarios()
})
document.addEventListener('DOMContentLoaded', imprimirComentarios)
document.addEventListener('DOMContentLoaded', crearItems)