function handleInput(){
    let inputUnit = document.getElementById('inputUnit').value;
    let convertUnit = document.getElementById('units').value;

if(convertUnit === "Miles"){
    let miles = inputUnit * 0.62137119;
    miles = miles.toFixed(2);
    alert(`${inputUnit } kilometers is ${miles} miles`);
    console.log(`${inputUnit } kilometers is ${miles} miles`);
}
}














// let num = prompt("Enter the number of kilometers you want to convert:");
// let miles = num * 0.62137119;
// miles = miles.toFixed(2);
// // Round to 2 decimal places
// alert(`${num} kilometers is ${miles} miles`);
// console.log(`${num} kilometers is ${miles} miles`);
