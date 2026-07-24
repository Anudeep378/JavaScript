const string = new String("hello this is me")

// console.log(string[0])
const x = "anudeep"
const age = 19
console.log(`hello name is ${x} and age is ${age}`);


console.log(string.charAt(0))
console.log(string.indexOf('e'))
console.log(string.substring(2,5))

const anotherString = string.slice(-4,2)
console.log(anotherString)

const newString = "    hello     "
console.log(newString)
console.log(newString.trim()) //trimStart() ,trimEnd()

const name = "Anudeep%Singh"
console.log(name.replace('%',' '))
//.includes() 

console.log(name.split('%'));


