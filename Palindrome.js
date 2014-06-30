function Palindrome(str) { 
  var str = str.split('');
  
  var length = str.length-1;
  
  var half = Math.floor(length/2);
  
  var x = 0;
 
  while(x<=half) {
    if(str[x]===str[length]) {
     
     return "true";
      x++;
      length--;
    }
    else {
      return "false";
         }
  }
  // code goes here 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Palindrome(readline()); 
