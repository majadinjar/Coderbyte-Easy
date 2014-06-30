function NumberAddition(str) { 
	var mathches, 
		total=0;
 
	// use regexp to grab the numbers
	matches=str.match(/([\d]+)/g);
 
	//itereate and add
	for (var i = 0; i<matches.length;i++){
 
		total = total + parseInt(matches[i]);
	}
 
  return total; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NumberAddition(readline()); 
