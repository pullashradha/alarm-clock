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
