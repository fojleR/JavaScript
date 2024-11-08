const accountId = 12222
let accountEmail = "frabbybics10@gmail.com"
var accoutPassword = "123456"
accountCity = "New York"
let accountStat; // undefined

// accountId = 12223 // not allowed

accountEmail = ""

/*
    Prefer not to use var keyword
    because of issue in block scope and function scope
*/

console.log(accountId)

console.table([accountId, accountEmail, accoutPassword, accountCity, accountStat])


if(true){
    let x = 10;
    console.log(x)
}

// console.log(x) // ReferenceError: x is not defined


if(true){
    var y = 20;
    console.log(y)
}



console.log(y) // 20

z = 30;
console.log(z) // 30

var z = 10;


/*
    Variables declared with var are function-scoped or globally scoped.If a variable is declared with var inside a function, it's only accessible within that function.Variables declared with var ignore block-level scope, meaning they are accessible outside the block they are defined in (such as in if or for blocks)

    Variables declared with let are block-scoped.This means that they are only accessible within the block in which they are defined, like within an if statement, loop, or function. This scope containment makes let more predictable and less error-prone.
*/






