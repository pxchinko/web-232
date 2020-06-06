/*
============================================
; Title:  function properties.js
; Author: Devan Wong
; Date:    5 June 2020
; Description: Working with word problems
;===========================================
*/
const header = require('../wong-header.js');


//function property definitions
myName.devan = 'Devan';
// function myName with the 0 parameters
//returns the value assigned to the function property
function myName() {
  return myName.devan
};
//output
console.log(myName());


//console.log(header.display('Devan', 'Wong', 'Assignment 2.3'));
