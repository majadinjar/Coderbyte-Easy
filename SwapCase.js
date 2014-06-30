function SwapCase(str) { 
  var str=str.split('');
  for(var i=0;i<str.length;i++) {
    if(str[i]==str[i].toUpperCase()) {
      str[i]=str[i].toLowerCase();
    }
    else if(str[i]==str[i].toLowerCase()) {
      str[i]=str[i].toUpperCase();
    }
  }
  return str.join('');
  // code goes here  
 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline()); 
