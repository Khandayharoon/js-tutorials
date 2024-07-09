function isNumberDivisible() {
    document.getElementById("form").addEventListener('submit', function(event) {
        event.preventDefault();

        let inputNumber = document.getElementById("input").value;
        inputNumber = parseInt(inputNumber.trim());

        if (isNaN(inputNumber)) {
            document.getElementById("result").innerText = "Please enter a valid number.";
            return;
        }

        if (inputNumber % 10 === 0) {
            console.log(`${inputNumber} is divisible by ten`);
            document.getElementById("result").innerText = `${inputNumber} is divisible by ten`;
        } else {
            console.log(`${inputNumber} is not divisible by ten`);
            document.getElementById("result").innerText = `${inputNumber} is not divisible by ten`;
        }
    });
}
isNumberDivisible();