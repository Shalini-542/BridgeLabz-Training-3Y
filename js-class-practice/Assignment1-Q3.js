let expenses = [5000, 2000, 8000, 1500, 1000];

let total = 0;

for (let expense of expenses) {
    total += expense;
}

let average = total / expenses.length;
let tax = total * 0.10;
let finalAmount = total;
finalAmount += tax;

console.log("Total Expenses: ₹" + total.toFixed(2));
console.log("Average Expenses: ₹" + average.toFixed(2));
console.log("Tax (10%): ₹" + tax.toFixed(2));
console.log("Final Amount: ₹" + finalAmount.toFixed(2));