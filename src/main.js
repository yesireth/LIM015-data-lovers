// Importamos funciones desde data.js
import { filterData, statisticsData, orderData } from "./data.js";
import athletes from "./data/athletes/athletes.js";

// Elementos del HTML 
const containerSectionAthletes = document.querySelector('.containerSectionAthletes');
const containerAthletes = document.querySelector('.containerAthletes');
const containerWomen = document.querySelector('.women');
const containerFeatured = document.querySelector('.featured');
const containerIntro = document.querySelector('.intro');
const containerSlide = document.querySelector('.container-slider');
const containerSport = document.querySelector('.containerSport');
const containerStatistics = document.querySelector('.containerStatistics');
const btnHome = document.getElementById("home");
const btnAthletes = document.getElementById("athletes");
// const btnGoogleMaps = document.getElementById("btnGoogleMaps");
const btnSport = document.getElementById("sport");
const btnStatistics = document.getElementById("statistics");
const sortItem= document.getElementById("order");
const menuBar = document.querySelector('.menu-bar i');
const iconFilter = document.querySelector('.container-icon-filter i');

// Data completa
const dataAthletes = athletes.athletes;
//Data filtrada
const athletesWithoutDuplicates = filterData.removeDuplicateNames(dataAthletes);


// Función que oculta información previa del Home Page
function hideHomePage() {
  containerWomen.style.display = 'none';
  containerFeatured.style.display = 'none';
  containerIntro.style.display = 'none';
  containerSlide.style.display = 'none';
}
// Ocultamos la sección de atletas de la Home Page 
containerSectionAthletes.style.display = 'none';

// Funcion para selecionar slides
const slides = document.querySelectorAll('.slide');
const btnSlides = document.querySelectorAll('.btn-slide');
let currentSlide = 1; //eslint-disable-line

function activeSlide(slide){
  slides.forEach(slide =>  {
    slide.classList.remove('active');
  });
  btnSlides.forEach(btn => {
    btn.classList.remove('btn-slide-active');
  })
  slides[slide].classList.add('active');
  btnSlides[slide].classList.add('active' ,'btn-slide-active');
}

function checkSlide(numSlide) {
  activeSlide(numSlide);
  currentSlide = numSlide;
}

btnSlides.forEach((btn, index) => {
  btn.addEventListener(('click'), () => {
  let checked = index;
  checkSlide(checked)
  });
});

// Funcion para volver a la home page
function showHomePage() {
  containerSectionAthletes.style.display = 'none';
  containerSport.style.display = 'none';
  containerStatistics.style.display = 'none';
  containerWomen.style.display = 'block';
  containerFeatured.style.display = 'block';
  containerIntro.style.display = 'flex';
  containerSlide.style.display = 'flex';
}

// Muestra la navegacion al hacer click en el icono de menu
function displayNavigation() {
  if(menuBar.classList.contains('fa-bars')){
    menuBar.classList.remove('fa-bars');
    menuBar.classList.add('fa-times', 'nav-show')
    document.querySelector('nav').classList.remove('nav-hide')
  } else {
    menuBar.classList.remove('fa-times');
    menuBar.classList.add('fa-bars')
    document.querySelector('nav').classList.add('nav-hide')
  }
}

// Muestra la lista de categorias al hacer click en el icono de filtrar
function displayListCategory() {
  document.querySelector('.container-nav-category').style.display = 'block';
}
// Oculta la lista de categorias al hacer click en el icono de x
function hideListCategories() {
  document.querySelector('.container-nav-category').style.display = 'none';
}

// Google Chart Participacion de mujeres
google.charts.load('current', {'packages':['corechart']}); //eslint-disable-line
google.charts.setOnLoadCallback(drawChart); //eslint-disable-line

function drawChart() {
  let tabla = [];
  tabla.unshift(['Medallas', 'Cantidad'])
  const dataCorrecta = statisticsData.sumMedalsByGender('F', dataAthletes)
  // console.log(Object.values(dataCorrecta))

  for (const key in dataCorrecta) {
    tabla.push([key, dataCorrecta[key]])
  }
 
  const data = google.visualization.arrayToDataTable(tabla ); //eslint-disable-line

  const options = {
    title: 'Medallas obtenidas por las Mujeres'
  };

  const chart = new google.visualization.PieChart(document.getElementById('piechart')); //eslint-disable-line

  chart.draw(data, options);
}

