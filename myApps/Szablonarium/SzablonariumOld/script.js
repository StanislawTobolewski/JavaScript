// JavaScript Document
`use strict`;

const CANV = document.querySelector(`canvas`);
const lbl600 = document.getElementById(`lbl600`);
const lbl680 = document.getElementById(`lbl680`);
const lbl700 = document.getElementById(`lbl700`);
const lbl1700 = document.getElementById(`lbl1700`);
//-------LOAD IMAGE BTN
const loadImage = document.getElementById(`loadImage`);
const xSlider = document.getElementById(`xSlider`);
const ySlider = document.getElementById(`ySlider`);

let txtHeader = document.getElementById(`txtHeader`);
let txtParagraph = document.getElementById(`txtParagraph`);
let btnDownloadImage = document.getElementById(`downloadLink`);
let btnReady = document.getElementById(`btnReady`);
const CTX = CANV.getContext(`2d`);

let img = new Image();
let imgOrgWidth, imgOrgHeight;
let scale;

let rectX = 0;
let rectY = 0;
let rectWidth = 0;
let rectHeight = 0;
const coloursButtons = document.querySelectorAll(`.btnColor`);
const colors = [`#33BB55`, `#202E83`, `#4764FC`, `#E45A4F`, `#F9EDAE`, `#FAD4A8`, `#131B4D`, `#D1E0FF`];
let selectedColor = 0;
let imgPosX = 0;
let imgPosY = 0;

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

let cta = false;
let CTA = [];
let CTATextX = 0;
let CTATextY = 0;

window.addEventListener(`click`, (e) =>update());
selectedColor;

img.onload = function(){
	scale = 1;
	imgOrgWidth = this.width;
	imgOrgHeight = this.height;
	console.log(`Org: `, this.width, ` x `, this.height);
	console.log(`here: `, imgOrgWidth, ` x `, imgOrgHeight);
};

	selectedColor = coloursButtons.forEach((button, index) =>{
		button.addEventListener(`click`, function(){
			console.log(index);
			selectedColor = index;
			console.log(colors[selectedColor]);
		});
		update();
	});

	// loadImage.addEventListener(`click`, function(){
	// 	imgOrgWidth = this.width;
	// 	imgOrgHeight = this.height;
	// 	console.log(`Org2: `, this.width, ` x `, this.height);
	// });

var file = document.getElementById('myFile'); // the input element of type file
	 loadImage.onchange = function(e) {
	   	img.src = URL.createObjectURL(e.target.files[0]); // use first selected 
		   imgOrgWidth = img.width;
		   imgOrgHeight = img.height;
		   console.log(`Org2: `, imgOrgWidth, ` x `, imgOrgHeight);
	 }

