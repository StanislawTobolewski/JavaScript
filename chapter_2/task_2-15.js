// JavaScript Document

`use strict`;

const Point = function(x,y){
	this.x = x;
	this.y = y;
}

Point.prototype.calcDistance = function(x1,y1,x2,y2){
		return Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
	}

const point1 = new Point(1.5, -3.4);
const point2 = new Point(4, 5);

console.log(point1.calcDistance(point1.x,point1.y,point2.x,point2.y));