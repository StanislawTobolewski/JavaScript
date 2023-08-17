// JavaScript Document


const out = document.getElementById("output");
let month = Math.trunc((Math.random()*12)+1);


out.textContent = calcMonth(month);

function calcMonth(m){
	let displayMonth = "";
	switch(m){
	case 1:
			{
		displayMonth = "January";
		break;
	}
	case 2:
			{
		displayMonth = "February";
		break;
	}
	case 3:
			{
		displayMonth = "March";
		break;
	}
	case 4:
			{
		displayMonth = "April ";
		break;
	}
	case 5:
			{
		displayMonth = "May";
		break;
	}
	case 6:
			{
		displayMonth = "June";
		break;
	}
	case 7:
			{
		displayMonth = "July";
		break;
	}
	case 8:
			{
		displayMonth = "August";
		break;
	}
	case 9:
			{
		displayMonth = "September";
		break;
	}
	case 10:
			{
		displayMonth = "October";
		break;
	}
	case 11:
			{
		displayMonth = "November";
		break;
	}
	case 12:
			{
		displayMonth = "December";
		break;
	}		
}
	return displayMonth;
}
