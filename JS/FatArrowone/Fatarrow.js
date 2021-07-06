// Fat Arrow function adv
/*
    1. consice code 
    2. implicit return
    3. this keyword , return minimal object  {} 

*/
/*
function add(a, b) {
  return a + b;
}

let add = (a, b) => {
  return a + b;
};
*/
let add = (a, b) => a + b;
console.log(add(10, 20));
console.log(add(100, 200));
console.log(add(1, 2));