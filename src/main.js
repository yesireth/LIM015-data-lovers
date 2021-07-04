// Importamos funciones desde data.js
import { filterData, statisticsData } from "./data.js";
import athletes from "./data/athletes/athletes.js";

//***Elementos del HTML***
const containerSectionAthletes = document.querySelector('.containerSectionAthletes');
const containerAthletes = document.querySelector('.containerAthletes');
const containerWomen = document.querySelector('.women');
const containerFeatured = document.querySelector('.featured');
const containerIntro = document.querySelector('.intro');
const containerSlide = document.querySelector('.containerSlide');
const containerSport = document.querySelector('.containerSport');
const containerStatistics = document.querySelector('.containerStatistics');
const btnAthletes = document.getElementById("athletes");
const btnSport = document.getElementById("sport");
const btnStatistics = document.getElementById("statistics");
const informaSport= document.querySelector('.inforSport');
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
  containerSectionAthletes.style.display = 'flex';
  document.querySelector('.one-athlethe').style.display = 'none';
  containerStatistics.style.display = 'none';
  hideHomePage();
  containerAthletes.innerHTML = '';
  let objAthletes = {};
  athletes.athletes = athletes.athletes.filter(athlete => objAthletes[athlete.name] ? false : objAthletes[athlete.name] = true);
  athletes.athletes.forEach(element => {
    // Crea una card para cada atleta y los inserta al HTML
    const divAthlete = document.createElement('div');
    divAthlete.classList.add("athlete")
    divAthlete.innerHTML = `
    <img class='pic-athlete' src='./images/${element.gender}.png'>
    <p data-name='${element.name}'>Nombre: ${element.name} </p>
    <p>Deporte: ${element.sport} </p>
   `
    containerAthletes.appendChild(divAthlete);
  });
  // Agrega evento a cada card de Atletas 
  const cardAthlete = document.getElementsByClassName('athlete');
  for (let i=0; i < cardAthlete.length; i++) {
    document.querySelector('.one-athlethe').innerHTML = '';
    cardAthlete[i].addEventListener('click', () => {
      let nameAthlete = cardAthlete[i].querySelector('.athlete p').dataset.name;
      let infoAthlete = athletes.athletes.filter(athlete => athlete.name == nameAthlete);
      containerSectionAthletes.style.display =  'none';
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
      document.querySelector('.one-athlethe').style.display =  'block';
    })
  }
}

// Funcion para mostrar todos los deportes
function showSport() {
  containerSectionAthletes.style.display = 'none';
  containerSport.style.display = 'flex';
  document.querySelector('.one-athlethe').style.display = 'none';
  containerStatistics.style.display = 'none';
  hideHomePage();
  containerSport.innerHTML = "";
  const allSport = athletes.athletes.map(athlete => athlete.sport)
  let uniqueSport = allSport.filter((item, index) => {
    return allSport.indexOf(item) === index;
  })
  //let uniqueSport = [...new Set(allSport)];
  uniqueSport.forEach(element => {
    const divSport = document.createElement('div');
    divSport.classList.add("sport");
    divSport.innerHTML = `

      <p>Deporte:<a href=#>${element} </a></p>
      <img class='imagenes-sport' src='./images/images-sport/${element}.svg' alt='${element}' width='40px'>
      `
    containerSport.appendChild(divSport);
  })
// Agrega evento a cada card de Deportes
  const cardSport = document.getElementsByClassName('sport');
  for (let i = 0; i < cardSport.length; i++) {
    cardSport[i].addEventListener('click', () => {
      let dataSport = cardSport[i].querySelector(".sport p").dataset.sport;
      const inforSport = athletes.athletes.filter(athlete => athlete.sport == dataSport);
      inforSport.forEach(element => {
        const divInformationSport = document.createElement('div');
        divInformationSport.classList.add("informationSport");
        divInformationSport.innerHTML = `
       <p> Nombre: ${element.name} </p>  
       <p> Genero: ${element.gender} </p>
       <p> Altura: ${element.height} </p>
       <p> Peso: ${element.weight} </p>
       <p> Deporte: ${element.sport} </p>
       <p> Equipo: ${element.team}</p>
       <p> Edad: ${element.age}</p>
       <p> Evento:  ${element.event} </p>
       <p> Medalla: ${element.medal}</p> 
       `
       console.table(element);
       informaSport.appendChild(divInformationSport);
      })

    })
  }

    
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

// Función para mostrar los paises con las estadísticas 
function showStatistics() {
  containerSectionAthletes.style.display = 'none';
  containerSport.style.display = 'none';
  containerStatistics.style.display = 'block';
  document.querySelector('.one-athlethe').style.display = 'none';
  hideHomePage();
  containerStatistics.innerHTML = "";
  const allCountries = athletes.athletes.map(athlete => athlete.team)
  let uniqueCountry = allCountries.filter((item, index) => {
    return allCountries.indexOf(item) === index;
  })
  let tableStatistics = document.createElement('table');
  let tbodyTable = document.createElement('tbody');
  tableStatistics.classList.add("country");
  tableStatistics.innerHTML = `
  <thead>
    <tr> 
      <th colspan="2" class="title-country"> País </th> 
      <th> Oro </th> 
      <th> Plata </th> 
      <th> Bronce </th> 
      <th> Total </th> 
    </tr>
  </thead>
  `
  uniqueCountry.forEach(country => {
    let trTable = document.createElement('tr');
    trTable.innerHTML = `
      <td class='cell-flag'> <img class='flag' src='./images/flags/${country}.png' alt='flag-${country}'> </td>
      <td> ${country } </td>
      <td class='text-center'> <img class='icon-medal' src='./images/Gold.png' alt='gold-medal'> 1 </td>
      <td class='text-center'> <img class='icon-medal' src='./images/Silver.png' alt='silver-medal'> 5 </td>
      <td class='text-center'> <img class='icon-medal' src='./images/Bronze.png' alt='bronze-medal'> 3 </td>
      <td class='text-center'> 9 </td
    `
    tbodyTable.appendChild(trTable);
  })
  tableStatistics.appendChild(tbodyTable)
  containerStatistics.appendChild(tableStatistics);
  console.log(statisticsData.sumGold())
}

// Eventos de la HomePage
btnAthletes.addEventListener("click", showAthletes);
btnSport.addEventListener("click", showSport);
btnStatistics.addEventListener("click", showStatistics);

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