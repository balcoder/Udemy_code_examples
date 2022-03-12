// using some in a function
function hasEvenNumber(arr) {
  return arr.some((value) => {
    return value % 2 === 0;
  });
}
// using every in a function
function allLowerCase(str) {
  return str.split("").every((value) => {
    return value === value.toLowerCase();
  });
}
// own implementation of every
function myEvery(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr) == false) {
      return false;
    }
  }
  return true;
}
// find out if all objects in an array are arrays
function allAreArrays(arr) {
  return arr.every(Array.isArray);
}

/*
Write a function called hasOddNumber which accepts an array and returns true if
the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr) {
  return arr.some((ele) => {
    return ele % 2 !== 0;
  });
}

/*
Write a function called hasAZero which accepts a number and returns true if
that number contains at least one zero. Otherwise, the function should return
false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/
/*The code line Array.from(String(numToSeparate), Number); will convert the
number into a string, take each character of that string, convert it into a
number and put in a new array. Finally, this new array of numbers will be
returned. */
function hasZero(num) {
  return Array.from(String(num), Number).some((ele) => {
    return ele === 0;
  });
}

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns
true if every single number in the array is odd. If any of the values in the
array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr) {
  return arr.every((el) => {
    return el % 2 !== 0;
  });
}

/*
Write a function called hasNoDuplicates which accepts an array and returns true
if there are no duplicate values (more than one element in the array that has
the same value as another). If there are any duplicates, the function should
return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr) {
  return arr.every(function (el, i, array) {
    return array.filter((num) => num === el).length !== 2;
  });
}

// using reduce to add all values in an array
arr.reduce((accumulator, nextValue) => {
  return accumulator + nextValue;
});

/*
Write a function called extractValue which accepts an array of objects and a
key and returns a new array with the value of each object at the key.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
  return arr.reduce((prev, next) => {
    if (next[key]) {
      prev.push(next[key]);
      return prev;
    } else return prev;
  }, []);
}

/*
Write a function called vowelCount which accepts a string and returns an object
with the keys as the vowel and the values as the number of times the vowel
appears in the string. This function should be case insensitive so a lowercase
letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let strArr = str.toLowerCase().split("");
  return strArr.reduce((prev, next) => {
    if (vowels.includes(next)) {
      if (prev[next]) {
        prev[next]++;
        return prev;
      } else {
        prev[next] = 1;
        return prev;
      }
    }
    return prev;
  }, {});
}

/*
Write a function called addKeyAndValue which accepts an array of objects and
returns the array of objects passed to it with each object now including the
key and value passed to the function.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/
function addKeyAndValue(arr, key, value) {
  return arr.reduce((prev, next) => {
    next[key] = value;
    return prev;
  }, arr);
}

/*
Write a function called partition which accepts an array and a callback and
returns an array with two arrays inside of it. The partition function should
run the callback function on each value in the array and if the result of the
callback function at that specific value is true, the value should be placed in
the first subarray. If the result of the callback function at that specific
value is false, the value should be placed in the second subarray. 


Example:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    var arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
*/
function partition(arr, callback) {
  return arr.reduce(
    (acc, next) => {
      if (callback(next)) {
        acc[0].push(next);
        return acc;
      } else {
        acc[1].push(next);
        return acc;
      }
    },
    [[], []]
  );
}

// Closures and the keyword this
/* 
Write a function called specialMultiply which accepts two parameters. If the
function is passed both parameters, it should return the product of the two. If
the function is only passed one parameter - it should return a function which
can later be passed another parameter to return the product. You will have to
use closure and arguments to solve this.

Examples: 

    specialMultiply(3,4); // 12
    specialMultiply(3)(4); // 12
    specialMultiply(3); // function(){}....
*/
function specialMultiply(num1, num2) {
  let numOfArgs = arguments.length;
  if (numOfArgs === 2) {
    return num1 * num2;
  } else {
    return function innerMultiply(num) {
      return num1 * num;
    };
  }
}

