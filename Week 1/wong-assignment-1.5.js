/*
============================================
; Title:  Assignment 1.5.js
; Author: Devan Wong
; Date:   29 May 2020
; Description: How to display your work in your console
;===========================================
*/

// Variables
const employeeOneFirstName = 'Michael';
const employeeOneLastName = 'Scott';
const employeeOneAddress = '42 Kellum Court, Scranton PA';
const employeeOnePayRate = 39.50;
const employeeOneHireDate = new Date(2010, 0 ,1);

const employeeTwoFirstName = 'Dwight';
const employeeTwoLastName = 'Schrute';
const employeeTwoAddress = '13831 Calvert Street, Van Nuys PA';
const employeeTwoPayRate = 39.50;
const employeeTwoHireDate = new Date(2012, 30 ,4);

const employeeThreeFirstName = 'Jim';
const employeeThreeLastName = 'Halpert';
const employeeThreeAddress = '42 Kellum Court, Scranton CA';
const employeeThreePayRate = 21.63;
const employeeThreeHireDate = new Date(2013, 31 , 5);

// Output
console.log('Employee First Name: ' + employeeOneFirstName);
console.log('Employee Last Name: ' + employeeOneLastName);
console.log('Employee Address: ' + employeeOneAddress);
console.log('Employee Pay Rate:' + employeeOnePayRate.toFixed(1));
console.log('Employee Hire Date: ' + employeeOneHireDate.toLocaleDateString());

console.log('Employee First Name: ' + employeeTwoFirstName);
console.log('Employee Last Name: ' + employeeTwoLastName);
console.log('Employee Address: ' + employeeTwoAddress);
console.log('Employee Pay Rate:' + employeeTwoPayRate.toFixed(1));
console.log('Employee Hire Date: ' + employeeTwoHireDate.toLocaleDateString());

console.log('Employee First Name: ' + employeeThreeFirstName);
console.log('Employee Last Name: ' + employeeThreeLastName);
console.log('Employee Address: ' + employeeThreeAddress);
console.log('Employee Pay Rate:' + employeeThreePayRate.toFixed(1));
console.log('Employee Hire Date: ' + employeeThreeHireDate.toLocaleDateString());







// var EmployeeRecord = [
//     {
//         firstName: 'Michael',
//         lastName: 'Scott',
//         address: '42 Kellum Court, Scranton PA',
//         payRate: 39.50,
//         hireDate: new Date(2010, 0 ,1)
//     },
//     {
//         firstName: 'Dwight',
//         lastName: 'Schrute',
//         address: '1725 Slough Ave, Scranton PA',
//         payRate: 26.44,
//         hireDate: new Date(2012, 31 ,4)
//     } 
// ];
// console.log(EmployeeRecord[0].payRate.toFixed(1));
// console.log(EmployeeRecord[0].hireDate.toLocaleDateString());
// console.log(EmployeeRecord[1].payRate.toFixed(1));
// console.log(EmployeeRecord[1].hireDate.toLocaleDateString());