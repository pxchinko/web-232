const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Assignment 4.2'))
/*
============================================
; Title:  Arrays js
; Author:  Devan Wong
; Date:   18 June 2020
; Modified By:
; Description: Solving word problems.
;===========================================
*/

//
const fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];

//function takes the array and iterates though the elements until the end.
function getFruit(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//output apple - orange - banana - mango - pear
getFruit(fruits);
