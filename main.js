// alert("hello")
const button1 = document.querySelector("#bton1");
button1.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const color = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = color;
  }
// --------------Contador Mas + --------------------------------------------
// --------------Contador Mas + --------------------------------------------
  const ButtonCount = document.querySelector("#contadorMas")
  ButtonCount.addEventListener('click', count);

   let contador = 0;     
   function count() {
    const suma1 = document.querySelector("#counter")
    suma1.innerText = `${contador}`
      contador++;
      //  ButtonCount.innerHTML = contador;
    }

// -------------contador (-) -------------------------------------------------
// -------------contador (-) -------------------------------------------------

const ButtonRestarUno = document.querySelector('#contadorLes');
ButtonRestarUno.addEventListener('click', () => {
    //seleccionamos el nodo con el id **counter**
    const resta1 = document.querySelector("#counter");  
    //convierte en un numero entero el valor actual del elemento counter*
    resta1.innerText = parseInt(resta1.innerText) - 1;

});

// const ButtonRestarUno = document.querySelector('#contadorMenos');
/*
--------Restar-----------------------------------------
let countar = 0;
ButtonRestarUno.addEventListener('click', () => {
  countar--;
  counter.innerText = countar;
});
---------------Sumar--------------------------------------
ButtonContar.addEventListener('click', () => {
  countar++;
  counter.innerText = countar;
});
  
*/
// ---------------------------------------------------------------
// ---------------Ejercicio Numero-3----------------------

const buttonHiden = document.querySelector("#hideText")
buttonHiden.addEventListener("click", ()=> {
    const textSpan = document.querySelector(".paragrap3")
    if (textSpan.style.display === "none") {

        textSpan.style.display = "block";

      } else {
        textSpan.style.display = "none";
      }

})
console.log(buttonHiden);
// -------------------------------------------------------
// 'style.display = 'inline'
// Valor predeterminado. Muestra un objeto de forma flotante, con contenido a uno y otro lado.
// style.display = 'block'
// Muestra un objeto en forma de bloque, ocupando una línea completa.
// style.display = 'none'
// Oculta completamente un objeto.
// --------------------------------------------------->
// --------------------------------------------------->

// Ejercicio 4
// Cuando se haga click en el botón, debe eliminarse el primer párrafo de la lista. Si no queda ninguno, no debe suceder nada, tampoco mostrar error en la consola.
const deleteButton = document.getElementById("deleteButton");

deleteButton.addEventListener("click", (event) => {
    console.log(event.target);
});



deleteButton.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "BUTTON") {
    const liP1 = document.querySelector(".parrafo1")
    liP1.remove();
  }
});


// ---------------------------------------------





// button.addEventListener("click", () => {
//   console.log("El botón se ha hecho clic");

// });















// Este array debe usarse para el ejercicio 10
const data = [
    { id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 2, name: 'ivysaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
    { id: 3, name: 'venusaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
    { id: 4, name: 'charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 5, name: 'charmeleon', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
    { id: 6, name: 'charizard', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
    { id: 7, name: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { id: 8, name: 'wartortle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
    { id: 9, name: 'blastoise', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
    { id: 10, name: 'caterpie', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
    { id: 11, name: 'metapod', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
    { id: 12, name: 'butterfree', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
    { id: 13, name: 'weedle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
    { id: 14, name: 'kakuna', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
    { id: 15, name: 'beedrill', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
    { id: 16, name: 'pidgey', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
    { id: 17, name: 'pidgeotto', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
    { id: 18, name: 'pidgeot', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
    { id: 19, name: 'rattata', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
    { id: 20, name: 'raticate', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' }
]