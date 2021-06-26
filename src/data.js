import athletes from "./data/athletes/athletes.js";

export const filterData = (category) => {
 
  const lqs = athletes.athletes.filter(a => a.gender == category);
  const lq = athletes.athletes.filter(a => a.medal == category);
  const lqss = athletes.athletes.filter(a => a.age > 60
    //{
    // if ( a.age === 15 ){
    //   console.log();
    // } 
  );
  
  // console.log(lqs);
  // console.log(lq);
  console.log(lqss)
}




  //console.log(Objathletas)}