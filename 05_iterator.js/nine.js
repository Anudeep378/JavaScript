const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for arrays
// if we dint intialize  initial val its considered as 0
const tot = myNums.reduce( (acc,currVal)=>{
    return acc + currVal
},5)

// console.log(tot);


// for objects need to intialize 0
const shoppingCart = [
    {
        itemName: "PS5",
        price : 60000,
    },
    {
        itemName: "controller",
        price : 8000,
    },
    {
        itemName: "speakers",
        price : 35000
    },
    {
        itemName: "frames",
        price : 2000,
    },
    
]

const sum = shoppingCart.reduce( (acc,item) =>{
    return item.price+acc
},0)
console.log(sum);


