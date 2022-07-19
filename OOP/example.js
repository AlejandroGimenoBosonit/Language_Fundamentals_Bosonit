// declare a 'Person' constructor with local methods
function Person(firstName, secondName, age, genre){
    this.fullName = {
        firstName,
        secondName
    };
    this.age = age;
    this.genre = genre;
};

//setting a prototype 
// Person.prototype.sayHi = function(){
//     console.log(`Hello! I'm ${this.fullName.secondName}, ${this.fullName.firstName} ${this.fullName.secondName}`);
// };

Person.prototype = {
    constructor: Person,
    sayHi: function(){
        console.log(`Hello! I'm ${this.fullName.secondName}, ${this.fullName.firstName} ${this.fullName.secondName}`);
    }
};

/////////////////////////////////////////////////////////////////////////////////////////////

function Teacher(firstName, secondName, age, genre, salary){
    
    Person.call(this, firstName, secondName, age, genre);

    this.salary = salary;
}

