// Importamos funciones desde data.js
import { filterData } from './data.js';
//import data from './data/athletes/athletes.js';

// Elementos del HTML 
const navigation = document.getElementsByClassName("button");
const containerAthletes = document.querySelector('.athletes');

// Variables Globales 
let category;

// Eventos a los botones 
for (let i = 0; i < navigation.length; i++) {
  navigation[i].addEventListener("click", () => {
    category = navigation[i].value;
    showAthletes();
  })
}

// Funcion para mostrar en pantalla los resultados
function showAthletes(){
  console.log
  const athletes = document.createElement('div');
  athletes.innerHTML = `${filterData(category)}`
  containerAthletes.appendChild(athletes)
}

// const athletes= document.querySelector('.athletes');
//  const resultathletes= document.createElement('div');
//  resultathletes.innerHTML= ´ 
 
 
 
//  ´

//  athletes.appendChild(resultathletes);
// console.log(resultathletes);


// btnSport.addEventListener("click", filterData);
// btnAthletes.addEventListener("click", filterData);
// btnCountries.addEventListener("click", filterData);