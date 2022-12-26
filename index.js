//Older style 


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


    //New version of JS

    var removeDuplicate = function(numArr) {
        var newArr = [];
        for (var i = 0; i < numArr.length; i++) {
            if(!newArr.includes(numArr[i])) {
                newArr.push(numArr[i]);
            }
            
        }
        return newArr;
    }


    var nums = [1,1,3,3,6,6,16,16,23,23];

    console.log(removeDuplicate(nums));