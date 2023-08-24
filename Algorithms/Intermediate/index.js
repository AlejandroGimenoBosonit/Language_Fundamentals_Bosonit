// Sum All Numbers in a Range
const sumAll = (arr) => {
  let cosa = arr.sort((a, b) => b - a);
  let result = 0;

  for (let i = cosa[0]; i >= cosa[1]; i--) {
    result += i;
  }
  return result;
};
// console.log(sumAll([1,4]));
// console.log(sumAll([4,1]));
// console.log(sumAll([10,5]));
// console.log(sumAll([5,10]));

// Diff Two Arrays
const diffArray = (arr1, arr2) =>
  arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr1.includes(item));
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);

/**
 *
 * [1, 2, 3, 5], [1, 2, 3, 4, 5]
 * [4]
 *
 * [1, "calf", 3, "piglet"], [1, "calf", 3, 4]
 * ["piglet",4]
 *
 * ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"]
 * ["diorite", "andesite", "grass", "dirt", "dead shrub"]
 *
 * ["pink wool"].
 *
 */

// Seek and Destroy
// rest parameters allows function to accept an indefinite number of arguments as an array
const destroyer = (...args) =>
  args.shift().filter((element) => !args.includes(element));
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);

// Wherefore art thou
// filtramos el array collection
// Necesitamos crear un array de campos de source para que la condicion de filtrado compruebe TODOS los elementos del array
// usamos el metodo every
// dentrode every debemos satsfacer lacondicion de coincidencia
const whatIsInAName = (collection, source) =>
  collection.filter((object) =>
    Object.keys(source).every((key) => object[key] === source[key])
  );

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);

// Spinal Tap Case

const spinalCase = (str) => {
  var spinal = str
    // aplicamos una expresion regular que
    // primer grupo  --> ( ?! ^ ) -->no deb estar presente inmediatamente despues de la posicion actual (primera posicion = ^)
    // segundo grupo --> ( [A-Z] ) --> el segundo grupo debe de empezar con mayusculas
    // sustituyendo el valor de dicha expresion en $1, posicionandola ocmo valor a sustituir en replace
    .replace(/(?!^)([A-Z])/g, " $1")
    // sustituimos cualquier combinacion por -
    .replace(/[_\s]+(?=[a-zA-Z])/g, "-")
    .toLowerCase();
  return spinal;
};

console.log(spinalCase("The_Andy_Griffith_Show"));

console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("This Is Spinal Tap"));

// spinalCase("The_Andy_Griffith_Show");
// spinalCase("thisIsSpinalTap")
// spinalCase("This Is Spinal Tap")

// Pig Latin
/**
 * Rules
 * If a word begins with a consonant, take the first consonant or consonant cluster,
 * move it to the end of the word, and add ay to it.
 *
 *  If a word begins with a vowel, just add way at the end.
 *
 */

const translatePigLatin = (str) => {
  str = str.toLowerCase();
  if (/^[aeiou]/.test(str)) {
    // vowel
    return (str += "way");
  } else {
    // consonant
    return str.replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
  }
};

console.log(translatePigLatin("rhythm"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));

// Search and Replace

const myReplace = (str, before, after) =>
  /^[A-Z]/.test(before)
    ? str.replace(before, after.replace(after[0], after[0].toUpperCase()))
    : str.replace(before, after.replace(after[0], after[0].toLowerCase()));

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("His name is Tom", "Tom", "john");
myReplace("I think we should look up there", "up", "Down");

// DNA Pairing
const pairElement = (str) => {
  let result = [];
  let pairs = { "A":"T", "T":"A", "G":"C", "C":"G" }
  str.split("").forEach(value => {
    console.log(value);
    result.push([value, pairs[value]]);
  })

  return result;
}
pairElement("ATCGA");

// Missing Letters
const fearNotLetter =(str)=> {
  let dictionary = "abcdefghijklmnopqrstuvwxyz";
  let filtered = dictionary.substring(dictionary.indexOf(str[0]));
  for(let i=0;i<str.length;i++){
    if(str[i]!==filtered[i]){
      return filtered[i];
    }
  }
  return undefined;
};

// fearNotLetter("bcdf")
// fearNotLetter("abcdefghjklmno")
// fearNotLetter("abce")
// fearNotLetter("stvwx")

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