const setHeader = function(event){
	header = event.target.value;
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

function addCta(x,y,width, height, tX, tY){
	CTA.push(x);
	CTA.push(y);
	CTA.push(width);
	CTA.push(height);
	CTATextX = tX;
	CTATextY = tY;
}

function setRect(x, y, width, height){
	rectX = x;
	rectY = y;
	rectWidth = width;
	rectHeight = height;
}

txtHeader.addEventListener(`propertychange`, setHeader);
txtHeader.addEventListener(`input`, setHeader);
txtParagraph.addEventListener(`propertychange`, setParagraph);
txtParagraph.addEventListener(`input`, setParagraph);

function scaleImage(imgSizeX, imgSizeY){
	//------THIS WORKS GOOD-------------------
	//------Vertical image ----------
	if(imgOrgHeight>imgOrgWidth){
		if(imgSizeX>=imgSizeY){
			scale = imgSizeX/imgOrgWidth;
			console.log(scale);
			img.width = imgSizeX;
			img.height = imgOrgHeight * scale;
		}
		if(imgSizeX<imgSizeY){
			//-------Loaded image width smaller than vertical canvas width
			if(imgSizeX>imgOrgWidth){
			   		scale = imgSizeX/imgOrgWidth;
					scale = (scale * 100) / 100;
					img.width = imgSizeX;
					img.height = imgOrgHeight * scale;
			   }
			//-------Loaded image width bigger than vertical canvas width
			if(imgSizeX<imgOrgWidth){
			   		scale = imgSizeX/imgOrgWidth;
					img.width = imgSizeX;
					img.height = imgOrgHeight * scale;
			   }
		   }
	   
	   }
	// COSIK NIE DZIALA
	//------Horizontal image
	//-----600x600 ok
	else if(imgOrgWidth>imgOrgHeight){
		if(imgSizeX>imgSizeY){
			if(imgOrgHeight<imgSizeY){
				console.log(`we are here`);
				scale = imgSizeY/imgOrgHeight;
			   	img.height = imgSizeY;
				img.width = imgOrgWidth * scale;
				console.log(img.width, ` x `, img.height);
			   }
//			if(true){
//				
//			}   
//			scale = imgSizeX/imgOrgWidth;
//			console.log(scale);
			//img.width = imgSizeX;
			//img.height = imgOrgHeight * scale;
		}
		if(imgSizeY>imgSizeX){
		   	scale = imgSizeY/imgOrgHeight;
			console.log(`scale: `,scale);
			img.height = imgSizeY;
			img.width = imgOrgWidth * scale;
			console.log(img.width);
		   }
		}
	//------THIS WORKS GOOD-------------------
	//------Square image-----------------
	else if(imgOrgWidth === imgOrgHeight){
		if(imgSizeX>=imgSizeY){
			scale = imgSizeX/imgOrgWidth;
			console.log(scale);
			img.width = imgSizeX;
			img.height = imgOrgHeight * scale;
		}
		if(imgSizeY>imgSizeX){
		   	scale = imgSizeY/imgOrgHeight;
			console.log(`scale: `,scale);
			img.height = imgSizeY;
			img.width = imgOrgWidth * scale;
			console.log(img.width);
		   }
	}
}

function paintCta(){
	if(cta === true){
		CTX.beginPath();
	    CTX.fillStyle = `#ffffff`;
		//CTX.roundRect(CTA[0], CTA[1], CTA[2], CTA[3], 10);
		//CTX.fillRect(CTA[0], CTA[1], CTA[2], CTA[4]);
		CTX.roundRect(CTA[0], CTA[1], CTA[2], CTA[3], 10);
		CTX.fill();
		//------DRAW CTA-----------
		CTX.fillStyle = colors[selectedColor];
		CTX.font = `bold 28px Arial`;
		CTX.fillText(`Sprawdź`,CTATextX, CTATextY);
	   }
}

function update(){
	CTX.clearRect(0,0,CANV.width, CANV.height);
	CTX.drawImage(img, imgPosX, imgPosY, img.width, img.height);
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
	//-------PAINT CTA AREA--------
	paintCta();
}

// 600x600, 680x1000, 1700x8000, 700x400
CANV.width = 600;
CANV.height = 600;

xSlider.onchange = function(){
	CTX.clearRect(0,0,CANV.width, CANV.height);
	imgPosX = Number(xSlider.value);
	 // draw the image to the canvas
}

ySlider.onchange = function(){
	CTX.clearRect(0,0,CANV.width, CANV.height);
	imgPosY = Number(ySlider.value);
}

btnReady.addEventListener(`click`, function(){
		btnDownloadImage.setAttribute('download', 'baner.png');
  		btnDownloadImage.setAttribute('href', CANV.toDataURL("image/png").replace("image/png", "image/octet-stream"));
		 btnReady.style.backgroundColor = `#008000`;
		 btnDownloadImage.style.backgroundColor = `#ff0000`;
	 });
	 
lbl600.addEventListener(`click`, function(){
	CTA = [];
	CANV.width = 600;
	CANV.height = 600;
	textLenght = 350;
	headerTextSize = 36;
	paragraphTextSize = 24;
	//setHeader();
	xSlider.style.width = `600px`;
	xSlider.max = 300;
	xSlider.min = -300;
	ySlider.min = -300;
	ySlider.max = 300;
	scaleImage(600, 600);
	setRect(100,390,400,145);
	
});

lbl680.addEventListener(`click`, function(){
	CTA = [];
	CANV.width = 680;
	CANV.height = 1000;
	textLenght = 630;
	headerTextSize = 48;
	paragraphTextSize = 36;
	setHeaderCoordinates(80, 736, 520);
	setParagraphCoordinates(80, 790, 520);
	xSlider.style.width = `680px`;
	xSlider.max = 340;
	xSlider.min = -340;
	ySlider.min = -500;
	ySlider.max = 500;
	scaleImage(680, 1000);
	setRect(32,625,616,333);
	cta = true;
	addCta(80, 834, 165, 75, 105, 880);
});

lbl700.addEventListener(`click`, function(){
	CTA = [];
	CANV.width = 700;
	CANV.height = 400;
	setHeaderCoordinates(94, 526, 650);
	setParagraphCoordinates(94, 600, 650);
	xSlider.style.width = `700px`;
	xSlider.max = 350;
	xSlider.min = -350;
	ySlider.min = -200;
	ySlider.max = 200;
	scaleImage(700, 400);
	setRect(40,40,346,155);
});

lbl1700.addEventListener(`click`, function(){
	CTA = [];
	CANV.width = 1700;
	CANV.height = 800;
	setHeaderCoordinates(94, 526, 650);
	setParagraphCoordinates(94, 600, 650);
	xSlider.style.width = `1700px`;
	xSlider.max = 850;
	xSlider.min = -850;
	ySlider.min = -400;
	ySlider.max = 400;
	scaleImage(1700, 800);
	setRect(47, 422, 750, 335);
	cta = true;
	addCta(95, 650, 175, 60, 120, 690);
	console.log(CTA);
});