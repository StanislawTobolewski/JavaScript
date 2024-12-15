'use strict';

// Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

class Cyliner{
    constructor(h, r){
        this.h = h;
        this.r = r;
    }
    calcVolume(){
        return Math.PI * this.r * this.r * this.h;
    }
}

let cylinder = new Cyliner(7,2);

console.log(cylinder.calcVolume().toFixed(4));