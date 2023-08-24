// Convert Celsius to Fahrenheit
const convertCtoF = (celsius) => (9 / 5) * celsius + 32;
// reverse a string
const reverseString = (str) => str.split("").reverse().join("");

// Factorialize a Number
const factorialize = (num) => {
  let result = 1;
  for (let i = num; i >= 1; i--) {
    result *= i;
  }
  return result;
};
console.log(factorialize(5));

const findLongestWordLength = (str) =>
  Math.max(...str.split(" ").map((word) => word.length));
findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Return Largest Numbers in Arrays
const largestOfFour = (arr) => arr.map((internArr) => Math.max(...internArr));

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

// Confirm the Ending
const confirmEnding = (str, target) => str.slice(-target.length) === target;

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));

// Repeat a String Repeat a String
const repeatStringNumTimes = (str, num) => {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
};

// version alternativa
const repeatStringNumTimes2 = (str, num) =>
  num > 0 ? str + repeatStringNumTimes2(str, num - 1) : "";
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", -2));
console.log(repeatStringNumTimes("abc", 0));

// Truncate a String
const truncateString = (str, num) =>
  num < str.length ? str.substring(0, num).concat("...") : str;
const truncateString2 = (str, num) =>
  num < str.length ? str.slice(0, num) + "..." : str;
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// Finders Keepers
const findElement = (arr, func) => arr.filter((element) => func(element))[0];
console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0));

// Boo who
const booWho = (bool) => bool === true || bool === false;
console.log(booWho(true));

// Title Case a Sentence
const titleCase = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));

// Slice and Splice
const frankenSplice = (arr1, arr2, n) => {
  let result = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    result.splice(n, 0, arr1[i]);
    n++;
  }
  return result;
};

const frankenSplice2 = (arr1, arr2, n) => arr2.slice().splice(n, 0, ...arr1);
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); // [4,  1,2,3,  5, 6]
/**
 * [4,5,6]
 * [4,1,5,6]
 * [4,1,2,5,6]
 * [4,1,2,3,5,6]
 */

// Falsy Bouncer
// falsy ==> false, null, 0, "", undefined, and NaN.
const bouncer = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      arr.push(arr[i]);
    }
  }
};

const bouncer2 = (arr) => arr.filter(Boolean);
console.log(bouncer([7, "ate", "", false, 9]));

// Where do I Belong
const getIndexToIns = (arr, num) => arr.filter((val) => num > val).length;
console.log(getIndexToIns([5, 3, 20, 3], 5));
// getIndexToIns([5, 3, 20, 3], 5);

// Mutations
const mutation = (arr) =>
  arr[1]
    .split("")
    .map((element) => arr[0].toLowerCase().includes(element.toLowerCase()))
    .every(Boolean);

console.log(mutation(["Alien", "line"]));
console.log(mutation(["hello", "hey"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));


// Chunky Monkey

const chunkArrayInGroups = (arr, size) => {
  let result = [];
  let numArr = arr.length/size;
  let j=0;

  for(let i=0; i<numArr ;i++){
    result.push(arr.slice(j, size+j))
    j+=size;
  }
  return result;

};
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));