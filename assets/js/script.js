// Function to print "Hello World" in the output div
function printHelloWorld() {
    document.getElementById('output').innerText = "Hello, World!";
}

// Function to loop numbers and display them in the output div
function loopNumbers() {
    let end = parseInt(document.getElementById('loopNumber').value);

    if (isNaN(end) || end <= 0) {
        document.getElementById('output').innerText = "Please enter a valid positive number!";
    } else {
        let result = '';
        for (let i = 1; i <= end; i++) {
            result += i + ' ';
        }
        document.getElementById('output').innerText = result.trim();
    }
}
// Function for basic calculator (addition) without using alert or prompt
function basicCalculator() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    // Check if the input values are numbers
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('output').innerText = "Please enter valid numbers!";
    } else {
        let sum = parseInt(num1) + parseInt(num2);
        document.getElementById('output').innerText = "Sum: " + sum;
    }
}
