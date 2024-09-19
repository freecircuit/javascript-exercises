const leapYears = function(year) {

    if((Number.isInteger(year / 4) && !Number.isInteger(year / 100))){
        return true;  
    }
    else if(Number.isInteger (year / 400)){
        return true;
    }
    else{
        return false
    }

};

//Check solution for different code
//Think mine might actually be more straightforward this time.
// Do not edit below this line
module.exports = leapYears;
