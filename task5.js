//Q1.
// var - global-scope, can be redeclared and reassigned.
// let- Block-scope, cannot be redeclared in the same block, but can be reassigned.
// const-Block-scope, cannot be redeclared or reassigned.

//Q2.
// var x = 10;
// var x = 20; // Allowed
// let y = 10;
// let y = 20; // Error
// const z= 234;
// const z= 234;//Error
// let and const - do not allow redeclaration in the same scope.

//Q3.
// var x = 5;
// let y = 10;
// const z = 15;

// x = 20;
// y = 25;
// z = 30;

// console.log(x, y, z); //error
//  Uncaught TypeError: Assignment to constant variable.
// Because const z cannot be reassigned.

// Q4.
// Declaration means creating a variable without giving it a value.
// let age;
// Initialization means giving a value to a variable when it is created.
// let age = 20;

//Q5.
// let a;
// console.log(a);//undefined

// A variable declared but not assigned a value .

//Q6.
// Hoisting is JavaScript's behavior of processing declarations before executing the code.
// eg:console.log(x);
// var x = 10;

// Q7.
// undefined - A variable has been declared but has no value.
// null - Intentionally represents an empty or unknown value

//Q8.
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof []);
// console.log(typeof {});

// object
// undefined
// object
// object

//Q9.
// == :Compares values after type conversion.
// === :Compares both value and data type.

// Q10.
// ++i - Pre-increment: increments first, then returns the value.
// i++- Post-increment: returns the value first, then increments.

// Q11.
// let x = 10;
// let y = "5";
// console.log(x + y); //105
// console.log(x - y); //5
// console.log(x * y); //50
// console.log(x / y) //2

//Q12.
// Logical operators are used to combine or reverse conditions.
// AND (&&)-Both conditions must be true.
// OR (||)-At least one condition must be true.
// NOT (!)-It reverses the result.

// Q13.
// console.log(5 > 3 && 10 > 5); true
// console.log(5 > 10 || 10 > 5); true
// console.log(!(5 > 3)); false

//Q14.
// The ternary operator is a short way of writing if-else.

// Syntax:
// condition ? statement1 : statement2;

// Example:
// let age = 20;
// let result = age >= 18 ? "Eligible to vote" : "Not eligible";
// console.log(result); Eligible to vote 

// Q15.
// Implicit type conversion - JavaScript automatically converts the data type.

// let x = "10";
// let y = 5;
// console.log(x - y); // 5

// Explicit type conversion - Programmer manually converts the type.

// let x = "10";
// console.log(Number(x)); // 10

//Q16.
// console.log(Number("123"));     //123
// console.log(Number("hello"));   //NaN
// console.log(Number(true));      //1
// console.log(Number(false));     //0
// console.log(Boolean(0));        //false
// console.log(Boolean("hello"));  //true

//Q17.
// NaN means Not a Number.
// Eg:
// let result = Number("hello");
// console.log(result); //NaN

//Q18.
// if-else is useful for conditions involving comparisons and ranges.
// Example:
// if (age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }
// switch is useful when comparing one value against multiple fixed cases.
// Example:

// let day = 1;
// switch(day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
// }

// Q19.
// let age = 20;

// if(age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }
// //Adult

//Q20.
// A nested if means placing one if statement inside another if statement.

// Example:
// let age = 20;
// let id = true;

// if(age >= 18) {
//     if(id) {
//         console.log("Allowed");
//     }
// } //Allowed

// Q21.
// let num = 10;
// let result = num % 2 === 0 ? "Even" : "Odd";
// console.log(result);//Even

//Q22.
// while loop checks the condition before executing.
// Example:
// let i = 1;
// while(i <= 3) {
//     console.log(i);
//     i++;
// }


// do-while loop executes at least once because it checks the condition after executing.
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while(i <= 3);

// Q23.
// for(let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// // output:
// 1
// 2
// 3
// 4
// 5

//Q24.
// for-of =Used to get the values of an iterable such as an array.

// let arr = [10, 20, 30];
// for(let value of arr) {
//     console.log(value);
// }
// Output:
// 10
// 20
// 30

// for-in = Used to get the keys/indexes.

// let arr = [10, 20, 30];
// for(let index in arr) {
//     console.log(index);
// }
// Output:
// 0
// 1
// 2

//Q25
// let sum = 0;
// for(let i = 1; i <= 100; i++) {
//     sum = sum + i;
// }
// console.log(sum); //5050

// Q26.
// slice() - Returns a portion of an array without changing the original array.

// let arr = [1, 2, 3, 4];
// console.log(arr.slice(1, 3));
// Output: [2, 3]

// splice() - Adds/removes elements and changes the original array.

// let arr = [1, 2, 3, 4];
// arr.splice(1, 2);
// console.log(arr);
// Output:[1, 4]

// Q27.
// let arr = [1, 2, 3];

// arr.push(4);
// arr.pop();
// arr.unshift(0);
// arr.shift();

// console.log(arr);//(3) [1, 2, 3]

//Q28.
// Function declaration:

// function add() {
//     console.log("Hello");
// }
// add()

// // Function expression:

// let sum = function() {
//     console.log("Hello");
// };
// sum()

//Q29.
// An arrow function is a shorter syntax for writing a function

// let add = (a, b) => {
//     return a + b;
// };

// console.log(add(10, 20));//30

//Q30.
function greet() {
    return "Hello";
}

let message = greet();

console.log(message);
