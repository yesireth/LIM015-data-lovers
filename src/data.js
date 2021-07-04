import athletes from "./data/athletes/athletes.js";

export const filterData =
{
  filterMultipleData: (category, minedad, maxedad) => {
    const gender = athletes.athletes.filter(a => a.gender == category);
    const medal = athletes.athletes.filter(a => a.medal == category);
    const age = athletes.athletes.filter(a => a.age >= minedad && a.age <= maxedad);

    if (category === "F" || category === "M") {

      return gender;
    } else if (category === "Gold" || category === "Silver" || category === "Bronze") {
      return medal;
    } else {
      return age;
    }
  },
  orderedSelect: (sortItem, athletes) => {
    let orderedarray
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
        if (a.age > b.age) {
          return 1;
        }
        else if (a.age < b.age) {
          return -1;
        }
        return 0;
      }
      )
    }
    else if (sortItem == "mas-edad") {
      orderedarray = athletes.sort(function (a, b) {
        if (a.age < b.age) {
          return 1;
        }
        else if (a.age > b.age) {
          return -1;
        }
        return 0;
      }
      )

    }
return orderedarray; 
  }
}

export const statisticsData = {
  sumGold: () => {
    athletes.athletes.reduce((total, athlete) => {
      total + athlete.medal;
      console.log(total, athlete.medal)
    },0)
  }, 
  sumSilver: () => {
    athletes.athletes.reduce((total, athlete) => {
      total + athlete.medal;
      console.log(total, athlete.medal)
    },0)
  }, 
  sumBronze: () => {
    athletes.athletes.reduce((total, athlete) => {
      total + athlete.medal;
      console.log(total, athlete.medal)
    },0)
  }
}

