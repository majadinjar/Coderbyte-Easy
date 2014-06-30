var FirstFactorial = function(inputNumber) {
        'use strict';
        var outputNumber = 1;
        while (inputNumber > 0) {
            outputNumber *= inputNumber;
            inputNumber -= 1;
        }
        return outputNumber;
    };
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline()); 
