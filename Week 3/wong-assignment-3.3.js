const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Assignment 3.3'))
/*
============================================
; Title:  Control Statements js
; Author:  Devan Wong
; Date:   14 June 2020
; Modified By:
; Description: Using switch [convert if/else to switch]
;===========================================
*/
//variable
let eventKeyCode = 13;
//switch statement
switch(eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.')
    break
  case 16:
    console.log('The shift key was pressed.')
    break
  case 32:
    console.log('The spacebar key was pressed.')
    break
  case 8:
    console.log('The backspace / delete key was pressed.')
    break
  default:
    console.log('Unrecognized key.')
    break
}
//output should be 'The enter key was pressed.'


// if (eventKeyCode === 13) {
//   console.log('The enter key was pressed.')
// } else if (eventKeyCode === 16) {
//   console.log('The shift key was pressed.')
// } else if (eventKeyCode === 32) {
//   console.log('The spacebar key was pressed.')
// } else if (eventKeyCode === 8) {
//   console.log('The backspace / delete key was pressed.')
// } else {
//   console.log('Unrecognized key.')
// }
