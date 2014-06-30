function DivisionStringified(num1,num2) { 
  //divide, round, convert
  var result = x = Math.round(num1/num2).toString();
  var groups =[];
   
  //section out 3 digits at a time from end
  while (result.length>3){
  	pusher=result.slice(result.length-3,result.length);
  	groups.push(pusher);
  	result= result.slice(0, hey.length-3);
  }
  //final section goes to array
  groups.push(result);
   
  //reverse, join and wammo
  return groups.reverse().join();
   
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DivisionStringified(readline()); 
