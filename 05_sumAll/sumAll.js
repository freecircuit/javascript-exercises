const sumAll = function(a, y) {    
    let sum = 0;
    let error = "ERROR";
    
    if(Number.isInteger(a) && Number.isInteger(y) && a >= 0 && y >= 0){
    if(y < a){
    for(let x = y; x <= a; x++){ 
        sum += x   
     }
    }
    else{
        for(let x = a; x <= y; x++){
            sum += x
        }
    }
return sum;
}
else{
    return error;
}
    
}

//Look at solution page for more efficient code, 
//swaps values before running loop with the > condintion
//allowing loop to only have to be coded once.

// Do not edit below this line
module.exports = sumAll;
