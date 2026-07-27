const user = new Object(); //singleton


//const user = {} // literal
user.id = "123abs"
user.name = "rahul"
user.isLoggedin = false

// console.log(user);
const regUser = {
    email : "some@gamil.com",
    fullName : {
        UserFullname : {
            fname : "anudeep",
            lname : "singh"
        }
    }
}
// console.log(regUser.fullName.UserFullname.fname);
const obj1 ={1:"a",2 : "b"}
const obj2 = {3:"c",4:"d"}

const obj3 = {...obj1,...obj2}// = Object.aasign{{},obj1,obj2}

console.log(obj3);



