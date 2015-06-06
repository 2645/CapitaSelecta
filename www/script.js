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
    frequency: 500
};

function onDeviceReady() {
    
    $('body').append('<div>WE READY</div>');

    navigator.compass.watchHeading(onSuccessRot, onErrorRot, options);



}

function onSuccessRot(heading) {
    $('#rotation').html('Heading: ' + heading.magneticHeading);
};

function onErrorRot(compassError) {
    $('#rotation').html('Compass error: ' + compassError.code);
};