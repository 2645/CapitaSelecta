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
    var yAccel = Math.round(acceleration.y);
    var zAccel = Math.round(acceleration.z);
    
    $('#accel').html('Acceleration X: ' + xAccel + '<br>' + 'Acceleration Y: ' + yAccel + '<br>' + 'Acceleration Z: ' + zAccel);

};

function onErrorAccel(accelError) {
    $('#accel').html('Accel error: ' + accelError.code);
};