'use strict';

// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

let myColor = ["Red", "Green", "White", "Black"];

function joinElements(array){
    console.log(array.toString());
    console.log(array.join());
    console.log(array.join('+'));
}

joinElements(myColor);