function LetterChanges(str) { 
 
  var letterPattern = /[a-zA-Z]/g;
  // function below changes letters for the next one in the alphabet:
  var newStr = str.replace(letterPattern, replaceLetter); 
  
  var vowelPattern = /[aeiou]/g;
  // and this one uppercases the vowels:
  newStr = newStr.replace(vowelPattern, replaceVowel);
  
  return newStr; 
         
}
                           
function replaceLetter(match) {
  if (match === "z"){
    return "a"
  }
  var ascii = match.charCodeAt(0);
  return String.fromCharCode(ascii + 1);
}
 
function replaceVowel(match) {
  return match.toUpperCase();
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline()); 
