// JavaScript Document


// ax + by = e
// cx + dy = f

// 3.4x + 50.2y = 44.5
// 2.1x + 0.55y = 5.9

let a = 3.4;
let b = 50.2;
let c = 2.1;
let d = 0.55;
let e = 44.5;
let f = 5.9;

if((a*d-b*c)!=0)
	{
   		let x = (e*d - b*f)/(a*d - b*c);
		let y = (a*f - e*c)/(a*d - b*c);
		console.log(`Equasion solution<br/>x= ${x}, y= ${y}.`)
    }else{
		console.log("Equation does not have solution.")
	}

