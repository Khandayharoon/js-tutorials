const givenArray = [2,3,-4,5,6,-1,4,-33,4,5,-8,0,7,-6,5,-1];
const  orginalArray = givenArray;

/**
 * 
 * @param {Array} []givenArray which has negative numbers 
 * @return {Array}[] without negative numbers
 */
function fliterNegativeNumbers(){

    document.getElementById("arrayForm").addEventListener('submit',function(event){
        event.preventDefault();
         let givenArray = document.getElementById("arrayInput").value;
         givenArray = givenArray.replace(/[\[\]]/g, '');
         givenArray = givenArray.split(',').map(Number);
        let negativeArray  = [];
        let positiveArray = [];
        for(let i=0; i<givenArray.length; i++){
            if(givenArray[i]<0){
                negativeArray.push(givenArray[i]);
                
            }
            else{
                positiveArray.push(givenArray[i]);
            }
        }
    
        console.log(negativeArray);
        console.log(positiveArray);
        
        document.getElementById("Negresult").innerText = "[" + negativeArray + "]";
        document.getElementById("Posresult").innerText = "[" + positiveArray + "]";
    });
}

fliterNegativeNumbers(givenArray);