// JavaScript Document
"use strict"
const compBoard = document.getElementById("compBoard");
const btnStartGame = document.getElementById("btnStart");
const btnReset = document.getElementById("btnReset");
const btnTest = document.getElementById("btnTest");
const showInfo = document.getElementById("showInfo");
const plOneLifes = document.getElementById("plOneLifes");
const plTwoLifes = document.getElementById("plTwoLifes");
showInfo.style.left = `${(window.innerWidth/2)-300}px`;

let currentPlayer = 0; // 0 - Player / 1 - Comp
let playerShipsToSet = 20;
let playerLifes = 20;
let compLifes = 20;
let gameStatus = false;

let compBoardSet = [[0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0]];

let compShoots = 	[[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0]];

let playerShoots = [[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0]];

let playerBoardSet = [[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0],
			 		[0,0,0,0,0,0,0,0]];

let compShootOptions = new Set();

function setShootOptions(inArray){
	let size = inArray.length;
	for(let i=0;i<size;i++){
		for(let j=0; j<size;j++){
			compShootOptions.add(`${i},${j}`);
		}
	}
}

printBoard(compBoardSet, "comp", compBoard);
printBoard(playerBoardSet, "player", playerBoard);

const compSquares = document.querySelectorAll(".compBoardSquare");
const playerSquares = document.querySelectorAll(".playerBoardSquare");

btnReset.addEventListener("click", function(){
	resetBoard(playerBoardSet);
	gameStatus = false;
	playerShipsToSet = 20;
	currentPlayer = 0;
	playerLifes=20;
	compLifes=20;
	clearPlayerBoard();
	clearCompBoard();
	resetBoard(playerShoots);
	resetBoard(compShoots);
	plOneLifes.innerHTML = `Player 1 lifes: ${playerLifes}`;
	plTwoLifes.innerHTML = `Player 2 lifes: ${compLifes}`;
	compShootOptions.clear();
	showInfo.classList.add("hidden");
	document.getElementById("info").innerHTML = `Set yours "ships" by clicking on board - you have ${playerShipsToSet} squares to use.`;
});

btnStartGame.addEventListener("click", function(){
	if(gameStatus==false){
		if(playerShipsToSet===0){
			setCompShips();
			gameStatus=true;
			setShootOptions(compShoots);
			game();
			}
		else{
			showInfo.innerHTML = `Please set all yours ships. ${playerShipsToSet} left to set.`;
			showInfo.classList.remove("hidden");
		}
	   }
});
//--------------------SET PLAYERS SHIPS----------------------
playerSquares.forEach(square => {
			square.addEventListener("click", function(){
				if(!gameStatus){
					if(playerShipsToSet>0 && playerBoardSet[this.id.slice(2,3)][this.id.slice(4)]==0){
						this.style.backgroundImage = "url(img/pl_ship.jpg";
						playerShipsToSet--;
						document.getElementById("info").innerHTML = `Set yours "ships" by clicking on board - you have ${playerShipsToSet} squares to use.`;
						playerBoardSet[this.id.slice(2,3)][this.id.slice(4)] = 1;
					}
				}
			});
		});

//-----------MAIN GAME BODY - FUNCTION --------------------
function game(){
	if(gameStatus){
		if(!currentPlayer){
			compSquares.forEach(item => {
			item.addEventListener("click", function(){
			let idText = this.id;
//------------------PLAYER SHOOT ------------------------
				if(playerShoots[idText.slice(2,3)][idText.slice(4)]!=1&&gameStatus){	
					if(compBoardSet[idText[2]][idText[4]] == 0){
							this.style.backgroundImage = "url(img/miss.jpg)";
							currentPlayer = true;
							compRound();
						}
						else{
							this.style.backgroundImage = "url(img/ship.jpg)";
							compLifes--;
							checkLifes();
							currentPlayer = true;
							compRound();
					}
					playerShoots[idText.slice(2,3)][idText.slice(4)] = 1
				}
				});
			});
		}
	}
}

showInfo.addEventListener(`click`, function(){
	showInfo.classList.add(`hidden`);
});

function setCompShips(){
	let tempSet = new Set();
	for(let i=0;i<8;i++){
		for(let j=0;j<8;j++){
			tempSet.add(`${i},${j}`);
		}
	}
	for(let x=0;x<20;x++){
		let tempArray = Array.from(tempSet);
		let target = Math.floor(Math.random() * tempArray.length);
		let setShip = tempArray[target].split(",");
		compBoardSet[setShip[0]][setShip[1]] = 1;
		tempSet.delete(`${setShip[0]},${setShip[1]}`);
	}
}

function checkLifes(){
	plOneLifes.innerHTML = `Player 1 lifes: ${playerLifes}`;
	plTwoLifes.innerHTML = `Player 2 lifes: ${compLifes}`;
	if(compLifes==0){
	  	gameStatus = false;
		showInfo.innerHTML = "You won ! Computer lost all ships."
		showInfo.classList.remove(`hidden`);
	   }
	if(playerLifes==0){
	   	gameStatus=false;
		showInfo.innerHTML = "You loose ! You lost all your ships."
		showInfo.classList.remove(`hidden`);
	   }
	if(playerLifes==0 && compLifes==0){
		gameStatus=false;
		showInfo.innerHTML = "No winner. You have destroyed each other."
		showInfo.classList.remove(`hidden`);
	}
	
}

function resetBoard(array){
	for(let i=0;i<array.length;i++){
		for(let j=0;j<array.length;j++){
			if(array[i][j] ==1){
				array[i][j] = 0;
			}
		}
	}
}

function takeAShoot(){
	let tempArray = Array.from(compShootOptions);
	let shoot = Math.floor(Math.random() * tempArray.length);
	let target = tempArray[shoot].split(",");
	compShootOptions.delete(`${target[0]},${target[1]}`);
	return target;
}

function setTarget(){
	return Math.floor(Math.random() * 8) + 1;
}

function compRound(){
	let x = setTarget();
	let y = setTarget();
	if(compShootOptions.size>0){
		let target = takeAShoot();
		x = target[0];
		y = target[1];
	}
	compShoots[x][y] = 1;
	if(playerBoardSet[x][y]==1){
	   document.getElementById(`sq${x}x${y}`).style.backgroundImage = "url(img/pl_ship_hit.jpg)";
		playerLifes--;
		checkLifes();
	   }
	else{
		document.getElementById(`sq${x}x${y}`).style.backgroundImage = "url(img/miss.jpg)";
	}
	currentPlayer = true;
}

function clearPlayerBoard(){
	playerSquares.forEach(square => square.style.backgroundImage = "url(img/bg.jpg)");
}

function clearCompBoard(){
	compSquares.forEach(square => square.style.backgroundImage = "url(img/bg.jpg)");
}

function printBoard(myArray, name, parent){
	let classRowName = name + "BoardRow";
	let classSquareName = name + "BoardSquare";
	for(let i=0;i<myArray.length;i++){
		let count = 0;
		let rowDiv = document.createElement("div");
		rowDiv.id = "row" + i;
		rowDiv.classList.add(classRowName);
		rowDiv.style.width = (42*myArray.length) + "px";
		parent.appendChild(rowDiv);
		for(let j=0;j<myArray[i].length;j++){
			let newDiv = document.createElement("div");
			newDiv.id = "sq" + i +"x" + j;
			newDiv.classList.add(classSquareName);
			rowDiv.appendChild(newDiv);
		}
	}
}