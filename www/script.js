/* jshint
browser: true,
devel: true
*/
// Wait for Cordova to connect with the device
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready to be used!
//



var options = {
    frequency: 10
};

function onDeviceReady() {
    navigator.compass.watchHeading(onSuccessRot, onErrorRot, options);
    navigator.accelerometer.watchAcceleration(onSuccessAccel, onErrorAccel, options);


}

function onSuccessRot(heading) {
    $('#rotation').html('Heading: ' + Math.round(heading.magneticHeading / 3.6));
};

function onErrorRot(compassError) {
    $('#rotation').html('Compass error: ' + compassError.code);
};

function onSuccessAccel(acceleration) {
    var xAccel = Math.round(acceleration.x);
    $('#accel').html('Acceleration X: ' + xAccel + '<br>' + 'Acceleration Y: ' + Math.round(acceleration.y) + '<br>' + 'Acceleration Z: ' + Math.round(acceleration.z));

};

function onErrorAccel(accelError) {
    $('#accel').html('Accel error: ' + accelError.code);
};