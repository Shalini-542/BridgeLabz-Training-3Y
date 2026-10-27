function outer() {
    console.log(count);
    var count = 5;

    function inner() {
        console.log(count);
        var count = 10;
    }

    inner();
}

outer();



// Explanation:
// - outer() has its own local count, initialized to undefined before the first log.
// - inner() creates a separate local count, also initialized to undefined.
// - The inner variable shadows the outer variable, so its first log prints undefined, not 5.