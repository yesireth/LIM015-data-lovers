// Importamos funciones desde data.js
import { filterData } from './data.js';

// Elementos del HTML
const navigation = document.getElementsByClassName("button");
const containerAthletes = document.querySelector('.containerAthletes');
const containerWomen = document.querySelector('.women');
const containerFeatured = document.querySelector('.featured');
const containerIntro = document.querySelector('.intro');
const containerSlide = document.querySelector('.containerSlide');
const containerSport = document.querySelector('.containerSport');
  
// Elementos del HTML 
//const navigation = document.getElementsByClassName("button");
//const containerAthletes = document.querySelector('.athletes');
// Variables globales
let category = " ";
let arrayData = " ";

//Evento para los botones

//import data from './data/athletes/athletes.js';


// Eventos a los botones 

for (let i = 0; i < navigation.length; i++) {
  navigation[i].addEventListener("click", () => {


    category = navigation[i].value;
    arrayData = filterData(category);
  
    showAthletes(arrayData);
    showSport(arrayData);
    // Oculta informacion previa
containerWomen.style.display = 'none';
containerFeatured.style.display = 'none';
containerIntro.style.display = 'none';
containerSlide.style.display = 'none';

  })

}

function showAthletes(arrayData) {

  // Recorre el array y agrega un div por cada atleta
  arrayData.forEach(element => {
   // console.log(element.name);
    const divAthlete = document.createElement('div');
    divAthlete.classList.add("athlete")
    divAthlete.innerHTML = `
  <p>Nombre: ${element.name} </p>
  <p>Deporte: ${element.sport} </p>
   `
    containerAthletes.appendChild(divAthlete);

  });
}
function showSport(arrayData) {
  //containerAthletes.style.display = 'none';

  console.log(arrayData);
  arrayData.forEach(element => {
    const divSport = document.createElement('div');
    divSport.classList.add("sport");
    divSport.innerHTML = `

<p>Deporte: ${element}</p>

`
    containerSport.appendChild(divSport);
    //console.log(element);
  })
}


// }

// // const athletes= document.querySelector('.athletes');
// //  const resultathletes= document.createElement('div');
 

// //  athletes.appendChild(resultathletes);
// // console.log(resultathletes);

// // btnSport.addEventListener("click", filterData);
// // btnAthletes.addEventListener("click", filterData);
// btnCountries.addEventListener("click", filterData);