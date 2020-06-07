// header
const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Assignment 2.3'))


//function property definitions
myName.devan = 'Devan';
myName.wong = 'Wong';
// function myName with the 0 parameters
//returns the value assigned to the function property
function myName() {
  return myName.devan + ' ' + myName.wong
};
//newline
console.log('\n');
//output
console.log('Hello ' + myName());
