// JavaScript Document


//Current population 312 032 486
// +1 every 7 sec
// - 1 every 13 sec
// +1 imigrant every 45 sec;
	
//  			year  day  hour minute
let secInYear = 365 * 24 * 60 * 60;


let population = 312032486;

let newHumansPerYear = secInYear/7.0;
let humandiesPerYear = secInYear/13.0;
let imigrantsPerYear = secInYear/45.0;

let OneYearPopulation = population + newHumansPerYear - humandiesPerYear + imigrantsPerYear;
let TwoYearPopulation = OneYearPopulation + newHumansPerYear - humandiesPerYear + imigrantsPerYear;
let ThreeYearPopulation = TwoYearPopulation + newHumansPerYear - humandiesPerYear + imigrantsPerYear;;
let FourYearPopulation = ThreeYearPopulation + newHumansPerYear - humandiesPerYear + imigrantsPerYear;;
let FiveYearPopulation = FourYearPopulation + newHumansPerYear - humandiesPerYear + imigrantsPerYear;;

document.getElementById("output").innerHTML = `Current population ${population} <br/>
Population after one year: ${Math.floor(OneYearPopulation)}<br>
Population after two years: ${Math.floor(TwoYearPopulation)}<br/>
Population after three years: ${Math.floor(ThreeYearPopulation)}<br/>
Population after four years: ${Math.floor(FourYearPopulation)}<br/>
Population after five years: ${Math.floor(FiveYearPopulation)}<br/>`;

