//JavaScript Document

`use strict`

//Selecting elements
const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");
const score0EL = document.querySelector("#score--0");
const score1EL = document.querySelector("#score--1");
const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");
const diceEL = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");


//Starting Conditions
score0EL.textContent = "0";
score1EL.textContent = "0";
diceEL.classList.add("hidden");
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnHold.addEventListener("click", function(){
	
	scores[activePlayer] += currentScore;
	
	document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
	
	if(scores[activePlayer]>=20){
		document.querySelector(`.player--${activePlayer}`).classList.remove("player--actives");
		document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
	}else{
		changePlayers();
	}
});

//Rolling dice functionality
btnRoll.addEventListener("click", function(){
	//Generate random roll
	let dice = Math.trunc(Math.random()*6)+1;
	//Display dice
	diceEL.classList.remove("hidden");
	diceEL.src = `res/dice-${dice}.png`;
	console.log(dice);
	
	if(dice!=1){
		//Add dice to current score
		currentScore += dice;
		document.getElementById(`current--${activePlayer}`).textContent = currentScore; 
		//classList.toggle - check for class and change it if its not there;
		//document.querySelector(`.player--${activePlayer}`).classList.add("player--active");
		
	}else{
		//switch to next player
		document.getElementById(`current--${activePlayer}`).textContent = 0;
		//classList.toggle - check for class and change it if its not there;
		//document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
		currentScore = 0;
		changePlayers();
	}
})

function changePlayers(){
	currentScore = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	document.getElementById(`current--${activePlayer}`).textContent = 0;
	player0EL.classList.toggle("player--active");
	player1EL.classList.toggle("player--active");
}



