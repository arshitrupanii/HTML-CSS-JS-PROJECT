

// callback fn basic ex..
const sum_fn = (a,b) => {
    let c = a +b;
    return c;   
}

// A callback is a function passed as an argument to another function.
// this is callback fn is used to do calculation first then show result
const callback = (sum) => {
    console.log(sum, " callback function.")
}

let sum = sum_fn(2,3);
// callback(sum)


// JS scope
// 1. block scope

// variable use inside {} 
{
    let block = 23
}
// console.log(block);

// 2. function scope
// Variables defined inside a function are not accessible (visible) from outside the function.

function myfunction(){
    const name = "arshit"
}
// console.log(name);

// 3.Global scope 

let Global = "that is global scope it access anywhere in code"

// additional : automaticaly global scope

secondFunction()

function secondFunction(){
    car = "bmw"
}

// console.log(car);

// if varaible not decaled and then initialize the value then it become global


// asyc promise

async function promise_fun(){
    let Mypromise = new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve("hello world!!")
        }, 3000);
    })
    let result = await Mypromise;
    console.log(result);
}

// promise_fun()

// array methods
let arr = [1,2,3,4,5,6]

// add item in last
arr.push(2)
// console.log(arr);

// remove last item
arr.pop()
// console.log(arr);

// delete item first
arr.shift()
// console.log(arr);

// add item to start
arr.unshift(1)
// console.log(arr);


// arr.map((val,index) => {
//     console.log(index,val);
// })

function check(val) {
    return val >= 4;
}

// console.log(arr.filter(check));

const reduce_fn = ((acc, cur) => {
    return acc * cur ;
})

// console.log(arr.reduce(reduce_fn));


// | Method | Returns            | Purpose                    |
// | ------ | ------------------ | -------------------------- |
// | map    | New array          | Transform each item        |
// | filter | New filtered array | Keep items that match rule |
// | reduce | Single value (any) | Combine all items into one |


const fruits = ["apple", "mango", "banana"]

function displayFruits(val){
    console.log("Fruit is : " + val);
}

// fruits.forEach(displayFruits)

function findFruits(val) {
    return val=="banana"
}

// console.log(fruits.find(findFruits))
// console.log(fruits.includes("apples"));

// console.log(fruits.findIndex(findFruits))
// console.log(fruits.indexOf("banana"));

// console.log(arr.slice(0,4));

// add 7 in 6th index
arr.splice(6,0,7);
// console.log(arr);

// remove 7 in 6th index
arr.splice(6,1);
// console.log(arr);


// object 
const person = {
    name : "arshit",
    age : 18
}

// 1. Access to object
// console.log(person.name, person["age"])


// 2. udpate that obj
person.name = "ronak"
person["age"] = 19

// console.log(person.name, person["age"])

// 3. delete property
// delete the obj property

// delete person.name
// console.log(person)


// 4. Loop through Object
// for (let key in person) {
//     console.log(key, person[key])
// }


// 5. that return object
Object.keys(person)
Object.values(person)
Object.entries(person)


// 6. spread operator ... 
const newPerson = { ...person, hobby : "coding"}
console.log(newPerson)


// 7. Destructuring 

const {name , age} = person
console.log(name, age)


// 8. merged Object 
const a = {x : 1}
const b = {y : 2}
const merged = {...a,...b}

// console.log(merged)

// 2. Throw to error handling
function func_divide(a,b){
    if(b === 0){
        throw new Error("Not divide by zero !!")
    }
    return a / b;
}

// 1. try and catch to error handling 
try {
    console.log(func_divide(10,0))

} catch (error) {
    console.log("Error occurred:", error.message);
} finally {
    console.log("this Block is run always...")
}


// 3. try & catch with async 
async function fetchData() {
    try {
      let res = await fetch("https://wrong-url.com");
      let data = await res.json();
    } catch (err) {
      console.log("API error:", err.message);
    }
}  

// fetchData()


// 4. catch() in promise

