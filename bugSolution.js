function foo(a, b) {
  // Handle null values by providing default values or throwing errors.
  a = a === null ? 0 : a; // Use 0 as default if either is null
  b = b === null ? 0 : b; 
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
// Alternative solution using a more explicit error handling
function foo2(a,b){
  if (a === null || b === null){
    throw new Error("Null values not permitted");
  }
  return a+b;
}
//console.log(foo2(1,null)); // Throws an error