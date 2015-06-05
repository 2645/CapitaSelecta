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
}

