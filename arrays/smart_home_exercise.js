/* find amplitude from given array of sensors measurments - sensor errors can occure.*/
// you can have one or more arrays to proced.

"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

function calcAmplitude(array) {
  let temp = [];
  for (let item of temperatures) {
    if (typeof item == "string") continue;
    temp.push(item);
  }
  temp.sort((a, b) => {
    return a - b;
  });

  return temp[temp.length - 1] - temp[0];
}

console.log(calcAmplitude(temperatures));
