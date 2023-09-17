// JavaScript Document
`use strict`;

//User input data eg. parseInt(Prompt());
let takeOffSpeed = 60; //in m/s
let accelerationValue = 3.5 //in m.s^2
const runwayLength = (takeOffSpeed*takeOffSpeed)/(2*accelerationValue);

document.getElementById("output").innerHTML = `minimum runway length: ${runwayLength.toFixed(3)} meters.`;
