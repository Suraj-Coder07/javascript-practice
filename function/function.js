// function calculateTotal(a,b){
//     return a + b;
// }
// console.log(calculateTotal(100,200))

// let numbers = [10, 20, 30];

// numbers.forEach((num) => {
//   console.log(num);
// });

// let prices = [100, 200, 300, 400];

// prices.forEach((prices) => {
//     return console.log(prices)
// })

// function greet(name){
// return console.log(`Hello ${name}`)
// }
// greet("Suraj");

// let greet = function(name){
//     return `Hello ${name}`
// }
// console.log(greet("SURAJ"))

// let greet = (name) => {
//     return `Hello ${name}`
// }
// console.log(greet("SUraj"))

// (name) => {
//     return `Hello `
// }

// let strt = "suraj"
// let str = "Suraj";
// let rev = "";
// for(let i = str.length - 1; i >= 0; i--){
//     rev += str[i];
// }
// console.log(rev);

// let a= null;
// let b;

// console.log(typeof a)
// console.log(typeof b)

// let expenses = [
//     { title: "Food", amount: 200 },
//     { title: "Travel", amount: 500 },
//     { title: "Shopping", amount: 300 }
// ];
// let expenseAmount = expenses.map(e => e.amount)
// console.log(expenseAmount);

// let greaterThan300 = expenses.filter(e => e.amount > 300)
// console.log(greaterThan300);

// let expenses = [
//     { title: "Food", amount: 200 },
//     { title: "Travel", amount: 500 },
//     { title: "Shopping", amount: 300 }
// ];

// let findTravel = expenses.find(e => e.title === "Travel");
// console.log(findTravel);

// let filterTravel = expenses.filter(e => e.title === "Travel");
// console.log(filterTravel);

// let num = [20,33,43,56, 67];
// let re = num.find(e => e > 30)
// console.log(re);

// let expenses = [
//     { title: "Food", amount: 200 },
//     { title: "Travel", amount: 500 },
//     { title: "Shopping", amount: 300 }
// ];
// let totalAmount = expenses.reduce((acc, curr) => acc + curr.amount, 0);
// console.log(totalAmount);



// function main(name, callback){
//     console.log(`Hello ${name}`);
//     callback()
// }
// console.log(main("Suraj", say))

// function say(){
//     console.log('I am a callBack function');
// }

// function calculate(a,b,callBack){
//     let result = a + b;
//     callBack(result)
// }
// function showResult(value){
//     console.log(value)
// }
// calculate(10, 20, showResult)

// let x = 10;

// function test() {
//     let y = 20;
//     console.log(x);
//     console.log(y);
// }

// test();

// console.log(x);
// console.log(y);
// let x = 10;

// if (true) {
//     let y = 20;
//     var z = 30;
// }

// console.log(x);
// console.log(y);
// console.log(z);

let arr = [4,2,5,3,6]
let sorArr = arr.re();
console.log(sorArr)