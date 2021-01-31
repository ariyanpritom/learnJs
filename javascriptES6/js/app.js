//Arrow function
var value = () => console.log("My name is pritom");
value();

//Destructuring:

//Arrays Destructuring

// 1st method
var arr = ["Pritom", 2020, "programmer", 27, true];

const [first, second, , third] = arr; // empty string means skip.
console.log(third);

// 2nd method

var arr1 = ["Ariyan", 2025, "developer", 22, false];

const [one, two] = ["Ariyan", "developer"];
console.log(two);

//Object Destructuring

//1st method

var obj1 = {
  name: "Alex",
  age: 23,
  job: "designer",
};

const { name, age } = obj1;

console.log(age);

//2nd method

var obj2 = {
  name: "Mary",
  age: 34,
  job: "Market manager",
};

const { name: nOne, job: nTwo } = obj2;
console.log(nTwo);

//Functional Destructuring

function destructuring({ name, job }) {
  console.log(`this value is ${name} ${job}`);
}
destructuring(obj2);

function destructuring2([first, third]) {
  console.log(`this value is ${first} ${third}`);
}
destructuring2(arr);

//Spread Operator

//Array use Spread Operator

var mainArras = ["Pritom", "Alexa", "stive"]; // use spread.
console.log(...mainArras);

var mainArras2 = ["JOlly", ...mainArras, "Mary"];

console.log(...mainArras2);

//Object use Spread Operator

var mainObj1 = {
  name: "Pritom",
  age: 27,
};
var mainObj2 = {
  year: 2020,
  job: "programmer",
};

var mainObj3 = { ...mainObj1, ...mainObj2 };
console.log(mainObj3);

//Object use Spread String

var newName = "Ariyan";
var newArras = [...newName];
console.log(newArras);

// function Spread Operator

var newNum = [2, 3, 5, 7, 9];

function numberOfNew(one, two, three, four, five) {
  return one + two + three + four + five;
}

var numFun = numberOfNew(...newNum);

console.log(numFun);

// Rest Parameter:

function isFullAge6(...years) {
  years.forEach((cur) => console.log(2016 - cur) >= 18);
}

isFullAge6(1990, 1999, 1965, 2016, 1987);

// Default Parameter:

function SmithPerson(
  firstName,
  yearOfBirth,
  lastName = "smith",
  nationality = "american"
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson("John", 1990);

var emily = new SmithPerson("Emily", 1983, "Diza", "Spanish");

console.log(john);
console.log(emily);

// MAP

const question = new Map();
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES7");
question.set(4, "ES8");
question.set(5, "ES9");
console.log(question.size);
console.log(question.delete(5));
console.log(question);

// Class

class Person {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    console.log(`${this.name} ${this.yearOfBirth}`);
  }
}
var vivo = new Person("vivo", 2001, "Business");

vivo.calculateAge();

// SUB CLASS

class Person2 extends Person {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const johnAt = new Person2("john", 1990, "swimmer", 3, 10);

johnAt.wonMedal();
johnAt.calculateAge();
