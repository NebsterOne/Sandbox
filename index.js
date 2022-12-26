function removeDuplicates(inputArray) { 
    var newArray = new Array();

    inputArray.sort();

    for (var i = 0; i < inputArray.length; i++) {
        if(i==0) {
            newArray.push(inputArray[i]);
        }   else if (inputArray[i] !== inputArray[i-1]) {
            newArray.push(inputArray[i]);
        }    
        }
        return newArray;
    }
    console.log(removeDuplicates([1,2,2,3,4,55,55]));