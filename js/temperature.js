function Temperature (kelvin) {
  this.temperature = kelvin;
}

Temperature.prototype.convertedTemperature = function () {
  var farenheit = (this.temperature * 9/5)-459.67;
  return farenheit;
}

exports.temperatureModule = Temperature;
