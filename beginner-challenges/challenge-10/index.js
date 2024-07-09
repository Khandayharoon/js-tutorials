
function checkCountOfVowels(){
    document.getElementById("form").addEventListener('submit',function(event){
        event.preventDefault();
        let VowelString = "AEIOUaeiou";
        let countOfVowels = 0;

        let givenString = document.getElementById("input").value;
        givenString = givenString.trim();

        for(let i=0; i<givenString.length; i++){
            if(VowelString.includes(givenString[i])){
                countOfVowels++;
            }
        }

        document.getElementById("result").innerText = `in " ${givenString}" there are ${countOfVowels} Vowles`
    });
}

checkCountOfVowels();