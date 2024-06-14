
//below function will gerrate the array with the userinput
function generateArray(num){
    let Array =[];
    for(let i=1; i<=num; i++){
        Array.push(i);
    }

    return Array;
}


//handle the user input and show Array on HTML Document (DOM)
function handleUserInput(){
    let num = document.getElementById('numberInput').value;
    if (num.toLowerCase() === "quit") {
        document.getElementById('result').innerText = "You have quit the input.";
        return;
    }

    num = parseInt(num);
    if(isNaN(num) || num < 0){
        document.getElementById('result').innerText = "Please enter a valid or Non-Negative number.";
        return;
    }

    let resultArray  = generateArray(num);
    document.getElementById('result').innerText = `Generated Array is : [${resultArray}]`;
    console.log(resultArray);
}
