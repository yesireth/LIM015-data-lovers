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