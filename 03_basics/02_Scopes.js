// let a = 10
// const b = 20
// var c = 30


let a = 300 // globalscope
//{} // scope
if(true){
    let a = 10 
    const b = 20
    console.log(a);    
}

 console.log(a)
// console.log(b);

//
// console.log(c);// prints 30 but not 10 and 20
function one(){
    const username = "anudeep"

    function two(){ // for two, one is like global scope so it can access
        const age = 19
        console.log(username);
        
    }
    //console.log(age); // one cant access two 
     two()
}
one()
//---------------------------------
console.log(add1(9));// executes

function add1(num){
    return num+1
}

// console.log(value(6)); gives error

let value = function(num){
    return num+3
}



