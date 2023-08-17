// JavaScript Document

let gues = parseInt(prompt("Gues what I draw: (0 - heads, 1 - tails)"));

if(gues == 0 || gues == 1){
	let draw = Math.round(Math.random());
	compare(draw,gues);
}

function compare(draw, gues){
if(draw == gues){
   		alert(`You won ! I also choose ${gues==0?"heads":"tails"}. Thanks for game.`);
   }
	else{
		alert(`You loose ! I choose ${draw==0?"heads":"tails"}. Thanks for game.`);
	}
}