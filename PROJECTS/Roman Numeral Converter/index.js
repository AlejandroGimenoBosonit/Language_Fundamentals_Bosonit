/** Roman Numeral Converter **/
const convertToRoman = (num) => {
  let accumuator = '';
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  // recorremos el mapa comparando con nuestro numero
  for(const key in romanNumerals){
    const romanNumber = romanNumerals[key];
    // console.log(romanNumber);

    // siempre que el numero que porporcionamos no sea mayor que el de la tabla
    // podeos restarle a nuestro numero el de la tabla
    // y asignarle el caracter al cumulador
    while(romanNumber <= num){
      num-=romanNumber;
      console.log(num-=romanNumber);
      console.log(accumuator);
      accumuator+=key;
      console.log(accumuator);
      console.log("------------");
    }
  }
  console.log(accumuator);
};

convertToRoman(1993)
