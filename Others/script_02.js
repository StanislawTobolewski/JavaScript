// JavaScript Document

//Napisz program o nazwie Wyrocznia delficka, który w interfejsie zawierać będzie napis: 
//“To ja, przemożna Pytia – zadaj mi w myślach pytanie, a ja odpowiem czy to o czym pomyślałeś 
//się spełni” oraz przycisk “Sprawdź”. Po kliknięciu na przycisk skrypt pokaże na ekranie 
//napis: “Prawdopodobieństwo, że tak będzie wynosi: 41%” – przy czym wartość procentowa ma 
//zostać wygenerowana pseudolosowo przy każdym kliknięciu na przycisk z przedziału 1-100 (41 
//to tylko przykładowe wykonanie). Dodatkowo, jeśli prawdopodobieństwo wynosi od 0-33% to 
//napis ma być czerwony, jeśli 34-66% niebieski, a dla 67-100% zielony.

const welcomeText = `It's me, the mighty Pythia - ask me a question in your mind and I will answer whether what you thought about will come true.`

document.getElementById("info").innerHTML = welcomeText;

document.getElementById("btnCheck").addEventListener(`click`, function(){
	let chance = parseInt(Math.random()*100);
	if(chance < 33){
	   document.getElementById("output").style.backgroundColor = "#e1757f";
	   }
	else if(chance > 34 && chance < 66){
			document.getElementById("output").style.backgroundColor = "#568ac5";
			}
	else{
		document.getElementById("output").style.backgroundColor = "#62b57e";
	}
	document.getElementById("output").innerHTML = `Probability that your wish will come true is: ${chance} %.` ;
	document.getElementById("output").style.color = `#ffffff`;
	document.getElementById("output").classList.remove(`hidden`);
});

