
const character = document.querySelector(".character");
const lblHighScore = document.getElementById("highScore");
const block = document.querySelector(".block");
const flyingEnemy = document.querySelector(".flying");
const flyingEnemyImage = document.querySelector(".flyingEnemy");
const game = document.getElementById("#game");
const btnJump = document.getElementById("btnJump");
const btnReset = document.getElementById("btnReset");
let lblScore = document.getElementById("score");
const lblLoseGme = document.getElementById("loseGame");
const enemy = document.querySelector(".enemy");

let characterTop = 0;
let blockLeft = 0 ;
let flyingEnemyLeft;
let playerScore = 0;
let gameSpeed = 2;
let enemyType = ["assets/ball-1.png","assets/ball-2.png","assets/ball-3.png"];
let flyingEnemyType = ["assets/flying-1.png","assets/flying-2.png","assets/flying-3.png"];
let currentEnemy = 1;
let currentFlyingEnemy = 1;

localStorage
let highScore = localStorage.getItem("higlScore");

let isAlive = true;
enemy.src = enemyType[currentEnemy];

resetFunction();

btnJump.addEventListener("click", jump);

let changeEnemy = setInterval(function(){
	blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	if(isAlive&&blockLeft+60<39){
		currentEnemy = Math.trunc(Math.random()*3);
		enemy.src = enemyType[currentEnemy];
		}
	flyingEnemyLeft = parseInt(window.getComputedStyle(flyingEnemy).getPropertyValue("left"));
	if(isAlive&&flyingEnemyLeft<0){
		currentFlyingEnemy = Math.trunc(Math.random()*3);
		flyingEnemyImage.src = flyingEnemyType[currentFlyingEnemy];
		console.log("FLY: ", currentFlyingEnemy);
		}
	},300);

function jump(){
	if(character.classList !== "animate"){
		blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	character.classList.add("animate");
	setTimeout(function(){
		character.classList.remove("animate");
	},600);
}
}
let score = setInterval(function(){
	if(isAlive){
		playerScore++;
		gameSpeed++;
		lblScore.textContent = `Your score: ${playerScore}`;
		}
	},1000);

let chcekIfDead = setInterval(function(){
	characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	flyingEnemyLeft = parseInt(window.getComputedStyle(flyingEnemy).getPropertyValue("left"));

	if((blockLeft<80 && blockLeft>50 && characterTop>=65)||(flyingEnemyLeft<80 && flyingEnemyLeft>50 && characterTop<100)){
		isAlive = false;
		flyingEnemy.classList.remove("flyingAnim");
		lblLoseGme.classList.remove("hidden");
	    block.style.animation = "0";
		if(playerScore>highScore){
			highScore = playerScore;
			localStorage.setItem("highScore", highScore);
		   lblHighScore.textContent = `High score: ${highScore}`;
		   }
		
	   }
	if(blockLeft<0){
	   block.style.left = "620px";
	   }
},10);

function resetFunction(){
	playerScore = 0;
	isAlive = true;
	lblScore.textContent = "Your score: 0";
	lblLoseGme.classList.add("hidden");
	block.style.animation = "block 2s infinite";
	block.style.left = "620px";
	flyingEnemy.style.left = "620px";
	flyingEnemy.classList.add("flyingAnim");
	console.log("RESET FUNCTIONCALL")
}

/*
btnReset.addEventListener("click", function(){
	playerScore = 0;
	isAlive = true;
	lblScore.textContent = "Your score: 0";
	lblLoseGme.classList.add("hidden");
	block.style.animation = "block 2s infinite";
	block.style.left = "620px";
	flyingEnemy.style.left = "620px";
	flyingEnemy.classList.add("flyingAnim");
})*/