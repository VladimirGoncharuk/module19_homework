//2task
function determinateString (str,anyObj){
   
    for (let key in anyObj) {
        if (key === str) {
         return true; 
        }   
    }
    return false;
}