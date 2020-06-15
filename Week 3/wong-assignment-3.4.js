const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Assignment 3.4'))
/*
============================================
; Title:  Loops js
; Author:  Devan Wong
; Date:   14 June 2020
; Modified By:
; Description: Using switch [convert if/else to switch]
;===========================================
*/


// Next, create an if...else statement and use the match function to test if the variable in step one matches the random number created in step 3.  For true, call the logMatch function using the same two values.  For false, call the logMismatch function using the same two values.  If it is not obvious by now, you are basically wrapping a for loop around the work you did in exercise 3.2.  And, instead of using multiple if...else statements and test variables you will be using a for loop to generate the test variables and one if..else statement to check the generated values.

//create a variable between 1-10
var arg1 = 6;

for(var i = 0; i < 10; i++) {
//random number function
  var arg2 = Math.floor((Math.random() * 10) + 1);
  //function to check to see if the random num matches the given number
  function match(arg1,arg2) {
    if (arg1 === arg2) {
      return logMatch(arg1, arg2)
    } else {
        return logMismatch(arg1, arg2)
      }
  };
};

//boolean to have two strings that do not match
function logMismatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do not match!");
};
//boolean to have two strings that do match
function logMatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do match!");
};

console.log(match(arg1,arg2));
console.log(arg1,arg2);
