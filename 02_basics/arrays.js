const arr = [1,2,3,4,5,6,7,8,9]
arr.pop()

// console.log(arr);
arr.push(10)
// console.log(arr);
arr.unshift(11)
// console.log(arr);
arr.shift()
// console.log(arr);
//.includes() , .indexOf()

const newArr = arr.join()
// console.log(newArr);
//slice , splice
// console.log("A ", arr);

// const myn1 = arr.slice(0, 3)

//  console.log(myn1);
//  console.log("B ", arr);


 const myn2 = arr.splice(1, 5)
console.log("C ", arr);
 console.log(myn2);