// task1
// function studentResult(name, department, mark1, mark2, mark3, mark4, mark5) {

//     let total = mark1 + mark2 + mark3 + mark4 + mark5;
//     let average = total / 5;

//     let result;
//     let grade;

//     if (mark1 >= 35 && mark2 >= 35 && mark3 >= 35 && mark4 >= 35 && mark5 >= 35) {
//         result = "Pass";

//         if (average >= 90) {
//             grade = "A";
//         } else if (average >= 75) {
//             grade = "B";
//         } else if (average >= 60) {
//             grade = "C";
//         } else if (average >= 50) {
//             grade = "D";
//         } else {
//             grade = "Fail";
//         }

//     } else {
//         result = "Fail";
//         grade = "Fail";
//     }

//     console.log("Name:", name);
//     console.log("Department:", department);
//     console.log("Total Marks:", total);
//     console.log("Average:", average);
//     console.log("Result:", result);
//     console.log("Grade:", grade);
// }

// studentResult("Arun", "Computer Science", 90, 85, 78, 92, 88);

// // task2
// let employee = {
//     name: "Arun",
//     role: "Developer",
//     salary: 45000,
//     experience: 2
// };

// function calculateSalary(employee) {

//     let basicSalary = employee.salary;
//     let bonus = 0;

//     if (employee.experience >= 5) {
//         bonus = basicSalary * 15 / 100;
//     } else if (employee.experience >= 2) {
//         bonus = basicSalary * 10 / 100;
//     }

//     let finalSalary = basicSalary + bonus;

//     console.log("Name:", employee.name);
//     console.log("Role:", employee.role);
//     console.log("Basic Salary:", basicSalary);
//     console.log("Bonus:", bonus);
//     console.log("Final Salary:", finalSalary);
// }

// calculateSalary(employee);

// task3

// let products = [
//     { name: "Laptop", price: 55000, category: "electronics" },
//     { name: "Mouse", price: 800, category: "electronics" },
//     { name: "Shirt", price: 1200, category: "fashion" },
//     { name: "Shoes", price: 2500, category: "fashion" },
//     { name: "Phone", price: 30000, category: "electronics" }
// ];

// let above2000 = products.filter(product => product.price > 2000);
// console.log("Products above ₹2000:", above2000);

// let electronics = products.filter(product => product.category === "electronics");
// console.log("Electronics:", electronics);

// let below1000 = products.find(product => product.price < 1000);
// console.log("First product below ₹1000:", below1000);

// let totalPrice = products.reduce((total, product) => {
//     return total + product.price;
// }, 0);

// console.log("Total Price:", totalPrice);

// let expensiveProduct = products.some(product => product.price > 50000);
// console.log("Any product above ₹50000:", expensiveProduct);

// let allAbove500 = products.every(product => product.price > 500);
// console.log("Every product above ₹500:", allAbove500);

//task4

// let employees = [
//     {
//         id: 101,
//         name: "Kavin",
//         role: "Frontend Developer",
//         salary: 40000
//     },
//     {
//         id: 102,
//         name: "Arun",
//         role: "Backend Developer",
//         salary: 50000
//     },
//     {
//         id: 103,
//         name: "Priya",
//         role: "HR Executive",
//         salary: 35000
//     },
//     {
//         id: 104,
//         name: "Dinesh",
//         role: "Full Stack Developer",
//         salary: 65000
//     },
//     {
//         id: 105,
//         name: "Karthi",
//         role: "UI Designer",
//         salary: 45000
//     },
//     {
//         id: 106,
//         name: "Sudha",
//         role: "Software Tester",
//         salary: 55000
//     }
// ];

// // 1. Display all employee names
// let names = employees.map(employee => employee.name);
// console.log("Employee Names:", names);

// // 2. Display Employees earning above ₹40,000
// let highSalaryEmployees = employees.filter(employee => employee.salary > 40000);
// console.log("Employees above ₹40000:", highSalaryEmployees);

// // 3. Find employee with ID 103
// let employee103 = employees.find(employee => employee.id === 103);
// console.log("Employee ID 103:", employee103);

// // 4. Calculate total salary
// let totalSalary = employees.reduce((total, employee) => {
//     return total + employee.salary;
// }, 0);

// console.log("Total Salary:", totalSalary);

// // 5. Find highest-paid employee
// let highestPaid = employees.reduce((highest, employee) => {
//     if (employee.salary > highest.salary) {
//         return employee;
//     } else {
//         return highest;
//     }
// });

// console.log("Highest Paid Employee:", highestPaid);

// // 6. Sort employees from  highest salary to lowest
// let sortedEmployees = [...employees].sort((a, b) => b.salary - a.salary);

// console.log("Salary High to Low:", sortedEmployees);

// // 7. create a New array containing only employee names
// let employeeNames = employees.map(employee => employee.name);

// console.log("Names Only:", employeeNames);

//task 5

// let cart = [
//     { name: "Laptop", price: 50000, quantity: 1 },
//     { name: "Mouse", price: 1000, quantity: 2 },
//     { name: "Keyboard", price: 2000, quantity: 1 }
// ];

// function calculateCart(cart) {

//     let total = cart.reduce((sum, item) => {
//         let itemTotal = item.price * item.quantity;

//         console.log(item.name + " Total:", itemTotal);

//         return sum + itemTotal;
//     }, 0);

//     let discount = 0;

//     if (total > 50000) {
//         discount = total * 10 / 100;
//     }

//     let finalAmount = total - discount;

