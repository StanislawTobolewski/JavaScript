// JavaScript Document

let outputData = "a    a^2    a^3<br/>";
let outputValues = ""

for(let i=0;i<=4;i++){
	outputValues += i + " " + i*i + " " + i*i*i +"<br/>";
}

document.getElementById("output").innerHTML = outputData + outputValues;