let num = 42;  //number
let price = 19.99; //number

let name = "frabbybics"; //string
let isTrue = true; //boolean

let x = null; //null, object
let y = undefined; //undefined

let bigInt = 1234567890123456789012345678901234567890n; //bigint

// Symbol: Introduced in ES6, Symbols are unique and immutable data types. They are primarily used as unique object keys.

let sym1 = Symbol("foo");
let sym2 = Symbol("foo");
let sym3 = Symbol("fooo");

console.log(sym1 === sym2); // false
console.log(sym1 === sym3); // false