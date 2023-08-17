// JavaScript Document

`use strict`;


//USER INPUT (EG. BY PROMPT)
let distance = 900.5;
let consumption = 6.5; //liters per 100 km
let fuelPrice = 4.6;

let costs = ((distance/100)*consumption)*fuelPrice;

console.log("Trip cost: ", costs);
