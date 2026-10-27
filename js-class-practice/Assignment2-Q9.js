let results = [];

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        results.push(`${i}: FizzBuzz`);
    } else if (i % 2 === 0) {
        results.push(`${i}: Even`);
    } else {
        results.push(`${i}: Odd`);
    }
}

console.log(results);