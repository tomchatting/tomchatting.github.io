const batteryNote = document.getElementById('fully-charged');

navigator.getBattery()
  .then(function (battery) {

    // Get current battery level .
    var batteryLevel = battery.level * 100;
    var isCharging = battery.charging;

    if (batteryLevel == 100 && isCharging) {
      batteryNote.classList.remove('d-none');
    }
  })
  .catch(function (e) {
    console.error(e);
  });