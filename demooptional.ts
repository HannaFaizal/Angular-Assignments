/*
Optional Parameters
?=nullable

The parameter that may or may not recieve a value can be appended with a '?' to mark them as optional
*/

function greet(message: string,age?:number):string{
    return message+' '+age+' !'
}