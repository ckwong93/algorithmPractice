// Write a class TempTracker with these methods:
//
// insert()—records a new temperature
// getMax()—returns the highest temp we've seen so far
// getMin()—returns the lowest temp we've seen so far
// getMean()—returns the mean ↴ ↴ of all temps we've seen so far
// getMode()—returns a mode ↴ ↴ of all temps we've seen so far
// Optimize for space and time. Favor speeding up the getter functions getMax(), getMin(), getMean(), and getMode() over speeding up the insert() function.

function tempTracker(){

  // mode
  this.occurences = [];
  for(var i = 0; i < 300; i++){
    this.occurences[i] = 0;
  }
  this.highestOccurences = 0;
  this.mode = null;


  // mean
  this.totalNumberCount = 0;
  this.totalSum = 0;
  this.mean = null;

  // max/min
  this.max = null;
  this.min = null;
}

tempTracker.prototype.insert = function(temperature){

  // mode
  this.occurences[temperature]++;
  if(this.occurences[temperature] > this.highestOccurences){
    this.mean = temperature;
    this.highestOccurences = this.occurences[temperature];
  }
  // mean
  this.totalNumberCount++;
  this.totalSum += temperature;
  this.mean = this.totalSum / this.totalNumberCount;

  // max/min
  if(this.max === null || this.max < temperature){
    this.max = temperature;
  };

  if(this.min === null || this.min > temperature){
    this.min = temperature;
  };
}

tempTracker.prototype.max = function(){
  return this.max;
};

tempTracker.prototype.min = function(){
  return this.min;
};

tempTracker.prototype.mean = function(){
  return thisl.
}
