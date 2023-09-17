// JavaScript Document
`use strict`;

let minutes = parseInt(prompt("Specify time in seconds: "));

let time = Math.round(minutes / 60 / 24);
let years = Math.round(time / 365);
let days = time % 365;

console.log(`${minutes} its about ${years} years and ${days} days.`);