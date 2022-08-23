/*
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
*/

function divisibleBy(numbers, divisor){
    var result = [];
       for (const n of numbers) {
        if (n % divisor === 0) {
          result.push(n);
        }
      }
      return result;
    }