/* 
Write a function called guessingGame which takes in one parameter amount. The
function should return another function that takes in a parameter called guess.
In the outer function, you should create a variable called answer which is the
result of a random number between 0 and 10 as well as a variable called guesses
which should be set to 0.
In the inner function, if the guess passed in is the same as the random number
(defined in the outer function) - you should return the string "You got it!".
If the guess is too high return "Your guess is too high!" and if it is too low,
return "Your guess is too low!". You should stop the user from guessing if the
amount of guesses they have made is greater than the initial amount passed to
the outer function.

You will have to make use of closure to solve this problem.

Examples (yours might not be like this, since the answer is random every time):

    var game = guessingGame(5)
    game(1) // "You're too low!"
    game(8) // "You're too high!"
    game(5) // "You're too low!"
    game(7) // "You got it!"
    game(1) // "You are all done playing!"
*/
function guessingGame(amount) {
  let answer = Math.floor(Math.random() * 10 + 1);
  let numOfTimes = 0;
  return function game(guess) {
    if (numOfTimes === amount) {
      return "You all done, too many tries";
    } else if (guess === answer) {
      numOfTimes++;
      return "You got it";
    } else if (guess < answer) {
      numOfTimes++;
      return "too low";
    } else {
      numOfTimes++;
      return "too high";
    }
  };
}

/*
Write a function called arrayFrom which converts an array-like-object into an array.

Examples:
    var divs = document.getElementsByTagName('divs');
    divs.reduce // undefined
    var converted = arrayFrom(divs);
    converted.reduce // function(){}....
*/

function arrayFrom(arrayLikeObject) {
  return [].slice.apply(arrayLikeObject);
}

/* 
// Write a function called sumEvenArguments which takes all of the arguments
passed to a function and returns the sum of the even ones.

Examples:
    sumEvenArguments(1,2,3,4) // 6
    sumEvenArguments(1,2,6) // 8
    sumEvenArguments(1,2) // 2
*/

function sumEvenArguments() {
  let argsArray = [].slice.apply(arguments);
  return argsArray.reduce((prev, curr) => {
    if (curr % 2 !== 0) {
      return prev;
    } else {
      return prev + curr;
    }
  }, 0);
}

