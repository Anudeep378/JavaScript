// literlas and constructor(singleton)

// object literals
const mySym = Symbol("id")

const JsUser = {
    name : "Anudeep",
    age : 18,
    [mySym] : 96,
    email : "anudeep@gmail.com",

}
//"str" : val then access through jsUser["str"]

// console.log(JsUser[mySym])

JsUser.email = "xyz@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "abc@gmail.com"
// console.log(JsUser.email)
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello user");
}
// console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello user, ${this.name} !`);
}
console.log(JsUser.greeting2());





