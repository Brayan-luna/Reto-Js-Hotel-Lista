let arrayHoteles = [
  {
    "id": 1,
    "title": "Downtown Hotel",
    "thumbnail": "https://picsum.photos/id/369/400/400",
    "rating": "5",
    "description": "Integer at pulvinar risus. Morbi bibendum metus sem, quis rhoncus dui vulputate nec. Maecenas bibendum nisl vel scelerisque volutpat. Quisque convallis, sem ac facilisis malesuada, purus nibh pellentesque risus, nec pretium nisl tortor sed ipsum. In vitae lectus imperdiet, hendrerit velit vitae, condimentum elit. Aenean aliquet at sapien sit amet efficitur. Curabitur condimentum fringilla justo a maximus.",
    "corazon": "",
  },
  {
    "id": 2,
    "title": "Fairytail castle",
    "thumbnail": "https://picsum.photos/id/1040/400/400",
    "rating": "4",
    "description": "Nulla condimentum urna et nisl fermentum consectetur. Sed nisl tortor, bibendum at neque a, laoreet vulputate urna. Vestibulum ultrices augue id ligula sollicitudin, et sagittis odio posuere. Nunc fermentum libero quis ex aliquam, vel accumsan nisl tristique. Suspendisse vitae rhoncus mauris. Ut rutrum mollis odio, ultrices scelerisque lacus mattis eget. Praesent lorem nibh, tincidunt vel ultricies ac, tempor sed orci. In hac habitasse platea dictumst. Nulla facilisi. Aenean urna augue, fringilla non dui a, auctor fringilla eros. Suspendisse dui mauris, mollis sit amet mi at, venenatis sagittis urna. Pellentesque interdum ex eget tincidunt hendrerit. Nulla facilisi.",
    "corazon": "",
  },
  {
    "id": 3,
    "title": "Local Bed and Breakfast",
    "thumbnail": "https://picsum.photos/id/437/400/400",
    "rating": "3",
    "description": "Sed vestibulum in enim et consectetur. Cras volutpat sagittis pretium. Sed eget dapibus metus, sit amet laoreet arcu. Praesent gravida odio sed pretium viverra. Suspendisse ornare elit ut purus tristique, tempor accumsan mi eleifend. Integer ultrices velit eu felis dignissim, sed vulputate libero commodo. Donec consequat arcu non consequat sollicitudin.",
    "corazon": "",
  },
  {
    "id": 4,
    "title": "Huge Hotel",
    "thumbnail": "https://picsum.photos/id/1031/400/400",
    "rating": "1",
    "description": "Nulla condimentum urna et nisl fermentum consectetur. Sed nisl tortor, bibendum at neque a, laoreet vulputate urna. Vestibulum ultrices augue id ligula sollicitudin, et sagittis odio posuere. Nunc fermentum libero quis ex aliquam, vel accumsan nisl tristique. Suspendisse vitae rhoncus mauris. Ut rutrum mollis odio, ultrices scelerisque lacus mattis eget. Praesent lorem nibh, tincidunt vel ultricies ac, tempor sed orci. In hac habitasse platea dictumst. Nulla facilisi. Aenean urna augue, fringilla non dui a, auctor fringilla eros. Suspendisse dui mauris, mollis sit amet mi at, venenatis sagittis urna. Pellentesque interdum ex eget tincidunt hendrerit. Nulla facilisi.",
    "corazon": "",
  }
]
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
let remplazoArray = false;
let IdGlobal = 0;
//BOTONES REGRESAR Y FILTRAR
let botonFavoritos = document.getElementById("botonFavorito")
let botonRegresar = document.getElementById("Regresar");
botonRegresar.addEventListener("click",regresarHoteles)
botonFavoritos.addEventListener('click',filtrarFavoritos)

function filtrarFavoritos() {
  botonRegresar.style = "display: block"
  let arrayHoteles = JSON.parse(localStorage.getItem('Hoteles'));
  let arrayCorazones = arrayHoteles.filter((e) => e.corazon == "activado")
  localStorage.setItem("Favoritos", JSON.stringify(arrayCorazones))
  remplazoArray = true;
  crearItems()
}
function regresarHoteles(){
  crearItems()
}

localStorage.setItem("reviews", JSON.stringify(reviews))
function guardar() {
  arrayTareas = JSON.parse(localStorage.getItem('Hoteles'));
  localStorage.setItem("Hoteles", JSON.stringify(arrayHoteles));
}
guardar()
function clickFavorite(id, corazon) {
  IdGlobal = id
  arrayHoteles.forEach(element => {
    if (element.id == IdGlobal) {
      if (element.corazon === "") {
        element.corazon = "activado"
        corazon.className = "fa-regular fa-heart corazon"
        corazon.style = "font-weight: 900;"
      }
      else {
        element.corazon = ""
        corazon.className = "fa-regular fa-heart"
        corazon.style = "font-weight: 400;"
      }
    }
  })
  guardar()
}
function posicionamientoPagina(id) {
  let idPagina = id;
  localStorage.setItem("idPagina", JSON.stringify(idPagina));
}
function crearItems() {
  let sectionContenedora = document.getElementById("sectionContainer");
  arrayHoteles = JSON.parse(localStorage.getItem('Hoteles'));
  sectionContenedora.innerHTML ="";
  if (remplazoArray === true) {
    arrayHoteles = JSON.parse(localStorage.getItem('Favoritos'));
    sectionContenedora.innerHTML =""
    remplazoArray = false;
  }
 else{
  arrayHoteles = JSON.parse(localStorage.getItem('Hoteles'));
 }
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
document.addEventListener('DOMContentLoaded', crearItems)