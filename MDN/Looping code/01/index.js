/**
    Index of topics
    - for of loop
    - map function
    - filter function
    - standard for loop
    - problems with standard for loop
    - break statement
    - continue statement


 */


const cats = ["Leopard", "Serval", "Jaguar", "Tiiger", "Caracal", "Lion"];

for(const cat of cats){ // for of loop
    console.log(cat);
}

function toUpper(string){
    return string.toUpperCase();
}

const upperCats = cats.map((cat)=>{
    return cat.toUpperCase();
})
console.log(upperCats);


const uppertCats = cats.map(toUpper); // map function

console.log(uppertCats);

function lcat(string){
    return string.startsWith("L");
}

const lCats = cats.filter(lcat); // filter function

console.log(lCats);

const calculate = document.getElementById("calculate");
const clear = document.getElementById("clear");
const result = document.getElementById("result");

function square(){
    for(let i = 1; i <= 10; i++){ // standard for loop
        result.innerHTML += `${i} * ${i} = ${i*i} <br>`;
    }
}
// calculate.addEventListener("click", square);
// clear.addEventListener("click", ()=>{
//     result.innerHTML = "";
// })

for(let i = 0; i < cats.length; i++){ // standard for loop
    console.log(cats[i]);
}
/**
    Problems with standard for loop:
    - you might start i at 1, forgetting that the first array index is zero, not 1.
    - you might stop at i <= cats.length, forgetting that the last array index is at length - 1.
    - you might forget to increment i, or increment it twice.
    - you might use the wrong variable name in the loop body.
    - you might use the wrong comparison operator.
    
    
    For reasons like this, it's usually best to use for...of if you can.

    Sometimes you still need to use a for loop to iterate through an array.

    My cats are called Pete, Biggles, Jasmine,
    My cats are called Pete, Biggles, and Jasmine.

    Look at the two sentences above. The first one is incorrect because it doesn't have the word "and" before the last item in the list. The second one is correct because it does have the word "and" before the last item in the list. The first one also has a comma after the second item in the list, which is incorrect. The second one doesn't have a comma after the second item in the list, which is correct. To handle this, you can use a for loop to iterate through the array and add the word "and" before the last item in the list, and remove the comma after the second-to-last item in the list.
 */

const para = document.getElementById("result");
const input = document.getElementById("search");
const button = document.getElementById("searchButton");

const contacts = [
    "Chris:2232322",
    "Sarah:3453456",
    "Bill:7654322",
    "Mary:9998769",
    "Dianne:9384975",
];

button.addEventListener("click", ()=>{
    let searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    para.textContent = "";
    for(const contact of contacts){
        const [name, number] = contact.split(":");
        if(name.toLowerCase() === searchName){
            para.textContent = `${name}'s number is ${number}.`;
            break;
        }
    }
    if(para.textContent === ""){
        para.textContent = "Contact not found.";
    }
})