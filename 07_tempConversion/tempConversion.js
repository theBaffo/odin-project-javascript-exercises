const roundToDecimalPlaces = function(num, decimalPlaces) {
  return Math.round(num * 10 ** decimalPlaces) / 10 ** decimalPlaces;
}

const convertToCelsius = function(temp) {
  // (x − 32) × 5/9°C
  const result = (temp - 32) * 5 / 9;
  
  return roundToDecimalPlaces(result, 1);
};

const convertToFahrenheit = function(temp) {
  // (x × 9/5 + 32)
  const result = temp * 9 / 5 + 32;

  return roundToDecimalPlaces(result, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
