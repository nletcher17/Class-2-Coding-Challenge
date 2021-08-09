const input = require('readline-sync');

// Query user for array of numbers
let numbersInput = input.question("Instructions:\n" +
  "Enter an array of numbers separated by commas\n" +
  "For example: -1,0,1,2,3\n");

// Delimit, convert, and sort lowest to highest
let numbersArray = numbersInput.split(',').map(Number).sort(function(a, b){return a-b});

// Filter out non numbers
let filteredArray = numbersArray.filter(function (value) {
    return !Number.isNaN(value);
});

// Return first and last
console.log(filteredArray[0]);
console.log(filteredArray[filteredArray.length - 1]);