// JavaScript Document

//Napisz skrypt, który wczytuje od użytkownika dwa słowa, po czym zamienia po kliknięciu 
//w przycisk pierwsze litery w obu wyrazach wypisując taką wersję słów pod formularzem. 
//Na przykład: “ford mustang” po kliknięciu przekształci się w: “mord fustang”.

let [in1, in2] = prompt("Enter 2 words separated by a space").split(" ");

changeText(in1, in2);

function changeText(text1, text2){

	let save = text1 + ` ` + text2;
	let char1 = text1[0];
	let char2 = text2[0];

	let changeText = in1.replace(char1,char2) + ` ` + in2.replace(char2, char1);
	document.getElementById(`output`).innerHTML = 
		`You enter:<br/>${save}. <br/><br/>Text after change:<br/> ${changeText}`;
	document.getElementById(`output`).classList.remove(`hidden`);
	
}