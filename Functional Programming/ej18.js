const globalArray = [5, 6, 3, 2, 9];

// WITHOUT CHANGE THE ORIGINAL ARRAY


function nonMutatingSort(arr) {
  // Only change code below this line
    return [].concat(arr).sort((a,b) => {
        return a-b;
    });
  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));