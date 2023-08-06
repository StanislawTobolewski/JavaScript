// JavaScript Document

let radius = 0;
let height = 0;

radius = prompt("Specify radius: ");
height = prompt("Specify height: ");

let area = Math.PI*radius*radius;

document.getElementById("output").innerHTML = `Surface area: ${area}, Capacity: ${area*height}.`;
