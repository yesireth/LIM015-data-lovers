import athletes from "./data/athletes/athletes.js";

export const filterData = (category, minedad, maxedad) => {

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
}
export const filterDataSport = () => {
  
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