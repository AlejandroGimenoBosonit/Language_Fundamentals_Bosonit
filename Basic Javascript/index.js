// Comment Your Javascript Code
/* Comment 2 */
////////////////////////////////////////////////////////////////////
// Declare Javascript Variables
var myName;

////////////////////////////////////////////////////////////////////
// Storing Values with the Assignment Operator
var a;
// Only change code below this line
a=7;

////////////////////////////////////////////////////////////////////
// Assigning the Value of One Variable to Another
// Setup
var a;
a = 7;
var b;
// Only change code below this line
b=a;
////////////////////////////////////////////////////////////////////
//Initializing Variables with the Assignment Operator
var a =9;
////////////////////////////////////////////////////////////////////
//Declare String Variables
var myFirstName = 'John';
var myLastName = 'Doe';
////////////////////////////////////////////////////////////////////
//Understanding Uninitialized Variables
// Only change code below this line
var a=5;
var b=10;
var c='I am a';
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
////////////////////////////////////////////////////////////////////
//Understanding Case Sensitivity in Variables
// Variable declarations
var studlyCapVar ;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
////////////////////////////////////////////////////////////////////
//Explore Differences Between the var and let Keywords
/*
One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations.
A keyword called let was introduced in ES6, a major update to JavaScript, to solve this potential issue with the var keyword.
*/
let catName = "Oliver";
let catSound = "Meow!";
////////////////////////////////////////////////////////////////////
//Declare a Read-Only Variable with the const Keyword
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line
////////////////////////////////////////////////////////////////////
//Add Two Numbers with JavaScript
const sum = 10 + 10;
////////////////////////////////////////////////////////////////////
//Subtract One Number from Another with JavaScript
const difference = 45 - 33;
////////////////////////////////////////////////////////////////////
//Multiply Two Numbers with JavaScript
const product = 8 * 10;
////////////////////////////////////////////////////////////////////
//Divide One Number by Another with JavaScript
const quotient = 66 / 33;
////////////////////////////////////////////////////////////////////
//Increment a Number with JavaScript
let myVar = 87;

// Only change code below this line
myVar++;
////////////////////////////////////////////////////////////////////
//Decrement a Number with JavaScript
let myVar = 11;

// Only change code below this line
myVar--;
////////////////////////////////////////////////////////////////////
//Create Decimal Numbers with JavaScript
const ourDecimal = 5.7;

// Only change code below this line
const myDecimal = 6.89;
////////////////////////////////////////////////////////////////////
//Multiply Two Decimals with JavaScript
const product = 2.0 * 2.5;
////////////////////////////////////////////////////////////////////
//Divide One Decimal by Another with JavaScript
const quotient = 4.4 / 2.0; // Change this line
////////////////////////////////////////////////////////////////////
//Finding a Remainder in JavaScript
const remainder = 11%3;
////////////////////////////////////////////////////////////////////
//Compound Assignment With Augmented Addition
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c +=7;
////////////////////////////////////////////////////////////////////
//Compound Assignment With Augmented Subtraction
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;
////////////////////////////////////////////////////////////////////
//Compound Assignment With Augmented Multiplication
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;
////////////////////////////////////////////////////////////////////
//Compound Assignment With Augmented Division
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;
////////////////////////////////////////////////////////////////////
//Escaping Literal Quotes in Strings
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
////////////////////////////////////////////////////////////////////
//Quoting Strings with Single Quotes
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
////////////////////////////////////////////////////////////////////
//Escape Sequences in Strings
/*
FirstLine
    \SecondLine
ThirdLine
*/
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
////////////////////////////////////////////////////////////////////
//Concatenating Strings with Plus Operator
const myStr = "This is the start." + " This is the end."; // Change this line
////////////////////////////////////////////////////////////////////
//Concatenating Strings with the Plus Equals Operator
let myStr = "This is the first sentence.";
myStr += " This is the second sentence.";
////////////////////////////////////////////////////////////////////
//Constructing Strings with Variables
// Only change code below this line
const myName = "John Doe";
const myStr = "Hi, my name is "+myName+" . Nice to mmet you";
////////////////////////////////////////////////////////////////////
// Change code below this line
const someAdjective = "awesome";
let myStr = "Learning to code is ";
myStr+=someAdjective;
////////////////////////////////////////////////////////////////////
//Find the Length of a String
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
////////////////////////////////////////////////////////////////////
//Use Bracket Notation to Find the First Character in a String
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
////////////////////////////////////////////////////////////////////
//Understand String Immutability
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World";
// Only change code above this line
////////////////////////////////////////////////////////////////////
//Use Bracket Notation to Find the Nth Character in a String
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line
////////////////////////////////////////////////////////////////////
//// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length-1]; // Change this line
////////////////////////////////////////////////////////////////////
//Use Bracket Notation to Find the Nth-to-Last Character in a String
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
////////////////////////////////////////////////////////////////////
//Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myAdjective +" "+ myNoun+" " + myVerb+" " + myAdverb;
// Only change code above this line
////////////////////////////////////////////////////////////////////
//Store Multiple Values in one Variable using JavaScript Arrays
// Only change code below this line
const myArray = ["Hello", 2];
////////////////////////////////////////////////////////////////////
//Nest one Array within Another Array
const myArray = [[],[]];
////////////////////////////////////////////////////////////////////
//Access Array Data with Indexes
const myArray = [50, 60, 70];
const myData = myArray[0];
////////////////////////////////////////////////////////////////////
//Modify Array Data With Indexes
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;
myArray[1] = 64;
myArray[2] = 99;
////////////////////////////////////////////////////////////////////
//Access Multi-Dimensional Arrays With Indexes
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];
 ////////////////////////////////////////////////////////////////////
