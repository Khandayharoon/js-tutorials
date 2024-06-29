function covertValues(inputValue, inputUnit, outputUnit) {
    const conversionRates = {
        kilometers: {
            miles: 0.621371,
            yards: 1093.61,
            meters: 1000
        },
        miles: {
            kilometers: 1.60934,
            yards: 1760,
            meters: 1609.34
        },
        yards: {
            kilometers: 0.0009144,
            miles: 0.000568182,
            meters: 0.9144
        },
        meters: {
            kilometers: 0.001,
            miles: 0.000621371,
            yards: 1.09361
        }
    };

    if (inputValue < 0 || isNaN(inputValue)) {
        alert("Please enter a valid non-negative number.");
        return;
    }
    if (inputUnit === outputUnit) {
        alert(`The value is the same: ${inputValue} ${inputUnit}`);
        return;
    }

    let result = inputValue * conversionRates[inputUnit][outputUnit];
    result = result.toFixed(2);
    console.log(`${inputValue} ${inputUnit} is ${result} ${outputUnit}`);

    let outputValueElement = document.getElementById("outputValue");
    outputValueElement.innerText = `${result} ${outputUnit}`;
    console.log(`${inputValue} ${inputUnit} is ${result} ${outputUnit}`);

}
function handleInput() {
    let inputValue = document.getElementById("inputValue").value;
    let inputUnit = document.getElementById("inputUnit").value;
    let outputUnit = document.getElementById("outputUnit").value;

    covertValues(inputValue, inputUnit, outputUnit);
}