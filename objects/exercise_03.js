'use strict';

// Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12,
    age: 22,
    indexNr: 'w29630' };

    function obectLenght(obj){
        let lenght = 0;
        for(let key in obj){
            lenght++;
        }
        return lenght
    }

    console.log(`Current object (${student.name}) lenght is: ${obectLenght(student)}`);