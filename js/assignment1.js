"use strict";
//write a function that takes array of numbers and returns
//sum of all the elements
// function sumArray(){
//     var sum:number=0;
//     var numArray: number[]=[11,21,31,41];
//     var sums:any;
//     for(sums of numArray){
//         sum=sum+sums;
//     }
//     console.log("Sum of Elements "+sum);
// }
// sumArray();
//declare array
var arrList = [11, 21, 31, 41];
//function
function arrSum(arrList) {
    var sum = 0;
    //for loop
    for (var element of arrList) {
        sum = sum + element;
    }
    //return sum
    return sum;
}
//function call to a variable
var sumArr = arrSum(arrList);
console.log("Sum of Elements " + sumArr);
