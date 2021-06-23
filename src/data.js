import athletes from "./data/athletes/athletes.js";

export const filterData = (category) => {
  let filteredDate;
  let arraylist = [];
  //console.log(category);
  for (let i = 0; i < athletes.athletes.length; i++) {

    if (category === 'Atletas') {
      filteredDate = athletes.athletes[i];
      arraylist.push(filteredDate);
    } else if (category === 'Paises') {
      filteredDate = athletes.athletes[i].team;
      arraylist.push(filteredDate);
    } else if (category === 'Deportes') {
      filteredDate = athletes.athletes[i].sport;
      arraylist.push(filteredDate);
    }
  }
  console.log(arraylist);
  return arraylist;
}
//const  Objathletas={ 
  //name: athletes.athletes[i].name,
  //   country:athletes.athletes[i].country,
  //   gender:athletes.athletes[i].gender,
  //   sport:athletes.athletes[i].sport,
  //   medal:athletes.athletes[i].medal,
  //   age:athletes.athletes[i].age,
  //   height:athletes.athletes[i].height,
  //   weight: athletes.athletes[i].weight,
  // } 
  //console.log(Objathletas)}