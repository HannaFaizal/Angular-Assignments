let fruits:string[]=['Apple','Orange','Grape'];
// console.log(fruits);
// console.log(fruits[1]);

//Multi-type Array
// let fruitsDemo:(string|number)[]=['Apple',11,'orange',22,'Grape',33];

// for(var fruit in fruitsDemo){
//     console.log(fruit)
//     console.log(fruitsDemo[fruit])
// }

//SORT ARRAY
// var sortedArray:string[]=fruits.sort();
// console.log(sortedArray);


//DESCENDING=== ==>
var sortedArrayInDesc:string[]=fruits.sort((first,second)=>{
    if(first>second){
        return -1;  
    }
    if(first<second){
        return 1;
    
    }return 0;
});
console.log(sortedArrayInDesc,'Sorted');