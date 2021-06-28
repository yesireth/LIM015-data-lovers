// Importamos funciones desde data.js
//import { filterData } from './data.js';
import { filterData } from "./data.js";
import athletes from "./data/athletes/athletes.js";

//***Elementos del HTML***
const containerSectionAthletes = document.querySelector('.containerSectionAthletes');
const containerAthletes = document.querySelector('.containerAthletes');
const containerWomen = document.querySelector('.women');
const containerFeatured = document.querySelector('.featured');
const containerIntro = document.querySelector('.intro');
const containerSlide = document.querySelector('.containerSlide');
const containerSport = document.querySelector('.containerSport');
const btnAthletes = document.getElementById("athletes");
const btnSport = document.getElementById("sport");
containerSectionAthletes.style.display = 'none';

// ***Oculta informacion previa del HOMEPAGE***
function hideHomePage() {
  containerWomen.style.display = 'none';
  containerFeatured.style.display = 'none';
  containerIntro.style.display = 'none';
  containerSlide.style.display = 'none';
}
//***Funcion para mostrar los atletas***
function showAthletes() {
  containerSport.style.display = 'none';
  containerSectionAthletes.style.display = 'block'
  hideHomePage();
  athletes.innerHTML = '';

  athletes.athletes.forEach(element => {
    const divAthlete = document.createElement('div');
    divAthlete.classList.add("athlete")
    divAthlete.innerHTML = `
    <p>Nombre: ${element.name} </p>
    <p>Deporte: ${element.sport} </p>
   `
    containerAthletes.appendChild(divAthlete);
  });
}
//***Funcion para mostrar los deportes***
function showSport() {
  containerSectionAthletes.style.display = 'none';
  containerSport.style.display = 'block';
  hideHomePage();
  containerSport.innerHTML = "";
  const allSport = athletes.athletes.map(athlete => athlete.sport)
  let uniqueSport = [...new Set(allSport)];
  uniqueSport.forEach(element => {
    console.log(element);
    const divSport = document.createElement('div');
    divSport.classList.add("sport");
    divSport.innerHTML = `
    <p>Deporte:<a href=#>${element} </a></p>
   
   <img class="imagenes-sport" src='../images/images-sport/${element}.svg' alt='${element}' width='40px'>

     `
    containerSport.appendChild(divSport);
  })
}

// Eventos de la HomePage
btnAthletes.addEventListener("click", showAthletes);
btnSport.addEventListener("click", showSport);
//btnCountries.addEventListener("click", filterData);

// Eventos a Pagina de Atletas
//const navCategory = document.querySelectorAll('.nav-subcategory');
const navCategory = document.getElementsByClassName('subcategory');

for (let i = 0; i < navCategory.length; i++) {

  navCategory[i].addEventListener("click", () => {
    let category = navCategory[i].id;
    filterData(category);

} )
}