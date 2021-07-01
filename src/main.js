// Importamos funciones desde data.js
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

//Función que oculta información previa del HOMEPAGE
function hideHomePage() {
  containerWomen.style.display = 'none';
  containerFeatured.style.display = 'none';
  containerIntro.style.display = 'none';
  containerSlide.style.display = 'none';
}
// Funcion para mostrar todos los atletas
function showAthletes() {
  containerSport.style.display = 'none';
  containerSectionAthletes.style.display = 'block'
  hideHomePage();
  containerAthletes.innerHTML = '';

  athletes.athletes.forEach(element => {
    // Crea una card para cada atleta y los inserta al HTML
    const divAthlete = document.createElement('div');
    divAthlete.classList.add("athlete")
    divAthlete.innerHTML = `
    <p data-name='${element.name}'>Nombre: ${element.name} </p>
    <p>Deporte: ${element.sport} </p>
   `
    containerAthletes.appendChild(divAthlete);
  });
  // Agrega evento a cada card de Atletas 
  const cardAthlete = document.getElementsByClassName('athlete');
  for (let i=0; i < cardAthlete.length; i++) {
    cardAthlete[i].addEventListener('click', () => {
      let nameAthlete = cardAthlete[i].querySelector('.athlete p').dataset.name;
      let infoAthlete = athletes.athletes.filter(athlete => athlete.name == nameAthlete);
      const divAthlete = document.createElement('div');
      divAthlete.classList.add("athlete-detail")
      divAthlete.innerHTML = `
      <p> Nombre: ${infoAthlete[0].name} </p>
      <p> País: ${infoAthlete[0].team} </p>
      <p> Edad: ${infoAthlete[0].age} </p>
      <p> Talla: ${infoAthlete[0].height} </p>
      <p> Peso: ${infoAthlete[0].weight} </p>
      <p> Disciplina deportiva: ${infoAthlete[0].sport} </p>
      <p> Medallas ganadas: ${infoAthlete[0].medal} </p>
      <p> Evento en que participó: ${infoAthlete[0].event} </p>
      <input type="button" value="Volver" class="button" id="goBack" onclick="goBack()"></input>
     `
      document.querySelector('.one-athlethe').appendChild(divAthlete);
    })
  }
}

// Funcion para mostrar todos los deportes
function showSport() {
  containerSectionAthletes.style.display = 'none';
  containerSport.style.display = 'block';
  hideHomePage();
  containerSport.innerHTML = "";
  const allSport = athletes.athletes.map(athlete => athlete.sport)
  let uniqueSport = allSport.filter((item,index)=>{
    return allSport.indexOf(item) === index;
  })
  //let uniqueSport = [...new Set(allSport)];
  uniqueSport.forEach(element => {
    const divSport = document.createElement('div');
    divSport.classList.add("sport");
    divSport.innerHTML = `
      <p>Deporte:<a href=#>${element} </a></p>
      <img class='imagenes-sport' src='../images/images-sport/${element}.svg' alt='${element}' width='40px'>
     `
    containerSport.appendChild(divSport);
  })
}

// Función que filtra de acuerdo a cada categoría
function filterAthletes(getData) {
  containerAthletes.innerHTML = '';
  getData.forEach(element => {
    const divAthlete = document.createElement('div');
    divAthlete.classList.add("athlete")
    divAthlete.innerHTML = `
    <p>Nombre: ${element.name} </p>
    <p>Deporte: ${element.sport} </p>
    `
    containerAthletes.appendChild(divAthlete);
  });
}

// Eventos de la HomePage
btnAthletes.addEventListener("click", showAthletes);
btnSport.addEventListener("click", showSport);
//btnCountries.addEventListener("click", filterData);

// Eventos a Página de Atletas
//const navCategory = document.querySelectorAll('.nav-subcategory');
const navCategory = document.getElementsByClassName('subcategory');

for (let i = 0; i < navCategory.length; i++) {

  navCategory[i].addEventListener("click", () => {
    let category = navCategory[i].id;
    let edadminima=navCategory[i].getAttribute("data-min");
    let edadmaxima=navCategory[i].getAttribute("data-max");
    let getData= filterData(category,edadminima,edadmaxima);
    filterAthletes (getData);
} )
}