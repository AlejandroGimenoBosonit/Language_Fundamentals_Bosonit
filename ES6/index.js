// Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => new Date();

//Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);

//Set Default Parameters for Your Functions
/*
Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
*/
const increment = (number, value=1) => number + value;


//Use the Rest Parameter with Function Parameters

const sum = (...args) =>{
    let c = 0;
    args.forEach(element => c+=element);
    return c;
}

//alternativa
const sum1 = (...args) => {
    return args.reduce((a, b) => b , 0);
    /*
    El método reduce() ejecuta una función 
    reductora sobre cada elemento de un array, 
    devolviendo como resultado un único valor.

    El método reduce() ejecuta callback una vez por 
    cada elemento presente en el array, excluyendo los huecos del mismo
    */
}

console.log(sum1(0,1,2));


//Use the Spread Operator to Evaluate Arrays In-Place
const cosa = () => {
    const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    let arr2;

    arr2 = [...arr1];  // Change this line

    console.log(arr2);
}


//Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
//   const today = HIGH_TEMPERATURES.today;
//   const tomorrow = HIGH_TEMPERATURES.tomorrow;
const {today, tomorrow } = HIGH_TEMPERATURES;
  // Only change code above this line



//Use Destructuring Assignment to Assign Variables from Objects
  
  // Only change code below this line
  const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
    //const highToday = HIGH_TEMPERATURES.today;
    //const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
  
  // Only change code above this line




// Use Destructuring Assignment to Assign Variables from Nested Objects
/*
Replace the two assignments with an equivalent destructuring assignment. 
It should still assign the variables lowToday and highToday the values of today.
low and today.high from the LOCAL_FORECAST object.
*/
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    
const {
today:{ low:lowToday2, high:highToday2}
} = LOCAL_FORECAST;
  


// Use Destructuring Assignment to Assign Variables from Arrays
 [a ,b] = [6, 8];
console.log(a, b);

//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...arr] = list
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);


//Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = ({max, min}) => (max + min) / 2.0; 
  // Only change code above this line


//Create Strings using Template Literals
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    let failureItems= [];
    for( let element in arr){
        failureItems.push(`<li class="text-warning">${arr[element]}</li>`)
    }
    // const failureItems = [
    //   `<li class="text-warning">${arr[0]}</li>`,
    //   `<li class="text-warning">${arr[1]}</li>`,
    //   `<li class="text-warning">${arr[2]}</li>`,
    // ];
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

  console.log(failuresList);

//Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      name,
      age,
      gender
    };
    // Only change code above this line
  };


//Write Concise Declarative Functions with ES6
// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);


//Use class Syntax to Define a Constructor Function
// Only change code below this line
class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  // Only change code above this line
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'

//Use getters and setters to Control Access to an Object
class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }
    
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }


  //Use export to Share a Code Block
const uppercaseString = (string) => {
    return string.toUpperCase();
}

const lowercaseString = (string) => {
    return string.toLowerCase()
}
//export {uppercaseString, lowercaseString};



//Reuse JavaScript Code Using import
//import {uppercaseString, lowercaseString} from './string_functions.js'
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");



//Use * to Import Everything from a File
//import * as stringFunctions from './string_functions.js';
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");




//Create an Export Fallback with export default
// export default function subtract(x, y) {return x - y;}


//Import a Default Export
// import subtract from './math_functions.js';
// subtract(7,4);

// Create a JavaScript Promise
//const makeServerRequest = new Promise( (resolve, reject) => {});


//Complete a Promise with resolve and reject
const makeServerRequest = new Promise((resolve, reject) => {
// responseFromServer represents a response from a server
let responseFromServer;
    
if(responseFromServer) {
    resolve('We got the data')
} else {  
    reject('Data not received')
}
});

//Handle a Fulfilled Promise with then
const makeServerRequest1 = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });



makeServerRequest
  .then(result => {
    console.log(result);
  });


//Handle a Rejected Promise with catch
const makeServerRequest2 = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest2
  .then(result => {console.log(result);})
  .catch(error => console.log(error));

//Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
console.log(myRegex.test(myString)); //true


//Compare Scopes of the var and let Keywords
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

//Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  // es const epro hemos podido editarlo
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Only change code above this line
}
// editInPlace();
console.log(editInPlace());

//Prevent Object Mutation
/*
As seen in the previous challenge, const declaration alone doesn't 
really protect your data from mutation. To ensure your data doesn't change, 
JavaScript provides a function Object.freeze to prevent data mutation.

Any attempt at changing the object will be rejected, with an error thrown 
if the script is running in strict mode.
*/

function freezeObj() {
  const MATH_CONSTANTS = {PI: 3.14};
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
