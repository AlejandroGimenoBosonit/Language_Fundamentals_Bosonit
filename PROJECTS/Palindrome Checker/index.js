/**
 * 

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case 

(lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

 */

const palindrome = (str) => {
  let edited = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ""); // todo valor que no sea mayusculas o numeros
  console.log(edited === edited.split("").reverse().join(""));
  return edited === edited.split("").reverse().join("")
}


palindrome("eye") // true
palindrome("_eye") // true
palindrome("race car") // true
palindrome("not a palindrome") // false
palindrome("A man, a plan, a canal. Panama") // true
palindrome("never odd or even") // true
palindrome("nope") // false
palindrome("almostomla")// false
