// JavaScript Document

"use strict";

const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],
	
	order: function(starterIndex, mainIndex){
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	}
};


let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2,4,[5,6]];
//const [i, , j] = nested;

const [i, ,[j, k]] = nested;
console.log(i,j,k);

const myArray = [8,9];
const [a=0,b=0,c=0] = myArray;

console.log(a,b,c);