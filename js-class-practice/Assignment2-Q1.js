let bonus = 5000;

function calculateSalary() {
    let salary = 40000;
    let isPermanent = true;

    if (isPermanent) {
        salary += bonus;
    }

    console.log(`Total Salary: ₹${salary}`);

    isPermanent = false;
    console.log(`Global Bonus: ₹${bonus}`);
    console.log(`Permanent Status: ${isPermanent}`);
}

calculateSalary();
console.log(`Global Bonus Outside Function: ₹${bonus}`);