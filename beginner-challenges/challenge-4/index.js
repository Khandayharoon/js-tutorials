function handleUserInput(){
    document.getElementById("inputForm").addEventListener('submit', function(event) {
        event.preventDefault();
        let inputNumber = document.getElementById("userInput").value;
        console.log(inputNumber);
    
        let inputArray = inputNumber.split(',');
        console.log(inputArray); // Log the array to check the result
    
        let sumOfArray = 0;
        for(let i=0; i<inputArray.length; i++){
            sumOfArray = sumOfArray + parseFloat(inputArray[i]);
        }
    
        let result = document.getElementById("result");
        result.innerText = sumOfArray
    });
    
}


function handleUserInputTable() {
    document.getElementById("TableForm").addEventListener('submit', function(event) {
        event.preventDefault();

        let num = document.getElementById("table_form").value;
        num = parseInt(num);

        if (isNaN(num) || num <= 0) {
            alert("Please enter a valid non-negative number.");
            return;
        }

        let table_div = document.getElementById("table-div");
        
        // Clear previous table if it exists
        table_div.innerHTML = '';

        let table = document.createElement("table");
        table.id = "2dArray";
        let sum = 0;

        for (let i = 0; i < num; i++) {
            let row = document.createElement("tr");
            for (let j = 0; j < num; j++) {
                let cell = document.createElement("td");
                // cell.id = "cell";
                let value = Math.floor(Math.random() * 100); // Generate random number between 0 and 99
                cell.textContent = value;
                sum += value;
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        table_div.appendChild(table);

        let table_sum = document.getElementById("table_sum");
        table_sum.innerText = sum;
    });
}