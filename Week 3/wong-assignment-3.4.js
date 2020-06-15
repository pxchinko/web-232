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

//create a variable between 1-10
var arg1 = 6;

for(var i = 0; i < 10; i++) {
  //calling random function
  var arg2 = randomNumber();
  //conditional to check to see if the random num matches the given number
  if (match(arg1, arg2)) {
    logMatch(arg1, arg2)
  } else {
    logMismatch(arg1, arg2)
  }
};

//creating a function to create a random number
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

//function to check to see if the random num matches the given number
function match(arg1,arg2) {
  if (arg1 === arg2) {
    return true
  } else {
      return false;
  }
};

  //boolean to have two strings that do not match
  function logMismatch(arg1, arg2) {
    console.log(arg1 + " and " + arg2 + " do not match!");
  };
  //boolean to have two strings that do match
  function logMatch(arg1, arg2) {
    console.log(arg1 + " and " + arg2 + " do match!");
  };
