// JavaScript Document

`use strict`;
/*
Sunday - 0
Monday - 1
Tuesday - 2
Wednesday - 3
Thursday - 4
Friday - 5
Saturday - 6
*/

const currentDay = parseInt(prompt("Enter current day: (Sunday - 0, Saturday - 6):"));

const daysNumber = parseInt(prompt("Enter number of days to calculate: "));

let day = " ";

alert(`Future day will be ${calcFutureDay(currentDay, daysNumber)}.`);

//------------------FUNCTIONS-------------------------

function calcFutureDay(currentDay, daysNumber){
	let futureDay = currentDay + daysNumber%7;
	switch(futureDay){
		case 0:
			{
				day = "Sunday";
				break;
			}
		case 1:
			{
				day = "Monday";
				break;
			}
		case 2:
			{
				day = "Tuesday";
				break;
			}
		case 3:
			{
				day = "Wenesday";
				break;
			}
		case 4:
			{
				day = "Thursday";
				break;
			}
		case 5:
			{
				day = "Friday";
				break;
			}
		case 6:
			{
				day = "Saturday";
				break;
			}
	}
	return day;
}