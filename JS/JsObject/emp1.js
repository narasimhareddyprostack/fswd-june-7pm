let product = {
  product_Name: "Iphone 5s",
  price: 20000,
  color: ["white", "grey", "red"],
  getDetails: function () {
    console.log("Hello,:");
  },
};
//print product name, and print color

//how to read object properties
/* console.log(product.product_Name);
console.log(product.color[0]);
console.log(product.getDetails()); */
console.log(product.usage);//undefined
console.log(product.desc());
/*
  - if you are accessing a object property,   which is not exists it return undefined
  - if you are accessing a object method/fun ,which is not exists it return error
*/