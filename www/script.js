/* jshint
browser: true,
devel: true
*/
// Wait for Cordova to connect with the device
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready to be used!
//
function onDeviceReady() {
    console.log(device);
    console.log(window.device);
    console.log(window.plugins);

    setInterval(getAccel(), 100);
    setInterval(getRot(), 100);

}

function getAccel() {
    navigator.accelerometer.getCurrentAcceleration(onSuccessAccel, onErrorAccel);
}

function onSuccessAccel(acceleration){
    $('#accel').html('Acceleration X: ' + acceleration.x + '\n' + 'Acceleration Y: ' + acceleration.y + '\n' + 'Acceleration Z: ' + acceleration.z + '\n' + 'Timestamp: ' +a cceleration.timestamp + '\n');
}

function onErrorAccel(){
    $('#accel').html('ERROR');
}

function getRot() {

}