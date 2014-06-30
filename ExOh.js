function ExOh(str) { 
  allX = [];
  allO = [];
  var str = str.split('');
  for(var i=0;i<str.length;i++) {
    if(str[i]=='x') {
      
      allX.push(str[i]);
    }
    else {
      
      allO.push(str[i]);
    }
  }
  // code goes here  
 var xLength = allX.length; 
 var oLength = allO.length;
 
  
  if(xLength===oLength) {
    return "true";
  }
  else {
    return "false";
       }
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline()); 
