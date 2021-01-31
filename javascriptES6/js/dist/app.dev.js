"use strict";

var _console, _console2;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//Arrow function
var value = function value() {
  return console.log("My name is pritom");
};

value(); //Destructuring:
//Arrays Destructuring
// 1st method

var arr = ["Pritom", 2020, "programmer", 27, true];
var first = arr[0],
    second = arr[1],
    third = arr[3]; // empty string means skip.

console.log(third); // 2nd method

var arr1 = ["Ariyan", 2025, "developer", 22, false];
var one = "Ariyan",
    two = "developer";
console.log(two); //Object Destructuring
//1st method

var obj1 = {
  name: "Alex",
  age: 23,
  job: "designer"
};
var name = obj1.name,
    age = obj1.age;
console.log(age); //2nd method

var obj2 = {
  name: "Mary",
  age: 34,
  job: "Market manager"
};
var nOne = obj2.name,
    nTwo = obj2.job;
console.log(nTwo); //Functional Destructuring

function destructuring(_ref) {
  var name = _ref.name,
      job = _ref.job;
  console.log("this value is ".concat(name, " ").concat(job));
}

destructuring(obj2);

function destructuring2(_ref2) {
  var _ref3 = _slicedToArray(_ref2, 2),
      first = _ref3[0],
      third = _ref3[1];

  console.log("this value is ".concat(first, " ").concat(third));
}

destructuring2(arr); //Spread Operator
//Array use Spread Operator

var mainArras = ["Pritom", "Alexa", "stive"]; // use spread.

(_console = console).log.apply(_console, mainArras);

var mainArras2 = ["JOlly"].concat(mainArras, ["Mary"]);

(_console2 = console).log.apply(_console2, _toConsumableArray(mainArras2)); //Object use Spread Operator


var mainObj1 = {
  name: "Pritom",
  age: 27
};
var mainObj2 = {
  year: 2020,
  job: "programmer"
};

var mainObj3 = _objectSpread({}, mainObj1, {}, mainObj2);

console.log(mainObj3); //Object use Spread String

var newName = "Ariyan";

var newArras = _toConsumableArray(newName);

console.log(newArras); // function Spread Operator

var newNum = [2, 3, 5, 7, 9];

function numberOfNew(one, two, three, four, five) {
  return one + two + three + four + five;
}

var numFun = numberOfNew.apply(void 0, newNum);
console.log(numFun); // Rest Parameter:

function isFullAge6() {
  for (var _len = arguments.length, years = new Array(_len), _key = 0; _key < _len; _key++) {
    years[_key] = arguments[_key];
  }

  years.forEach(function (cur) {
    return console.log(2016 - cur) >= 18;
  });
}

isFullAge6(1990, 1999, 1965, 2016, 1987); // Default Parameter:

function SmithPerson(firstName, yearOfBirth) {
  var lastName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "smith";
  var nationality = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "american";
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson("John", 1990);
var emily = new SmithPerson("Emily", 1983, "Diza", "Spanish");
console.log(john);
console.log(emily); // MAP

var question = new Map();
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES7");
question.set(4, "ES8");
question.set(5, "ES9");
console.log(question.size);
console.log(question["delete"](5));
console.log(question); // Class

var Person =
/*#__PURE__*/
function () {
  function Person(name, yearOfBirth, job) {
    _classCallCheck(this, Person);

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  _createClass(Person, [{
    key: "calculateAge",
    value: function calculateAge() {
      console.log("".concat(this.name, " ").concat(this.yearOfBirth));
    }
  }]);

  return Person;
}();

var vivo = new Person("vivo", 2001, "Business");
vivo.calculateAge(); // SUB CLASS

var Person2 =
/*#__PURE__*/
function (_Person) {
  _inherits(Person2, _Person);

  function Person2(name, yearOfBirth, job, olympicGames, medals) {
    var _this;

    _classCallCheck(this, Person2);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Person2).call(this, name, yearOfBirth, job));
    _this.olympicGames = olympicGames;
    _this.medals = medals;
    return _this;
  }

  _createClass(Person2, [{
    key: "wonMedal",
    value: function wonMedal() {
      this.medals++;
      console.log(this.medals);
    }
  }]);

  return Person2;
}(Person);

var johnAt = new Person2("john", 1990, "swimmer", 3, 10);
johnAt.wonMedal();
johnAt.calculateAge();