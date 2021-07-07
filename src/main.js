// Importamos funciones desde data.js
import { filterData, statisticsData, orderData } from "./data.js";
import athletes from "./data/athletes/athletes.js";

// Elementos del HTML 
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
const sortItem= document.getElementById("producto");
const dataAthletes = athletes.athletes;

// Función que oculta información previa del Home Page
function hideHomePage() {
  containerWomen.style.display = 'none';
  containerFeatured.style.display = 'none';
  containerIntro.style.display = 'none';
  containerSlide.style.display = 'none';
}
// Ocultamos la sección de atletas de la Home Page 
containerSectionAthletes.style.display = 'none';

// Función que muestra los cards con la información previa de los ateltas de acuerdo a un array dado.
function displayCards(array, parent) {
  parent.innerHTML = '';
  // Crea una card para cada atleta y los inserta al HTML
  array.forEach(element => {
    const divAthlete = document.createElement('div');
    divAthlete.classList.add("athlete")
    divAthlete.innerHTML = `
    <img class='pic-athlete' src='./images/${element.gender}.png'>
    <p data-name = '${element.name}'> Nombre: ${element.name} </p>
    <p data-sport = '${element.sport}'> Deporte: ${element.sport} </p>
    <p>Edad: ${element.age} </p>
   `
    parent.appendChild(divAthlete);
  });
  completeAthleteInformation();
}

// Función para mostrar todos los atletas
function showAthletes() {
  // Ocultamos secciones previas y mostramos la actual
  hideHomePage();
  containerSport.style.display = 'none';
  containerStatistics.style.display = 'none';
  document.querySelector('.one-athlethe').style.display = 'none';
  containerSectionAthletes.style.display = 'flex';
  containerAthletes.innerHTML = '';   // Limpiamos el contenido previo
  const athletesWithoutDuplicates = filterData.removeDuplicateNames(dataAthletes);
  displayCards(athletesWithoutDuplicates, containerAthletes);
}

// Función que agrega evento a cada card de Atletas para mostrar información completa
function completeAthleteInformation() {
  const cardAthlete = document.getElementsByClassName('athlete');
  for (let i = 0; i < cardAthlete.length; i++) {
    cardAthlete[i].addEventListener('click', () => {
      document.querySelector('.one-athlethe').innerHTML = '';  // Elimina el contenido previo en el container
      containerSectionAthletes.style.display =  'none';
      document.querySelector('.one-athlethe').style.display =  'block';
      const selectedAthleteName = cardAthlete[i].querySelector('.athlete p').dataset.name;
      const infoAthlete = filterData.selectedAthleteInformation(selectedAthleteName, dataAthletes);
      const medalsAthlete = statisticsData.sumMedalsOfAthlethe(selectedAthleteName, dataAthletes);
      console.log(medalsAthlete);
      const divAthlete = document.createElement('div');
      divAthlete.classList.add("athlete-detail");
      divAthlete.innerHTML = `
      <p> Nombre: ${infoAthlete[0].name} </p>
      <p> País: ${infoAthlete[0].team} </p>
      <p> Edad: ${infoAthlete[0].age} </p>
      <p> Talla: ${infoAthlete[0].height} </p>
      <p> Peso: ${infoAthlete[0].weight} </p>
      <p> Disciplina deportiva: ${infoAthlete[0].sport} </p>
      <p> Medallas ganadas: </p>
      <p> Evento en que participó: ${infoAthlete[0].event} </p>
      <input type="button" value="Volver" class="button" id="goBack"></input>
     `
      document.querySelector('.one-athlethe').appendChild(divAthlete);

      // Evento al botón de volver 
      const btnGoBack = document.getElementById('goBack')
      btnGoBack.addEventListener('click', goBack);
      function goBack() {
        containerSectionAthletes.style.display =  'flex';
        document.querySelector('.one-athlethe').style.display =  'none';
      }
    })
  }
}

