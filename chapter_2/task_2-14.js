// JavaScript Document

`use strict`;

const weight = Number(prompt("Weight(funts): "));
const height = Number(prompt("Height(cal): "));

let BMI = 0;

const calcBMI = function(w, h){
	let weight = w*0.45359
	let height = h*0.0254;
	console.log("HEIGHT: ", height);
}
	BMI = calcBMI(weight, height);
document.querySelector("#output").textContent = BMI;