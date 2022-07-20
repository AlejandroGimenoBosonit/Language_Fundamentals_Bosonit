// parent 'class'
function Animal() {
    // parameters than can change
    this.numLegs = 4
};
//setting prototype porperties shared in all the inheritence
// these properties cannot be modified
Animal.prototype = {
    eat: true
};



function Dog(name){
    // parameters than can change
    this.name = name;
}

//INHERITANCE
Dog.prototype = Object.create(Animal.prototype);
//If we want to reset inheritance
// Dog.prototype.constructor = Dog;

//setting prototype porperties shared in all the inheritence
// these properties cannot be modified
Dog.prototype = {
    bark: function(){ console.log('Woof!');},
    canFly: false
};
