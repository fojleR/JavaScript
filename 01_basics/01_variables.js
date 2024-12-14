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

z = 30;   // hoisting
console.log(z) // 30

var z = 10;

const myArray = [1, 2, 3];
myArray.push(4);

console.log(myArray) // [1, 2, 3, 4]

/*
    Variables declared with var are function-scoped or globally scoped.If a variable is declared with var inside a function, it's only accessible within that function.Variables declared with var ignore block-level scope, meaning they are accessible outside the block they are defined in (such as in if or for blocks)

    Variables declared with let are block-scoped.This means that they are only accessible within the block in which they are defined, like within an if statement, loop, or function. This scope containment makes let more predictable and less error-prone.

    Variables declared with var are hoisted to the top of their scope. This means that they can be used in code before they are declared, although they will be undefined until the assignment occurs.

    var: Allows re-declaration of the same variable within the same scope, which can lead to bugs in larger codebases.

    let: Does not allow re-declaration of the same variable within the same scope.

    const: Variables declared with const are read-only. This means that once a variable is assigned a value, it cannot be reassigned. This makes const great for variables that are meant to stay constant and never change throughout the execution of your program.

    Note: While const prevents reassignment of the variable itself, it does not make objects or arrays stored within it immutable. You can still modify the contents of an array or object declared with const.

    Like let, const is block-scoped, meaning it is only accessible within the block, statement, or expression in which it’s declared.

    const: Variables declared with const are hoisted to the top of their block scope, just like let, but they remain uninitialized until the declaration is encountered in the code. This results in a Temporal Dead Zone (TDZ) from the start of the block until the declaration line is reached, making it inaccessible before it’s actually declared.
*/






