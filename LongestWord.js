var LongestWord = function(inputString) {
        'use strict';
        var inputArray = inputString.split(' '),
            outputString = '',
            index = 0,
            oneWord = '',
            longestWordSize = 0;
        for (index = 0; index < inputArray.length; index += 1) {
            oneWord = inputArray[index];
            if (/^[A-z]+$/.test(oneWord) && (oneWord.length > longestWordSize)) {
                outputString = oneWord;
                longestWordSize = oneWord.length;
            }
        }
        return outputString;
    };
   
// keep this function call here 
LongestWord(readline());  
