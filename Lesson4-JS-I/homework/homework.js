//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = 'null' ;

//create a number variable, it an be any number
const newNum = 13 ;

//create a boolean variable
const newBool = true ;

//solve the following math problem
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
const newModulo = 21 % 5 === 1 ;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces.
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work.
//Do not change any of the function names

function returnString(str) {
  return str;
}

function add(x, y) {
  const addNumbers = x + y;
  return addNumbers;
}

function subtract(x, y) {
  const subtNumbers = x - y;
  return subtNumbers;
}

function multiply(x, y) {
  const multNumbers = x * y;
  return multNumbers;
}

function divide(x, y) {
  const divNumbers = x / y;
  return divNumbers;
}

function areEqual(x, y) {
  if ((x === y)) {
    return true;
  }

  return false;
}

function areSameLength(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  }

  return false;
}

function lessThanNinety(num) {
  if (num < 90) {
    return true;
  }

  return false;
}

function greaterThanFifty(num) {
  if (num > 50) {
    return true;
  }

  return false;
}

function getRemainder(x, y) {
  const remainNumbers = x % y;
  return remainNumbers;
}

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }

  return false;
}

function isOdd(num) {
  if (num % 2 === 0) {
    return false;
  }

  return true;
}

function square(num) {
  const sqrNumbers = num * num;
  return sqrNumbers;
}

function cube(num) {
  const sqrNumbers = num * num * num;
 return sqrNumbers;
}

function raiseToPower(num, exponent) {
  const pwrNumbers = Math.pow(num, exponent);
  return pwrNumbers;
}

function roundNumber(num) {
  const rndNumbers = Math.round(num);
  return rndNumbers;
}

function roundUp(num) {
  const rndUp = Math.ceil(num);
  return rndUp;
}

function addExclamationPoint(str) {
  const exclaim = str + '!';
  return exclaim;
}

function combineNames(firstName, lastName) {
  const combine = firstName + ' ' + lastName;
  return combine;
}

function getGreeting(name) {
  const greet = 'Hello ' + name + '!';
  return greet;
}

// The next three questions will have you implement math area formulas.
// If you can't remember these area formulas then head over to Google.

function getRectangleArea(length, width) {
  const areaRect = length * width;
  return areaRect;
}

function getTriangleArea(base, height) {
  const areaTri = 0.5 * base * height;
  return areaTri;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString,
  newNum,
  newBool,
  newSubtract,
  newMultiply,
  newModulo,
  returnString,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
};
