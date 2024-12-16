'use strict';

// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

function printObject(obj){
    console.table(obj);
}

function deleteValue(obj, value){
    delete obj[value];
}

printObject(student);
deleteValue(student, 'rollno');
printObject(student);