
function handleUserInput() {
    let num = document.getElementById('inputNumber').value;
    num = parseInt(num);

    if (num < 1 || isNaN(num)) {
        alert("Please enter a valid non-negative number.");
        return;
    }

    // let tableDiv = document.getElementById('tableDiv');

    // Clear previous results
    // tableDiv.innerHTML = '';

    for (let i = 1; i <= 200; i++) {
        // const rowDiv = document.createElement('div');
        // rowDiv.id = `row${i}`;
        // rowDiv.className = 'row';

        // const newP = document.createElement('p');
        // newP.id = `result${i}`;
        // newP.className = 'result';
        console.log(`${num} x ${i} = ${num * i}`);
        // newP.textContent = `${num} x ${i} = ${num * i}`;

        // rowDiv.appendChild(newP);
        // tableDiv.appendChild(rowDiv);
    }
}

