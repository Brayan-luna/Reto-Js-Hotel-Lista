let arrayHoteles = [];
let elements = [];
let arrayCorazones = [];
let urlHoteles = "hotels"
let cambioArray = false;
let IdGlobal = 0;
let filter = false;
let dataTotal = null;
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
    arrayHoteles.forEach(element=>{
      let indexElem = arrayHoteles.indexOf(element)
      arrayHoteles[indexElem].corazon = "";
    })
    console.log(data)
    dataTotal = data
    crearItems()
  })
  .catch((error) => {
    alert(error)
  })




function clickCorazon(corazonn, id) {
  arrayHoteles.forEach(element => {
    if (element.id == id) {
      if (element.corazon === "") {
        element.corazon = "activado"
        corazonn.className = "fa-regular fa-heart corazon"
        corazonn.style = "font-weight: 900;"
      }
      else {
        element.corazon = ""
        corazonn.className = "fa-regular fa-heart"
        corazonn.style = "font-weight: 400;"
        if(filter == true){

          cambioArray = true
          arrayCorazones = arrayHoteles.filter(element => element.corazon === "activado")
          crearItems()
          if(arrayCorazones.length == 0 ){
            filter =false
            arrayHoteles = dataTotal
            cambioArray = false;
            alert('No hay hoteles favoritos asi que te mandaremos a la pagina principal')
            crearItems()
            let botonFiltrar = document.getElementById("botonFavorito");
            botonFiltrar.style = "display: block"
            let botonRegresar = document.getElementById("Regresar");
            botonRegresar.style = "display: none;"
          }
        }
      }
    }
 
  })

}
function btonfiltrar() {
  filter = true;
  cambioArray = true
  arrayCorazones = arrayHoteles.filter(element => element.corazon === "activado")
  if(arrayCorazones.length == 0 ){
    alert('No hay hoteles por filtar')
  }
  else{
    crearItems()
    let botonFiltrar = document.getElementById("botonFavorito");
    botonFiltrar.style = "display: none"
    let botonRegresar = document.getElementById("Regresar");
    botonRegresar.style = "display: block;"
    botonRegresar.addEventListener('click', (e) => {
      cambioArray = false;
      filter = false;
      botonRegresar.style = "display: none;"
      botonFiltrar.style = "display: block"
      crearItems()
    })
  }
}
function crearItems() {
  let sectionContenedora = document.getElementById("sectionContainer");
  sectionContenedora.innerHTML = "";
  if (cambioArray == true) {
    arrayHoteles = arrayCorazones;
  }
  else {
    arrayHoteles = dataTotal
  }
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
      clickCorazon(corazonFav,element.id)
    })
    if (element.corazon == "activado") {
      corazonFav.className = "fa-regular fa-heart corazon"
      corazonFav.style = "font-weight: 900;"
    }
    else {
      corazonFav.className = "fa-regular fa-heart"
      corazonFav.style = "font-weight: 400;"
    }
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
let botonFiltrar = document.getElementById("botonFavorito");
botonFiltrar.addEventListener('click', btonfiltrar)
