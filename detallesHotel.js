let urlHoteles = "reviews"
let urlTest = `https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/${urlHoteles}`;
let reviews = [];
let id = JSON.parse(localStorage.getItem('idPagina'));

const traerDatos = fetch(urlTest, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: "*/*",
  }
})
  .then((response) => response.json())
  .then((data) => {
    reviews = data;
    imprimirComentarios()
  })
  .catch((error) => {
    console.log(error)
  })


let botonRegresar = document.getElementById("regresar");
botonRegresar.setAttribute("href", "index.html")
let hotelesImprimir = true;

function imprimirComentarios() {
  let arrayComentarios = reviews.filter((e) => e.hotelId == id)
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
  const enviarDatos = fetch(urlTest, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      comentario:comentario
    })
  })
    .then((response) => {
      response.json()
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
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