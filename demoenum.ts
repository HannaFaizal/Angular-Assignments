//declare enum
enum printMedia{
    Newspaper="NEWS PAPER",
    NewsLetter="NEWS LETTER",
    Magazine="MAGAZINE",
    Book="BOOK"
}

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

const convertToUpperCase=(arrString:string[])=>{
    return arrString.map(item=>item.toUpperCase());
}

//call function
const arrNewArray:string[]=["apple","orange","grape"]
const UpperCaseArray:string[]=convertToUpperCase(arrNewArray);
console.log(UpperCaseArray);

/* write an arrow functionthat takes an array of numbers as a parameter and returns a new array with each element mutiplied by 2*/

const multipliedByTwo=(arrNumber:number[])=>{
    return arrNumber.map(item=>item*2);
}

const arrElement:number[]=[2,3,4,5]
const newArray:number[]=multipliedByTwo(arrElement);
console.log(newArray);