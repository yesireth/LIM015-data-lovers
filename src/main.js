import { filterData } from './data.js';

//import data from './data/athletes/athletes.js';

//let btnSport= document.getElementById("sport");
// let btnAthletes= document.getElementById("athletes");
//let btnCountries= document.getElementById("countries");


let navigation = document.getElementsByClassName("button");

for (let i = 0; i < navigation.length; i++) {

  navigation[i].addEventListener("click", () => {

    let category = navigation[i].value;
    console.log(category);

    filterData(category);
    showAthletes(arraylist);
  })
}
function showAthletes(arraylist){
console.log(arraylist);
  // const athletes= document.querySelector('.athletes');
  // const resultathletes= document.createElement('div');
  // resultathletes.innerHTML= ´ 
  

  
  // ´
  // athletes.appendChild(resultathletes);


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