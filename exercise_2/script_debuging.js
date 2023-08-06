`use strict`;

const  measureKelvin = function(){
	const mesurment = {
		type: "temperature",
		unit: "celcius",
		//value: Number(prompt("Degrees celcius: "))
		calue: 0
	}
	
	const kelvin = mesurment.value + 273;
	return kelvin;
}
console.log(measureKelvin());