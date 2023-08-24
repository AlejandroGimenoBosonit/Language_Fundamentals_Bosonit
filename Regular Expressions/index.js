////////////////////////////
// Using the Test Method
/**
 *
 * The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.
 */
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

////////////////////////////
////////////////////////////
// Match Literal Strings

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result2 = waldoRegex.test(waldoIsHiding);
////////////////////////////
////////////////////////////
// Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result3 = petRegex.test(petString);

////////////////////////////
////////////////////////////
// Ignore Case While Matching
let myString2 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
/**
 * ignorecase, igNoreCase, IgnoreCase
 *
 */
let result4 = fccRegex.test(myString2);
console.log(result4);

////////////////////////////
////////////////////////////
// Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result5 = extractStr.match(codingRegex); // Change this line
console.log(result5);
////////////////////////////
////////////////////////////
// Find More Than the First Match

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
/**
 * i -> IGNORE FOR UPERCASE AND LOWERCASE
 * g -> To search or extract a pattern more than once
 */
let result6 = twinkleStar.match(starRegex); // Change this line
console.log(result6);
////////////////////////////
////////////////////////////
// Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result7 = unRegex.test(exampleStr);
console.log(result7);

////////////////////////////

////////////////////////////
// Match Single Character with Multiple Possibilities
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result8 = quoteSample.match(vowelRegex); // Change this line
console.log(result8);
////////////////////////////
////////////////////////////
// Match Letters of the Alphabet
/**
 * Inside a character set, you can define a range of characters to match using a hyphen character: -.
 */
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result9 = quoteSample2.match(alphabetRegex); // Change this line
console.log(result9);
////////////////////////////
////////////////////////////
// Match Numbers and Letters of the Alphabet
let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/gi; // Change this line
let result10 = quoteSample3.match(myRegex2); // Change this line
console.log(result10);
////////////////////////////
////////////////////////////
// Match Single Characters Not Specified
/**
 * So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.
 */
let quoteSample4 = "3 blind mice.";
let myRegex3 = /[^aeiou0-9]/gi; // Change this line
let result11 = quoteSample4.match(myRegex3); // Change this line
console.log(result11);
////////////////////////////
////////////////////////////
// Match Characters that Occur One or More Times
/**
 * Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.
You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.
 */
let difficultSpelling = "Mississippi";
let myRegex4 = /s+/g; // Change this line
let result12 = difficultSpelling.match(myRegex4);
console.log(result12);
////////////////////////////
////////////////////////////
// Match Characters that Occur Zero or More Times
/**
 * The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: *.
 */
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line
let result13 = chewieQuote.match(chewieRegex);
console.log(result13);
////////////////////////////
////////////////////////////
// Find Characters with Lazy Matching
/**
 * In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
 */
let text = "<h1>Winter is coming</h1>";
let myRegex6 = /<.*?>/; // Change this line
/**
 * / Cualquier elemento entre signos <>,
 * dicho contenido buscara cualquier caracter (.)
 * que coincida 0 o mas veces (*)
 * usamos 'lazy matching' para encontrar la coincidencia mas pequena posible
 */
let result14 = text.match(myRegex6);
console.log(result14);
////////////////////////////
////////////////////////////
// Find One or More Criminals in a Hunt
// Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.
let reCriminals = /C+/g;
////////////////////////////
////////////////////////////
// Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result15 = calRegex.test(rickyAndCal);
////////////////////////////
////////////////////////////
// Match Ending String Patterns
/**
 * You can search the end of strings using the dollar sign character $ at the end of the regex.
 */
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result16 = lastRegex.test(caboose);
console.log(result16);
////////////////////////////
////////////////////////////
// Match All Letters and Numbers
// \w ==> shortcut ==> [A-Za-z0-9_]
/**
 * Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
 */
let quoteSample5 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
let result17 = quoteSample5.match(alphabetRegexV2).length;
console.log(result17);
////////////////////////////
////////////////////////////
// Match Everything But Letters and Numbers
// Opposite of \w ==> \W
/**
 * Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.
 */
