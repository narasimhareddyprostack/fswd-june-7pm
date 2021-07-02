let emp = {
  name: "Kumar",
  loc: "USA",
  loc: "USA",
  sal: 45555,
};

/*  console.log(typeof emp);
console.log(emp.length); */
/* 
let x = Object.keys(emp);
console.log(x);
console.log(x.length);
 */
console.log(Object.keys(emp).length); // how to find Object length.
console.log(Object.values(emp));

/*
  - if you are trying to access a property, which is not exists - retuurn undefined. 
  - if you are trying to access object method, which is not exists - return error 
*/
