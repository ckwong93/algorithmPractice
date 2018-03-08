// given a hour and minute, calculate the clock angle that it creates


function clockAngle(hr,min){
    let degreesPerHour = 30;
    let degreesPerMin = 6;
    let hourAngle;
    let minuteAngle;
    let result;

    minuteAngle = min * degreesPerMin;
    hourAngle = (hr * degreesPerHour) + ((min / 60) * degreesPerHour);
    result = Math.abs(minuteAngle - hourAngle);

    if(result > 180){
        return 360 - result;
    }
    return result

}
console.log(clockAngle(4, 42)); // 249 degrees
console.log(clockAngle(12, 01)); // 5.5 degrees
console.log(clockAngle(12, 00)); // 0 degrees
console.log(clockAngle(00, 01)); // 5.5 degrees
console.log(clockAngle(11, 01)); // 324.5 degrees
console.log(clockAngle(03, 30)); // 75 degrees
console.log(clockAngle(03, 00)); // 90 degrees

