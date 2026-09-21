    //filter()

// let arr = [1, 5, 8, 2, 10, 3, 7];

// let evenArr = arr.filter(e => e % 2 === 0)
// console.log(evenArr);

// let greaterFive = arr.filter(e => {
//     return e > 5;
// })
// console.log(greaterFive);

// let arr = [10, 25, 5, 40, 15, 30];
// let smallesTwenty = arr.filter(e => e < 20);
// console.log(smallesTwenty);

// let expenses = [
//     { title: "Food", amount: 200 },
//     { title: "Travel", amount: 500 },
//     { title: "Movie", amount: 150 },
//     { title: "Shopping", amount: 800 }
// ];

// let newExpenses = expenses.filter(e => e.amount > 300)
// console.log(newExpenses);

// let expenses = [
//     { title: "Food", amount: 200, category: "Food" },
//     { title: "Bus", amount: 50, category: "Travel" },
//     { title: "Shoes", amount: 900, category: "Shopping" },
//     { title: "Movie", amount: 300, category: "Entertainment" }
// ];

// let FoodCategory = expenses.filter(e => e.category === "Food");
// console.log(FoodCategory);

    //map()

// let arr = [10, 20, 30, 40];
// let doubleValue = arr.map(e => e * 2);
// console.log(doubleValue)

// let expenses = [
//     { title: "Food", amount: 200 },
//     { title: "Travel", amount: 500 },
//     { title: "Shopping", amount: 800 }
// ];

// let amountArr = expenses.map(e => e.amount)
// console.log(amountArr);

// let expenses = [
//     { title: "Food", amount: 200 },
//     { title: "Travel", amount: 500 },
//     { title: "Shopping", amount: 800 }
// ];
// let newArr = expenses.map(e => `${e.title}, ${e.amount}`) 
// console.log(newArr);

// let expenses = [
//     { title: "Food", amount: 200 },
//     { title: "Travel", amount: 500 },
//     { title: "Shopping", amount: 800 }
// ];

// let increase = expenses.map(e => {
//     e.amount += (e.amount * 10 / 100) 
//     return e.amount
// })
// console.log(increase)

// let expenses = [
//     { title: "Food", amount: 200, category: "Food" },
//     { title: "Bus", amount: 50, category: "Travel" },
//     { title: "Shoes", amount: 900, category: "Shopping" }
// ];

// let newArr = expenses.map(e => `${e.title} - ${e.category}`);
// console.log(newArr)

    //reduce()

// let arr = [5, 10, 15, 20];
// let sum = arr.reduce((acc, curr) => acc+curr ,0)
// console.log(sum);

// let expenses = [
//     { title: "Food", amount: 200 },
//     { title: "Travel", amount: 500 },
//     { title: "Shopping", amount: 800 }
// ];

// let sumAmount = expenses.reduce((acc, curr) => acc + curr.amount, 0);
// console.log(sumAmount)

// let sum = 0;
// for(let i = 0; i < expenses.length; i++){
//     sum += expenses[i].amount
// }
// console.log(sum)

// let sum = 0;
// for(let expense of expenses){
//     sum += expense.amount
// }
// console.log(sum);

// let sum = 0;
// expenses.forEach(expense => {
//     sum += expense.amount
// })
// console.log(sum)

// let expenses = [
//     { title: "Food", amount: 200, category: "Food" },
//     { title: "Bus", amount: 50, category: "Travel" },
//     { title: "Shoes", amount: 900, category: "Shopping" },
//     { title: "Movie", amount: 300, category: "Entertainment" }
// ];

// let result = expenses
// .filter(e => e.title === "Food")
// .reduce((acc, curr) => acc + curr.amount ,0)
// console.log(result);

// let expenses = [
//     { title: "Food", amount: 200, category: "Food" },
//     { title: "Bus", amount: 50, category: "Travel" },
//     { title: "Shoes", amount: 900, category: "Shopping" },
//     { title: "Movie", amount: 300, category: "Entertainment" },
//     { title: "Dinner", amount: 400, category: "Food" }
// ];

// let result = expenses
// .filter(e => e.category === "Food")
// .reduce((acc, curr) => acc + curr.amount ,0)
// console.log(result);

// let expenses = [
//     { title: "Food", amount: 200, category: "Food" },
//     { title: "Bus", amount: 50, category: "Travel" },
//     { title: "Shoes", amount: 900, category: "Shopping" },
//     { title: "Dinner", amount: 400, category: "Food" },
//     { title: "Train", amount: 150, category: "Travel" }
// ];

// let result = expenses
// .filter(e => e.category === "Travel")
// .reduce((acc, curr) => acc + curr.amount,0)
// console.log(result);

// let expenses = [
//     { title: "Food", amount: 200, category: "Food" },
//     { title: "Bus", amount: 50, category: "Travel" },
//     { title: "Shoes", amount: 900, category: "Shopping" },
//     { title: "Dinner", amount: 400, category: "Food" },
//     { title: "Train", amount: 150, category: "Travel" }
// ];
// let result = expenses
// .filter(e => e.category === "Food")
// .reduce((acc, curr) => acc + (curr.amount * 2) , 0)
// console.log(result);

// let arr = [10, 20, 30];

// let result = arr.map(e => {
//     e * 2;
// });

// console.log(result);

// let arr = [10, 15, 20, 25];

// let result = arr.filter(e => {
//     e > 15;
// });

// console.log(result);