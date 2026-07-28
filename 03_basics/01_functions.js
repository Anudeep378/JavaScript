function myName(){
    console.log("run this")
}

//myName();

function add2Nums(a,b){
   let sum = a+b
   return sum
}

let sum = add2Nums(2,8)
// console.log("result ",sum); // if i do console.log() in fun() it gives an undefined bcoz no return type

function login(username = "random"){
    if(username === undefined){
        console.log("enter usr name");
        return    
    }
    return console.log(`${username} just logged in`);
    
}


login("anudeep") // overrides random

function calculateCardPrice(...num1){ // ... rest and spread operator it will add n values with one param
    return num1
}
console.log(calculateCardPrice(400,500,600)); //returns array 


// function calculateCardPrice(val1,val2,...num1){ 
//     return num1
// }
// console.log(calculateCardPrice(400,500,600,2000));//400 and 500 are taken by val1 and val2

let user = {
    username : "anudeep",
    age : 19
}
// obj in function
function handleObj(anyObj){
    console.log(`user name ${anyObj.username} and age is ${anyObj.age}`);
    
}
handleObj(user)

let myArr = [200,400,600]

function handleArr(arr){
    console.log(`the values in array :${arr[2]}`);
    
}

handleArr(myArr)

