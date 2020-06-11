const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Assignment 3.1'))
/*
============================================
; Title:  control statements.js
; Author:  Devan Wong
; Date:   6 June 2020
; Modified By: Sarah Massie
; Description: 2 Errors please fix.
;===========================================
*/

for (var i = 0; i <= 10; i++) { // remove const because i is already declared
  // i cannot be a const because it is a variable equal to a value, not a reference to a value
if (i == 5) {
  console.log ('this hit five');
} else {
  console.log('i = ' + i );
}
}