//Manipulate Arrays With push()
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);
////////////////////////////////////////////////////////////////////
//Manipulate Arrays With pop()
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop();
////////////////////////////////////////////////////////////////////
//Manipulate Arrays With shift()
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();
////////////////////////////////////////////////////////////////////
//Manipulate Arrays With unshift()
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35])
////////////////////////////////////////////////////////////////////
//Shopping List
const myList = [
  ["Milk", 1],
  ["eggs",2],
  ["bread",3],
  ["coffee",4],
  ["Soap",5]
];
////////////////////////////////////////////////////////////////////
//Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log("Hi World");
  }
  
  reusableFunction();
////////////////////////////////////////////////////////////////////
//Passing Values to Functions with Arguments
function functionWithArgs(a, b){
    console.log(a+b);
  } 
  
  functionWithArgs(3,4);
////////////////////////////////////////////////////////////////////
//Return a Value from a Function with Return
function timesFive(a){
    return a*5;
  }
////////////////////////////////////////////////////////////////////
//Global Scope and Functions
// Declare the myGlobal variable below this line


function fun1() {
// Assign 5 to oopsGlobal Here
oopsGlobal=5;
}
  
  // Only change code above this line
  
function fun2() {
var output = "";
if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
}
if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
}
console.log(output);
}
////////////////////////////////////////////////////////////////////
//Local Scope and Functions
function myLocalScope() {
    // Only change code below this line
    const myVar = 12;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
////////////////////////////////////////////////////////////////////
//Global vs. Local Scope in Functions
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
////////////////////////////////////////////////////////////////////
//Understanding Undefined Value returned from a Function
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
    sum +=5;
  }

// Only change code above this line

addThree();
addFive();
////////////////////////////////////////////////////////////////////
//Assignment with a Returned Value
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7)
////////////////////////////////////////////////////////////////////
//Stand in Line
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
  item = arr.shift();
  return item;
return item;
// Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
////////////////////////////////////////////////////////////////////
//Understanding Boolean Values
function welcomeToBooleans() {
// Only change code below this line

return true; // Change this line

// Only change code above this line
}
////////////////////////////////////////////////////////////////////
//Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  if (wasThatTrue) {
      return "Yes, that was true"
    }else{
      return "No, that was false"
    }
    // Only change code above this line
  
  }
