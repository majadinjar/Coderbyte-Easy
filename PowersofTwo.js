function PowersofTwo(num) { 
var i = 1;
var power = Math.pow(2, i);
 
while(power < num){
    i++;
    power = Math.pow(2, i);
}
 
    if (num === power)  {return true; }
    else { return false; }
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PowersofTwo(readline()); 
