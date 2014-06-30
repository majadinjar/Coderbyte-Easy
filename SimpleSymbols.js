var SimpleSymbols = function (s) {
    if (s[0] != "+" && s[0] != "=") {
        return false;
    } else if (s[s.length - 1] != "+" && s[s.Length - 1] != "=") {
        return false;
    } else {
        for (var i = 1; i<s.Length - 1; i++) {
            if (s[i] != "+" && s[i] != "=") {
                if (s[i-1] != "+" || s[i+1] != "+") {
                    return False;
                }
            }
        }
    }
    return true;
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());   
