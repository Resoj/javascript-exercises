const convertToCelsius = function(fDegrees) {
  return Number(((fDegrees - 32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(cDegrees) {
  return Number(((cDegrees * 9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
