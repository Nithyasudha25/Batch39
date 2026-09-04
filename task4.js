// task1 forloop

// for (let a=1;a<=10;a++){
//     console.log(a);
// }

//task2 reverse number

// for(let a=10; a>=1;a--){
//     console.log(a);

// }

//task3 even number

// for(a=1;a<=20;a++){
//     if(a%2==0){
//         console.log(a);
//     }
// }

//task4 odd number
// for(a=1;a<=20;a++){
//     if(a%2==1){
//         console.log(a);
//     }
// }

//task 5 multiplication table

// let num=parseInt(prompt("Enter num:"));

// for(a=1;a<=10;a++){
//     console.log(num +"x"+ a +"="+ a*num);
// }

//task 6-countdown

// let i = 10;

// while (i >= 1) {
//     console.log(i);
//     i--;
// }

//task 7 sum of numbers

// let i = 1;
// let sum=0;
// while (i <= 10) {
//     sum+=i;
//     i++;
// }
// console.log(sum)

//task 8 print numbers

// let num = 1;
// do{
//     console.log(num);
//     num++;
// }
// while(num<=5)

//task 9 do while understnding
 
// let a = 10;

// do {
//     console.log(a);
//     a++;
// } 
// while (a <= 5);

// in while loop the condition is false it doesnt print any value ,so we cant able to see which line is error ..
// meanwhile in the do while loop if the condition is fase it print atleast one value ,there we find that place has an error

// Task 10 — String Characters for..of

// let name = "javascript";
// for(let a of name){
//     console.log(a);
// }

// Task 11 — Array Values for..of

// let fruits = ["apple", "orange", "banana", "mango", "grapes"];
// for(let a of fruits){
//     console.log(a);
// }/

//task 12 students names for.. of

// let students=["Nithya","Sudhagar","kaviya","Ramani","Manikandan"]
// for(let b of students){
//     console.log("student: "+b);
// }

//task 13 for..in Employee Object

// let employee = {
//     name: "Arun",
//     age: 25,
//     role: "Developer",
//     city: "Chennai"
// };
// for(let c in employee){
//     console.log(c ,employee[c]);
// }

//task 14 product object 

// let product={
//     productName:"SmartWatch",
//     price:"Rs.2000",
//     brand:"Fastrack",
//     catagory:"for men",
//     stock:40
// }
// for(b in product){
//     console.log(b,product[b]);
// }

//task15 simple function 

// function welcome() {
//     console.log("Welcome to JavaScript");
// }

// welcome();
// welcome();
// welcome();

// task 16 function with parameter

// function greet(name) {
//     console.log("Hello "+name);
// }
// greet("Naveen");
// greet("Arun");
// greet("Priya");

//task 17 multiple parameters

// function student(name,age,department){
//     console.log("Name:"+name);
//     console.log("Age:"+age);
//     console.log("Department:"+department);

// }
// student("Nithya",25,"ECE")
// student("Sudha",35,"MCA")
// student("Kaviya",19,"BBA")

//task 18 addition function

// function add(a, b) {
//     return a+b
// }
// let result = add(10, 20);
// console.log(result);

//task 19 salary

// function salary(amount){
//     return salary1;
// }
// let salary1=10000
// console.log(salary1);

//task 20 bonus calculator

// function bonus(salary, bonusAmount) {
//     return salary + bonusAmount;
// }
// let total = bonus(50000, 5000);
// console.log("Total =", total);

//task 21 default parameter

// function employee(name, role = "Developer") {
//     document.writeln(name);
//     document.writeln(role+"<br>");
// }

// employee("Arun");
// employee("Priya", "Designer")

//task 22 named function

// function square(number) {
//     return number * number;
// }
// console.log(square(2));
// console.log(square(3));
// console.log(square(4));
// console.log(square(5));
// console.log(square(6));

//task 23 anonymous function 

// let calculate = function(a, b) {
//     return a + b;
// };
// console.log(calculate(2,3));

//task 24 arrow function 

// let multiply = (a, b) => {
//      return a * b;
// };
// console.log(multiply(2,3));

//task 25 pridict the output

// function test() {

//         if (true) {

//         var a = 10;
//         let b = 20;
//         const c = 30;

//         console.log(a); //10
//         console.log(b);//20
//         console.log(c);//30
//     }

//     console.log(a);//10
//     console.log(b);//error
//     console.log(c);//error
// }

// test();
// because let and const are block scope it only print inside the bracket 


//task 26-predict 
// ans - undefined

// console.log(a);
// var a = 10;

//task 27 

// console.log(b);
// let b = 20;//error 

//task 28

// console.log(c);
// const c = 30;//error

//difference
// 1.var - global scope , can reassign
// 2.let - block scope,can reassign 
// 3.const-block scope, cannot reassign

//task 29 self invoking funct

// (function () {
//     console.log("Welcome to JavaScript");
// })();
// (function (product, discount) {
//     console.log(product + " has " + discount + "% discount");
// })("Laptop", 20);

//task 30  Callback / Higher-Order Function

// function welcome() {
//     console.log("Welcome");
// }

// function execute(callback) {
//      callback();
// }

// execute(welcome); //Welcome

//task 31 cashback

// function* cashback() {
//     yield "10% cashback";
//     yield "20% cashback";
//     yield "30% cashback";
//     yield "Better luck next time";
// }
// let result=cashback();
// for(let a of result){
//     console.log(a);
// }

//task 32  Employee Management Console

let employees=[ {
    name:"Nithya",
    age:23,
    department:"ECE",
    role:"SoftwareDeveloper",
    salary:40000

},{
    name:"sudhagar",
    age:34,
    department:"MCA",
    role:"UI/UX Developer",
    salary:60000
},{
    name:"Kaviya",
    age:20,
    department:"BBA",
    role:"Data analyist",
    salary:45000
}];
//1.for..of

for (let employee of employees){
    console.log(employee);
}
//2.for.. in
for (let employee of employees){
   for(let a in employee){
    console.log(a +":"+ employee[a]);
}
}
// 3.function 
// function displayEmployee(employee) {
//     console.log("Name: " + employee.name);
//     console.log("Age: " + employee.age);
//     console.log("Department: " + employee.department);
//     console.log("Role: " + employee.role);
//     console.log("Salary: " + employee.salary);
// }

// displayEmployee(employees[0]);

//4.function parameters
function displayEmployee(name, age, department, role, salary) {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Department: " + department);
    console.log("Role: " + role);
    console.log("Salary: " + salary);
}

displayEmployee("Arun", 25, "IT", "Developer", 40000);

//5.return
function getSalary(employee) {
    return employee.salary;
}

let salary = getSalary(employees[0]);

console.log("Salary:", salary);

//6.condition 

if (salary >= 40000) {
    console.log("Salary is 40000 and above");
}
else {
    console.log("Salary is below 40000");
}

//7.arrow function
let yearlySalary = (salary) => salary * 12;

console.log("Yearly Salary:", yearlySalary(salary));

//8.generator
function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let employeeBenefits = benefits();
console.log("EMPLOYEE BENEFITS");
for (let benefit of employeeBenefits) {
    console.log(benefit);
}