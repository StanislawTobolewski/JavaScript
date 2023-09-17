// JavaScript Document
`use strict`;

//User input - eg. prompt.
let mass = 55.5;
let statrTemp = 3.5;
let endTemp = 10.5;

let energy = mass * (endTemp - statrTemp) * 4184;

//console.log(`Energy needed to warm water: ${energy.toFixed(2)} joules.`);
document.getElementById("output").innerHTML = `Energy needed to warm water: ${energy.toFixed(2)} joules.`;
