//Imperial units are confusing, but still in use in some backwards countries (Myanmar, Liberia and the United States
//are the only countries still using them). They are so confusing in fact, that native users struggle to convert between
//them. Write a JS function that converts from inches to feet and inches. There are 12 inches in a foot. See the
//example for formatting details.
//The input comes as an array of one string element that needs to be parsed as a number.
//The output should be printed to the console.

function name(array) {
  let inches = Number(array[0]);

  let foots = (Math.floor(inches / 12)).toFixed(0);
  let remainInches = inches % 12;
  console.log(foots + "'- " + remainInches + '"');
}

name(['36']);