/*
function wish() {
  console.log("GM");
}
wish();
function wish() {
  console.log("GN");
}
wish();
*/
/*
    1. consice code 
    2. implicit return
    3. this keyword , return minimal object  {} 
    4. function overriding conflicts will resolve  

*/

let wish = () => {
  console.log("GM");
};
wish();
wish = () => {
  console.log("GN");
};
wish();
