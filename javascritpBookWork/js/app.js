/* math method */

var pOw = Math.pow(3, 3);
var trUnc = Math.trunc(5.95); // remove float
var roUnd = Math.round(5.55); // .50 t0 50+ = up or .0 to .49 = down
var ceIl = Math.ceil(5.1); // up
var flOor = Math.floor(5.97); // down
var aBs = Math.abs(7.9);
var mAx = Math.max(10, 30, 20);
var mIn = Math.min(30, 10, 20);
var ranDom = Math.floor(Math.random() * 10 + 1);
var PI = Math.PI;
var E = Math.E;
var sqRt = Math.sqrt(9);
var eXp = Math.exp(5);

/* Math es6 */

var cbRt = Math.cbrt(27); // cube root
var hyPot = Math.hypot(3, 5);

// console.log(pOw, trUnc, roUnd, ceIl, flOor, aBs, mAx, mIn, ranDom, PI, E, sqRt);

console.log(hyPot);

/* Number */

/* Number.parseInt(); 
Number.parseFloat(); 
Number.isNaN(x); 
Number.isFinite(x); 
Number.isInteger(x); 
Number.isSafeInteger(x); 
Number.MIN_SAFE_INTEGER; 
Number.MAX_SAFE_INTEGER; 
Number.EPSILON;  */

var num = 265.565;
var nilInt = Number.parseInt(num);
var nilFloat = Number.parseFloat(num);
var nilNan = Number.isNaN(num);
var nilFinite = Number.isFinite(num);
var nilInteger = Number.isInteger(num);

console.log(nilInteger);

var zero = 0;
var negz = -0;

var equality = zero === negz;
var infinity = 1 / zero === 1 / negz;
console.log("infinite is" + " " + infinity);

console.log(1 / 0);

var x = 0.3 - 0.2;
var y = 0.2 - 0.1;

console.log(y === 0.1);

/* bigInt */
var numbers = 1234n;
console.log(numbers);

/* Date and time */

var now = Date();
var times = Date.now();
var nowTimes = new Date();
console.log(now);

/* Characters, Codepoints, and JavaScript Strings  */

let love = "❤";
let euro = "(⊙_⊙;)";

console.log(love.length);

let str = "";
let sts = "what's up brother";
let sto = "name = my form";
let stq = `She said 'hi', He said`;
console.log(stq);

let lineA = "two\nline";
let lineB = `the new line character at the end of this line
is include literally in this string`;
console.log(lineB);

console.log("My namek\b is Pritom");

/* Working with Strings */
let msg = "Hello," + " " + "world";
console.log(msg);

/* string method */

let methodStr = "Hello, world";
console.log(methodStr.length); // length of string
console.log(methodStr.substring(0, 5));
console.log(methodStr.slice(0, 5));
console.log(methodStr.slice(-5));
console.log(methodStr.split("ell"));

// Searching a string
console.log(methodStr.indexOf("d"));
console.log(methodStr.indexOf("p"));
console.log(methodStr.lastIndexOf("l"));

// Boolean searching functions in ES6 and later
console.log(methodStr.startsWith("Hello"));
console.log(methodStr.endsWith("world"));
console.log(methodStr.includes("llo"));
console.log("okay i am fine");

// Creating modified versions of a string
console.log(methodStr.replace("Hello", "Hi"));
console.log(methodStr.toUpperCase());
console.log(methodStr.toLowerCase());
console.log(methodStr.normalize("NFKC"));

// Inspecting individual (16-bit) characters of a string

console.log(methodStr.charAt(0));
console.log(methodStr.charAt(methodStr.length - 1));
console.log(methodStr.charCodeAt(0));
console.log(methodStr.codePointAt(0));

// String padding functions in ES2017
// Have not work.

console.log(methodStr.padStart(3));
console.log(methodStr.padStart(3, "*"));

console.log(methodStr.padEnd(3));
console.log(methodStr.padEnd(3, "*"));

// Space trimming functions. trim() is ES5; others ES2019
console.log(methodStr.trim());
console.log(methodStr.trimStart());
console.log(methodStr.trimEnd());

// Miscellaneous string methods
console.log(methodStr.concat("!"));
console.log(methodStr.concat(" ").repeat(5));

//Template Literals

let name = "Pritom";
console.log(`My name is ${name}`);

let = backtick = `\n`.length;
console.log(backtick);

let patten = /\d+/g;
console.log(patten);

// using trick

/* var tweet = prompt("write a letter in a 25 characters").slice(0, 25);
alert(tweet);
var tweetCount = tweet.length;
alert(`character type is: ${tweetCount} character reaming: ${25 - tweetCount}`);
 */

// to upper and lower case

/*  var capStr = prompt('Please enter your name:');
 var fiRst = capStr.slice(0,1).toUpperCase();
 var seCond = capStr.slice(1,capStr.length).toLowerCase();
 alert(`${fiRst}${seCond}`); */


 function priTom(a, b){
    return a + b;
 }
let calcEqual = priTom(400,100);
console.log(calcEqual);