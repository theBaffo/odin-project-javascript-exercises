const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	let total = 0;

  nums.forEach((num) => {
    const parsedNum = parseInt(num);
    total += parsedNum;
  })

  return total
};

const multiply = function(nums) {
  let total = 1;

  nums.forEach((num) => {
    const parsedNum = parseInt(num);
    total *= parsedNum;
  })

  return total
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
