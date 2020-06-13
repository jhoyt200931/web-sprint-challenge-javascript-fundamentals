// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// The nested function can acess the variable internal because the nested function has closure, allowing it to reach outside itself to get the information it needs to work, and the variable internal is declared within the function's lexical environment.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

let summation = function(num) {
  let sum = 0;
  for(let i = 0; i < num + 1 ; i++) {
    sum += i;
  }
  return sum;
}
console.log(summation(4));