// Funcion para mostrar todos los deportes
function showSport() {
  hideHomePage();
  containerSectionAthletes.style.display = 'none';
  document.querySelector('.one-athlethe').style.display = 'none';
  containerStatistics.style.display = 'none';
  containerSport.style.display = 'flex';
  containerSport.innerHTML = "";
  const uniqueSport = filterData.removeDuplicateDataArray('sport', dataAthletes);
  uniqueSport.forEach(element => {
    const divSport = document.createElement('div');
    divSport.classList.add("sport");
    divSport.innerHTML = `
      <p data-sport=${element} >Deporte: ${element}</p>
      <img class='imagenes-sport' src='./images/images-sport/${element}.svg' alt='${element}'>
      `
    containerSport.appendChild(divSport);
  })
  // Agrega evento a cada card de Deportes
  const cardSport = document.getElementsByClassName('sport');
  for (let i = 0; i < cardSport.length; i++) {
    cardSport[i].addEventListener('click', () => {
      const selectedSport = cardSport[i].querySelector(".sport p").dataset.sport;
      const inforSport = athletes.athletes.filter(athlete => athlete.sport == selectedSport);
      displayCards(inforSport, informaSport)
    })
  }    
}

// Función para mostrar los paises con las estadísticas 
function showStatistics() {
  document.querySelector('.one-athlethe').style.display = 'none';
  containerSectionAthletes.style.display = 'none';
  containerSport.style.display = 'none';
  containerStatistics.style.display = 'block';
  hideHomePage();
  containerStatistics.innerHTML = "";
  const uniqueCountry = filterData.removeDuplicateDataArray('noc', dataAthletes);
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
  const totalMedalGold = statisticsData.sumMedalsCountries('Gold', dataAthletes);
  const totalMedalSilver = statisticsData.sumMedalsCountries('Silver', dataAthletes);
  const totalMedalBronze = statisticsData.sumMedalsCountries('Bronze', dataAthletes);
  uniqueCountry.forEach(country => {
    let trTable = document.createElement('tr');
    trTable.innerHTML = `
      <td class='cell-flag'> <img class='flag' src='./images/flags/${country}.png' alt='flag-${country}'> </td>
      <td> ${country} </td>
      <td class='text-center'> <img class='icon-medal' src='./images/Gold.png' alt='gold-medal'> 
      ${totalMedalGold[country]} </td>
      <td class='text-center'> <img class='icon-medal' src='./images/Silver.png' alt='silver-medal'> 
      ${totalMedalSilver[country]} </td>
      <td class='text-center'> <img class='icon-medal' src='./images/Bronze.png' alt='bronze-medal'> 
      ${totalMedalBronze[country]} </td>
      <td class='text-center'> ${totalMedalGold[country] + totalMedalSilver[country] + totalMedalBronze[country]} </td
    `
    tbodyTable.appendChild(trTable);
  })
  tableStatistics.appendChild(tbodyTable)
  containerStatistics.appendChild(tableStatistics);
  // console.log(statisticsData.totalMedals(dataAthletes));
  // console.log(statisticsData.sumMedalsByGender('F', dataAthletes));
  // console.log(statisticsData.sumMedalsByGender('M', dataAthletes));
}

// Función para selecionar tipo de orden
function showSelected(){
  filterData.removeDuplicateNames(dataAthletes, dataAthletes);
  const newordered = orderData.orderedSelect(sortItem.value, dataAthletes);
  showOrderedAthletes(newordered); ///Volver a mostrar atletas ordenados (A-Z,Z-A,menor edad y mayor edad)
}

// Función que muestra los atletas con el orden seleccionado
function showOrderedAthletes(newordered) {
  containerSport.style.display = 'none';
  containerSectionAthletes.style.display = 'flex';
  hideHomePage();
  containerAthletes.innerHTML = '';
  displayCards(newordered, containerAthletes);
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
    const category = navCategory[i].id;
    const edadminima = navCategory[i].getAttribute("data-min");
    const edadmaxima = navCategory[i].getAttribute("data-max");
    const getData = filterData.filterMultipleData(category,edadminima,edadmaxima); 
    // filterAthletes (getData);
    displayCards(getData, containerAthletes)
  })
}

// Evento para ordenar 
  sortItem.addEventListener("change", showSelected);