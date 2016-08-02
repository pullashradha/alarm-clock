var Temperature = require("./../js/temperature.js").temperatureModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#temp').click(function() {
    var city = $('#location').val();
    // $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      var kelvin = response.main.temp;
      var newTemperature = new Temperature (kelvin);
      $('.showtemp').text("the temperature is " + newTemperature.convertedTemperature() + " degrees.");
    }).fail(function(error){
      $('.showtemp').text(error.responseJSON.message);
    });
  });
});
