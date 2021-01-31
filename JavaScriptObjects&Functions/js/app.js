// OBJECT

var john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher",
};

// Function constructor

var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function () {
  console.log(2016 - this.yearOfBirth);
};

var jack = new Person("Jack", "1995", "teacher");
jack.calculateAge();

// Object create

var personProto = {
  calculateAge: function () {
    console.log(2016 - this.yearOfBirth);
  },
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" },
});

// callback function /

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

var args = arrayCalc(years, calculateAge);
console.log(args);

// Return function

function interviewQuestion(job) {
  if (job === "designer") {
    return function (name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log("What subject do you teach, " + name + " ?");
    };
  } else {
    return function (name) {
      console.log("Hello " + name + ", what do you do?");
    };
  }
}

var teacherQuestion = interviewQuestion("designer")("Jack");
var teacherQuestion = interviewQuestion("teacher")("John");
var teacherQuestion = interviewQuestion("programmer")("Marry");

// IIFE

(function () {
  var score = Math.random() * 10;
  console.log(score);
})();

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);

// Closures

function outerFunction(outer) {
  return function innerFunction(inner) {
    console.log(outer + " " + inner);
  };
}

outerFunction("Ariyan")("Pritom");

// Bind, Call, Apply

function printMe(name) {
  console.log("Hello " + name + " " + this.name);
}

var object = {
  name: "Ariyan Pritom",
  age: 22,
};

var object2 = {
  name: "John Week",
  age: 23,
};

var object3 = {
  name: "Mary",
  age: 24,
};

var mainObjOne = printMe.bind(object, "This is");
mainObjOne();

var mainObjTwo = printMe.call(object2, "this is superstar ");
var mainObjTwo = printMe.apply(object3, ["this woman is "]);
