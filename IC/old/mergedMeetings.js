function mergeRanges(meetings) {

    var sortedMeetings = meetings.sort(function(a, b) {
        return a.startTime - b.startTime
        // this sorts our meeting times from lowest to highest using startTime
    });

    var mergedMeetings = [sortedMeetings[0]];
        // initializes merged meetings using first value of sorted meeting
    for (var i = 1; i < sortedMeetings.length; i++) {


        var currentMeeting = sortedMeetings[i];
        var lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
        // takes last value of the merged meetings array so we can compare

        if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
            lastMergedMeeting.endTime = Math.max(currentMeeting.endTime, lastMergedMeeting.endTime)
        // look at current item. if current item's starttime is before endtime of last meeting. it will reduce it into one meeting
        // using the higher of the two endtimes...if it overlaps, take later endtime. since these are already sorted, no need to worry
        // about the startTimes being out of order
        } else {
            mergedMeetings.push(currentMeeting)
        // if the currentMeeting time is afterwards, add it to the mergedMeeting array as its own item
        }
    }

    return mergedMeetings
        // at the end, return the consolidated list
}

var meetings = [
    {
        startTime: 3,
        endTime: 5
    }, {
        startTime: 0,
        endTime: 1
    }, {
        startTime: 4,
        endTime: 8
    }, {
        startTime: 10,
        endTime: 12
    }, {
        startTime: 9,
        endTime: 10
    }
]
console.log(mergeRanges(meetings));

/*
expected output =  [
                     { startTime: 0, endTime: 1 },
                     { startTime: 3, endTime: 8 },
                     { startTime: 9, endTime: 12 }
                   ]
actual output = [ { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 } ]
*/
