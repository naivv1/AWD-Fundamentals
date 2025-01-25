function showHelloWorld() {
    const outputBox = document.getElementById('output');
    outputBox.innerText = "Hello, World!";
}

function loopNumber() {
    const userInput = document.getElementById('loopNumber').value;
    const outputBox = document.getElementById('output');
    const number = parseInt(userInput);

    if (isNaN(number) || number <= 0) {
        outputBox.innerText = "Please enter a positive number.";
        return;
    }

    let numbersList = '';
    for (let i = 1; i <= number; i++) {
        numbersList += i + ' ';
    }

    outputBox.innerText = numbersList.trim();
}

function calculateSum() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const outputBox = document.getElementById('output');
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);

    if (isNaN(number1) || isNaN(number2)) {
        outputBox.innerText = "Please enter two valid numbers.";
        return;
    }

    const sum = number1 + number2;
    outputBox.innerText = "The sum is: " + sum;
}
