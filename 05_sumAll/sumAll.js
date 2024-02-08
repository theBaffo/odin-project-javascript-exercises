const sumAll = function(from, to) {
    // Parameter validation
    if (typeof from !== 'number' || typeof to !== 'number') {
        return 'ERROR';
    }

    if (from < 0 || to < 0) {
        return 'ERROR';
    }

    // Parameters might be "swapped"
    if (from > to) {
        let tmp = from;
        from = to;
        to = tmp;
    }

    let sum = 0;

    for (let i = from; i <= to; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
