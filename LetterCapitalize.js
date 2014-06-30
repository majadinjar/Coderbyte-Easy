function LetterCapitalize(str) { 
  var words = str.split(" ");
   var arr = Array();
   for (i in words)
   {
      temp = words[i].toLowerCase();
      temp = temp.charAt(0).toUpperCase() + temp.substring(1);
      arr.push(temp);
   }
   return arr.join(" ");
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline()); 
