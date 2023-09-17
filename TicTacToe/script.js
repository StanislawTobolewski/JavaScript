// JavaScript Document

const player01 = document.getElementById("player01");
const player02 = document.getElementById("player02");
const btnReset = document.getElementById("btnReset");
const winner = document.getElementById("winner");
const tiles = [...document.querySelectorAll(".tile")];
let score = [];
let currentPlayer = true;
let game = true;

	drawPlayer();
	tiles.forEach((item, index) => {
	  item.addEventListener('click',function(){
		  setMark(item, index);
	  })
	});

btnReset.addEventListener("click", function(){
	score = [];
	tiles.forEach(item => {
		item.style.backgroundImage = "url(img/empty.jpg)";
		drawPlayer();
		winner.classList.add("hidden");
		game = true;
	})
});

function drawPlayer(){
	currentPlayer = Math.round(Math.random());
	if(currentPlayer){
		player01.style.backgroundColor = "#ff6347";
		player02.style.backgroundColor = "#ffc0cb";
	   }
	else{
		player02.style.backgroundColor = "#ff6347";
		player01.style.backgroundColor = "#ffc0cb";
	}
}

function setMark(currentTile, index){
	if(game){
		if(score[index]!=1 && score[index]!=0){
			if(currentPlayer){
				currentTile.style.backgroundImage = "url(img/O.jpg)";
				score[index] = 1;
				checkScore();
				currentPlayer = false;
			   }
			else{
				currentTile.style.backgroundImage = "url(img/X.jpg)";
				score[index] = 0;
				checkScore();
				currentPlayer = true;
			}
		}
	}
}

function checkScore(){
	let r1 = score[0] + score[1] + score[2];
	let r2 = score[3] + score[4] + score[5];
	let r3 = score[6] + score[7] + score[8];
	
	let c1 = score[0] + score[3] + score[6];
	let c2 = score[1] + score[4] + score[7];
	let c3 = score[2] + score[5] + score[8];
	
	let x1 = score[0] + score[4] + score[8];
	let x2 = score[2] + score[4] + score[6];
	//for "O"
	if(r1==3 || r2==3 || r3==3 || c1==3 || c2==3 || c3==3 || x1==3 || x2==3){
	   	game = false;
		if(currentPlayer){
			winner.innerHTML = "Player 1 win!";
		}
		winner.classList.remove("hidden");
	   }
	//for "x"
	if(r1==0 || r2==0 || r3==0 || c1==0 || c2==0 || c3==0 || x1==0 || x2==0){
	   	game = false;
		if(!currentPlayer){
			winner.innerHTML = "Player 2 win!";
		   }
		winner.classList.remove("hidden");
	  
}
}
/*
for(let i=0;i<tiles.length;i++){
	if(tiles[i].id=="sq2x2"){
		console.log("FOUN ONE !");
	   }
}
*/