///////////////////////////////////////// EJ1
// Dado un array de objetos, obtener el objeto con el id 3
const arrNames = [
    {id: 1, name: 'Pepe'},
    {id: 2, name: 'Juan'},
    {id: 3, name: 'Alba'},
    {id: 4, name: 'Toby'},
    {id: 5, name: 'Lala'}
  ];
console.log(arrNames[2]);
///////////////////////////////////////// EJ2
//Dado un array de valores, devolver un array truthy 
//(sin valores nulos, vacíos, no números, indefinidos o falsos)

const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test'];
//NaN, false, '', undefined, null
function cleanArray(arr){
  let resul = [];
  let error = [NaN, false, '', undefined, null];

  for(let i=0 ; i<arr.length ; i++){
    if(error.includes(arr[i])===false){
      resul.push(arr[i])
    }
  }

  return resul;
};
console.log(cleanArray(arrDirty));


///////////////////////////////////////// EJ3
//Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales
const arrCities = [
  {city: 'Logroño', country: 'Spain', capital: false},
  {city: 'Paris', country: 'France', capital: true},
  {city: 'Madrid', country: 'Spain', capital: true},
  {city: 'Rome', country: 'Italy', capital: true},
  {city: 'Oslo', country: 'Norway', capital: true},
  {city: 'Jaén', country: 'Spain', capital: false}
];
function capitalCities(arr){
  arr.forEach(obj => {
    if(obj.capital) console.log(obj.city);
  })
};
capitalCities(arrCities);

///////////////////////////////////////// EJ4
//Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 
//Comporbacion de elementos comunes en los tres arrays

const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];
// numeros comunes a los tres: 1, 2

function interArray(arr1, arr2, arr3){
  let newArray = [];

  // check longest array
  let m = [arr1, arr2, arr3];

  let shortest = m.filter(element=> element.length === Math.min(...m.map(element => element.length)))[0] //[1,2,3];

  //iterate and compare with the rest of arrays
  let adyArr1 = m.filter(element => element.length > shortest.length)[0]; //[ 1, 2, 3, 4, 5]
  let adyArr2 = m.filter(element => element.length > shortest.length)[1]; //[ 1, 4, 7, 2 ]

  shortest.forEach(element => {
    if(adyArr1.includes(element) && adyArr2.includes(element)) newArray.push(element)
  })

  console.log(newArray);
};
interArray(arrNumber1, arrNumber2, arrNumber3);


///////////////////////////////////////// EJ5
/*
Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales 
con unos nuevos parámetros que sean city y isSpain. El valor de isSpain será un 
booleano indicando si es una ciudad de España.
*/
const arrCities2 = [
  {city: 'Logroño', country: 'Spain', capital: false},
  {city: 'Bordeaux', country: 'France', capital: false},
  {city: 'Madrid', country: 'Spain', capital: true},
  {city: 'Florence', country: 'Italy', capital: true},
  {city: 'Oslo', country: 'Norway', capital: true},
  {city: 'Jaén', country: 'Spain', capital: false}
];

function newArr(arr){
  let newArray = [];
  const noCap = arr.filter(obj => !obj.capital);
  for(let i=0 ; i<noCap.length ;i++){
    if(noCap[i].country === 'Spain') {
      newArray.push({ city: noCap[i].city, isSpain: true});
    }else{
      newArray.push({ city: noCap[i].city, isSpain: false});
    }
  }
  return newArray;
};
console.log(newArr(arrCities2));


///////////////////////////////////////// EJ6
/*
Crea una función que redondee un número float a un número específico de decimales. 
La función debe tener dos parámetros: 
  Primer parámetro es un número float con x decimales
  Según parámetro es un int que indique el número de decimales al que redondear
  Evitar usar el método toFixed()

Ejemplo de uso de la función:

const roundedResult = roundTo(2.123, 2);
console.log(roundedResult); // 2.12
 
const roundedResult = roundTo(1.123456789, 6);
console.log(roundedResult); // 1.123457

*/

