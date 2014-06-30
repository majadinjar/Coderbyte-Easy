function SecondGreatLow(arr) { 
  var newArray = arr.sort(function(a, b){return a-b});
  var secMin = newArray[1];
  var secMax = newArray[newArray.length-2];
  return secMin + ' ' + secMax;
  
  // code goes here  
  return arr; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow(readline());  
