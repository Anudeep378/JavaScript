// literlas and constructor(singleton)

// object literals
const mySym = Symbol("id")

const JsUser = {
    name : "Anudeep",
    age : 18,
    [mySym] : 96,
    email : "anudeep@gmail.com",

}

console.log(JsUser[mySym])