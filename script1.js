// 1st lesson ==>
const hi = document.getElementById("hi");
const hello = document.getElementById("hello");

for (let i = 0; i < 1000; i++) {
  hi.innerHTML = "hi" + i;
  hello.innerHTML = "sorry " + (500 - i);
}
// 8th lesson ==>
const a = [1, 2, 3, 4, 5];

let b = 90;
b = a.splice(0, 3);
console.log("a= " + a);
console.log("b= " + b);

car = "volvo";
var car;
console.log(car);

//9th lesson ==>
let plus = 1;
plus *= 50;
plus <<= 4;
console.log(plus);

//datatype -- 11th lesson ==>
//num + str
console.log(100 + "i see :) ");
//str + num
console.log("100" + "i see :)");
//exponential
console.log(1e-5);
//boolian
console.log(6 == 6);
//array
console.log([1, 2, 3, 4, 5]);

//objects
const person = {
  name: "turya",
  age: 10,
  birth_year: "26/10/2003",
};
console.log(person.name);
// const inp = prompt("What do you want?");
// if (inp == "name") {
//   document.write(person.name);
// } else if (inp == "age") {
//   document.write(person.age);
// } else if ((inp == "date")) {
//   document.write(person.birth_year);
// } else {
//   document.write("Sorry, wrong KeyWord!!");
// }
//objects

//undefined vs null
console.log(undefined)
console.log(null);
console.log(undefined === null)
const emt = ""
console.log(emt);

// ending this lesson here, see function.js