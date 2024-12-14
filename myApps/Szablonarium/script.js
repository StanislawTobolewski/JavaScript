// JavaScript Document

`use strict`;

const CANV = document.querySelector(`canvas`);
const lbl600 = document.getElementById(`lbl600`);
const lbl680 = document.getElementById(`lbl680`);
const lbl700 = document.getElementById(`lbl700`);
const lbl1700 = document.getElementById(`lbl1700`);
const newImage = document.getElementById('loadImage');
const btnCloseInfo = document.getElementById('closeInfo');
const infoScreen = document.getElementById('infoScreen');
const btnInfoIcon = document.getElementById('info');
//-------LOAD IMAGE BTN
const loadImage = document.getElementById(`loadImage`);

let txtHeader = document.getElementById(`txtHeader`);
let txtParagraph = document.getElementById(`txtParagraph`);
let btnDownloadImage = document.getElementById(`downloadLink`);
const CTX = CANV.getContext(`2d`);

let img = new Image();
let image;
let imgOrgWidth;
let imgOrgHeight;
let imgWidth = 0;
let imgHeight = 0;
let imgOrientation = "";
let scale;

let currentBanner = "";
let rectX = 0;
let rectY = 0;
let rectWidth = 0;
let rectHeight = 0;

let header = ``;
let paragraph = ``;
let textLenght = 0;

let headerTextSize = 0;
let headerLenght = 0
let headerX = 0;
let headerY = 0;

let paragraphTextSize = 0;
let paragrapgLenght = 0;
let paragraphX = 0;
let paragraphY = 0;

btnInfoIcon.addEventListener('click', () => {
	infoScreen.classList.remove('hidden')
})

btnCloseInfo.addEventListener('click', function(){
	infoScreen.classList.add('hidden');
})

newImage.addEventListener('change', function(e){
	let file = newImage.files[0];
	imgOrgWidth = 0;
	imgOrgHeight = 0;

	window.URL = window.webkitURL || window.URL;
	fetch(file)
	.then(	image = document.createElement('img'))
	.then(console.log('file loaded'));
	image.onload = function(e){
		getOriginalDimm();
		window.URL.revokeObjectURL(file);
		checkImageOrientation();
	};
	image.src = window.URL.createObjectURL(file);
	img.src = image.src;
})

function getOriginalDimm(){
	imgOrgWidth = image.width;
 	imgOrgHeight = image.height;
}

const coloursButtons = document.querySelectorAll(`.btnColor`);
const colors = [`#33BB55`, `#202E83`, `#4764FC`, `#E45A4F`, `#F9EDAE`, `#FAD4A8`, `#131B4D`, `#D1E0FF`];
let selectedColor = 1;
let imgPosX = 0;
let imgPosY = 0;

function checkImageOrientation(){
	if(image.width>image.height){
		imgOrientation = "horizon";
	}
	else if(image.width<image.height){
		imgOrientation = "vertical";
	}
	else if(image.width == image.height){
		imgOrientation = "square";
	}
	console.log(imgOrientation);
	console.log(`W: ${image.width}, H: ${image.height}.`);
}

document.addEventListener("keydown", (e) => {
	if(e.keyCode == 39){ 
		imgPosX++;
		update();
	}
	if(e.keyCode == 37){ 
		imgPosX--;
		update();
	}
	if(e.keyCode == 40){ 
		imgPosY++;
		update();
	}
	if(e.keyCode == 38){ 
		imgPosY--;
		update();
	}
	if(e.shiftKey && e.keyCode == 39){
		imgPosX=imgPosX+10;
		update();
	}
	if(e.shiftKey && e.keyCode == 37){
		imgPosX=imgPosX-10;
		update();
	}
	if(e.shiftKey && e.keyCode == 40){
		imgPosY=imgPosY+10;
		update();
	}
	if(e.shiftKey && e.keyCode == 38){
		imgPosY=imgPosY-10;
		update();
	}
});

selectedColor = coloursButtons.forEach((button, index) =>{
	button.addEventListener(`click`, function(){
		selectedColor = index;
		update();
	});
});

function setRect(x, y, width, height){
	rectX = x;
	rectY = y;
	rectWidth = width;
	rectHeight = height;
}

