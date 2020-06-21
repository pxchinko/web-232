const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Assignment 4.1'))
/*
============================================
; Title:  Arrays js
; Author:  Devan Wong
; Date:   18 June 2020
; Modified By:
; Description: Using arrays 2 errors. Ready set go!
;===========================================
*/


var a = [];

a.push(1,2,3);    //output [1,2,3]
a.pop();          //output [1,2], misspelled as pops so function would not work
a.reverse();      //output [2,1]
a.push(8,5,2);    //output [2,1,8,5,2]
a.sort();         //output [1,2,2,5,8],  sort had no parentheses so it did not have any parameters to run as a function


//output [1,2,2,5,8]
console.log(a);
