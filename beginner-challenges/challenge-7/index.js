const givenArray = [2,3,-4,5,6,-1,4,-33,4,5,-8,0,7,-6,5,-1];
const  orginalArray = givenArray;

/**
 * 
 * @param {Array} []givenArray which has negative numbers 
 * @return {Array}[] without negative numbers
 */
function fliterNegativeNumbers(givenArray){
    let negativeArray  = [];
    let positiveArray = [];
    for(let i=0; i<givenArray.length; i++){
        if(givenArray[i]<0){
            negativeArray.push(givenArray[i]);
            // givenArray.pop(i);
        }
        else{
            positiveArray.push(givenArray[i]);
        }
    }

    console.log(negativeArray);
    console.log(positiveArray);
    // console.log(orginalArray);
}

fliterNegativeNumbers(givenArray);