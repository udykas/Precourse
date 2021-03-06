// Do not change any of the function names

function multiplyArguments() {
  let product = 1;
  if( arguments.length === 0){
      return 0;
    }
  for (let i = 0; i < arguments.length; i++){
   product = product * arguments[i];
    }
  return product;

  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
}

function getBiggest(x, y) {
  if (x > y) {
    return x;
  }
  else if (x < y) {
    return y;
  }
  else if (x === y) {
    return x || y;
  }
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
}

function greeting(language) {
  if (language === 'German') {
    const germanGreeting = 'Guten Tag!';
    return germanGreeting;
  }
  else if (language === 'Mandarin') {
    const mandarinGreeting = 'Ni Hao!';
    return mandarinGreeting;
  }
  else if (language === 'Spanish') {
    const spanishGreeting = 'Hola!';
    return spanishGreeting;
  }
  else {
    const englishGreeting = 'Hello!';
    return englishGreeting;
  }

  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
}

function isTenOrFive(num) {
  if (num === 10) {
    return true;
  }
  else if (num === 5) {
    return true;
  }

  return false;

  // return true if num is 10 or 5
  // otherwise return false
}

function isInRange(num) {
  if (num < 50 && num > 20) {
    return true;
  }

    return false;

  // return true if num is less than 50 and greater than 20
  // otherwise return false
}

function isInteger(num) {
  if (num > Math.floor(num)) {
    return false;
  }

  return true;

  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
}

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    let fizzBuzz = 'fizzbuzz';
    return fizzBuzz;
  }
  else if (num % 3 === 0) {
    let fizz = 'fizz';
    return fizz;
  }
  else if (num % 5 === 0) {
    let buzz = 'buzz';
    return buzz;
  }

  return num;

  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
}

function isPrime(num) {
  if (num === 0 || num === 1) {
    return false;
  }
  else if (num % 2 === 0) {
    return false;
  }

  return true;

  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
}



// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments,
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};
