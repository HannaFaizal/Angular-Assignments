"use strict";
//declare enum
var printMedia;
(function (printMedia) {
    printMedia["Newspaper"] = "NEWS PAPER";
    printMedia["NewsLetter"] = "NEWS LETTER";
    printMedia["Magazine"] = "MAGAZINE";
    printMedia["Book"] = "BOOK";
})(printMedia || (printMedia = {}));
//access Enum element
// console.log(printMedia.NewsLetter.toLowerCase());
//Tuple
// var employee:[number,string]=[100,"Faihan"];
// // console.log(employee);
// employee[1]=employee[1].concat(" Kid")
// console.log(employee);
/*
ANONYMOUS FUNCTION
*/
// var varName=function(arguement:number){
// }
// let printMessage= ()=>console.log("Hello we are learning!");
// printMessage();
// const arrString: string[]=['hello','world']
const convertToUpperCase = (arrString) => {
    return arrString.map(item => item.toUpperCase());
};
//call function
const arrNewArray = ["apple", "orange", "grape"];
const UpperCaseArray = convertToUpperCase(arrNewArray);
console.log(UpperCaseArray);
/* write an arrow functionthat takes an array of numbers as a parameter and returns a new array with each element mutiplied by 2*/
const multipliedByTwo = (arrNumber) => {
    return arrNumber.map(item => item * 2);
};
const arrElement = [2, 3, 4, 5];
const newArray = multipliedByTwo(arrElement);
console.log(newArray);
