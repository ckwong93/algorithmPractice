function mergeMeetings(times) {
    let merged = [];
    let lastAdded;
    let current;
    let sorted = times.sort(function (a, b) {
        return a.startTime - b.startTime
    });
    // console.log(sorted);
    merged.push(sorted[0]);


    for (var i = 1; i < sorted.length; i++) {
        lastAdded = merged[merged.length - 1];
        current = sorted[i];
        if (lastAdded.endTime >= current.startTime) {
            lastAdded.endTime = Math.max(lastAdded.endTime, current.endTime)
        }
        else {
            merged.push(current);
        }
    }

    return merged;
}

console.log(mergeMeetings([
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
]))


// [ { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 5 },
//   { startTime: 4, endTime: 8 },
//   { startTime: 9, endTime: 10 },
//   { startTime: 10, endTime: 12 } ]