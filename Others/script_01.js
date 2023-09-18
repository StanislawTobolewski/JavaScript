// JavaScript Document

//Napisz program, który obliczy pole trójkąta na podstawie podanych długości trzech boków a, b, c (ale tylko pod warunkiem, że z tych boków można stworzyć trójkąt – jeśli trójkąta nie można utworzyć, to program zamiast dokonać obliczeń wypisze tekst: Z podanych boków nie sposób utworzyć trójkąta!


let input = prompt("Specify 3 sides of trinagle (separated by spaces): ");

let dtArr = input.split(" ");
let a = parseInt(dtArr[0]);
let b = parseInt(dtArr[1]);
let c = parseInt(dtArr[2]);

if((a+b>c) && (b+c>a) && (c+a>b)){
   	let p = (a + b + c)/2;
	let area = Math.sqrt(p * ((p - a) * (p - b) * (p - c)) );
	document.getElementById("output").innerHTML = `Triangle area: ${area}`;
   }
else{
	document.getElementById("output").innerHTML = `You cannot build a triangle from given segments.`;
}

console.log(typeof d, d,e,f);