let quoteSample6 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi; // Change this line
let result18 = quoteSample6.match(nonAlphabetRegex).length;
console.log(result18);
////////////////////////////
////////////////////////////
// Match All Numbers
// [0-9] ==> \d
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/gi; // Change this line
let result19 = movieName.match(numRegex).length;
console.log(result19);
////////////////////////////
////////////////////////////
// Match All Non-Numbers
// [^0-9] ==> \D
let movieName2 = "2001: A Space Odyssey";
let noNumRegex = /\D/gi; // Change this line
let result20 = movieName2.match(noNumRegex).length;
console.log(result20);
////////////////////////////
////////////////////////////
// Restrict Possible Usernames
//Change the regex userCheck to fit the constraints listed above.
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/gi; // Change this line
let result21 = userCheck.test(username);
console.log(result21);
/**
 *
    Usernames can only use alpha-numeric characters.
    The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
    Username letters can be lowercase and uppercase.
    Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

    ^ ----------> start of the input
    [a-z] ------> first character is a letter
    [a-z]+ -----> following characters are letters
    \d* ---------> followwing character is a digit [0-9] zero or more times (*)
    $ -------> input ends with numbers from 0 or more digits

    | ----------> or

    ^ ----------> start of the input
    [a-z] ------> first character is a letter
    \d ---------> following character must be a digit [0-9]
    \d+ --------> following character must be a digit [0-9] (+ can be repeated)
    $ ----------> end of input

 */

////////////////////////////
////////////////////////////
// Match Whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result22 = sample.match(countWhiteSpace);
console.log(result22);
////////////////////////////
////////////////////////////
// Match Non-Whitespace Characters

let sample2 = "Whitespace is important in separating words";
let countWhiteSpace2 = /\S/g; // Change this line
let result23 = sample2.match(countWhiteSpace2);
console.log(result23);
////////////////////////////
////////////////////////////
// Specify Upper and Lower Number of Matches
/**
 *  match the entire phrase Oh no only when it has 3 to 6 letter h's.
 */
let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i; // Change this line
/**
 * o
 * h ( 3 to 6 times)
 * space
 * no
 * i flag -> ignore cases with uppercases
 */
let result24 = ohRegex.test(ohStr);
console.log(result24);
////////////////////////////
////////////////////////////
// Specify Only the Lower Number of Matches
// Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/i; // Change this line
let result25 = haRegex.test(haStr);
console.log(result25);
////////////////////////////
////////////////////////////
// Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result26 = timRegex.test(timStr);
////////////////////////////
////////////////////////////
// Check for All or None - possible existence of an element
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result27 = favRegex.test(favWord);
////////////////////////////
////////////////////////////
// Positive and Negative Lookahead
/**
 * 
 * A positive lookahead will look to make sure the element in the search 
 * pattern is there, but won't actually match it. A positive lookahead 
 * is used as (?=...) where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element 
in the search pattern is not there. A negative lookahead is used as (?!...) 
where the ... is the pattern that you do not want to be there. The rest of 
the pattern is returned if the negative lookahead part is not present.
 */
/**
 * Use lookaheads in the pwRegex to match passwords that are greater than 
 * 5 characters long, and have two consecutive digits.
 */

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?\w*\d{2})/; // Change this line
/**
 * ( first condition )
 * \w{6} ==> match every letter and number 6 matches (greater than 5)
 * ( second condition )
 * \w ==> match every letter and number
 * \d === [0-9] 2 matches
 */
let result28 = pwRegex.test(sampleWord);
////////////////////////////
////////////////////////////
// Check For Mixed Grouping of Characters
let myString3 = "Eleanor Roosevelt";
let myRege2 = /(Franklin D.|Eleanor) Roosevelt/; // Change this line
let result29 = myRegex.test(myString); 
////////////////////////////
////////////////////////////
// Reuse Patterns Using Capture Groups
/**
 * Say you want to match a word that occurs multiple times like below.
 * You could use /row row row/, but what if you don't know the specific 
 * word repeated? Capture groups can be used to find repeated substrings.
 * 
 * 
 */
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
/**
 * ^ ----------> start of the input
 * (\d+)-------> following characters are digits (stored ina "variable")
 * \1
 * \1
 * $-----------> end of the string
 */
let result30 = reRegex.test(repeatNum);
////////////////////////////
////////////////////////////
// Use Capture Groups to Search and Replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result31 = str.replace(fixRegex, replaceText);
////////////////////////////
////////////////////////////
// Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
/**
 * ^ ---> start of the input
 * \s+ --> whitespace one or more in a row
 * | ---> or
 * \s+ --> whitespace one or more in a row
 * $ ----> at the end of the input
 * * g -> To search or extract a pattern more than once
 */
let result32 = hello.replace(wsRegex, ""); // Change this line
////////////////////////////