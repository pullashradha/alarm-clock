function Alarm (alarm) {
  this.alarm = alarm;
}

Alarm.prototype.getAlarm = function () {
  var self = this;
  var myAlarm = setInterval(function() {
    if (moment().format('HH:mm') == self.alarm) {
      alert("It's time");
    }
  }, 1000);
  return myAlarm;
};

exports.alarmModule = Alarm;
