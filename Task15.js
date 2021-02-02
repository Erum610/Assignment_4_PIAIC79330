var age=prompt("Enter your age");
age=parseInt(age);
console.log("Your age is " + age);
var date=new Date();
var year= date.getFullYear();
console.log("Your birth year is " + (year-age));