// task 1 variables
// 
// var Name="Nithya";
// let age=23;
// const city="Vridhachalam";
// let college="SRM";
// console.log("My name is "+Name);
// console.log("My age is "+age);
// console.log("I live in "+city);
// console.log("I study in "+college);
// age = 24;
// console.log("My age is "+age);
// Name = "Nithya S";
// console.log("My name is "+Name);
// city = "Chennai";
// console.log("I live in "+city);
// var Name= "kaviya";
// console.log("My name is "+Name);
// let college="SRM TRP ENGINEERING COLLEGE";
// console.log("I study in "+college);
// const city="Covai";
// console.log("I live in "+city);

// task2 printing statements

// var a=10;
// console.log(a);
// alert(a);
// confirm(a);
// var Name=prompt("whats your name?");
// document.writeln(Name);

// task3 user details

// let Name=prompt("whats your name?");
// let age=prompt("whats your age?");
// let city=prompt("whats your city?");
// let qualification=prompt("whats your qualification?");
// console.log("My name is "+Name);
// console.log("My age is "+age);
// console.log("I live in "+city);
// console.log("I studied  "+qualification);

// task4 Find data types

// let a = "Javascript";
// console.log(typeof a);
// let b = 100;
// console.log(typeof b);
// let c = 99.5;
// console.log(typeof c);
// let d = true;
// console.log(typeof d);
// let e = false;
// console.log(typeof e);
// let empty;
// console.log(empty);
// let f=prompt();
// console.log(f);

// task5 student Array

// let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
// document.writeln("first student:" +students[0]+"<br>");
// document.writeln("second student:" +students[1]+"<br>");
// document.writeln("last student:" +students[students.length-1]+"<br>");
// document.writeln("total students:"+students.length+"<br>");

// task 6 Employee object

// let employee = {
//     name: "Nithya",
//     age: 23,
//     role: "Software Engineer",
//     skills: ["JavaScript", "React", "Node.js"],
//     isWorking: true,
//     qualification: ["BE", "M.Tech"]

// }
// document.writeln("Employee Name: " + employee.name + "<br>");
// document.writeln("Employee Age: " + employee.age + "<br>");
// document.writeln("Employee Role: " + employee.role + "<br>");
// document.writeln("Employee  first Skills: " + employee.skills[0] + "<br>");
// document.writeln("Employee last Qualification: " + employee.qualification[employee.qualification.length - 1] + "<br>");
// document.writeln("Is Employee Working? " + employee.isWorking + "<br>");

// task 7 calculator

// let a=20;
// let b=5;
// document.writeln("Addition: " + (a + b) + "<br>");
// document.writeln("Subtraction: " + (a - b) + "<br>");
// document.writeln("Multiplication: " + (a * b) + "<br>");
// document.writeln("Division: " + (a / b) + "<br>");
// document.writeln("Modulus: " + (a % b) + "<br>");
// document.writeln("Exponentiation: " + (a ** b) + "<br>");

// task 8 shopping Bill

// let shirt=999;
// let pant=1499;
// let shoes=1999;
// let bag=799;
// let totalprice=shirt+pant+shoes+bag;
// document.writeln("Total: " + totalprice);

// task 9 increment and decrement
// A-11,10

// let a = 10;
// let b = a++;
// console.log(a);
// console.log(b);

// B-11,11

// let a = 10;
// let b = ++a;
// console.log(a);
// console.log(b);

// c-9,10

// let a = 10;
// let b = a--;
// console.log(a);
// console.log(b);

// D-9,9

// let a = 10;
// let b = --a;
// console.log(a);
// console.log(b);

// task 10 assignment operators
 
// let num = 10;
// num += 5;
// console.log(num);
// num -= 3;
// console.log(num);
// num *= 2;
// console.log(num);       
// num /= 4;
// console.log(num);
// num %= 3;
// console.log(num);
// num **= 2;
// console.log(num);

// task 11 comparison operators

// console.log(10 > 5); //true
// console.log(10 < 5); //false
// console.log(10 >= 10); //true
// console.log(10 <= 9); //false

// console.log(5 == "5"); //true
// console.log(5 === "5"); //false

// console.log(10 != "10"); //false
// console.log(10 !== "10"); //true

// task 12 logical operators
// AND operator

// console.log(true && true); //true
// console.log(true && false); //false 
// console.log(false && true); //false
// console.log(false && false); //false

// OR operator
// console.log(true || true); //true
// console.log(true || false);//true
// console.log(false || true);//true
// console.log(false || false);//false

// NOT operator
// console.log(!true);//false
// console.log(!false);//true
// console.log(!(5 > 10));//true
// console.log(!(10 > 5));//false

// task 15 combination
// console.log(5 == "5" && !(5 === 5) || 6 > 7); //false

// console.log(10 > 5 && 8 < 12 || 4 === "4");//true

