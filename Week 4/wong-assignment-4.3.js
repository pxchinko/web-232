const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Assignment 4.3'))
/*
============================================
; Title:  Filtering js
; Author:  Devan Wong
; Date:   18 June 2020
; Modified By:
; Description: Solving word problems.
;===========================================
*/

//5 vehicle names in the array.
const vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

//iterates the forloop to display each element in the array
//if the element matches the string provided during the call, it displays that element.
function getValue(arr, str){
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === str){
      console.log(arr[i]);
    }
  }
}


//OUTPUT
console.log("-- DISPLAYING ARRAY ITEMS --");
//displaying everything in the array
for(let i = 0; i < vehicles.length; i++) {
  console.log(vehicles[i]);
}

//finding to see is the string matches the array
console.log("");
console.log("-- SELECTED VALUE --");
getValue(vehicles, "Motorcycle");

//finding to see is the string matches the array
console.log("");
console.log("-- SELECTED VALUE --");
getValue(vehicles, "Truck");
