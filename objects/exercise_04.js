'use strict';

// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

   function displayProperty(tab){
    let output = [];
    for(let item of tab){
        output.push(`Book "${item.title}" by ${item.author} was ${item.readingStatus==true?"already readed":"not read yet"}.`);
       }
       return output;
   }

   console.table(displayProperty(library));

   