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

// Date => 22/09/2026

// let expenses = [
//   { title: "Manchuriya", amount: 500, category: "Food" },
//   { title: "Travel", amount: 300, category: "Travel" },
//   { title: "Movie", amount: 700, category: "Entertainment" },
//   { title: "Lunch", amount: 400, category: "Food" },
//   { title: "Bus", amount: 200, category: "Travel" }
// ];

// let expense = expenses
// .reduce((acc, curr) => acc + curr.amount,0)
// console.log(expense)

// function getTotalExpenses(expense){
//     let totalAmount = expense.reduce((acc, curr) => acc + curr.amount, 0);
//     return totalAmount;
// }
// console.log(getTotalExpenses(expenses))

// function getFoodCategory(expense){
//     let foodCategory = expense.filter(e => e.category === "Food");
//     return foodCategory;
// }
// console.log(getFoodCategory(expenses));

// function getTitleExpense(expense){
//     let titleCategory = expense.map(e => e.title);
//     return titleCategory;
// };
// console.log(getTitleExpense(expenses));

// function getFoodExpenses(expense){
//     let result = expense
//     .filter(e => e.category === "Food")
//     .reduce((acc, curr) => acc + curr.amount, 0)
//     return result;
// }
// console.log(getFoodExpenses(expenses));

// function getTravelExpenseTitle(expense){
//     let result = expense
//     .filter(e => e.category === "Travel")
//     .map(e => e.title);
//     return result;
// }
// console.log(getTravelExpenseTitle(expenses));

// function getExpensesAbove400(expense){
//     let result = expense.filter(e => e.amount > 400);

//     return result;
// }
// console.log(getExpensesAbove400(expenses));

// function getTotalFoodExpense(expense){
//     let result = expense
//     .filter(e => e.category === "Food")
//     .reduce((acc, curr) => acc + curr.amount, 0)

//     return result;
// }
// console.log(getTotalFoodExpense(expenses));

// function getExpenseTitleAbove300(expense){
//     let result = expense
//     .filter(e => e.amount >= 300)
//     .map(e => e.title);

//     return result;
// }
// console.log(getExpenseTitleAbove300(expenses));

// let expenses = [
//   { title: "food", amount: 500, category: "Food" },
//   { title: "Travel", amount: 300, category: "Travel" },
//   { title: "Movie", amount: 700, category: "Entertainment" },
//   { title: "Lunch", amount: 400, category: "Food" },
//   { title: "Bus", amount: 200, category: "Travel" }
// ];

// function getFoodExpenseTitleAbove400(expense){
//     let result = expense
//     .filter(e => e.category === "Food" && e.amount > 400)
//     .map(e => e.title);
//     return result;
// }
// console.log(getFoodExpenseTitleAbove400(expenses));

// function getHighestExpense(expense){
//     let highestExpense = expense.reduce((acc, curr) => {
//         if(acc < curr.amount){
//             acc = curr.amount;
//         }
//         return acc;
//     },0)
//     return highestExpense;
// }
// console.log(getHighestExpense(expenses))

// let amounts = [500, 300, 700, 400, 200];
// let highest = amounts.reduce((acc, curr) => {
//     if(acc < curr){
//         acc = curr
//     }
//     return acc;
// }, 0)
// console.log(highest)

// if([]){
//     console.log("Suraj")
// }


    // 24/09/26

    // find()

// let expenses = [
//   { title: "Food", amount: 500, category: "Food" },
//   { title: "Travel", amount: 300, category: "Travel" },
//   { title: "Movie", amount: 700, category: "Entertainment" },
//   { title: "Lunch", amount: 400, category: "Food" }
// ];

// function getExpenseByTitle(expense, category){
//     let result = expense.find(e => e.category === category)
//     return result;

// }

// console.log(getExpenseByTitle(expenses, "Food"));


    // forEach()

    let expenses = [
    { title: "Food", amount: 500 },
    { title: "Travel", amount: 300 },
    { title: "Movie", amount: 700 }
];

// expenses.forEach(e => {
//     console.log(e.title)
// });

// expenses.forEach(e => console.log(e.title));

// expenses.forEach(e => {
//     console.log(`${e.title} - ${e.amount}`)
// })

expenses.forEach((e, index) => {
    console.log(`${index + 1}. ${e.title} - ${e.amount}`);
})