function roundedFloat(num, dec){
  // string conversion
  let numToString = num.toString();
  // obtain index
  let index = numToString.indexOf('.')+dec;
  // obtain number to round
  let numToChange = numToString[index];
  // rounding
  if(numToChange > 5) {
    numToChange++;
  }else{
    numToChange--;
  }

  //replace
  let final = numToString.substring(0, index+1);

  // return a rounded float number
  return parseFloat(final.replace(final[final.length-1] ,numToChange))

};
// roundedFloat(33.5664535677, 2)
// roundedFloat(1.123456789, 6)
console.log(roundedFloat(1.123456789, 6));

///////////////////////////////////////// EJ7
/*
Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” 
después de ser ejecutados por una función específica.
La fundación debe tener dos parámetros:
  Primer parámetro es un objeto con x número de campos y valores
  Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar 
  al objeto del primer parámetro

*/

function returnFalsyValues(obj, typeFunction){
  let temp = {};
  for (const key in obj) {
    if(!typeFunction(obj[key])) temp[key] = obj[key];
  }
  return temp;
};
const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
console.log(result); // {a: 1, c: 3}

///////////////////////////////////////// EJ8 -----------------------------------------------------------------------------------
/*
Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
  La función debe tener 2 parámetros:
  Primer parámetro debe ser el número de bytes
  
  Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe 
  truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). 
  Por defecto, este parámetro debe de tener un valor de 3.

*/

function fromBytesToFormattedSizeUnits(num, par = 3) {
  const scale = {3:'KB', 6:'MB', 9:'GB', 12:'TB', 15:'PB', 18:'EB', 21:'ZB', 24:'YB'};

  let newNum = parseFloat(num.toPrecision(par)).toString().split('0');
  let exp = newNum.filter(element => element==='').length;
  let entirePart = newNum[0];

  while(entirePart.length> 3){
    exp+=3;
    entirePart = entirePart.replace(entirePart.substring(entirePart.length-3, entirePart.length), "")
  }
  return entirePart+scale[exp];
}


  //let not = num.toPrecision(par)// 1.00e+3                 1.23e+8              -1.2145e+10
 // let prefix = {'3':'KB', '6':'MB', '9':'GB', '12':'TB', '15':'PB', '18':'EB', '21':'ZB', '24':'YB'};


// const result = fromBytesToFormattedSizeUnits(123456789);
// result; // 123MB 
const resultA = fromBytesToFormattedSizeUnits(1000);
console.log(resultA); // 1KB
 
const resultB = fromBytesToFormattedSizeUnits(123456789);
console.log(resultB); // 123MB
 
const resultC = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(resultC); // -12.145GB




///////////////////////////////////////// EJ9

/*
Crea una función que a partir de un objeto de entrada, 
retorne un objeto asegurándose que las claves del objeto estén en lowercase.
La función debe tener un objeto como único parámetro.

*/
const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
function toLowercaseKeys(obj){
  //empty object
  let keys = {};
  // Iterate generated object's keys array
  Object.keys(obj).forEach(element => {
    //assign new value to the empty object
    keys[element.toLowerCase()] = obj[element];
  });
  return keys;
};
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }


///////////////////////////////////////// EJ10
/*
Crea una función que elimine las etiquetas html o xml de un string.
La función debe tener un string como único parámetro.
*/


function removeHTMLTags(str){
  let pile = [];
  //iterate string
  for (let i = 0; i < str.length; i++) {
    //add element to the pile
    pile.push(str[i]);
    // check if html tag is closed, delete itfrom the pile
    if(pile[pile.length-1] === ">") pile.splice(pile.indexOf("<"), pile.indexOf(">")+1);
  }
  //return a string from chars array
  return pile.join('');
};
const result2= removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');
console.log(result2); // lorem ipsum


///////////////////////////////////////// EJ11
/*
Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.
La función debe tener dos parámetros:
El primer parámetro es el array entero que se quiere dividir.
El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida el array original del primer parámetro.

*/

function splitArrayIntoChunks(arr, div){
  let res = [];
  let subArr = [];
  // iterate arr
  for (let i = 0; i < arr.length; i++) {
    if(subArr.length===div){
      res.push(subArr);
      subArr=[];
    }
    subArr.push(arr[i]);
  }
  res.push(subArr);
  return res;
};
const result3 = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result3); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]