////////////////////////////////////////////////////////////////////
//Comparison with the Equality Operator
// Setup
function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);
////////////////////////////////////////////////////////////////////
//Comparison with the Strict Equality Operator
// Setup
function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
////////////////////////////////////////////////////////////////////
//Comparison with the Inequality Operator
// Setup
function testNotEqual(val) {
    if (val!=99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);
////////////////////////////////////////////////////////////////////
//Comparison with the Strict Inequality Operator
// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);
////////////////////////////////////////////////////////////////////
//Comparison with the Greater Than Operator
function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
  
    if (val>10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);
////////////////////////////////////////////////////////////////////
//Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
    if (val>=20) {  // Change this line
      return "20 or Over";
    }
  
    if (val>=10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);
////////////////////////////////////////////////////////////////////
//Comparisons with the Logical And Operator
function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val<= 50 && val>= 25) {
        return "Yes";
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);
////////////////////////////////////////////////////////////////////
//Comparisons with the Logical Or Operator
function testLogicalOr(val) {
    // Only change code below this line
    if (val<10 || val >20) {
      return "Outside";
    }
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);
////////////////////////////////////////////////////////////////////
//Introducing Else If Statements
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) 
    {
        return "Smaller than 5";
    }else{
        return "Between 5 and 10";
    }
}
  
  testElseIf(7);
////////////////////////////////////////////////////////////////////
//Logical Order in If Else Statements
function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);
////////////////////////////////////////////////////////////////////
//Chaining If Else Statements
function testSize(num) {
    // Only change code below this line
    if(num < 5){
      return 'Tiny';
    }else if (num < 10){
      return 'Small';
    }else if (num < 15){
      return 'Medium';
    }else if (num < 20){
      return 'Large';
    }else if (num >= 20){
      return 'Huge';
    }
  
    return "Change Me";
    // Only change code above this line
  }
  
  testSize(7);
////////////////////////////////////////////////////////////////////
//Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes == 1){
    return names[0];
  } else if(strokes <= par-2){
    return names[1];
  }else if(strokes === par-1){
    return names[2];
  }
  else if(strokes === par){
    return names[3];
  }
  else if(strokes === par+1){
    return names[4];
  }
  else if(strokes === par+2){
    return names[5];
  }
  else{
    return names[6];
  }

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);
////////////////////////////////////////////////////////////////////
//Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case 1:
        answer =  'alpha';
        break;
      case 2:
        answer =  'beta';
        break;
      case 3:
        answer =  'gamma';
        break;
      case 4: 
        answer =  'delta';
        break;
    }
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);
////////////////////////////////////////////////////////////////////
//Adding a Default Option in Switch Statements
function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
        case 'a':
            answer =  'apple';
            break;
        case 'b':
            answer =  'bird';
            break;
        case 'c':
            answer =  'cat';
            break;
        default:
            answer = 'stuff';
        }
    // Only change code above this line
    return answer;
}

    switchOfStuff(1);
////////////////////////////////////////////////////////////////////
//Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9: 
        answer = 'High';
        break;
    }
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);
////////////////////////////////////////////////////////////////////
//Replacing If Else Chains with Switch
function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  
    switch(val){
      case 1:
        answer ="There is no #1";
        break;
      case 7:
        answer ="Ate Nine";
        break;
      case 42:
        answer ="The Answer";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case "bob":
        answer ="Marley";
        break;
    }
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7);
////////////////////////////////////////////////////////////////////
//Returning Boolean Values from Functions
function isLess(a, b) {
    // Only change code below this line
    return a < b;
    // Only change code above this line
  }
  
  isLess(10, 15);
////////////////////////////////////////////////////////////////////
//Return Early Pattern for Functions
// Setup
function abTest(a, b) {
    // Only change code below this line
    if(a<0 || b<0){
      return undefined;
    }
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);
////////////////////////////////////////////////////////////////////
//Counting Cards
let count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }

  if(count>0){
    return count+" Bet";
  }else{
    return count+" Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
////////////////////////////////////////////////////////////////////
//Build JavaScript Objects
const myDog = {
    // Only change code below this line
    "name":"John",
    "legs":4,
    "tails":1,
    "friends":[]
    // Only change code above this line
  };
////////////////////////////////////////////////////////////////////
//Accessing Object Properties with Dot Notation// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line
////////////////////////////////////////////////////////////////////
//Accessing Object Properties with Bracket Notation
// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj["an entree"];   // Change this line
  const drinkValue = testObj["the drink"];    // Change this line
////////////////////////////////////////////////////////////////////
//Accessing Object Properties with Variables
// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj[playerNumber];   // Change this line

////////////////////////////////////////////////////////////////////
//Updating Object Properties
// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  myDog["name"] = "Happy Coder";
////////////////////////////////////////////////////////////////////
//Add New Properties to a JavaScript Object
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDog["bark"] = "woof";
  ////////////////////////////////////////////////////////////////////
  //Delete Properties from a JavaScript Object
  delete myDog.tails;

////////////////////////////////////////////////////////////////////
//Using Objects for Lookups
function phoneticLookup(val) {
    var result = "";
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };  
    result = lookup[val];
    // Only change code above this line
    return result;
  }
