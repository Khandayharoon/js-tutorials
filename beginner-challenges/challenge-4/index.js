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