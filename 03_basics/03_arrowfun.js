const user = {
    username : "anudeep",
    age : 19,

    welcomeMessage : function(){
        console.log(`welcome ${this.username}`);
        console.log(this);
        
        
    }
}
// user.welcomeMessage()

// console.log(this);


// function chick(){
//     let username = "Zenitsu"
//     console.log(this.user); // undefined
    
// }
// chick()

const chick = () =>{
    let username = "me"
    console.log(this.username);// undefined
    
}
chick()

// const add2 = (n1,n2) => {
//     return n1+n2 // explicit
// }
// console.log(add2(4,5));
//--------------------------------------
//implicit return 

// const add2 = (n1,n2) =>  n1+n2

//objects like this gives undefined until u put in ()
const add2 = (n1,n2) =>  ({username : "anudeep"})// 
console.log(add2(4,5))

