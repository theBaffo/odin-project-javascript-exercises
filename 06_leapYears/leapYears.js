const leapYears = function(year) {
    if (year % 4 === 0) {
        // Years divisible by 100 are not leap years 
        // unless they are divisible by 400 
        if (year % 100 === 0) {
            return year % 400 === 0;
        }

        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
