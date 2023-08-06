// JavaScript Document
`use strict`;

let price = 10;
let percentage = 15;

percentage = percentage/100;

document.getElementById("output").innerHTML = `Tip: ${price*percentage}$, summary: ${price+price*percentage}$.`