const leapYears = function(year) {
    let tr = Boolean(1);
    let fs = Boolean(0);


    if((Number.isInteger(year / 4) && !Number.isInteger(year / 100))){
        return tr;  
    }
    else if(Number.isInteger (year / 400)){
        return tr;
    }
    else{
        return fs
    }

};
console.log(leapYears(1992));