// or using filter first to make more concise
function sumEvenArguments() {
  let newArr = [].slice.apply(arguments);
  return newArr
    .filter((num) => num % 2 === 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
}

/* 
Write a function called invokeMax which accepts a function and a maximum amount
. invokeMax should return a function that when called increments a counter. If
the counter is greater than the maximum amount, the inner function should
return "Maxed Out"

Examples:

    function add(a,b){
        return a+b
    }

    var addOnlyThreeTimes = invokeMax(add,3);
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(2,2) // 4
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(1,2) // "Maxed Out!"

*/

function invokeMax(fn, max) {
  let count = 0;
  return function () {
    if (count >= max) return "Maxed Out!";
    count++;
    return fn.apply(this, arguments);
  };
}

/* 
Write a function called once which accepts two parameters, a function and a
value for the keyword 'this'. Once should return a new function that can only
be invoked once, with the value of the keyword this in the function set to be
the second parameter.

Examples:

    function add(a,b){
        return a+b
    }

    var addOnce = once(add, this);
    addOnce(2,2) // 4
    addOnce(2,2) // undefined
    addOnce(2,2) // undefined
    
    function doMath(a,b,c){
        return this.firstName + " adds " + (a+b+c)
    }
    
    var instructor = {firstName: "Elie"}
    var doMathOnce = once(doMath, instructor);
    doMathOnce(1,2,3) // "Elie adds 6"
    doMathOnce(1,2,3) // undefined
    

*/
function once(fn, thisVal) {
  let count = 0;
  return function () {
    if (count >= 1) return;
    count++;
    return fn.apply(thisVal, arguments);
  };
}

/* 
Write a function called bind which accepts a function and a value for the
keyword this. Bind should return a new function that when invoked, will invoke
the function passed to bind with the correct value of the keyword this. HINT -
if you pass more than two parameters to bind, those parameters should be
included as parameters to the inner function when it is invoked. You will have
to make use of closure!

Examples:

    function firstNameFavoriteColor(favoriteColor){
        return this.firstName + "'s favorite color is " + favoriteColor
    }
    
    var person = {
        firstName: 'Elie'
    }
    
    var bindFn = bind(firstNameFavoriteColor, person);
    bindFn('green') // "Elie's favorite color is green"
    
    var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
    bindFn2('green') // "Elie's favorite color is blue" 
    
    function addFourNumbers(a,b,c,d){
        return a+b+c+d;
    }

    bind(addFourNumbers,this,1)(2,3,4) // 10
    bind(addFourNumbers,this,1,2)(3,4) // 10
    bind(addFourNumbers,this,1,2,3)(4) // 10
    bind(addFourNumbers,this,1,2,3,4)() // 10
    bind(addFourNumbers,this)(1,2,3,4) // 10
    bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10

*/
function bind(fn, thisArg) {
  var outerArgs = [].slice.call(arguments, 2); //pass second parameter 2 to slice to collect args from index 2 onwards
  return function () {
    var innerArgs = [].slice.call(arguments);
    var allArgs = outerArgs.concat(innerArgs);
    return fn.apply(thisArg, allArgs);
  };
}

/* 
Write a function called flip which accepts a function and a value for the
keyword this. Flip should return a new function that when invoked, will invoke
the function passed to flip with the correct value of the keyword this and all
of the arguments passed to the function REVERSED. HINT - if you pass more than
two parameters to flip, those parameters should be included as parameters to
the inner function when it is invoked. You will have to make use of closure! 

Flip should return a new function that when invoked takes the correct number of
required arguments to that function which are then reversed. HINT - you will
need to use the .length property on functions to figure out the correct amount
of arguments. For example:

flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) 




Examples:

    function personSubtract(a,b,c){
        return this.firstName + " subtracts " + (a-b-c);
    }
    
    var person = {
        firstName: 'Elie'
    }
    
    var flipFn = flip(personSubtract, person);
    flipFn(3,2,1) // "Elie subtracts -4"
    
    var flipFn2 = flip(personSubtract, person, 5,6);
    flipFn2(7,8). // "Elie subtracts -4"
    
    function subtractFourNumbers(a,b,c,d){
        return a-b-c-d;
    }

    flip(subtractFourNumbers,this,1)(2,3,4) // -2
    flip(subtractFourNumbers,this,1,2)(3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4) // -2
    flip(subtractFourNumbers,this,1,2,3,4)() // -2
    flip(subtractFourNumbers,this)(1,2,3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
    flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
    flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22

*/

function flip(fn, thisArg) {
  var outerArgs = [].slice.call(arguments, 2);
  return function () {
    var innerArgs = [].slice.call(arguments);
    var allArgs = outerArgs.concat(innerArgs).slice(0, fn.length);
    return fn.apply(thisArg, allArgs.reverse());
  };
}

// OOP
/* 
Make a car and motorcycle constructor function with parameters make, model,
year and set numWheels for each.
Use the car constructor in the motorcycle constructor to avoid duplication
 */
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.numWheels = 4;
}

function MotorCycle() {
  Car.apply(this, arguments);
  this.numWheels = 2;
}

/*
Create a constructor function for a Person, each person should have a
firstName, lastName, favoriteColor and favoriteNumber. Your function
MUST be named Person.
Write a method called multiplyFavoriteNumber that takes in a number and
returns the product of the number and the object created from the Person
functions' favorite number.
*/

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.multiplyFavoriteNumber = function (num) {
    return num * this.favoriteNumber;
  };
}

