//JavaScript
'use strict';

let bills = [125,555,44];

let tips = [0,0,0];

let totals = [0,0,0];

function calcTip(bill){
	let temp = 0;
	if(bill>=50 && bill<=300){
		temp = bill * 0.15;
	}
	else{
		temp = bill * 0.20;
	}
	return temp;
}

for(let i = 0; i<bills.length;i++){
	tips[i] = calcTip(bills[i]);
	totals[i] = tips[i] + bills[i];
}

console.log("Tips: " + tips);
console.log("Totals: " + totals);





