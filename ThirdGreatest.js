function ThirdGreatest(strArr) { 
	var matrix=[];
	
	//build the array, two dimensions  
	for (var i=0; i<strArr.length;i++){
 
		matrix.push([strArr[i].length,strArr[i]]);
 
	}
	//sort
	matrix.sort(function(a,b){
 
		return b[0]>a[0];
 
	});
	//grab the 3rd greatest
	return matrix[2][1];
      
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ThirdGreatest(readline());  
