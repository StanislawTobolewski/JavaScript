`use strict`;

/*
document.querySelector(".message").textContent = "Correct Number";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 44;
console.log(document.querySelector(".guess").value);
*/
	//--------------DECLARATIONS--------------
	let selectedNumber = 0;
	let score = 20;
	let maxScore = 0;
	//-------------FUNCTIONS------------------
	const generateNumber = function(){
	selectedNumber = Math.trunc(Math.random()*20)+1;
	}
	//-------------START APPLICATION----------
	generateNumber();
	console.log(selectedNumber);	// FOR TESTS ONLY
	

document.querySelector(".again").addEventListener("click", function(){
	generateNumber();
	score = 20;
	document.querySelector(".score").textContent = "20";
	document.querySelector(".message").textContent = "Specify number.";
	document.querySelector(".guess").value = "";
	document.querySelector(".number").textContent = "?";
	document.querySelector("body").style.backgroundColor = "#171717";
	console.log(selectedNumber);
})


document.querySelector(".check").addEventListener("click", function(){
	const guess = Number(document.querySelector(".guess").value);
	if(!guess){
		document.querySelector(".message").textContent = "Enter any number."
	}else if(guess===selectedNumber){
	  	document.querySelector(".message").textContent = "YOU WIN !"
		document.querySelector(".number").textContent = selectedNumber;
		console.log("SCORE: ",score, "MAX SCORE: ",maxScore);
		if(maxScore<score){
		   maxScore = score;
			console.log("M SCORE: " + maxScore);
		   }
		document.querySelector("body").style.backgroundColor = "#60b347";
		document.querySelector(".label-highscore").textContent = "MAX SCORE: " + maxScore;
	   }
	else if(guess<selectedNumber){
			document.querySelector(".message").textContent = "Number too small"
			score--;
			}
	else if(guess>selectedNumber){
			document.querySelector(".message").textContent = "Number too big."
			score--;
			}
	document.querySelector(".score").textContent = score;
})