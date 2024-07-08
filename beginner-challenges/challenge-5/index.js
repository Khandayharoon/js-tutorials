let givenArray = [2, 4, 5, 6, 7, 8, 9, 0, 9];

function reverseTheArray(givenArray) {
    let reversedArray = [];
    for (let i = givenArray.length - 1; i >= 0; i--) {
        reversedArray.push(givenArray[i]);
    }
    console.log(reversedArray);
}

reverseTheArray(givenArray);