// console.log(7 === 7 && 10 != "10" || 5 >= 5);//true

// console.log(15 < 10 || 20 > 15 && 5 == "5");//true

// task 16 voting ternary operator
// let age = 20;
// let result = age >= 18 ? "Eligible to vote" : "Not eligible";
// console.log(result);

// //task 17 password ternary operator
// let password = false;
// let loginResult = password ? "Login successful" : "Wrong password";
// console.log(loginResult);

// task 18 user intro by concatination and template string

// let name = "Naveen";
// let age = 25;
// let city = "Trichy";
// console.log("My name is " + name + ", I am " + age + " years old and I live in " + city + ".");
// console.log(`my name is ${name}, I am ${age} years old and I live in ${city}.`);

// task 19 string convertion 
// console.log(String(100));
// console.log(String(true));
// console.log(String(undefined));
// console.log(String(null));
// console.log(String([1, 2, 3]));

// console.log(typeof String(100));
// console.log(typeof String(true));
// console.log(typeof String(undefined));
// console.log(typeof String(null));
// console.log(typeof String([1, 2, 3]));
 
// task 20 number conversion

// console.log(Number());//0
// console.log(Number(""));//0
// console.log(Number("123"));//123
// console.log(Number("a1"));//NaN
// console.log(Number(true));//1
// console.log(Number(false));//0
// console.log(Number(undefined));//NaN
// console.log(Number(null));//0

// task21 boolean conversion

// console.log(Boolean());//false
// console.log(Boolean(""));//false
// console.log(Boolean("hello"));//true
// console.log(Boolean(123));///true
// console.log(Boolean(true));//true
// console.log(Boolean(false));//false
// console.log(Boolean(undefined));//false
// console.log(Boolean(null));//false
// console.log(Boolean([]));//true
// console.log(Boolean({}));//true

// task 22 voting eligibility

// let age=prompt("Enter your age:");
// if(age>=18)
// {
//     console.log("you can vote");
// }
// else{
//     console.log("you can't vote");
// }

// task 23 positive or negative

// let num=prompt("Enter a num:");
// if(num>0){
//     console.log("positive");
// }
// else if (num<0){
//     console.log("Negative");
// }
// else{
//     console.log("zero");
// }

// task 24 Grade system 

// let mark=prompt("Enter your mark:");
// if(mark>=90){
//     console.log("A Grade");
// }
// else if(mark>=80){
//     console.log("B Grade");
// }
// else if (mark>=70){
//     console.log("C Grade");
// }
// else if (mark>=60){
//     console.log("D Grade");
// }
// else{
//     console.log("Fail");
// }

// task 25 job eligibility

// age=prompt("Enter your age:");
// height=prompt("Enter your height:");
// weight=prompt("Enter your weight:");
// if(age>=18){
//     if(height>=160){
//         if(weight>=60){
//             console.log("Congratulations! You are selected");

//         }else{
//             console.log("your weight is not enough");

//         }
//     }else{
//         console.log("your height is not enough");
//     }
// }
// else{
//     console.log("your age is not enough");

// }

// task 26 traffic light

// color=prompt("Enter traffic light color");
// switch(color){
//     case "red":console.log("Stop");break
//     case "yellow":console.log("Ready");break
//     case "green":console.log("go");break
//     default:console.log("invalid");break
// }

// task 27 day 

// let day = 1;
// switch(day){
//     case 1:console.log("Monday");break
//     case 2:console.log("Tuesday");break
//     case 3:console.log("Wednesday");break
//     case 4:console.log("Thursday");break
//     case 5:console.log("Friday");break
//     case 6:console.log("Saturday");break
//     case 7:console.log("Sunday");break
//     default:console.log("Invalid day");break
// }

// task 28 student result system 

let name=prompt("Enter stud name:");
let age=prompt("Enter stud age:");
let city=prompt("enter stud city:");

let tamil=parseInt(prompt("Enter tamil mark:"));
let english=parseInt(prompt("enter english mark:"));
let maths=parseInt(prompt("enter maths mark:"));

let total=tamil+english+maths;
document.writeln("Total:"+total+"<br>");
let average=total/3;
document.writeln("Average:"+average+"<br>");

 let grade;
 if(average>=90){
    grade="A";
 }
 else if(average>=80){
    grade="B";

 }
 else if(average>=70){
    grade="C";
 }
 else if(average>=60){
    grade="D"
 }
 else{
    grade="Fail";
 }

 let vote;

 if(age>=18){
    vote=" eligible ";
 }
 else{
    vote=" not eligible";
 }

document.writeln(`Name:${name}<br>`);
document.writeln(`Age:${age}<br>`);
document.writeln(`City:${city}<br>`);
document.writeln(`Total:${total}<br>`);
document.writeln(`Average:${average}<br>`);
document.writeln(`Grade:${grade}<br>`);
document.writeln(`Voitng:${vote}<br>`);



