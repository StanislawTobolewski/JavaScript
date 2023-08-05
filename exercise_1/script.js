// JavaScript Document

const currentYear = 2037;

let output = document.getElementById("output");

let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let markHigherBMI = false;

function BMICALC(mass, height){
    return mass / (height * height);
}

console.log(BMICALC(massMark, heightMark));
console.log(BMICALC(massJohn, heightJohn));

if(BMICALC(massMark, heightMark)>BMICALC(massJohn, heightJohn)){
    markHigherBMI = true;
}

output.innerHTML = `Mark BMI is: ${Math.round(BMICALC(massMark, heightMark))} points.`;