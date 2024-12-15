'use strict';

// Write a JavaScript program that accepts a string as input and swaps the case of each character. 
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

let inputText = 'The Quick Brown Fox';

function convertText(text){
    let myArray = text.split('');

    for(let i=0; i< myArray.length; i++){
        if (myArray[i] == myArray[i].toUpperCase()) {
            myArray[i]=myArray[i].toLocaleLowerCase();
        }
        else if (myArray[i] == myArray[i].toLowerCase()){
            myArray[i]=myArray[i].toLocaleUpperCase();
        }
    }
    myArray = myArray.join('');
    return myArray
}

console.log(convertText(inputText));