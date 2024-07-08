// let givenArray = [2, 4, 6, 7, 8, 1, 9, 0, 12, 67];

// /**
//  * takes givenArray as input and sorts with Bubblesort.
//  *
//  * @param {Array} givenArray - which is  unsorted Array.
//  * @returns {Array[]} An array which is sorted in Assending order .
//  */
// function sortArray(givenArray) {
//     let n = givenArray.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - 1 - i; j++) {
//             if (givenArray[j] > givenArray[j + 1]) {
//                 let temp = givenArray[j];
//                 givenArray[j] = givenArray[j + 1];
//                 givenArray[j + 1] = temp;
//             }
//         }
//     }
//     console.log(givenArray);
// }

// sortArray(givenArray);

function sortArrayAscendingOrder() {

        let givenArrayString = document.getElementById("inputArray").value.trim();
     
        givenArrayString = givenArrayString.replace(/[\[\]]/g, ''); // Remove square brackets
        let givenArray = givenArrayString.split(',') // Split by comma
                                         .map(item => parseFloat(item.trim())); // Convert to numbers

        let n = givenArray.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1 - i; j++) {
                if (givenArray[j] > givenArray[j + 1]) {
                    let temp = givenArray[j];
                    givenArray[j] = givenArray[j + 1];
                    givenArray[j + 1] = temp;
                }
            }
        }

        document.getElementById("sortArrayAscendingOrder").innerText = "[" + givenArray.join(', ') + "]"; // Join sorted array for display
}




function sortArrayDescendingOrder(){
    let givenArrayString = document.getElementById("inputArray").value.trim();
     
    givenArrayString = givenArrayString.replace(/[\[\]]/g, ''); // Remove square brackets
    let givenArray = givenArrayString.split(',') // Split by comma
                                     .map(item => parseFloat(item.trim())); // Convert to numbers

    let n = givenArray.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (givenArray[j] < givenArray[j + 1]) {
                let temp = givenArray[j];
                givenArray[j] = givenArray[j + 1];
                givenArray[j + 1] = temp;
            }
        }
    }

    document.getElementById("sortArrayDescendingOrder").innerText = "[" + givenArray.join(', ') + "]"; // Join sorted array for display
}