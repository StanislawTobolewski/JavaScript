// JavaScript Document

let firstNum = Math.trunc(Math.random()*10);
let secondNum = Math.trunc(Math.random()*10);
let thirdNum = Math.trunc(Math.random()*10);

let sum = firstNum + secondNum + thirdNum;

let result = parseInt(prompt(`Enter the result of the addition ${firstNum} + ${secondNum} + ${thirdNum}:`));

if(sum === result){
   alert(`Ok ! thats good answer! ${firstNum} + ${secondNum} + ${thirdNum} = ${sum}.`);
   }else{
	   alert(`No ! thats wrong answer! ${firstNum} + ${secondNum} + ${thirdNum} = ${sum} not ${result}.`);
   }