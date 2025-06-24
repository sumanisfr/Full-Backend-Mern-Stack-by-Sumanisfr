//  Fundamental of Javascript:
// arrays and objects
// return function
// async js coding
// foreach map filter find indexof

// var arr = [1, 2, 4, "hello", "suman", {}, true, false, function () {}];
// arr.forEach(function (val) {
//   console.log(val + " hello suman");
// });

// var arr = [1, 2, 4, 5];
// arr.forEach(function (val) {
//   console.log(val + " hello suman");
// });

// var arr = [1, 2, 3, 4];
// // [13,14,15,16] o/p
// var newarr = arr.map(function (val) {
//   return val + 12;
// });
// console.log(newarr);

// var arr = [1, 2, 3, 4];
// var ans = arr.filter(function (val) {
//   if (val >= 3) {
//     return true;
//   } else return false;
// });
// console.log(ans);

// var arr = [1, 2, 3, 4];
// var ans = arr.filter(function (val) {
//   if (val === 2) {
//     return true;
//   } else return false;
// });
// console.log(ans);

// var suman =12;
// var obj {}; {
//   name : "suman"
//   age:"20+"
//   // key : "value"
// }

// var obj = {
//   name: "suman",
//   age: 12,
// };
// // obj["name"];
// // console.log(obj);
// // console.log(obj.name);
// // obj.age = 20;

// // Object.freeze(obj);
// // obj.age = 20;

// console.log(obj);

// var arr = [1, 2, 3, 4];
// function adbc(a, b, c) {}
// // console.log(arr.length);  // array length
// console.log(adbc.length); //function length
// console.log(adbc);

// function abcd() {
//   return 20;
// }

// var ans = abcd();
// console.log(ans);

// var blob = await fetch(`https://randomuser.me/api/`)
// // blob.clone('error',)
// var res = await.blob.json();
// console.log(res);
//? line by line code chale isey kahte hai synchronous
// ? jo bhi code async ka j=ho , usey side stack mein bhej do and agle code ko chalao jo bhi sync nature ka ho, jab bhi saara syn code chal jayae , tab check karo ki async code complete hua ya nahi and agar wo complete hua ho to usey mein stack mein laao and chala hoga.

async function abcd() {
  var blob = await fetch(`https://randomuser.me/api/`);
  var ans = await blob.json();
  console.log(ans.results[0].name);
}

abcd();
