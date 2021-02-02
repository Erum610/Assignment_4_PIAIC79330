var date=new Date("12 05 2015 22: 32: 23");
console.log("Current Date: " + date);
var milliseconds = date.getTime();
console.log("Elapsed milliseconds since January 1, 1970:" + milliseconds);
var minutes = milliseconds/(1000*60*60);
console.log("Elapsed milliseconds since January 1, 1970:" + minutes);