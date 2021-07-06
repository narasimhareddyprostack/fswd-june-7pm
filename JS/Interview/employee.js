let emp = { name: "Kavita", loc: "Bangalore" };
//how to access all object properties

/* console.log(emp); */
/*
name
loc

*/
for (props in emp) {
  console.log(props);
}
