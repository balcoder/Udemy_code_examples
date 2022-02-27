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
