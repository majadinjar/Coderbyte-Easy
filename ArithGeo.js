function ArithGeo(arr) { 
      var x = 0;
      var s = 0;
      var result = '';
      var allObjects = [];
 
 
      for(var i=0; i<arr.length;i++) {
        while(x<arr.length-1) {
          var diff = arr[x+1]-arr[x];
          allObjects.push(diff);
          x++;
        }
 
       while(s<allObjects.length) {
        
          if(allObjects[s]===allObjects[s+1]) {
            result = "Arithmetic";
          }
          
          else if(allObjects[s+1]%allObjects[s]===0) {
           result = "Geometric";
          }
          
          else {
            result = '-1';
          }
         
        return result;
        
        }
 
      }
 
    }
 
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArithGeo(readline());  
