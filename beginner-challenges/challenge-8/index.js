

function generateTable() {

    let num = document.getElementById('inputNumber').value;
    num = parseInt(num);

    if (isNaN(num) || num < 1) {
        alert("Please enter a valid non-negative number.");
        return;
    }

    let tableDiv = document.getElementById('table-div');


    // Clear previous results
    // tableDiv.innerHTML = '';
    let table = document.createElement('table');
    table.id = 'multiplicationTable';

    for (let i = 1; i <= num; i++) {
        let row = document.createElement('tr');
        for (let j = 1; j <= num; j++) {
            let cell = document.createElement('td');
            cell.textContent = i * j;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    tableDiv.appendChild(table);
}

