function AlphabetSoup(str) {
   var alphabet = "abcdefghijklmnopqrstuvwxyz";
   var string = "";
   var indices = [];
   for (var i=0; i<str.length; i++) {
      indices.push(alphabet.indexOf(str[i]));
   }
   indices.sort(function(a,b) {return b-a});
   while (indices.length > 0) {
      string += alphabet.charAt(indices.pop());
   }
   return string;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AlphabetSoup(readline()); 
