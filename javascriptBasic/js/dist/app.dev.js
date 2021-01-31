"use strict";

console.log("Hello world"); // first coding use javascript

fullName = "Ariyan Pritom"; // string

console.log(fullName);
var age = 27; // number

console.log(age);
var fullAge = true; // boolean

console.log(fullAge);
var job;
console.log(job); // undefined
// Type coercion

var firstName = "John";
var lastName = "Smith";
var profession = "Programmer";
var oldIs = 25;
var isMarried = false;
console.log("welcome" + " " + firstName + " " + lastName + ". " + "Age is " + oldIs + ". " + "Profession is " + profession + ". " + "Married status is " + " " + isMarried); // Use Type coercion.
// -------------------------------------************************----------------------------------------
//Coding Challenge One is solution

var massMark = 78; // kg

var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;
var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log("Is Mark's BMI higher than John's");
} else {
  console.log("Is John's BMI higher than Mark's");
} // -------------------------------------************************----------------------------------------
//Coding Challenge Two is solution


var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log("John's team wins with " + scoreJohn + " points");
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log("Mike's team wins with " + scoreMike + " points");
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
  console.log("Mary's team wins with " + scoreMary + " points");
} else {
  console.log("This Match is Draw");
} // -------------------------------------************************----------------------------------------


function calculateAge(birthYear) {
  return 2020 - birthYear;
}

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + "years.");
  } else {
    console.log(firstName + "is already retired.");
  }
}

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1948, "Mike");
yearsUntilRetirement(1969, "Jane");

var whatDoYouDo = function whatDoYouDo(job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code";

    case "driver":
      return firstName + " drives a cab in Lisbon.";

    case "designer":
      return firstName + " designer beautiful websites";

    default:
      return firstName + " does something else";
  }
};

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Jane"));
console.log(whatDoYouDo("retired", "Mark")); // -------------------------------------************************----------------------------------------
// Array

var name = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);
console.log(name[1], years[0]); // Different data type

var john = ["John", "Smith", 1990, "designer", false];
john.unshift("Mr", "Pritom");
john.shift();
john.push("blue", "red");
john.pop();
console.log(john);
console.log(john.length);
console.log(john.indexOf("Smith"));
var isDesigner = john.indexOf("designer") === -1 ? "John is NOT a designer" : "John IS a designer";
console.log(isDesigner); // -------------------------------------************************----------------------------------------
//Coding Challenge Three is solution

function tipCalculator(bill) {
  var percentage;

  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }

  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, finalValues); // -------------------------------------************************----------------------------------------
// Object
// Object literal

var pritom = {
  firstName: "Ariyan",
  lastName: "Pritom",
  birthYear: 1993,
  family: ["Arun", "Barun", "Suvo", "Titu"],
  job: "programmer",
  isMarried: false
};
console.log(pritom.firstName);
console.log(pritom["lastName"]);
var x = "birthYear";
console.log(pritom[x]);
pritom.job = "Developer";
pritom["isMarried"] = true;
console.log(pritom); // new object syntax

var jane = new Object();
jane.firstName = "Jane";
jane.birthYear = "1969";
console.log(jane); // -------------------------------------************************----------------------------------------
// OBJECT AND METHOD:

var tom = {
  firstName: "Tom",
  lastName: "Stive",
  birthYear: 1992,
  family: ["Jane", "Mark", "Bod"],
  job: "teacher",
  isMarried: false,
  calcAge: function calcAge() {
    this.age = 2020 - this.birthYear;
  }
};
tom.calcAge();
console.log(tom); // -------------------------------------************************----------------------------------------
//Coding Challenge Four is solution

var john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calBMI: function calBMI() {
    this.bmi = this.mass / this.height * this.height;
    return this.bmi;
  }
};
var mark = {
  fullName: "Mark Smith",
  mass: 78,
  height: 1.69,
  calBMI: function calBMI() {
    this.bmi = this.mass / this.height * this.height;
    return this.bmi;
  }
};
var johnBMI = john.calBMI();
var markBMI = mark.calBMI();

if (johnBMI > markBMI) {
  console.log(john.fullName + "has a higher BMI of " + john.bmi);
} else if (johnBMI < markBMI) {
  console.log(markBMI.fullName + "has a higher BMI of " + mark.bmi);
} else {
  console.log("They have the same BMI");
}

var arrYS = [10, 20, 30];

for (i = 0; i < arrYS.length; i++) {
  console.log(arrYS[i]);
}

for (i = arrYS.length - 1; i >= 0; i--) {
  console.log(arrYS[i]);
}