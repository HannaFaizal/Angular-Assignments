"use strict";
const arrNumbers = [11, 22, 33, 44, 55, 66];
// arrNumbers.push(88);
// arrNumbers.pop();
// const arrFilteredNumbers=arrNumbers.filter(x=> x%2===0);
// console.log(arrFilteredNumbers);
//for adding numbers or elements to array
// arrNumbers.push(88);
//for removing
// arrNumbers.pop();
//print full name
function printFullName(firstName, lastName = "fathima") {
    console.log(`${firstName} ${lastName}`);
}
printFullName("Hanna");
//Reduce method
/*
calculate the sum of all elements in the array
*/
//old method
// function addNumbersTest(first:number,second:number){
//     return first+second;
// }
//one line code
// const addNumbers=(first:number,second:number)=>first+ second;
// const sumOfNumbers:number=arrNumbers.reduce(addNumbers,0);
// console.log(sumOfNumbers);
//array
const arrElements = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//filtering
const arrOddNumbers = arrElements.filter(x => x % 2 != 0);
console.log(arrOddNumbers); //printing odd numbers