////////////////////////////////////////////////////////////////////
//Testing Objects for Properties
function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
    // Only change code above this line
  }
////////////////////////////////////////////////////////////////////
//Manipulating Complex Objects
var myMusic = [
    {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: ["CD", "8T", "LP"],
      gold: true
    },
    // Add record here
    {
      artist: "Deep Purple",
      title: "Smoke on the water",
      release_year: 1976,
      formats: ["CD", "8T", "LP"]
    }
  ];
////////////////////////////////////////////////////////////////////
//Accessing Nested Objects
const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"];
////////////////////////////////////////////////////////////////////
//Accessing Nested Arrays
const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1]; //pine
////////////////////////////////////////////////////////////////////
//Record Collection
// Setup
var recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
      records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
      records[id][prop].push(value);
    } else if (value === "") {
      delete records[id][prop];
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
////////////////////////////////////////////////////////////////////
//Iterate with JavaScript While Loops
// Setup
const myArray = [];
let i =5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
// Only change code below this line
////////////////////////////////////////////////////////////////////
//Iterate with JavaScript For Loops
// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}
////////////////////////////////////////////////////////////////////
//Iterate Odd Numbers With a For Loop
// Setup
const myArray = [];
// Only change code below this line
for (let i = 1; i < 10; i+=2) {
  myArray.push(i);
}
////////////////////////////////////////////////////////////////////
//Count Backwards With a For Loop
// Setup
const myArray = [];
// Only change code below this line
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
////////////////////////////////////////////////////////////////////
//Iterate Through an Array with a For Loop
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i <= myArr.length-1; i++) {
  total+=myArr[i];
}
////////////////////////////////////////////////////////////////////
//Nesting For Loops
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
    // Only change code above this line
    return product;
  }
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
////////////////////////////////////////////////////////////////////
//Iterate with JavaScript Do...While Loops
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do{
  myArray.push(i);
  i++;
}while(i<5);
////////////////////////////////////////////////////////////////////
//Replace Loops using Recursion
function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0;
      } else {
        return sum(arr, n - 1) + arr[n - 1];
      }
    // Only change code above this line
}
////////////////////////////////////////////////////////////////////
//

function lookUpProfile(name, prop) {
    for (let x = 0; x < contacts.length; x++) {
      if (contacts[x].firstName === name) {
        if (contacts[x].hasOwnProperty(prop)) {
          return contacts[x][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
  }
////////////////////////////////////////////////////////////////////
//Generate Random Fractions with JavaScript
function randomFraction() {
    // Only change code below this line
    return Math.random();
    // Only change code above this line
  }
////////////////////////////////////////////////////////////////////
//Generate Random Whole Numbers with JavaScript
//Use this technique to generate and return a random whole number between 0 and 9.
return Math.floor(Math.random()*10);
////////////////////////////////////////////////////////////////////
//Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
  }
////////////////////////////////////////////////////////////////////
//Use the parseInt Function
function convertToInteger(str) {
    return parseInt(str);
  }
  
  convertToInteger("56");
////////////////////////////////////////////////////////////////////
//Use the parseInt Function with a Radix
//Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.
function convertToInteger(str) {
    return parseInt(str, 2);
    }
    
    convertToInteger("10011");
////////////////////////////////////////////////////////////////////
//Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
    return a===b ? 'Equal' : 'Not Equal';
  }
  
  checkEqual(1, 2);
////////////////////////////////////////////////////////////////////
//Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
    return num > 0 ? "positive"
      : num < 0 ? "negative"
      : "zero";
  }
  checkSign(10);
////////////////////////////////////////////////////////////////////
//Use Recursion to Create a Countdown
/*

We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.
*/
// Only change code below this line
function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
  }
  // Only change code above this line
////////////////////////////////////////////////////////////////////
//Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
      return [startNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }