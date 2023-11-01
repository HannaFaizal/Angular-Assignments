/* ASSIGNMENT

1.Converts a specified number to an array of digits
eg: 7895 arr[0]=7 arr[1]=8....

2.To Capitalize the first letter of a string
eg: varsha ---- Varsha

3.Removes non-printable ASCII characters from a given string
eg: Hello\x00World\x1F\! output:Hello World

*/



//Question No.1
 
//getting the number
var number = Number(window.prompt("Enter Any Number: "));

//split the number into array by converting to string
var arrNumber = String(number).split("").map((number)=>{ 
  //return as number
    return Number(number) 
}) 
console.log(arrNumber); 



//Question No.2

// function to capitalize first letter
function capitalizeFirstLetter(myWord: string): string {
    return myWord.charAt(0).toUpperCase() + myWord.slice(1);
  }  
  ///getting value from the user
  const word = String(window.prompt("Enter the word: "));
  //function call
  const capitalizedWord = capitalizeFirstLetter(word);
  console.log(capitalizedWord);




//Question N0.3

function nonPrintableCharacters(firstString:string) {
    // Use a regular expression to match non-printable ASCII characters
    var pattern = /[\x00-\x1F\x7F]+/g;
    
    // Replace non-printable characters
    var newString = inputString.replace(pattern, '');
    return newString;
}
//getting string from user
var inputString = "Hello\x00World\x1F\!";
//function call
var newString = nonPrintableCharacters(inputString);
console.log(newString); 