// Sorted Union
const uniteUnique = (...args) => {
  console.log(args);
  let result = [];
  for(let i=0;i<args.length;i++){
    for(let j=0;j<args[i].length;j++){
      console.log(args[i][j]);
      if(!result.includes(args[i][j])){
        result.push(args[i][j])
      }
    }
  }
  console.log(result);
}
const uniteUnique2 = (args) =>[...arguments].flat().filter((item, ind, arr) => arr.indexOf(item) === ind);

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Convert HTML Entities
const convertHTML = (str) => {
  let result = "";
  let symbols = { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&apos;" }
  str.split("").forEach(character => {
    
    if(Object.keys(symbols).indexOf(character)>-1){
      result+=symbols[character]
    }else{
      result+=character
    }
    
  })
  console.log(result);
}
const convertHTML2 = (str) => {

}

convertHTML("Dolce & Gabbana")
convertHTML("Hamburgers < Pizza < Tacos")
convertHTML("Sixty > twelve")
convertHTML('Stuff in "quotation marks"')
convertHTML("Schindler's List")
convertHTML("<>")
convertHTML("abc") 

// Sum All Odd Fibonacci Numbers

const sumFibs = (num) => {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
};

// Sum All Primes
const sumPrimes = (num) => {
  let count = 0;
  for(let i =num;i>0;i--){
    if(isPrime(i)){
      count+=i;
    }
  }
  console.log(count);
}
const isPrime = (n) => {
  console.log(n);
  // Corner case
  if (n <= 1) {
    return false;
  }

  // Check from 2 to n-1
  for (let i = 2; i < n; i++){
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}
// isPrime(10) ? console.log('yes') : console.log('no');

sumPrimes(10);

// Smallest Common Multiple
const smallestCommons = (arr) => {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
  const lcm = (a, b) => a * b / gcd(a, b);
  return range.reduce((multiple, curr) => lcm(multiple, curr));
}
console.log(smallestCommons([1,5]));

// Drop it
const dropElements = (arr, func) => {
  while(arr.length > 0 && !func(arr[0])){
    arr.shift()
  }
  return arr;
}

console.log(dropElements([1,2,3,4], (n)=>n>=3));

// Steamroller
const steamrollArray = (arr, result=[]) => {
  arr.forEach(element => {
    if(Array.isArray(element)){
      steamrollArray(element, result)
    }else{
      result.push(element)
    }
  })
  return result;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));

//https://stackoverflow.com/questions/21354235/converting-binary-to-text-using-javascript


const binaryAgent = (str) => {
  var binString = '';


  str.split(' ').map(function(bin) {
      binString += String.fromCharCode(parseInt(bin, 2));
    });
   return binString;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");



// Truth
// mapeamos el contenido creando un array con los valores del objeto con el predicado
// filtramos el array creado pasa sacar cuantos elementos son true
// si ese numero es igual a la longitud del array signiicara que hay tantos elementos true como elementos en el array(todos true)
// si no devolvemos false
const truthCheck = (collection, pre) =>  collection.map( object => object[pre]).filter(Boolean).length === collection.length ? true : false;

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));
console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"));



// Arguments Optional
function addTogether() {
  const [first, second] = arguments;

  if (typeof (first) === "number") {
    if (typeof (second) === "number") return first + second;
    if (arguments.length === 1) return (second) => addTogether(first, second);
  }
}

console.log(addTogether(2));

// Make a Person
const Person = function(first, last) {
  let firstName = first;
  let lastName = last;

  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.getFullName = function() {
    return this.getFirstName() + " " + this.getLastName() ;
  };
  this.setFirstName = function(first) {
    return firstName=first;
  };
  this.setLastName = function(last) {
    return lastName=last;
  };
  this.setFullName = function(first, last) {
    this.setFirstName(first);
     this.setLastName(last);

     return this.getFullName();
  };

  return "";
};

// Map the Debris
const orbitalPeriod = (arr) => arr.map(obj => ({name: obj['name'], orbitalPeriod: Math.round((2*Math.PI)*Math.sqrt(Math.pow(6367.4447+obj['avgAlt'], 3)/398600.4418))}))
// [{name: arr[0]['name'], orbitalPeriod: Math.round((2*Math.PI)*Math.sqrt(Math.pow(6367.4447+arr[0]['avgAlt'], 3)/398600.4418))}];

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));