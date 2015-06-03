$(document).ready(function(){
    checkAccel();
});
    


function checkAccel(){
    navigator.accelerometer.getCurrentAcceleration(function(acceleration){
        $(body).html('Acceleration X: ' + acceleration.x + '\n' + 'Acceleration Y: ' + acceleration.y + '\n' + 'Acceleration Z: ' + acceleration.z + '\n' + 'Timestamp: '      + acceleration.timestamp + '\n');
    })
}