//     console.log("Total Cart Value:", total);
//     console.log("Discount:", discount);
//     console.log("Final Payable Amount:", finalAmount);
// }

// calculateCart(cart);

// task 6

// let students = [
//     { name: "Arun", age: 21, mark: 85 },
//     { name: "Priya", age: 22, mark: 92 },
//     { name: "Karthi", age: 20, mark: 67 },
//     { name: "Dinesh", age: 23, mark: 45 }
// ];

// // 1. Display all student names
// let studentNames = students.map(student => student.name);
// console.log("Student Names:", studentNames);

// // 2. Students who scored above 80
// let above80 = students.filter(student => student.mark > 80);
// console.log("Students above 80:", above80);

// // 3. Find Priya
// let priya = students.find(student => student.name === "Priya");
// console.log("Priya:", priya);

// // 4. Calculate average mark
// let totalMarks = students.reduce((total, student) => {
//     return total + student.mark;
// }, 0);

// let averageMark = totalMarks / students.length;

// console.log("Average Mark:", averageMark);

// // 5. Check whether anyone failed
// let failed = students.some(student => student.mark < 50);
// console.log("Anyone Failed:", failed);

// // 6. Check whether everyone scored above 40
// let everyoneAbove40 = students.every(student => student.mark > 40);
// console.log("Everyone above 40:", everyoneAbove40);

// // 7. Sort students by marks
// let sortedStudents = [...students].sort((a, b) => b.mark - a.mark);

// console.log("Students by Marks:", sortedStudents);/

// task 7

// let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

// // 1. Numbers × 2
// let doubled = numbers.map(number => number * 2);
// console.log("Doubled:", doubled);

// // 2. Even numbers
// let evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log("Even Numbers:", evenNumbers);

// // 3. Numbers greater than 15
// let greaterThan15 = numbers.filter(number => number > 15);
// console.log("Greater than 15:", greaterThan15);

// // 4. First number greater than 20
// let firstGreater20 = numbers.find(number => number > 20);
// console.log("First number greater than 20:", firstGreater20);

// // 5. Total
// let total = numbers.reduce((sum, number) => {
//     return sum + number;
// }, 0);

// console.log("Total:", total);

// // 6. Any number greater than 40
// let anyGreater40 = numbers.some(number => number > 40);
// console.log("Any number greater than 40:", anyGreater40);

// // 7. Every number positive
// let allPositive = numbers.every(number => number > 0);
// console.log("Every number positive:", allPositive);

// // 8. Highest to lowest
// let sortedNumbers = [...numbers].sort((a, b) => b - a);
// console.log("Highest to Lowest:", sortedNumbers);

//task 8

// let sentence ="JavaScript is very powerful";

// console.log("Original Sentence:", sentence);

// // Total characters
// console.log("Total Characters:", sentence.length);

// // Uppercase
// console.log("Uppercase:", sentence.toUpperCase());

// // Lowercase
// console.log("Lowercase:", sentence.toLowerCase());

// // Contains JavaScript
// console.log("Contains JavaScript:", sentence.includes("JavaScript"));

// // First character
// console.log("First Character:", sentence.slice(0, 1));

// // Last character
// console.log("Last Character:", sentence.slice(-1));

// // Number of words
// let words = sentence.split(" ");
// console.log("Number of Words:", words.length);

// // Replace JavaScript with Python
// let replacedSentence = sentence.replace("JavaScript", "Python");
// console.log("Replaced Sentence:", replacedSentence);

// // Convert into array
// console.log("Words Array:", words);

//Final task

let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


// 1. Employee List
employees.forEach(employee => {
    console.log(employee);
});
// 2. Search Employee by Name
function searchEmployee(name) {

    let employee = employees.find(employee =>
        employee.name.toLowerCase() === name.toLowerCase()
    );
    console.log("Search Result:", employee);
}
searchEmployee("Priya");
// 3. Department Filter
function filterDepartment(department) {
    let result = employees.filter(employee =>
        employee.department.toLowerCase() === department.toLowerCase()
    );
    console.log("Department:", department);
    console.log(result);
}
filterDepartment("IT");
// 4. Salary Filter
let salaryAbove50000 = employees.filter(employee =>
    employee.salary > 50000
);
console.log("Employees earning above ₹50000:");
console.log(salaryAbove50000);
// 5. Total Company Salary
let totalSalary = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

console.log("Total Company Salary:", totalSalary);
// 6. Highest Salary
let highestSalary = employees.reduce((highest, employee) => {
    if (employee.salary > highest.salary) {
        return employee;
    } else {
        return highest;
    }

});
console.log("Highest Paid Employee:", highestSalary);
// 7. Employees with more than 3 years experience
let experiencedEmployees = employees.filter(employee =>
    employee.experience > 3
);
console.log("Employees with more than 3 years experience:");
console.log(experiencedEmployees);
// 8. Sort Low → High
let lowToHigh = [...employees].sort((a, b) =>
    a.salary - b.salary
);
console.log("Salary Low to High:");
console.log(lowToHigh);
// Sort High → Low
let highToLow = [...employees].sort((a, b) =>
    b.salary - a.salary
);

console.log("Salary High to Low:");
console.log(highToLow);
// 9. Statistics
let totalEmployees = employees.length;
let averageSalary = totalSalary / totalEmployees;
console.log("Total Employees:", totalEmployees);
console.log("Total Salary: ₹" + totalSalary);
console.log("Highest Salary: ₹" + highestSalary.salary);
console.log("Average Salary: ₹" + averageSalary);