/*
 Given the following code - refactor the Child function to remove all the
 duplication from the Parent function. You should be able to remove 4 lines of
 code in the Child function and replace it with 1 single line.
*/
function Parent(firstName, lastName, favoriteColor, favoriteFood) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteFood = favoriteFood;
}

function Child() {
  Parent.apply(this, arguments);
}

/* 
Make a constructor funciotn called person and add a property of isInstructor = true
*/
function Person(name) {
  this.name = name;
}

var des = new Person("Des");

Person.prototype.isInstructor = true;

des.isInstructor; // true

/*
Create a constructor function for a Person. Each person should have a firstName
, lastName, favoriteColor, favoriteNumber
*/

function Person2(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.family = [];
}
/* 2 - Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.fullName() // "Elie Schoppik"

*/
Person2.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};
// 3 -  Add a property on the object created from the Person function called family which is an empty array. This will involve you going back and adding an additional line of code to your Person constructor you previously created in exercise 1.

/* 4 - Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor (HINT - take a look at the instanceof keyword). Make sure that your family array does not include duplicates! This method should return the length of the family array.


Examples: 
    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    var anotherPerson = new Person()
    person.addToFamily(anotherPerson); // 1
    person.addToFamily(anotherPerson); // 1
    person.family.length // 1
    
    person.addToFamily("test"); // 1
    person.addToFamily({}); // 1
    person.addToFamily([]); // 1
    person.addToFamily(false); // 1
    person.family.length // 1
*/

Person2.prototype.addToFamily = function (personToAdd) {
  let checkForDuplicate = this.family.filter((val) => val === personToAdd);
  if (personToAdd instanceof Person && checkForDuplicate.length === 0) {
    this.family.push(personToAdd);
  }
  return this.family.length;
};

/*Implement your own version of Array.prototype.map. The function should accept
a callback and return a new array with the result of the callback for each
value in the array. 
*/

Array.prototype.myMap = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
};

/* 2 - Implement a function called reverse that reverses a string and place it on the String.prototype

Examples:
    "test".reverse() // "tset"
    "tacocat".reverse() // "tacocat"
*/
// function reverse(str) {
//     var strArr = str.split("");
//     return strArr.reverse().join('');
// }

String.prototype.reverse = function () {
  let newStr = "";
  for (let i = this.length - 1; i >= 0; i--) {
    newStr += this[i];
  }
  return newStr;
};

// Use object.create
function Person3(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

function Student(firstName, lastName) {
  return Person.apply(this, arguments);
}
// assign the student prototype to an new object with a __proto__ of the Person object
//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
Student.prototype = Object.create(Person.prototype);

Student.prototype.status = function () {
  return "I am currently a student";
};

const student1 = new Person("Tom", "Browne");

student1.status; // undefined so student prototype does not affect the person prototype anymore

// We also need to set the constructor be Student, as it is set to Person now

Student.prototype.constructor; // Person

Student.prototype.constructor = Student;

/*
Create a constructor function for a Vehicle. Each vehicle should have a make,
model and year property.
*/
function Vehicle(make, model, year) {
  this.make = make;
  this.make = make;
  this.make = make;
}

//Add a function to the Vehicle prototype called start which returns the string "VROOM!"

Vehicle.prototype.start = function () {
  return "VROOM";
};

/* Add a function to the Vehicle prototype called toString which returns
the string "The make, model, and year are" concatenated with the make, model
and year property
*/

Vehicle.prototype.toString = function () {
  return (
    "This make, model, and year are " +
    this.make +
    ", " +
    this.model +
    ", and " +
    this.year
  );
};

/*
Create a constructor function for a Car. Each object created from the
Car function should also have a make, model, and year and a property called
numWheels which should be 4. The Car prototype should inherit all of the
methods from the Vehicle prototype
*/

function Car(make, model, year) {
  // don't need to have make, model ... here, just for readablility
  this.numWheels = 4;
  Vehicle.prototype.apply(this, arguments);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car; // reset the constructor from Vehicle to Car
