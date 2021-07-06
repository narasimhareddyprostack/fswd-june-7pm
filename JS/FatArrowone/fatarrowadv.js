/*
    1. consice code 
    2. implicit return
    3. this keyword , return minimal object  {} 
    

*/
function wish() {
  return Object.keys(this);
}
console.log(wish());
