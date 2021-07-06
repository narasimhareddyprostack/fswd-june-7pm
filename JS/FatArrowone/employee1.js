let emp = {
  name: "Kavitha",
  email: "Kavitha@psa.com",
  sal: 60000,
  getDetails: () => {
    return name;
  },
};
console.log(emp.loc);
//if you are trying to access object property, which is not exist it return undefined
let result = emp.getDetails();
console.log(result);

//js -object - group of key:value pair as a single entity
//js - every thing is object.
