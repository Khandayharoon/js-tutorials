let giveString  = "qpiotqycimr";
let vowelString = "AEIOUaeiou";
let countOfVowels = 0;
for(let i=0; i<=giveString.length; i++){

    if(vowelString.includes(giveString[i])){
        countOfVowels++;
    } 
}
console.log(countOfVowels);