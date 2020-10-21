"use strict";

//SEGUNDA PARTE EJERCICIO: DIBUJAR VARIAS PALETAS.

// console.log("hola :)");
const containerEl = document.querySelector(".container"); //es el main pero igual podría ser una section?

let palettesArray = []; //vacio

function pintarElementos(palette) {
  //VOY A EMPEZAR A PINTAR LAS PALETAS. como un h2 más divs de colores.
  const h2El = document.createElement("h2"); //elemento html h2 creado en la "nada"
  h2El.classList.add("title"); //le añado una clase para el título
  const contentH2 = document.createTextNode(palette.name); //contenido creado en la nada.
  h2El.appendChild(contentH2); //al Elemento h2El le añado un contenido
  containerEl.appendChild(h2El); //al elemento containerEl le añado el h2 con su contenido..

  const colorsArray = palette.colors; //porque sólo hay un objeto por ahora... así uso el for clásico más sencillamente pero este paso se puede saltar.

  //para pintarlo un poco mejor, añado un elemento y una clase a un div paleta que son los 5 cuadrados...
  const divEl = document.createElement("div");
  divEl.classList.add("color_palette");
  divEl.classList.add("js-color_palette"); // añado esta clase para hacer el listener

  for (let i = 0; i < colorsArray.length; i++) {
    //recorro el array de colores para crear los cuadrados de colores
    const squareEl = document.createElement("div");
    squareEl.classList.add("color_item"); //clase que tengo en css para dales alto y ancho
    squareEl.style.backgroundColor = `#${colorsArray[i]}`; //añado estilo desde JS como han pedido en el enunciado.

    // console.log(`${palettesArray[i]}`);
    divEl.appendChild(squareEl); //al contenedor le añado un divEl. lo hago X veces...
  }
  containerEl.appendChild(divEl);
}

const selectedItem = (ev) => {
  //en ev.target tenemos el cuadrado clickado pero queremos darle la clase a toda la paleta... lo buscamos con parent..
  const item = ev.target.parentElement;
  // console.log(item);
  item.classList.toggle("selected");
};

const listenElements = () => {
  const paletteElem = document.querySelectorAll(".js-color_palette");
  // console.log(paletteElem);
  for (const pal of paletteElem) {
    pal.addEventListener("click", selectedItem);
  }
};

fetch(
  "https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json"
)
  .then((response) => response.json()) //quién dice 'response' dice 'Itzi'
  .then((data) => {
    palettesArray = data.palettes; //en este caso sólo hay un objeto paleta y lo tengo en variable global.
    console.log(palettesArray);
    for (const palette of palettesArray) {
      pintarElementos(palette); //le mando sólo el objeto palette para usar la función igual que antes.
    }
    listenElements();
  })
  .catch((error) => console.log(`error: ${error}`));
