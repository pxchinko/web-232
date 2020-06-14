const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Assignment 3.2'))
/*
============================================
; Title:  pattern matching functions js
; Author:  Devan Wong
; Date:   6 June 2020
; Modified By:
; Description: Word problems
;===========================================
*/
// 6 local variables with default values.
testVar1 = "Truck";
testVar2 = "Car";

testVar3 = "Bike";
testVar4 = "Bike";

testVar5 = "Four";
testVar6 = "Three";


// boolean to have two integers match
function match(arg1,arg2) {
  if (arg1 === arg2) {
    return true;
  };
  return false;
};

//boolean to have two strings that do not match
function logMismatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do not match!");
};
//boolean to have two strings that do match
function logMatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do match!");
};

//CREATED 3 iF STATEMENTS so there can be an output of all test variable [i'm sure a for loop will be used at a later week.]
//truck and car
if(match(testVar1, testVar2)){
  logMatch(testVar1, testVar2);
} else {
  logMismatch(testVar1, testVar2);
}
//bike and bike
if(match(testVar3, testVar4)){
  logMatch(testVar3, testVar4);
} else {
  logMismatch(testVar3, testVar4);
}
//four and three
if(match(testVar5, testVar6)){
  logMatch(testVar5, testVar6);
} else {
  logMismatch(testVar5, testVar6);
}
// output
console.log(match(4, 4));  //true
console.log(match(3, 2)); //false




