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
  let answer = Math.floor(Math.random() * 11);
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
