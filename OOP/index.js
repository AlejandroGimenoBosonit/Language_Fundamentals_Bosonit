//Create a Basic JavaScript Object
let dog1 = {name: 'Spot',numLegs:4};

//Use Dot Notation to Access the Properties of an Object
console.log(dog1.name);
console.log(dog1.numLegs);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Create a Method on an Object
let dog2 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function(){
        return `This dog has ${dog2.numLegs} legs.`;
    }
  };
  
  dog2.sayLegs();
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Make Code More Reusable with the this Keyword
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Define a Constructor Function
function Dog() {
    this.name = "Thor",
    this.color = "white",
    this.numLegs = 4
};

//Use a Constructor to Create Objects
let hound = new Dog();

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Extend Constructors to Receive Arguments
/*
Create another Dog constructor. This time, set it up to take the parameters name and color, 
and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. 
Pass it two strings as arguments for the name and color properties.
*/

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Dog();
terrier.name = "Toby";
terrier.color = "black";
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Verify an Object's Constructor with instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
// Only change code below this line
let myHouse = new House(4);
console.log(myHouse instanceof House);//true
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Understand Own Properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  for(let property in canary){
    // console.log(property);                           // name     numLegs
    // console.log(canary.hasOwnProperty(property));    // true
    if(canary.hasOwnProperty(property)) ownProps.push(property)
  }
  console.log(ownProps);

// Use Prototype Properties to Reduce Duplicate Code
/*
Since numLegs will probably have the same value for all instances of Bird, 
you essentially have a duplicated variable numLegs inside each Bird instance.

This may not be an issue when there are only two instances, but imagine if 
there are millions of instances. That would be a lot of duplicated variables.

A better way is to use the prototype of Bird. Properties in the prototype are 
shared among ALL instances of Bird. Here's how to add numLegs to the Bird prototype:
*/
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;
// Only change code above this line
let beagle4 = new Dog("Snoopy");


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Iterate Over All Properties
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle1 = new Dog("Snoopy");

let ownProps1 = [];
let prototypeProps = [];
  
// Only change code below this line
for(let property in beagle1){
    if(beagle1.hasOwnProperty(property)){
        ownProps1.push(property);
    }else{
        prototypeProps.push(property);
    }
}
console.log(ownProps1);
console.log(prototypeProps);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Understand the Constructor Property
function Dog(name) {
    this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
    if(candidate.constructor===Dog){
        return true;
    }else{
        return false;
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Change the Prototype to a New Object
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function(){ console.log("nom nom nom");},
    describe: function(){console.log(`My name is ${this.name}`);}
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Remember to Set the Constructor Property when Changing the Prototype
function Dog(name) {
    this.name = name;
}
// Only change code below this line
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};


// Understand Where an Object’s Prototype Comes From
Dog.prototype.isPrototypeOf(beagle);



/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Understand the Prototype Chain
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Use Inheritance So You Don't Repeat Yourself

// function to inheritance
function Animal() {}
Animal.prototype = {
    // constructor
    constructor: Animal,
    // common function 
    eat: function(){
        console.log("nom nom nom");
    }
}

// function 1
function Cat(name) {
    this.name = name;
}
//function 2
function Bear(name) {
    this.name = name;
}

// setting prototypes
Cat.prototype = { constructor: Cat};
Bear.prototype = { constructor: Bear};




/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Inherit Behaviors from a Supertype
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
// let beagle = Object.create(Animal.prototype); // Change this line

duck.eat();

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Set the Child's Prototype to an Instance of the Parent
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog(name) {
    this.name = name;
}
// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle3 = new Dog("Todd");

console.log(beagle3.name);
beagle3.eat();
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Reset an Inherited Constructor Property

//common 'class'
function Animal(){  }
Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };


//child classess
function Bird(name) {
    this.name = name;
}

function Dog(name) {
    this.name = name;
}

// connect Bird and Dog to Animal function
Bird.prototype = Object.create(Animal.prototype); 
Dog.prototype  = Object.create(Animal.prototype);

// reset inherit contructor
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

//creating a new instance
let duck2   = new Bird();
let beagle2 = new Dog();

duck.name = "Donald";
beagle.name = "Tobby";

console.log(duck.name);
duck.eat();
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Add Methods After Inheritance
//common 'class'
function Animal(){  }
Animal.prototype.eat = function() {
    console.log("nom nom nom");
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log('Woof!');
};

let beagle = new Dog();


beagle.bark();
beagle.eat();

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Override Inherited Methods
function Bird() { }
Bird.prototype.fly = function() { 
    return "I am flying!"; 
};


function Penguin() { }
// Inherit behavior methods
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// OVERRIDE INHERIT METHOD
Penguin.prototype.fly = function() {
    return "Alas, this is a flightless bird.";
};
// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Use a Mixin to Add Common Behavior Between Unrelated Objects


// For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.

// bird
let bird = {
    name: "Donald",
    numLegs: 2
};
// plane
let plane = {
    model: "777",
    numPassengers: 524
};

// mixin setting a method
let flyMixin = function(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    }
};

// calling method
flyMixin(bird);
flyMixin(plane);

bird.fly();
plane.fly();

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
    let weight = 15;

    this.getWeight = function(){
        return weight;
    }
}

let ducky = new Bird();
ducky.getWeight(); //15

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Understand the Immediately Invoked Function Expression (IIFE)

/*
Rewrite the function makeNest and remove its call so instead it's an anonymous 
immediately invoked function expression (IIFE).
*/
(function (){
    console.log("A cozy nest is ready");
})();

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Use an IIFE to Create a Module
//Grouping mixins
/*
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
*/

let funModule = (function(){
    return {
        isCuteMixin: function(obj) {
            obj.isCute = function(){
                return true;
            }
        },
        //modules
        singMixin: function(obj){
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            }
        }
    }
})();