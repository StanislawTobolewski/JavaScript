// JavaScript Document
`use strict`;

const now = new Date;
const time = [now.getDay(), now.getHours(), now.getMinutes()];
//let GTM = parseInt(prompt("Specify difference to GTM time zone: "));
let GTM = -1;

console.log(`Today is ${getDay(time[0])}, it's ${(time[1]+GTM)}:${time[2]}`);

function getDay(date){
	{
	let day = "";
	switch(date){
		   case 0:{
		   day = "Sunday";
		   break;
		   }
		   case 1:{
		   day = "Monday";
		   break;
		   }
		   case 2:{
		   day = "Tuesday";
		   break;
		   }
		   case 3:{
		   day = "Wednesday";
		   break;
		   }
		   case 4:{
		   day = "Thursday";
		   break;
		   }
		   case 5:{
		   day = "Friday";
		   break;
		   }
		   case 6:{
		   day = "Saturday";
		   break;
		   }
		   }
		   return day;
}
}