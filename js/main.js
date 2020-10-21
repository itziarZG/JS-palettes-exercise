"use strict";

//PRIMERA PARTE EJERCICIO: DIBUJAR UNA SOLA PALETA. el resto estarán en otras ramas

// console.log("hola :)");
const containerEl = document.querySelector(".container"); //es el main pero igual podría ser una section?
let palettesArray = []; //vacio

function pintarElementos() {
  //VOY A EMPEZAR A PINTAR LAS PALETAS. como un h2 más divs de colores.
  const h2El = document.createElement("h2"); //elemento html h2 creado en la "nada"
  h2El.classList.add("title"); //le añado una clase para el título
  const contentH2 = document.createTextNode(palettesArray.name); //contenido creado en la nada.
  h2El.appendChild(contentH2); //al Elemento h2El le añado un contenido
  containerEl.appendChild(h2El); //al elemento containerEl le añado el h2 con su contenido..

  const colorsArray = palettesArray.colors; //porque sólo hay un objeto por ahora... así uso el for clásico más sencillamente pero este paso se puede saltar.

  for (let i = 0; i < colorsArray.length; i++) {
    //recorro el array de colores para crear los cuadrados de colores
    const divEl = document.createElement("div");
    divEl.classList.add("color_item"); //clase que tengo en css para dales alto y ancho
    divEl.style.backgroundColor = `#${colorsArray[i]}`; //añado estilo desde JS como han pedido en el enunciado.

    // console.log(`${palettesArray[i]}`);
    containerEl.appendChild(divEl); //al contenedor le añado un divEl. lo hago X veces...
  }
}

fetch(
  "https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palette.json"
)
  .then((response) => response.json()) //quién dice 'response' dice 'Itzi'
  .then((data) => {
    palettesArray = data.palettes[0]; //en este caso sólo hay un objeto paleta y lo tengo en variable global.
    pintarElementos();
  })
  .catch((error) => console.log(`error: ${error}`)); */


