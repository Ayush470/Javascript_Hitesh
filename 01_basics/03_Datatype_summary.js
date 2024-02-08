// static typed vs dynamically typed language
// https://www.geeksforgeeks.org/type-systemsdynamic-typing-static-typing-duck-typing/

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

const myFunction = function(){
    console.log("Hello world");
}
myFunction()

// const bigNumber = 3456543576654356754n

// // console.log(typeof heros);
// // console.log(typeof myFunction);
// // console.log(typeof myObj);
// // console.log(typeof bigNumber);

// let userOne = {
//     email : "user1@gmail.com",
//     age : 22,
// }

// let userTwo = userOne;

// userTwo.email = "user2@gmail.com";
// console.log(userOne.email);
// console.log(userTwo.email);

// let a = "ayush";
// let b = 'ayush';
// console.log(a);
// console.log(b);

// console.log(typeof a);
// console.log(typeof b);

// https://262.ecma-international.org/5.1/#sec-11.4.3
// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object