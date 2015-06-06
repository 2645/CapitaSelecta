/* jshint
browser: true,
devel: true
*/
// Wait for Cordova to connect with the device
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready to be used!
//

var maxAccel = 0;

var options = {
    frequency: 10
};

function onDeviceReady() {
    navigator.accelerometer.watchAcceleration(onSuccessAccel, onErrorAccel, options);


}

function onSuccessAccel(acceleration) {
    var xAccel = Math.round(acceleration.x);
    var yAccel = Math.round(acceleration.y);
    var zAccel = Math.round(acceleration.z);

    var totalAccel = Math.pow(Math.pow(Math.abs(xAccel), 3) + Math.pow(Math.abs(yAccel), 3) + Math.pow(Math.abs(zAccel), 3), 1 / 3);
    if(totalAccel> maxAccel){
        maxAccel = totalAccel;
    }
    
    $('#accel').html('Acceleration X: ' + xAccel + '<br>' + 'Acceleration Y: ' + yAccel + '<br>' + 'Acceleration Z: ' + zAccel);

    $('#record').html(maxAccel);

};

function onErrorAccel(accelError) {
    $('#accel').html('Accel error: ' + accelError.code);
};