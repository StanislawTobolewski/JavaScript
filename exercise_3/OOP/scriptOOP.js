//JavaScript Document

`use strict`

/*
1. Napisać aplikację pozwalającą na przeliczenie temperatury zadanej w stopniach w skali
Celsjusza na temperaturę w skali Fahrenheita, mierzonej w czterech wybranych punktach
szkoły. 
2. Zakłada się, że jest to potrzebne w związku z eksploatacją wykorzystywanych
w szkole urządzeń grzewczych.
3. Dane wejściowe ‒ wartości czterech temperatur podane w skali Celsjusza ‒ wprowadzić
z klawiatury za pośrednictwem formularza. 
4. Wyniki, czyli wartości temperatur przeliczone na skalę Fahrenheita, zaprezentować na ekranie, na tej samej stronie WWW. 
5. Wykorzystać obiekty zdefiniowane za pomocą operatora new oraz konstruktora typu
obiektowego zdefiniowanego samodzielnie przy zastosowaniu podejścia klasycznego
(bez użycia klas). 
6. Wspomniany konstruktor powinien umożliwiać inicjację właściwości
obiektu odpowiadającej temperaturze w skali Celsjusza oraz przeliczenie tej temperatury
na skalę Fahrenheita.
*/


//---------- USER INPUT (eg. prompt) -------
let tempSensor01 = 21;
let tempSensor02 = 19;
let tempSensor03 = 17;
let tempSensor04 = 20;


function Temp(tempSensorVal){
	this.temperature = (tempSensorVal * 1.8) + 32;
}

Temp.prototype.showFarenheitTemp = function(){
	console.log("Temp: ", this.temperature);
}

const sensor1 = new Temp(tempSensor01);
const sensor2 = new Temp(tempSensor02);
const sensor3 = new Temp(tempSensor03);
const sensor4 = new Temp(tempSensor04);

sensor1.showFarenheitTemp();
sensor2.showFarenheitTemp();
sensor3.showFarenheitTemp();
sensor4.showFarenheitTemp();