// horizon, vertical, square
function scaleImage(imgSizeX, imgSizeY, id){
	CANV.width = imgSizeX;
	CANV.height = imgSizeY;
	imgPosX=0;
	imgPosY=0;
	switch(id){
		case "b600":	
			if(imgOrientation=='horizon'){		//OK
				scale = 600/imgOrgHeight;
				img.height = imgSizeY;
				img.width = imgOrgWidth * scale;
			}
			else if(imgOrientation=='vertical'){	//OK
				scale = 600/imgOrgWidth;
				img.width = imgSizeX;
				img.height = imgOrgHeight * scale;
			}
			else if(imgOrientation=='square'){
				scale = 600/imgOrgHeight;
				img.height = imgSizeY;
				img.width = imgOrgWidth * scale;
			}
			break;
		case "b680":
			if(imgOrientation=='horizon'){		//OK
				scale = 1000/imgOrgHeight;
				console.log('scale: ' + scale);
				img.height = imgSizeY;
				img.width = imgOrgWidth * scale;
			}
			else if(imgOrientation=='vertical'){	//OK
				scale = 680/imgOrgWidth;
				img.width = imgSizeX;
				img.height = imgOrgHeight * scale;
				if(img.height<imgSizeY){
					scale = 1000/imgOrgHeight;
					img.height = imgSizeY;
					img.width = imgOrgWidth * scale;
				}
			}
			else if(imgOrientation=='square'){
				scale = 1000/imgOrgHeight;
				img.height = imgSizeY;
				img.width = imgOrgWidth * scale;
			}
			break;
		case "b700":
			if(imgOrientation=='horizon'){		//OK
				scale = 400/imgOrgHeight;
				img.height = imgSizeY;
				img.width = imgOrgWidth * scale;
				if(img.width<imgSizeX){
					scale = 700/imgOrgWidth;
					img.width = imgSizeX;
					img.height = imgOrgHeight * scale;
				}
			}
			else if(imgOrientation=='vertical'){	//OK
				scale = 700/imgOrgWidth;
				img.width = imgSizeX;
				img.height = imgOrgHeight * scale;
			}
			else if(imgOrientation=='square'){
				scale = 700/imgOrgWidth;
				img.width = imgSizeX;
				img.height = imgOrgHeight * scale;
			}
			break;
		case "b1700":
			if(imgOrientation=='horizon'){		//OK
				scale = 1700/imgOrgWidth;
				img.width = imgSizeX;
				img.height = imgOrgHeight * scale;
			}
			else if(imgOrientation=='vertical'){	//OK
				scale = 1700/imgOrgWidth;
				img.width = imgSizeX;
				img.height = imgOrgHeight * scale;
			}
			else if(imgOrientation=='square'){
				scale = 1700/imgOrgWidth;
				img.width = imgSizeX;
				img.height = imgOrgHeight * scale;
			}
			break;
	}
}

const setHeader = function(event){
	header = event.target.value;
	console.log('working...');
	update();
}

const setParagraph = function(evnet){
	paragraph = event.target.value;
	update();
}

function setHeaderCoordinates(x, y, l){
	headerLenght = l;
	headerX = x;
	headerY = y;
}

function setParagraphCoordinates(x, y, l){
	paragrapgLenght = l;
	paragraphX = x;
	paragraphY = y;
}

txtHeader.addEventListener(`propertychange`, setHeader);
txtHeader.addEventListener(`input`, setHeader);
txtParagraph.addEventListener(`propertychange`, setParagraph);
txtParagraph.addEventListener(`input`, setParagraph);

function update(){
	CTX.clearRect(0,0,CANV.width, CANV.height);
	CTX.drawImage(img, imgPosX, imgPosY, img.width, img.height);
	//RECT
	CTX.beginPath();
	CTX.fillStyle = colors[selectedColor];
	CTX.roundRect(rectX, rectY, rectWidth, rectHeight, 20);
	CTX.fill();
	//-------HEADER INPUT
	CTX.fillStyle = `#ffffff`;
	CTX.font = `${headerTextSize}px Arial`;
	CTX.fillText(`${header}`,headerX, headerY, headerLenght);
	//-------PARAGRAPH INPUT
	CTX.font = `${paragraphTextSize}px Arial`;
	CTX.fillText(`${paragraph}`,paragraphX, paragraphY, paragrapgLenght);
	try{
	createDownloadLink();
	}
	catch(error){
		alert('Najpierw musisz dodać grafikę.');
	}
}

function createDownloadLink(){
		btnDownloadImage.setAttribute('download', `baner${currentBanner}.png`);
  		btnDownloadImage.setAttribute('href', CANV.toDataURL("image/png").replace("image/png", "image/octet-stream"));
		btnDownloadImage.style.backgroundColor = `#00CA4E`;
	 }

lbl600.addEventListener(`click`, function(){
	try{
		checkImageOrientation();
		scaleImage(600, 600, 'b600');
		//(left, top, width, height)
		setRect(100,390,400,145);
		textLenght = 350;
		headerTextSize = 36;
		paragraphTextSize = 24;
		setHeaderCoordinates(120, 475, 360);
		setParagraphCoordinates(120, 510, 360);
		currentBanner = "600x600";
		update();
}
catch(error){
	alert('Najpierw musisz dodać grafikę.');
}
});

lbl680.addEventListener(`click`, function(){
	try{
		checkImageOrientation();
		scaleImage(680, 1000, 'b680');
		setRect(90,720,500,220);
		textLenght = 350;
		headerTextSize = 36;
		paragraphTextSize = 24;
		setHeaderCoordinates(120, 875, 360);
		setParagraphCoordinates(120, 910, 360);
		currentBanner = "680x1000";
		update();
	}
	catch(error){
		alert('Najpierw musisz dodać grafikę.');
	}
});

lbl700.addEventListener(`click`, function(){
	try{
		checkImageOrientation();
		scaleImage(700, 400, 'b700');
		setRect(40,210,390,140);
		textLenght = 350;
		headerTextSize = 36;
		paragraphTextSize = 24;
		setHeaderCoordinates(70, 290, 360);
		setParagraphCoordinates(70, 325, 360);
		currentBanner = "700x400";
		update();
	}
	catch(error){
		alert('Najpierw musisz dodać grafikę.');
	}
});

lbl1700.addEventListener(`click`, function(){
	try{
		checkImageOrientation();
		scaleImage(1700, 800, 'b1700');
		setRect(50,446,870,300);
		textLenght = 350;
		headerTextSize = 46;
		paragraphTextSize = 34;
		setHeaderCoordinates(94, 526, 782);
		setParagraphCoordinates(94, 600, 782);
		currentBanner = "1700x800";
		update();
}
	catch(error){
		alert('Najpierw musisz dodać grafikę.');
	}
});