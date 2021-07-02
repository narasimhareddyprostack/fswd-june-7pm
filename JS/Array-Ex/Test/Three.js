/* /* let employees = [{}, {}, {}];
console.log(employees.length); */

let size = [1, 2, 3, 3, 3];
//          0 , 1, 2
/* console.log(size.indexOf(5)); */

let newArray = [];
for (let i = 0; i <= size.length - 1; i++) {
  newArray[i] = size[1];
  if (size.indexOf(newArray[i]) == -1) {
    newArray[i] = size[i];
  }
}
console.log(newArray);


//-----
let chars = ['A', 'B', 'A', 'C', 'B'];

chars.forEach((c, index) => {
    console.log(`${c} - ${index} - ${chars.indexOf(c)}`);
});
 */

