const removeFromArray = function(arr, ...numsToRemove) {
    for (let i = 0; i < numsToRemove.length; i++) {
        let numToRemove = numsToRemove[i];
        let idx = arr.indexOf(numToRemove);

        while (idx !== -1) {
            arr = arr.slice(0, idx).concat(arr.slice(idx + 1));
            idx = arr.indexOf(numToRemove);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
