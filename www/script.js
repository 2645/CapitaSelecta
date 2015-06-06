/* jshint
browser: true,
devel: true
*/
// Wait for Cordova to connect with the device
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready to be used!
//


$(document).ready(function(){
    $('body').html('this works tho');
})
var options = {
    frequency: 500
}; 

function onDeviceReady() {
    console.log(device);
    console.log(window.device);
    console.log(window.plugins);
    $('body').append('WE READY');
    
    navigator.compass.watchHeading(onSuccess, onError, options);

}

function onSuccess(heading) {
    $('#rotation').html('Heading: ' + heading.magneticHeading);
};

function onError(compassError) {
    $('#rotation').html('Compass error: ' + compassError.code);
};


