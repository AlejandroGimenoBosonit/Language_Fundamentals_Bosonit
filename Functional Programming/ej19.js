// const str = "Hello World";
// const bySpace = str.split(" ");
// console.log(bySpace); // [ 'Hello', 'World' ]

function splitify(str) {
    // Only change code below this line

    // Matches any non-word character
    return str.split(/\W/);
    // Only change code above this line
}

splitify("Hello World,I-am code");