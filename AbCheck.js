function ABCheck(str) { 
 
  str = str.toLowerCase();
  var az = [], bz = [], ok = false;
  
  for (var i=0; i<str.length; i++) {
    if (str[i] == 'a') az.push(i);
    else if (str[i] == 'b') bz.push(i);
  }
  
  for (var i=0; i<az.length; i++) {
    for (var j=0; j<bz.length; j++) {
      if (Math.abs(az[i] - bz[j]) - 1 == 3) {
        ok = true;
      }
    }
  }
  
  // code goes here
  return ok; 
            
}
 
ABCheck(readline());   
