let arrayHoteles = [];
let urlHoteles = "hotels"
let remplazoArray = false;
let IdGlobal = 0;
let urlTest = `https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/${urlHoteles}`;


const traerDatos = fetch(urlTest, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: "*/*",
  }
})
  .then((response) => response.json())
  .then((data) => {
    arrayHoteles = data;
    console.log(data)
    crearItems()
  })
  .catch((error) => {
    alert(error)
  })


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
}
function crearItems() {
  let sectionContenedora = document.getElementById("sectionContainer");
  sectionContenedora.innerHTML = "";
  arrayHoteles.forEach(element => {
    sectionContenedora.className = "sectionContenedora"
    let divContainer = document.createElement("div");
    divContainer.className = "DivContainer"
    let ImgHotel = document.createElement("img");
    ImgHotel.className = "imgHotel";
    //titulo del hotel 
    let TitleHotel = document.createElement("a");
    TitleHotel.setAttribute("href", `DetallesHoteles.html?Id=${element.id}`)
    TitleHotel.className = "TitleHotel";
    
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