// Función que muestra los cards con la información previa de los ateltas de acuerdo a un array dado.
function displayCards(array, parent) {
  parent.innerHTML = '';
  // Crea una card para cada atleta y los inserta al HTML
  array.forEach(element => {
    const divAthlete = document.createElement('div');
    divAthlete.classList.add("athlete")
    divAthlete.innerHTML = `
    <img class='country-athlete' src='./images/flags/${element.noc}.png'>
    <img class='pic-athlete' src='./images/${element.gender}.png'>
    <div class='name-athlete'> <img class='sport-athlete'src='./images/images-sport/${element.sport}.svg' 
    alt='${element.sport}'> <p data-name = '${element.name}'>${element.name}</p> </div>
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
  menuBar.classList.remove('fa-times');
  document.querySelector('nav').classList.add('nav-hide')
  menuBar.classList.add('fa-bars')
  hideHomePage();
  containerSport.style.display = 'none';
  containerStatistics.style.display = 'none';
  document.querySelector('.one-athlethe').style.display = 'none';
  containerSectionAthletes.style.display = 'flex';
  containerAthletes.innerHTML = '';   // Limpiamos el contenido previo
  displayCards(athletesWithoutDuplicates, containerAthletes);
}

// // Función que agrega evento a cada card de Atletas para mostrar información completa
function completeAthleteInformation() {
  const cardAthlete = document.getElementsByClassName('athlete');
  for (let i = 0; i < cardAthlete.length; i++) {
    cardAthlete[i].addEventListener('click', () => {
      // informaSport.style.display = 'none';//ocultar todos los atletas
      document.querySelector('.one-athlethe').innerHTML = '';  // Elimina el contenido previo en el container
      containerSectionAthletes.style.display = 'none';
      document.querySelector('.one-athlethe').style.display = 'block';
      const selectedAthleteName = cardAthlete[i].querySelector('.athlete p').dataset.name;
      const infoAthlete = filterData.selectedAthleteInformation(selectedAthleteName, dataAthletes);
      const medalsAthlete = statisticsData.sumMedalsOfAthlethe(selectedAthleteName, dataAthletes);
      // console.log(statisticsData.sumMedalsOfAthlethe('Denis Mikhaylovich Ablyazin', dataAthletes))
      const divAthlete = document.createElement('div');
      divAthlete.classList.add("athlete-detail");
      divAthlete.innerHTML = `
      <img class='country-athlete' src='./images/flags/${infoAthlete[0].noc}.png'>
      <img class='pic-athlete' src='./images/${infoAthlete[0].gender}.png'>
      <div class='name-athlete'> <img class='sport-athlete'src='./images/images-sport/${infoAthlete[0].sport}.svg' 
      alt='${infoAthlete[0].sport}'> <p data-name = '${infoAthlete[0].name}'>${infoAthlete[0].name}</p> </div>
      <div class='file-athlete'>
      <span> País: </span> <p> ${infoAthlete[0].team} </p>
      <span> Edad: </span> <p>  ${infoAthlete[0].age} años </p>
      <span> Altura: </span> <p>  ${infoAthlete[0].height / 100} m. </p>
      <span> Peso: </span> <p>  ${infoAthlete[0].weight} kg. </p>
      <span> Deporte: </span> <p>  ${infoAthlete[0].sport} </p>
      <span> Medallas ganadas: </span> ${medalsAthlete}<p>  </p>
      </div>
      <input type="button" value="Volver" class="button" id="goBack"></input>
     `
      document.querySelector('.one-athlethe').appendChild(divAthlete);

      // Evento al botón de volver 
      const btnGoBack = document.getElementById('goBack')
      btnGoBack.addEventListener('click', goBack);
      function goBack() {
        containerSectionAthletes.style.display = 'flex';
        document.querySelector('.one-athlethe').style.display = 'none';
      }
    })
  }
}

// // Funcion para mostrar todos los deportes
function showSport() {
  menuBar.classList.remove('fa-times');
  document.querySelector('nav').classList.add('nav-hide')
  menuBar.classList.add('fa-bars')
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
      <p data-sport='${element}' > ${element}</p>
      <div class='circle'><img class='imagenes-sport' src='./images/emojiSport/${element}.png' alt='${element}'></div>
      `
    containerSport.appendChild(divSport);
  })
  // Agrega evento a cada card de Deportes
  const cardSport = document.getElementsByClassName('sport');
 //informaSport.innerHTML='';
  for (let i = 0; i < cardSport.length; i++) {
    cardSport[i].addEventListener('click', () => {
      containerSport.style.display = 'none';
      containerSectionAthletes.style.display = 'block';
      const selectedSport = cardSport[i].querySelector(".sport p").dataset.sport;
      const inforSport = athletes.athletes.filter(athlete => athlete.sport == selectedSport);
      displayCards(inforSport, containerAthletes)
    })
  }
}

