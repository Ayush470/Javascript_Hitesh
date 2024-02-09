// stack(Primitive) Heap(Non-Primitive)
let name1 = "Ayush"
let name2 = name1 

console.log(name1)
console.log(name2)

name2 = "Rajan"
console.log(name1)
console.log(name2)

// ***************************
let user1 = {
    email: "user1@gmail.com",
    upi: "user1@ybl"
}

let user2 = user1
console.log(user1)
console.log(user2)

user2.email = "user2@gmail.com"

console.log(user1)
console.log(user2)
