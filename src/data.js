//gitimport athletes from "./data/athletes/athletes.js";

export const filterData = {
  removeDuplicateNames: (athletes) => {
    let objAthletes = {};
    const filterDuplicateAthletes = athletes
    .filter(athlete => objAthletes[athlete.name] ? false : objAthletes[athlete.name] = true);
    return filterDuplicateAthletes;
  },
  
  selectedAthleteInformation: (selectedAthleteName, athletes)  => {
    return athletes.filter(athlete => athlete.name == selectedAthleteName);
  },
  removeDuplicateDataArray: (category, athletes)  => {
    const allData = athletes.map(athlete => athlete[category]);
    // let uniqueSport = [...new Set(allSport)];
    const uniqueData = allData.filter((item, index) => {
      return allData.indexOf(item) === index;
    })
    return uniqueData;
  },

  filterMultipleData: (category, minedad, maxedad,athletes) => {
    const gender = athletes.filter(a => a.gender == category);
    const medal =athletes.filter(a => a.medal == category);
    const age = athletes.filter(a => a.age >= minedad && a.age <= maxedad);

    if (category === "F" || category === "M") {
      return gender;
    } else if (category === "Gold" || category === "Silver" || category === "Bronze") {
      return medal;
    } else {
      return age;
    }
  }
}

export const orderData = {
  orderedSelect: (sortItem, athletes) => {
    let orderedarray;
    if (sortItem == "A-Z") {
      orderedarray = athletes.sort(function (a, b) {
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
          return 1;
        }
        else if (a.name.toUpperCase() < b.name.toUpperCase()) {
          return -1;
        }
        return 0;
      }
      )
    }
    else if (sortItem == "Z-A") {
      orderedarray = athletes.sort(function (a, b) {
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
          return 1;
        }
        else if (a.name.toUpperCase() > b.name.toUpperCase()) {
          return -1;
        }
        return 0;
      }
      )
    }
    else if (sortItem == "menos-edad") {
      orderedarray = athletes.sort(function (a, b) {
        // if (a.age > b.age) {
        //   return 1;
        // }
        // else if (a.age < b.age) {
        //   return -1;
        // }
        // return 0;
        return a.age - b.age;
      }
      )
    }
    else if (sortItem == "mas-edad") {
      orderedarray = athletes.sort(function (a, b) {
        // if (a.age < b.age) {
        //   return 1;
        // }
        // else if (a.age > b.age) {
        //   return -1;
        // }
        // return 0;
        return b.age - a.age;
      }
      )
    }
  return orderedarray; 
  }
}

export const statisticsData = {
  sumMedalsCountries: (medal, athletes) => {
    const medalsByCountry = athletes
    .filter(athlete => athlete.medal === medal )
    // .reduce((count, athlete) => (count[athlete.team] ? count[athlete.team] += 1 : count[athlete.team] = 1, count), [])
    .reduce((count, athlete) => {
      if (count[athlete.noc]){
        count[athlete.noc] += 1;
      } 
       else {
        count[athlete.noc] = 1
      }
      return count;
    }, [])
    console.log(medalsByCountry);
    return medalsByCountry;
  },
  sumMedalsOfAthlethe: (nameAthlete, athletes) => {
    const medalsByAthlete = athletes
    .filter(athlete => athlete.name === nameAthlete)
    .reduce((count, athlete) => (count[athlete.medal] ? count[athlete.medal] += 1 : count[athlete.medal] = 1, count), [])
    let counter= 0
    if('Bronze' in medalsByAthlete){
      counter += medalsByAthlete.Bronze;
    } 
    if ('Gold' in medalsByAthlete){
      counter += medalsByAthlete.Gold;
    }
    if ('Silver' in medalsByAthlete){
      counter += medalsByAthlete.Silver;
    }
      return counter;

  }, 
  // totalMedals: (athletes) => {
  //   const totalMedals = athletes
  //   .reduce((count, athlete) => (count[athlete.medal] ? count[athlete.medal] += 1 : count[athlete.medal] = 1, count), [])
  //   //return totalMedals;
  //   console.log(totalMedals);
  // },
  // sumMedalsByGender: (gender, athletes) => {
  //   const medalsByGender= athletes
  //   .filter(athlete => athlete.gender === gender)
  //   .reduce((count, athlete) => (count[athlete.medal] ? count[athlete.medal] += 1 : count[athlete.medal] = 1, count), [])
  //   return medalsByGender;
}

