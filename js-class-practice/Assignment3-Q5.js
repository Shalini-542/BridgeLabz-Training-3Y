console.log(score);
announce();

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

startGame();

function startGame() {
    console.log(status);
}


// Explanation: Strict mode does not allow assignment to an undeclared variable. Using let declares a local variable within the function.

// VS Code: Set a breakpoint on the let statement, press F5, add greeting to Watch, and inspect the Call Stack while showMessage() is running.