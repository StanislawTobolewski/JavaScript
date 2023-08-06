//JavaScript
'use strict';

//"Class" and objects

let Point = function (x, y){
	this.x = x;
	this.y = y;
}
//Metoda KLASY
Point.prototype.calcPoint = function(){
	return this.x * this.y;
}

Point.prototype.addPoint = function(){
	return this.x + this.y;
}


const point1 = new Point(2,3);
const point2 = new Point(3,4);
const point3 = new Point(4,5);


console.log(point1.calcPoint());
console.log(point2.addPoint());
console.log(point3);

//Prototypes
