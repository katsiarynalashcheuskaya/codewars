/* Write a function that finds the sum of all its arguments. */



function sum() {
    return Array.from(arguments).reduce((sum, value) => {
      if (Array.isArray(value)) {
        sum += getSum.apply(this, value)
      } else {
        sum += Number(value)
      }
  
      return sum
    }, 0)
  }