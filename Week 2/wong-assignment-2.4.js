// header
const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Assignment 2.4'))
console.log('\n');

// add greeting and a function with
function fullName (firstName, lastName) {
  var greeting = 'Hello my name is ';
  return greeting + firstName + " " + lastName;
};

//function creating today's date in the format of year, month and date
function dateWriter (year, month, date){
  var greeting = "Today's date is ";
  var dateWriter = new Date();
  var year = dateWriter.getFullYear();
  var month = dateWriter.getMonth();
  var date = dateWriter.getDate();
  return greeting + year + "/" + month + "/" + date ;
};

//num as a value
//tofixed how many # should show after the decimal
let num = 2.12334423;
let numOfPos = 2;
//function to to return a number and its fixed positions.
function formatNumber (num, numOfPos){
  var greeting = " and the current temperature is ";
  return greeting + num.toFixed(numOfPos) + ' degrees';
}
//function grab a string and return a integer
//integer are whole numbers
function convertToInt (str) {
  var newString = parseInt(str);
  return "I am " + newString + " years old ";
}
//function to take a string and return a float number
//float number can return decimals
function convertToFloat (str) {
  var newString = parseFloat(str);
  return "and my savings account goal is " + newString + " dollars.";
}

//output
console.log(fullName("Devan", "Wong"));
console.log('\n');
console.log(dateWriter() + formatNumber(33.614,1));
console.log('\n');
console.log(convertToInt("29.123123") + convertToFloat("100000.29"));

