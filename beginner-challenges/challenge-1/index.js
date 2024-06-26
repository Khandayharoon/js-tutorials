/**
 * Generates an array of numbers from 1 to the specified number.
 *
 * @param {number} num - The upper limit of the range (inclusive).
 * @returns {number[]} An array containing numbers from 1 to the specified number.
 */
function generateArray(num) {
    let generatedArray = [];
    for (let i = 1; i <= num; i++) {
        generatedArray.push(i);
    }
    return generatedArray;
}

/**
 * Handles the user input and shows generatedArray on the HTML document (DOM).
 */
function handleUserInput(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    let num = document.getElementById('numberInput').value;
    if (num.toLowerCase() === "quit") {
        document.getElementById("result").innerText = "You have quit the input";
        return;
    }

    num = parseInt(num);
    if (isNaN(num) || num < 0) {
        document.getElementById("result").innerText = "Please enter a valid or non-negative number";
        return;
    }

    let resultArray = generateArray(num);
    document.getElementById("result").innerText = `Generated Array is: [${resultArray}]`;
    console.log(resultArray);
}

document.getElementById('numberForm').addEventListener('submit', handleUserInput);
