//declare variables

// class Employee{
    
//     //instance variable
//     empCode:number=0;
//     empName:string=' ';

//     constructor(code:number,name:string){
//         this.empCode=code;
//         this.empName=name;
//     }

//     //custom methods
//     //normal way

//     // function display():string{
//     //     return console.log(this.empName+this.empCode);

//     // }

//     //using arrow function
//     display=()=>console.log(this.empName+" "+this.empCode)
// }

// let employeeOne=new Employee(1001,"Hanna");
// employeeOne.display();


class Student{
    //instance varables
    studentName:string=" ";
    studentRollNumber:number=0;
    studentMark:number=0;
    studentGrade:string=" ";

    //constructor
    constructor(name:string,rollNumber:number,mark:number){
        this.studentName=name;
        this.studentRollNumber=rollNumber;
        this.studentMark=mark;
        
    }

    //method to calculate grade
     //using arrow function
    gradeTracker=():string =>{
        if (this.studentMark>91){
            return this.studentGrade="A";
        }
        else if ((this.studentMark<90) && (this.studentMark>71)){
            return this.studentGrade="B";
        }
        else if ((this.studentMark<70) && (this.studentMark>61)){
            return this.studentGrade="c";
        }
        else if (this.studentMark<60){
            return this.studentGrade="D";
        }
         return "Invalid";
    }

    //method  to display
    display(){
        var grade:string=this.gradeTracker();
        console.log("Name: "+this.studentName);
        console.log("Roll Number: "+this.studentRollNumber);
        console.log("Mark: "+this.studentMark);
        console.log("Grade: "+this.studentGrade);

    }


}
var studentName=String(window.prompt("Enter Student Name: "));
var studentRollNumber=Number(window.prompt("Enter Student Roll Number: "));
var studentMark=Number(window.prompt("Enter Student Mark: "));

let studentOne=new Student(studentName,studentRollNumber,studentMark);
studentOne.display();