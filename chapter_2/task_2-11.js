// JavaScript Document
`use strict`;

//Current population 312 032 486
// +1 every 7 sec
// - 1 every 13 sec
// +1 imigrant every 45 sec;
	
//User input - eg. ParseInt(Prompt());
let userInput = 5; 
//  			year  day  hour minute
let secInYear = 365 * 24 * 60 * 60;


let population = 312032486;

let newHumansPerYear = secInYear/7.0;
let humandiesPerYear = secInYear/13.0;
let imigrantsPerYear = secInYear/45.0;

let currentPopulation = population + newHumansPerYear - humandiesPerYear + imigrantsPerYear;

for(let i=0;i<userInput;i++){
	currentPopulation = (currentPopulation + newHumansPerYear - humandiesPerYear + imigrantsPerYear);
}

document.getElementById("output").innerHTML = `Current population ${population} <br/>
Population after ${userInput} year: ${Math.floor(currentPopulation)}`;