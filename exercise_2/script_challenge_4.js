// JavaScript Document

`use strict`;

const calcTip = function (bill) {

  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

}

const calcAverage = function (arr) {
  let average = 0;
	for(let i=0;i<arr.length;i++){
		average += arr[i];
	}
		average = average/arr.length;
		return average;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

for(let i=0;i<bills.length;i++){
	tips.push(calcTip(bills[i]));
	totals.push(bills[i] + tips[i]);
}

console.log(`-------TIPS------\n`);
console.log(tips);
console.log(`-------TOTALS------\n`);
console.log(totals);

console.log(`-------AVERAGE------\n`);
console.log(calcAverage(bills));