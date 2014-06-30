function LetterCountI(str){
 
    var x=str.split(" ") 
    var count=0; 
 
   for(var i=0; i<x.length; i++){//getting the word
     var word=x[i]
     for(var j=0; j<word.length; j++){//getting the letter
       var letter=word[j]
       for(var k=0; k<word.length; k++){//comparing word
         if(j!==k){
            if(letter===word[k]){
               count=count+1; 
           
                 if(count>1){
              
                   return word;  
                 }
            }
         }
       }
     
     }
    }
   
   return -1;
  }
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCountI(readline());
