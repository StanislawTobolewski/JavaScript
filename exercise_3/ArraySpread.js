// JavaScript Document

"use strict";

const starterMenu = ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"];
const mainMenu = ["Pizza", "Pasta", "Risotto"];

const menu = [...starterMenu, ...mainMenu];

console.log("MENU: ", menu);

const string = "Jonas";

const array = [...string];

console.log(...array);

let orderPasta = function(ing1, ing2, ing3){
	console.log(`Here is your pasta with: ${ing1}, ${ing2}, ${ing3}.`);
}

const ingridients = [prompt(`Let\'s make pasta with: `),prompt(`ing 2: `),
   prompt(`ing 3: `)];

orderPasta(...ingridients);


//------OBJJECTS-------

const kovalsky = {
	name: "Kovalsky",
	age: 36,
	adress: "Big long street 69",
	accountBalance: 2354.89,
}

const Novak = {...kovalsky, accountNr: 1234567890};

console.log(Novak);
	
	