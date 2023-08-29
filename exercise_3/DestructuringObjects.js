// JavaScript Document

"use strict";

const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],
	openingHours:{
		thu:{
			open:12,
			close: 22,
		},
		fri:{
			open: 11,
			close: 23,
		},
		sat:{
			open: 0,
			close: 24,
		},
	},
	
	order: function(starterIndex, mainIndex){
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
	
	orderDelivery: function({starterIndex =1, mainIndex = 0, time = "20:00", adress})
	{
	console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}.`);
},
};

restaurant.orderDelivery({
	time: "22:30",
	adress: "Via del Sole, 21",
	mainIndex: 2,
	starterIndex: 2,
});

restaurant.orderDelivery({
	adress: "Via del Sole, 21",
	starterIndex: 1,
});

/*

//Destructing Objects
const {name, openingHours, categories} = restaurant;
//console.log(name, openingHours, categories);

//Destructing Objects with new names
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
//console.log(restaurantName, hours, tags);

//Destructing Objects with defauly values
const{menu = [], starterMenu: starters = []} = restaurant;
//console.log(menu, starters);

let a = 111;
let b = 999;
const obj = {a: 23, b:7, c:14};
({a,b} = obj);
//console.log(a,b);

//nested objects
const {fri: {open, close}} = openingHours;
console.log(open, close);

*/
