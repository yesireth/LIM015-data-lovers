import athletes from "./data/athletes/athletes.js";
//console.log(athletes.athletes)

export const filterData = (category) => {
  let filteredDate;
  let arrayList = [];
  
  for (let index = 0; index < athletes.athletes.length; index++) {

    if (category === 'Atletas') {
      filteredDate = athletes.athletes[index];
      //console.log(filteredDate )
      arrayList.push(filteredDate);
    } else if (category === 'Paises') {
      filteredDate = athletes.athletes[index].team;
      arrayList.push(filteredDate);
    } else if (category === 'Deportes') {
      filteredDate = athletes.athletes[index].sport;
      arrayList.push(filteredDate);
    }

    const athlete = { 
      name: athletes.athletes[index].name,
      country:athletes.athletes[index].team,
      gender:athletes.athletes[index].gender,
      sport:athletes.athletes[index].sport,
      medal:athletes.athletes[index].medal,
      age:athletes.athletes[index].age,
      height:athletes.athletes[index].height,
      weight: athletes.athletes[index].weight,
    } 

    console.log(athlete)
  }

return arrayList;

}

  //console.log(Objathletas)}