function showStatistics() {
  menuBar.classList.remove('fa-times');
  document.querySelector('nav').classList.add('nav-hide');
  menuBar.classList.add('fa-bars')
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


    let trDinamico,totalMedalBronze_temp,totalMedalGold_temp,totalMedalSilver_temp;

    trDinamico=`<td class='cell-flag'> <img class='flag' src='./images/flags/${country}.png' alt='flag-${country}'> </td>
    <td> ${country} </td>`

    if(totalMedalGold[country] ===undefined){
      totalMedalGold_temp = 0
      trDinamico+=`<td class='text-center'> <img class='icon-medal' src='./images/Gold.png' alt='gold-medal'>0</td>` 
    }
    else{
      totalMedalGold_temp = totalMedalGold[country]
      trDinamico+=`<td class='text-center'> <img class='icon-medal' src='./images/Gold.png' alt='gold-medal'> ${totalMedalGold[country]} </td>` 
    }

    if(totalMedalSilver[country] ===undefined){
      totalMedalSilver_temp= 0
      trDinamico+=`<td class='text-center'> <img class='icon-medal' src='./images/Silver.png' alt='silver-medal'>0</td>` 
    }
    else{
      totalMedalSilver_temp= totalMedalSilver[country]
      trDinamico+=`<td class='text-center'> <img class='icon-medal' src='./images/Silver.png' alt='silver-medal'> ${totalMedalSilver[country]} </td>` 
    }

    if(totalMedalBronze[country] ===undefined){
      totalMedalBronze_temp = 0;
      trDinamico+=`<td class='text-center'> <img class='icon-medal' src='./images/Bronze.png' alt='bronze-medal'>0</td>` 
    }
    else{
      totalMedalBronze_temp = totalMedalBronze[country]
      trDinamico+=`<td class='text-center'> <img class='icon-medal' src='./images/Bronze.png' alt='bronze-medal'>${totalMedalBronze[country]}</td>` 
    }
    trDinamico+=`<td class='text-center'> ${totalMedalGold_temp +  totalMedalSilver_temp + totalMedalBronze_temp} </td>`
    
    trTable.innerHTML = trDinamico
    
    tbodyTable.appendChild(trTable);
  })
  tableStatistics.appendChild(tbodyTable)
  containerStatistics.appendChild(tableStatistics);
}

// Función para selecionar tipo de orden
function showSelected() {
  const newordered = orderData.orderedSelect(sortItem.value, athletesWithoutDuplicates);
  showOrderedAthletes(newordered); ///Volver a mostrar atletas ordenados (A-Z,Z-A,menor edad y mayor edad);
}

// Función que muestra los atletas con el orden seleccionado
function showOrderedAthletes(newordered) {
  containerSport.style.display = 'none';
  containerSectionAthletes.style.display = 'flex';
  hideHomePage();
  containerAthletes.innerHTML = '';
  displayCards(newordered, containerAthletes);
}

// Función. para mostrar los paises con las estadísticas 
function showCharts() {
  showStatistics();
  hideHomePage();
  // const showCharts = document.createElement('div');
  // showCharts.classList.add("athlete-detail");
  // showCharts.innerHTML = `
  //     <p> Mapa de medallas de oro </p>
  //     `

  // showCharts1.appendChild('showCharts');

  google.charts.setOnLoadCallback(drawRegionsMap);//eslint-disable-line
}
function drawRegionsMap() {

  const totalMedalGold = statisticsData.sumMedalsCountries('Gold', dataAthletes);
  //const totalMedalSilver = statisticsData.sumMedalsCountries('Silver', dataAthletes);
  //const totalMedalBronze = statisticsData.sumMedalsCountries('Bronze', dataAthletes);

  //let table = [];

 // let oro= [];
  let table=[];
  for (var i in totalMedalGold) {
    table.push([i.substring(0, 2), totalMedalGold[i]]);
  }
  // for( let a in totalMedalSilver){
  //  plata.push([a.substring(0, 2),totalMedalSilver [a]]);
 // }
  //let table = Array(...oro,...plata);
  table[0] = ['Country', 'Total medallas de Oro'];
  //table[1] = ['Country', 'medallas de Plata'];

//  console.log(table);

  var data = google.visualization.arrayToDataTable(table); //eslint-disable-line
  var options = {};
  
  var chart = new google.visualization.GeoChart(document.getElementById('regions_div')); //eslint-disable-line

  chart.draw(data, options);
}

// Eventos de la HomePage
btnAthletes.addEventListener("click", showAthletes);
btnSport.addEventListener("click", showSport);
//btnStatistics.addEventListener("click", showStatistics);
btnStatistics.addEventListener("click", showCharts,showStatistics);
btnHome.addEventListener("click", showHomePage);

// Eventos a Página de Atletas
//const navCategory = document.querySelectorAll('.nav-subcategory');
const navCategory = document.getElementsByClassName('subcategory');
for (let i = 0; i < navCategory.length; i++) {
  navCategory[i].addEventListener("click", () => {
    hideListCategories();
    const category = navCategory[i].id;
    const edadminima = navCategory[i].getAttribute("data-min");
    const edadmaxima = navCategory[i].getAttribute("data-max");
    const getData = filterData.filterMultipleData(category, edadminima, edadmaxima,athletesWithoutDuplicates);
    displayCards(getData, containerAthletes)
  })
}
// Evento para ordenar
sortItem.addEventListener("change", showSelected);

// Evento al input de búsqueda 
const inputSearch = document.querySelector('#search');
inputSearch.addEventListener('keyup', displayResultSearch);
function displayResultSearch() {
  const search = inputSearch.value.toLowerCase();
  const resultSearch = filterData.searchResult(athletesWithoutDuplicates, search);
  hideHomePage();
  containerSectionAthletes.style.display = 'flex';
  displayCards(resultSearch, containerAthletes)
}

// Eventos a los icono del menu
menuBar.addEventListener('click', displayNavigation)
iconFilter.addEventListener('click', displayListCategory)
document.querySelector('#icon-x').addEventListener('click', hideListCategories);

