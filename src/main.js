// Importamos funciones desde data.js
import { filterData } from './data.js';
<<<<<<< HEAD
// Elementos del HTML
const navigation = document.getElementsByClassName("button");
const containerAthletes = document.querySelector('.containerAthletes');
const containerWomen = document.querySelector('.women');
const containerFeatured = document.querySelector('.featured');
const containerIntro = document.querySelector('.intro');
const containerSlide = document.querySelector('.containerSlide');

// Variables globales
let category = " ";
let arrayData = " ";

//Evento para los botones
=======
//import data from './data/athletes/athletes.js';

// Elementos del HTML 
const navigation = document.getElementsByClassName("button");
const containerAthletes = document.querySelector('.athletes');

// Variables Globales 
let category;

// Eventos a los botones 
>>>>>>> d29e1c13103f83ca0b498a8d7ccf731ca45ef332
for (let i = 0; i < navigation.length; i++) {
  navigation[i].addEventListener("click", () => {
<<<<<<< HEAD

    category = navigation[i].value;
    arrayData = filterData(category);
  
    showAthletes(arrayData);
    showSport(arrayData);
  })
}

function showAthletes(arrayData) {
  // Oculta informacion previa
  containerWomen.style.display = 'none';
  containerFeatured.style.display =  'none';
  containerIntro.style.display = 'none';
  containerSlide.style.display = 'none';

  // Recorre el array y agrega un div por cada atleta
  arrayData.forEach(element =>{ 
    console.log(element.name);
   const divAthlete= document.createElement('div');
   divAthlete.classList.add("athlete")
  divAthlete.innerHTML= `
  <p>Nombre: ${element.name} </p>
  <p>Deporte: ${element.sport} </p>
  //  `
  containerAthletes.appendChild(divAthlete);
  } );
=======
    category = navigation[i].value;
    showAthletes();
  })
}
>>>>>>> d29e1c13103f83ca0b498a8d7ccf731ca45ef332

// Funcion para mostrar en pantalla los resultados
function showAthletes(){
  console.log
  const athletes = document.createElement('div');
  athletes.innerHTML = `${filterData(category)}`
  containerAthletes.appendChild(athletes)
}
function showSport(arrayData){ 
arrayData.forEach(element => {
console.log(element.sport)

});
}
console.log(showSport);

// }
    
// // const athletes= document.querySelector('.athletes');
// //  const resultathletes= document.createElement('div');
 

// //  athletes.appendChild(resultathletes);
// // console.log(resultathletes);


// // btnSport.addEventListener("click", filterData);
// // btnAthletes.addEventListener("click", filterData);
// btnCountries.addEventListener("click", filterData);