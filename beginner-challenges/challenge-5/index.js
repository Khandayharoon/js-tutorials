function reverseTheArray() {
    document.getElementById("inputForm").addEventListener('submit', function(event) {
        event.preventDefault();
        
      
        let givenArrayString = document.getElementById("inputArray").value.trim();
        
     
        givenArrayString = givenArrayString.replace(/[\[\]]/g, '');

        let givenArray = givenArrayString.split(',').map(item => item.trim());
        
     
        let reversedArray = [];
        for (let i = givenArray.length - 1; i >= 0; i--) {
            reversedArray.push(givenArray[i]);
        }

        document.getElementById("output").innerText = "[" + reversedArray + "]";
        console.log("[" + reversedArray + "]");
    });
}

// Call the function to set up the event listener
reverseTheArray();
