"use strict";

// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

let output = "";

function readObjectValues(obj) {
  let readData = "";
  for (let [key, value] of Object.entries(obj)) {
    readData += `${value}, `;
  }
  return readData;
}

console.log(`Output:  + ${readObjectValues(student)}`);

let testArray = ["a", "b", "c", "d", "e", "f", "g", "h"];

for (let element of testArray) {
  console.log(element);
}
