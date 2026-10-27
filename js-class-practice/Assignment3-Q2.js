"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

try {
    for (const emp of employees) {
        if (!emp.name || emp.salary == null || emp.years == null) {
            throw new Error("Missing employee details");
        }

        const salary = Number(emp.salary);
        const years = Number(emp.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new Error("Invalid salary or experience");
        }

        const bonus = salary * (years > 3 ? 0.10 : 0.05);

        console.log(
            `${emp.name} | Salary: ₹${salary} | Years: ${years} | Bonus: ₹${bonus}`
        );
    }
} catch (error) {
    console.log("Error:", error.message);
}