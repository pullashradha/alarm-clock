(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey= "00426bfe510e6d44dd3c426dccd42f57";

},{}],2:[function(require,module,exports){
function Alarm (alarm) {
  this.alarm = alarm;
}

Alarm.prototype.getAlarm = function () {
  console.log(this.alarm);
  console.log(this.time);
  var self = this;
  var myAlarm = setInterval(function() {
    if (moment().format('HH:mm') == self.alarm) {
      alert("It's time");
    }
    console.log(moment());
    console.log(self.alarm);
  }, 1000);
  return myAlarm;
};

exports.alarmModule = Alarm;

},{}],3:[function(require,module,exports){
var Alarm = require("./../js/time.js").alarmModule;

$(document).ready(function() {
  $("#time").text(moment());
  $("#alarm-form").submit(function(event) {
    event.preventDefault();
    var inputAlarmTime = $("#alarm-time").val();
    var newAlarm = new Alarm (inputAlarmTime);
    newAlarm.getAlarm();
  });
});

var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error){
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});

},{"./../.env":1,"./../js/time.js":2}]},{},[3]);
