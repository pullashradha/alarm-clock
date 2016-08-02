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
