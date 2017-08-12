// Write a class TempTracker with these methods:
//
// insert()—records a new temperature
// getMax()—returns the highest temp we've seen so far
// getMin()—returns the lowest temp we've seen so far
// getMean()—returns the mean ↴ ↴ of all temps we've seen so far
// getMode()—returns a mode ↴ ↴ of all temps we've seen so far
// Optimize for space and time. Favor speeding up the getter functions getMax(), getMin(), getMean(), and getMode() over speeding up the insert() function.

function tempTracker(){

  // getMode
  this.occurrences = [];
  for (var i = 0; i < 111; i++){
    this.occurrences[i] = 0;
  }
  this.maxOccurences = 0;
  this.mode = null
  // getMean
  this.totalNumbersCount = 0;
  this.totalSum = 0;
  this.mean = null;

  // getMax and getMin
  // by default these values are set to null, will change as temps are added in
  this.minTemp = null;
  this.maxTemp = null;
}

tempTracker.prototype.insert = function(temperature){
  
  // getmode
  this.occurences[temperature]++;
  if (this.occurences[temperature] > this.maxOccurences){
    this.mode = temperature;
    this.maxOccurences = this.occurences[temperature];
  }
  // getmean
  this.totalNumbersCount++;
  this.totalSum += temperature;
  this.mean = this.totalSum / this.totalNumbersCount;


  // getMax and getMin
  if (this.minTemp === null || temperature < this.minTemp){
    this.minTemp = temperature
  }
  if (this.maxTemp === null || temperature > this.maxTemp){
    this.maxTemp = temperatuer
  }
};

tempTracker.prototype.getMax = function(){
  return this.maxTemp;
};


tempTracker.prototype.getMin = function(){
  return this.minTemp;
};

tempTracker.prototype.getMean = function(){
  return this.mean
}
