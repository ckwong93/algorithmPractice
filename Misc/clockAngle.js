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
// console.log(clockAngle(2,30))
console.log(clockAngle(4,42))