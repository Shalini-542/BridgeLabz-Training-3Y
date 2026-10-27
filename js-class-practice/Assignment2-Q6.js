let count = 0;

function increment() {
    count++;
    console.log(`Count: ${count}`);
}

function decrement() {
    count--;
    console.log(`Count: ${count}`);
}

// Nested function demonstrating scope
function counterDetails() {
    function showCount() {
        console.log(`Current Count: ${count}`);
    }

    showCount();
}

// Simulated clicks
increment();
increment();
decrement();
counterDetails();