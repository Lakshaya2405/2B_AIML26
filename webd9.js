///class student {
///    constructor(name, rollNo) {
    //     this.name = name;
    //     this.rollNo = rollNo;
    // }
    // display(){
    //     console.log("Student Name: ", this.name);
    //     console.log("Student Roll No: ", this.rollNo);
    // }
    // Hello(){
    //     console.log("Hello, "+this.name+"!");
    // }
///};
//let student1 = new student("Alice", 101);
//let student2 = new student("Bob", 102);
//student1.display();
//student2.display();
//student1.Hello();
///student2.Hello();


///class and objects in js
// class hello{
//     ///constructor(){
//      //   console.log("Hello world");
//     //}
//     constructor(name){
//         this.empname = name;
//         console.log(this.empname);
//         this.faculty = "cse";
//     }
// }
// let h = new hello("lakshaya");
// console.log(h.faculty);
// class student{
//     constructor(roll,name,section){
//         this.rollnumber = roll;
//         this.name = name;
//         this.section = section;
//         console.log(this.rollnumber);

//         console.log(this.name);
//         console.log(this.section);
//     }
// }
// let s1 = new student();
// let s2 = new student(103,"lakshaya","aiml");
// class student{
//     static Fname = "lakshaya";
//     static Lname = "kumar";
//      display(){
//         console.log(student.Fname);
//         console.log(student.Lname);
//     }
// }
// //student.display();
// let s1 = new student();
// s1.display();\
// class hello{
//     constructor(){
//         console.log("hello constructor");
//     }
// }
// class hi extends hello{
//     constructor(){
//         super() // to acces constructor of both the classes 
//         console.log("hi constructor")
//     }
// }
// let h1 = new hi();
 class hello{
    info(){
        console.log("information")
    }
 }
 class hi extends hello{
    info(){
        super.info()
        console.log("Infohi")
    }
 }
 let h1 = new hi();
 h1.info();