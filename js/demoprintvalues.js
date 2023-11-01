"use strict";
//print values
for (let i = 1; i <= 5; i++) {
    //Inorder to delay a task by milliseconds we use set timeout
    setTimeout(function () {
        console.log(i);
    }, 2000);
}
let fNum = 400;
let sNum = 600;
//Equality
//it checks only the values
console.log(fNum == sNum);
//Identity
//It checks the type as well  as the values
console.log(fNum === sNum);
