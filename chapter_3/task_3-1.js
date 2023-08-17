// JavaScript Document



let celsius = 0;
celsius = prompt("Enter the temperature in degrees Celsius");
celsius = parseFloat(celsius);

console.log(typeof celsius);

let farenheit = (9.0 / 5.0) * celsius + 32;

console.log(`Celsius degree: ${celsius}, Fahrenheit degree: ${farenheit}.`);