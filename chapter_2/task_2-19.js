// JavaScript Document

`use strict`;

const Point = function(x,y){
	this.x = x;
	this.y = y;
}

Point.prototype.calcDistance = function(x1,y1,x2,y2){
		return Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
	}

Point.prototype.calcRectArea = function(p1, p2, p3){
	let x1 = p1.x;
	let y1 = p1.y;
	let x2 = p2.x;
	let y2 = p2.y;
	let x3 = p3.x;
	let y3 = p3.y;
	
	let a = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
	let b = Math.sqrt(Math.pow((x3-x2),2)+Math.pow((y3-y2),2));
	let c = Math.sqrt(Math.pow((x1-x3),2)+Math.pow((y1-y3),2));
	let s = (a+b+c)/2
	return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}

const point1 = new Point(1.5, -3.4);
const point2 = new Point(4.6, 5);
const point3 = new Point(9.5, -3.4);

console.log(point1.calcRectArea(point1, point2, point3));