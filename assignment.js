class student{
    static count = 0;
    constructor(name,rollno,marks){
        this.name = name;
        this.rollno = rollno;
        this.marks = marks;
        student.count++;
    }
    displayResult(){
        console.log("student name is :",this.name);
        console.log("student rollno is :",this.rollno);
        console.log("student marks is :",this.marks);
        if(this.marks >= 33){
            console.log("Result : Passed");
        }
        else{
            console.log("Result : Failed");
        }
        console.log("Student count is : ",student.count);
    }
}
let s1 = new student("Lakshaya Kumar",103,95);
let s2 = new student("Arhaan",114,5);
let s3 = new student("Sheeraz",117,99);
s1.displayResult();
s2.displayResult();
s3.displayResult();
