/*
A Promise is an object that represents the eventual completion (or failure) 
of an asynchronous operation, and its resulting value.

A Promise exists in one of these states
    Pending: initial state, neither fulfilled nor rejected.
    Fulfilled: operation completed successfully.
    Rejected: operation failed.
The Promise object works as proxy for a value not necessarily known when the 
promise is created. It allows you to associate handlers with an asynchronous 
action’s eventual success value or failure reason.

This lets asynchronous methods return values like synchronous methods: instead of 
immediately returning the final value, the asynchronous method returns a promise to 
supply the value at some point in the future.
*/



// how to write a js promise
const myCar1 = {

    color: 'blue',
    type: 'sedan',
    doors: '4',
 };

 // You could also create a class and instantiate it with the new keyword.
 class Car {
    constructor(color, type, doors) {
       this.color = color;
       this.type = type;
       this.doors = doors
    }
 }
 
 const myCar2 = new Car('blue', 'sedan', '4');

//  const myPromise = new Promise(function(resolve, reject) {});

// console.log(myPromise);// pending

 const myPromise = new Promise(function(resolve, reject) {
    resolve(10);
 });

 console.log(myPromise)


 ///////////////////////////////////////
const users = [
  {
    id: '123',
    name: 'John Smith',
    posts: [
      {title: 'Some amazing title', content: 'Here is some amazing content'},
      {title: 'My favorite title', content: 'My favorite content'},
      {title: 'A not-so-good title', content: 'The not-so-good content'},
    ]
  },
  {
    id: '456',
    name: 'Mary Michaels',
    posts: [
      {title: 'Some amazing title', content: 'Here is some amazing content'},
      {title: 'My favorite title', content: 'My favorite content'},
      {title: 'A not-so-good title', content: 'The not-so-good content'},
    ]
  },
]
function getUserPosts(id, cb) {
    // encontrar el usuario cuyo id sea igual al de 'el.id'
    const user = users.find(el => el.id === id);
    
    if (cb) {
        if (user) {
        return cb(null, user);
        }
        return cb('User Not Found', null);
    }
    return new Promise(function(resolve, reject){
        if (user) {
        resolve(user);
        } else {
        reject('User not found');
        }
    });
}

/* The above code is collapsed to simulate an API you might use to get user posts for a
 * particular user from a database.
 
 * The API can take a callback as a second argument: getUserPosts(<id>, <callback>); 
 * The callback function first argument is any error and second argument is the user.
 * For example: 
    getUserPosts('123', function(err, user) {
      if (err) { 
        console.log(err) 
      } else {
        console.log(user);
      }
    });
 
 * getUserPosts also returns a promise, for example: getUserPosts.then().catch();
 
 * The ID's that will generate a user are the of type string and they are '123' and '456'.
 * All other IDs will return an error.
 */

getUserPosts('123', function(err, user) {
  if (err) {
    console.log(err);
  } else {
    console.log(user);
  }
});

getUserPosts('129', function(err, user) {
  if (err) {
    console.log(err);
  } else {
    console.log(user);
  }
});

getUserPosts('456')
  .then(user => console.log(user))
  .catch(err => console.log(err));
